/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe('Multi Spec Test 4 - OpenSearch Downloads', () => {
  it('should open OpenSearch downloads page', () => {
    cy.visit('https://opensearch.org/downloads.html');
  });

  it('should open OpenSearch version history', () => {
    cy.visit('https://opensearch.org/lines.html');
  });
});
