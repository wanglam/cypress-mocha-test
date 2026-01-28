/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe('Multi Spec Test 2 - OpenSearch Documentation', () => {
  it('should open OpenSearch documentation page', () => {
    cy.visit('https://opensearch.org/docs/latest/');
  });

  it('should open OpenSearch getting started guide', () => {
    cy.visit('https://opensearch.org/docs/latest/getting-started/');
  });
});
