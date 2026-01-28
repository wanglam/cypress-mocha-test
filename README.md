# Cypress Test Repository

This is a minimal test repository created for debugging issues with the `.github/workflows/cypress-multi-spec-release-e2e-workflow.yml` workflow.

## What's Included

This repository contains the essential files needed to test the Cypress workflow:

### Workflows
- `.github/workflows/cypress-multi-spec-release-e2e-workflow.yml` - The main workflow being debugged
- `.github/workflows/cypress-only-workflow-template.yml` - The reusable workflow template

### Cypress Files
- `cypress/integration/plugins/cypress-multi-spec-test/` - The 5 test spec files (test_spec_1.js through test_spec_5.js)
- `cypress/support/index.js` - Cypress support file
- `cypress/plugins/index.js` - Cypress plugins configuration
- `cypress.json` - Cypress configuration with baseUrl set to https://opensearch.org
- `package.json` - Minimal dependencies (only Cypress 9.5.4)

## How to Use

### 1. Create a New GitHub Repository
```bash
cd cypress-test-repo
git init
git add .
git commit -m "Initial commit for Cypress testing"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Test Locally (Optional)
```bash
npm install
npx cypress run --config baseUrl=https://opensearch.org --spec 'cypress/integration/plugins/cypress-multi-spec-test/*'
```

### 3. Test the GitHub Workflow
Once pushed to GitHub, create a pull request to trigger the workflow. The workflow will:
- Run on the `ubuntu-slim` runner
- Install required system dependencies for Cypress
- Set up Node.js 20.19.6
- Execute the Cypress tests using the `cypress-io/github-action@v2`

## Debugging Tips

1. **Check Workflow Logs**: Review the GitHub Actions logs for any errors during:
   - Dependency installation
   - Cypress setup
   - Test execution

2. **Verify Runner**: The workflow uses `ubuntu-slim` - ensure this runner is available in your GitHub environment

3. **Node Version**: The workflow is configured to use Node.js 20.19.6

4. **Test Command**: The workflow runs:
   ```
   env CYPRESS_NO_COMMAND_LOG=1 npx cypress run --config baseUrl=https://opensearch.org --spec 'cypress/integration/plugins/cypress-multi-spec-test/*'
   ```

## Notes

- This is a minimal reproduction case focusing on the workflow and test structure
- The tests use https://opensearch.org as the base URL
- All 5 test specs should be executed when the workflow runs
