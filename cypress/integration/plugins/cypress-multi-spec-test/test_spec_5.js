/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe('Multi Spec Test 5 - OpenSearch Blog', () => {
  it('should open OpenSearch blog page', () => {
    cy.visit('https://opensearch.org/blog/');
  });

  it('should open OpenSearch community page', () => {
    cy.visit('https://opensearch.org/community.html');
  });

  it('should open OpenSearch events page', () => {
    cy.visit('https://opensearch.org/events/');
  });
});
