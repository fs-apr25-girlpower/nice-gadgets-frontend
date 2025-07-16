export const ErrorMessageEnum = {
  SomethingWentWrong: 'Something went wrong',
  NoPhonesYet: 'There are no phones yet',
  ThereAreNoProductsMatchingTheQuery:
    'There are no products matching the query',
} as const;

export type ErrorMessageEnum =
  (typeof ErrorMessageEnum)[keyof typeof ErrorMessageEnum];
