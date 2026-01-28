/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe('Multi Spec Test 1 - OpenSearch Website', () => {
  it('should open OpenSearch homepage', () => {
    cy.visit('https://opensearch.org/');
  });

  it('should open OpenSearch platform page', () => {
    cy.visit('https://opensearch.org/platform.html');
  });

  it('should open OpenSearch FAQ page', () => {
    cy.visit('https://opensearch.org/faq.html');
  });
});
