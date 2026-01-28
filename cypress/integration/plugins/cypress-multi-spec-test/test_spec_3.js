/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe('Multi Spec Test 3 - GitHub OpenSearch Project', () => {
  it('should open GitHub OpenSearch project page', () => {
    cy.visit('https://github.com/opensearch-project');
  });

  it('should open OpenSearch repository', () => {
    cy.visit('https://github.com/opensearch-project/OpenSearch');
  });

  it('should open OpenSearch Dashboards repository', () => {
    cy.visit('https://github.com/opensearch-project/OpenSearch-Dashboards');
  });
});
