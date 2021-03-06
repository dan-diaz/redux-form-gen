export type ConditionalObject = {
  questionId: string,
  equals?: mixed,
  // cond
  and?: Array<ConditionalObject>,
  or?: Array<ConditionalObject>,
  not?: ConditionalObject,
  // lodash
  filled?: boolean,
  includes?: mixed | Array<mixed>,
  // comparison
  greaterThan?: number,
  lessThan?: number,
  greaterThanEqual?: number,
  lessThanEqual?: number,
  // length
  length: number,
  minLength: number,
  maxLength: number,
  // regex
  pobox: boolean,
  email: boolean,
  regex: boolean
};

export type EvalCondOptions = {
  elseHandler?: Function,
  valueKey?: string,
  cond: ConditionalObject,
  reduxFormDeep?: boolean
};

type ConditionalOperatorOptions = {
  value: mixed,
  param: mixed,
  ...EvalCondOptions
};

type ConditionalOperatorNumberParam = {
  (options: {...ConditionalOperatorOptions, value: number, param: number}): boolean
};
type ConditionalOperatorObjectParam = {
  (options: {...ConditionalOperatorOptions, value: Object, param: boolean}): boolean
};

type ConditionalOperator = {(options: ConditionalOperatorOptions): boolean};

export type ConditionalOperators = {
  equals: ConditionalOperator,
  and: {(options: {...ConditionalOperatorOptions, param: Array<ConditionalObject>}): boolean},
  or: {(options: {...ConditionalOperatorOptions, param: Array<ConditionalObject>}): boolean},
  not: {(options: {...ConditionalOperatorOptions, param: ConditionalObject}): boolean},
  filled: ConditionalOperator,
  includes: {
    (options: {...ConditionalOperatorOptions, value: Array<mixed>, param: mixed}): boolean
  },
  greaterThan: ConditionalOperatorNumberParam,
  lessThan: ConditionalOperatorNumberParam,
  greaterThanEqual: ConditionalOperatorNumberParam,
  lessThanEqual: ConditionalOperatorNumberParam,
  length: ConditionalOperatorObjectParam,

  gt?: ConditionalOperatorNumberParam,
  lt?: ConditionalOperatorNumberParam,
  min?: ConditionalOperatorNumberParam,
  max?: ConditionalOperatorNumberParam,
  value?: ConditionalOperator
};
