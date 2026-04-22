
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ScoringModel
 * 
 */
export type ScoringModel = $Result.DefaultSelection<Prisma.$ScoringModelPayload>
/**
 * Model ScoringRule
 * 
 */
export type ScoringRule = $Result.DefaultSelection<Prisma.$ScoringRulePayload>
/**
 * Model LeadScore
 * 
 */
export type LeadScore = $Result.DefaultSelection<Prisma.$LeadScorePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScoringModels
 * const scoringModels = await prisma.scoringModel.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ScoringModels
   * const scoringModels = await prisma.scoringModel.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.scoringModel`: Exposes CRUD operations for the **ScoringModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoringModels
    * const scoringModels = await prisma.scoringModel.findMany()
    * ```
    */
  get scoringModel(): Prisma.ScoringModelDelegate<ExtArgs>;

  /**
   * `prisma.scoringRule`: Exposes CRUD operations for the **ScoringRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoringRules
    * const scoringRules = await prisma.scoringRule.findMany()
    * ```
    */
  get scoringRule(): Prisma.ScoringRuleDelegate<ExtArgs>;

  /**
   * `prisma.leadScore`: Exposes CRUD operations for the **LeadScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeadScores
    * const leadScores = await prisma.leadScore.findMany()
    * ```
    */
  get leadScore(): Prisma.LeadScoreDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ScoringModel: 'ScoringModel',
    ScoringRule: 'ScoringRule',
    LeadScore: 'LeadScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "scoringModel" | "scoringRule" | "leadScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ScoringModel: {
        payload: Prisma.$ScoringModelPayload<ExtArgs>
        fields: Prisma.ScoringModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoringModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoringModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          findFirst: {
            args: Prisma.ScoringModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoringModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          findMany: {
            args: Prisma.ScoringModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>[]
          }
          create: {
            args: Prisma.ScoringModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          createMany: {
            args: Prisma.ScoringModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoringModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>[]
          }
          delete: {
            args: Prisma.ScoringModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          update: {
            args: Prisma.ScoringModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          deleteMany: {
            args: Prisma.ScoringModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoringModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScoringModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringModelPayload>
          }
          aggregate: {
            args: Prisma.ScoringModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoringModel>
          }
          groupBy: {
            args: Prisma.ScoringModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoringModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoringModelCountArgs<ExtArgs>
            result: $Utils.Optional<ScoringModelCountAggregateOutputType> | number
          }
        }
      }
      ScoringRule: {
        payload: Prisma.$ScoringRulePayload<ExtArgs>
        fields: Prisma.ScoringRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoringRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoringRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          findFirst: {
            args: Prisma.ScoringRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoringRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          findMany: {
            args: Prisma.ScoringRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>[]
          }
          create: {
            args: Prisma.ScoringRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          createMany: {
            args: Prisma.ScoringRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoringRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>[]
          }
          delete: {
            args: Prisma.ScoringRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          update: {
            args: Prisma.ScoringRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          deleteMany: {
            args: Prisma.ScoringRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoringRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScoringRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoringRulePayload>
          }
          aggregate: {
            args: Prisma.ScoringRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoringRule>
          }
          groupBy: {
            args: Prisma.ScoringRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoringRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoringRuleCountArgs<ExtArgs>
            result: $Utils.Optional<ScoringRuleCountAggregateOutputType> | number
          }
        }
      }
      LeadScore: {
        payload: Prisma.$LeadScorePayload<ExtArgs>
        fields: Prisma.LeadScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          findFirst: {
            args: Prisma.LeadScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          findMany: {
            args: Prisma.LeadScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>[]
          }
          create: {
            args: Prisma.LeadScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          createMany: {
            args: Prisma.LeadScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>[]
          }
          delete: {
            args: Prisma.LeadScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          update: {
            args: Prisma.LeadScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          deleteMany: {
            args: Prisma.LeadScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeadScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadScorePayload>
          }
          aggregate: {
            args: Prisma.LeadScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeadScore>
          }
          groupBy: {
            args: Prisma.LeadScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadScoreCountArgs<ExtArgs>
            result: $Utils.Optional<LeadScoreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScoringModelCountOutputType
   */

  export type ScoringModelCountOutputType = {
    rules: number
    leadScores: number
  }

  export type ScoringModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | ScoringModelCountOutputTypeCountRulesArgs
    leadScores?: boolean | ScoringModelCountOutputTypeCountLeadScoresArgs
  }

  // Custom InputTypes
  /**
   * ScoringModelCountOutputType without action
   */
  export type ScoringModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModelCountOutputType
     */
    select?: ScoringModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScoringModelCountOutputType without action
   */
  export type ScoringModelCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoringRuleWhereInput
  }

  /**
   * ScoringModelCountOutputType without action
   */
  export type ScoringModelCountOutputTypeCountLeadScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ScoringModel
   */

  export type AggregateScoringModel = {
    _count: ScoringModelCountAggregateOutputType | null
    _min: ScoringModelMinAggregateOutputType | null
    _max: ScoringModelMaxAggregateOutputType | null
  }

  export type ScoringModelMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoringModelMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoringModelCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    thresholds: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScoringModelMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoringModelMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoringModelCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    thresholds?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoringModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoringModel to aggregate.
     */
    where?: ScoringModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringModels to fetch.
     */
    orderBy?: ScoringModelOrderByWithRelationInput | ScoringModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoringModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoringModels
    **/
    _count?: true | ScoringModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoringModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoringModelMaxAggregateInputType
  }

  export type GetScoringModelAggregateType<T extends ScoringModelAggregateArgs> = {
        [P in keyof T & keyof AggregateScoringModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoringModel[P]>
      : GetScalarType<T[P], AggregateScoringModel[P]>
  }




  export type ScoringModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoringModelWhereInput
    orderBy?: ScoringModelOrderByWithAggregationInput | ScoringModelOrderByWithAggregationInput[]
    by: ScoringModelScalarFieldEnum[] | ScoringModelScalarFieldEnum
    having?: ScoringModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoringModelCountAggregateInputType | true
    _min?: ScoringModelMinAggregateInputType
    _max?: ScoringModelMaxAggregateInputType
  }

  export type ScoringModelGroupByOutputType = {
    id: string
    orgId: string
    name: string
    description: string | null
    thresholds: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScoringModelCountAggregateOutputType | null
    _min: ScoringModelMinAggregateOutputType | null
    _max: ScoringModelMaxAggregateOutputType | null
  }

  type GetScoringModelGroupByPayload<T extends ScoringModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoringModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoringModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoringModelGroupByOutputType[P]>
            : GetScalarType<T[P], ScoringModelGroupByOutputType[P]>
        }
      >
    >


  export type ScoringModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    thresholds?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rules?: boolean | ScoringModel$rulesArgs<ExtArgs>
    leadScores?: boolean | ScoringModel$leadScoresArgs<ExtArgs>
    _count?: boolean | ScoringModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoringModel"]>

  export type ScoringModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    thresholds?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scoringModel"]>

  export type ScoringModelSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    thresholds?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScoringModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | ScoringModel$rulesArgs<ExtArgs>
    leadScores?: boolean | ScoringModel$leadScoresArgs<ExtArgs>
    _count?: boolean | ScoringModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScoringModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScoringModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoringModel"
    objects: {
      rules: Prisma.$ScoringRulePayload<ExtArgs>[]
      leadScores: Prisma.$LeadScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      description: string | null
      thresholds: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scoringModel"]>
    composites: {}
  }

  type ScoringModelGetPayload<S extends boolean | null | undefined | ScoringModelDefaultArgs> = $Result.GetResult<Prisma.$ScoringModelPayload, S>

  type ScoringModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoringModelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoringModelCountAggregateInputType | true
    }

  export interface ScoringModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoringModel'], meta: { name: 'ScoringModel' } }
    /**
     * Find zero or one ScoringModel that matches the filter.
     * @param {ScoringModelFindUniqueArgs} args - Arguments to find a ScoringModel
     * @example
     * // Get one ScoringModel
     * const scoringModel = await prisma.scoringModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoringModelFindUniqueArgs>(args: SelectSubset<T, ScoringModelFindUniqueArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScoringModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScoringModelFindUniqueOrThrowArgs} args - Arguments to find a ScoringModel
     * @example
     * // Get one ScoringModel
     * const scoringModel = await prisma.scoringModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoringModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoringModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScoringModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelFindFirstArgs} args - Arguments to find a ScoringModel
     * @example
     * // Get one ScoringModel
     * const scoringModel = await prisma.scoringModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoringModelFindFirstArgs>(args?: SelectSubset<T, ScoringModelFindFirstArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScoringModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelFindFirstOrThrowArgs} args - Arguments to find a ScoringModel
     * @example
     * // Get one ScoringModel
     * const scoringModel = await prisma.scoringModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoringModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoringModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScoringModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoringModels
     * const scoringModels = await prisma.scoringModel.findMany()
     * 
     * // Get first 10 ScoringModels
     * const scoringModels = await prisma.scoringModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoringModelWithIdOnly = await prisma.scoringModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoringModelFindManyArgs>(args?: SelectSubset<T, ScoringModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScoringModel.
     * @param {ScoringModelCreateArgs} args - Arguments to create a ScoringModel.
     * @example
     * // Create one ScoringModel
     * const ScoringModel = await prisma.scoringModel.create({
     *   data: {
     *     // ... data to create a ScoringModel
     *   }
     * })
     * 
     */
    create<T extends ScoringModelCreateArgs>(args: SelectSubset<T, ScoringModelCreateArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScoringModels.
     * @param {ScoringModelCreateManyArgs} args - Arguments to create many ScoringModels.
     * @example
     * // Create many ScoringModels
     * const scoringModel = await prisma.scoringModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoringModelCreateManyArgs>(args?: SelectSubset<T, ScoringModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoringModels and returns the data saved in the database.
     * @param {ScoringModelCreateManyAndReturnArgs} args - Arguments to create many ScoringModels.
     * @example
     * // Create many ScoringModels
     * const scoringModel = await prisma.scoringModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoringModels and only return the `id`
     * const scoringModelWithIdOnly = await prisma.scoringModel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoringModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoringModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScoringModel.
     * @param {ScoringModelDeleteArgs} args - Arguments to delete one ScoringModel.
     * @example
     * // Delete one ScoringModel
     * const ScoringModel = await prisma.scoringModel.delete({
     *   where: {
     *     // ... filter to delete one ScoringModel
     *   }
     * })
     * 
     */
    delete<T extends ScoringModelDeleteArgs>(args: SelectSubset<T, ScoringModelDeleteArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScoringModel.
     * @param {ScoringModelUpdateArgs} args - Arguments to update one ScoringModel.
     * @example
     * // Update one ScoringModel
     * const scoringModel = await prisma.scoringModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoringModelUpdateArgs>(args: SelectSubset<T, ScoringModelUpdateArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScoringModels.
     * @param {ScoringModelDeleteManyArgs} args - Arguments to filter ScoringModels to delete.
     * @example
     * // Delete a few ScoringModels
     * const { count } = await prisma.scoringModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoringModelDeleteManyArgs>(args?: SelectSubset<T, ScoringModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoringModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoringModels
     * const scoringModel = await prisma.scoringModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoringModelUpdateManyArgs>(args: SelectSubset<T, ScoringModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScoringModel.
     * @param {ScoringModelUpsertArgs} args - Arguments to update or create a ScoringModel.
     * @example
     * // Update or create a ScoringModel
     * const scoringModel = await prisma.scoringModel.upsert({
     *   create: {
     *     // ... data to create a ScoringModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoringModel we want to update
     *   }
     * })
     */
    upsert<T extends ScoringModelUpsertArgs>(args: SelectSubset<T, ScoringModelUpsertArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScoringModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelCountArgs} args - Arguments to filter ScoringModels to count.
     * @example
     * // Count the number of ScoringModels
     * const count = await prisma.scoringModel.count({
     *   where: {
     *     // ... the filter for the ScoringModels we want to count
     *   }
     * })
    **/
    count<T extends ScoringModelCountArgs>(
      args?: Subset<T, ScoringModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoringModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoringModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoringModelAggregateArgs>(args: Subset<T, ScoringModelAggregateArgs>): Prisma.PrismaPromise<GetScoringModelAggregateType<T>>

    /**
     * Group by ScoringModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoringModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoringModelGroupByArgs['orderBy'] }
        : { orderBy?: ScoringModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoringModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoringModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoringModel model
   */
  readonly fields: ScoringModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoringModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoringModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends ScoringModel$rulesArgs<ExtArgs> = {}>(args?: Subset<T, ScoringModel$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findMany"> | Null>
    leadScores<T extends ScoringModel$leadScoresArgs<ExtArgs> = {}>(args?: Subset<T, ScoringModel$leadScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoringModel model
   */ 
  interface ScoringModelFieldRefs {
    readonly id: FieldRef<"ScoringModel", 'String'>
    readonly orgId: FieldRef<"ScoringModel", 'String'>
    readonly name: FieldRef<"ScoringModel", 'String'>
    readonly description: FieldRef<"ScoringModel", 'String'>
    readonly thresholds: FieldRef<"ScoringModel", 'Json'>
    readonly isActive: FieldRef<"ScoringModel", 'Boolean'>
    readonly createdAt: FieldRef<"ScoringModel", 'DateTime'>
    readonly updatedAt: FieldRef<"ScoringModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoringModel findUnique
   */
  export type ScoringModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter, which ScoringModel to fetch.
     */
    where: ScoringModelWhereUniqueInput
  }

  /**
   * ScoringModel findUniqueOrThrow
   */
  export type ScoringModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter, which ScoringModel to fetch.
     */
    where: ScoringModelWhereUniqueInput
  }

  /**
   * ScoringModel findFirst
   */
  export type ScoringModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter, which ScoringModel to fetch.
     */
    where?: ScoringModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringModels to fetch.
     */
    orderBy?: ScoringModelOrderByWithRelationInput | ScoringModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoringModels.
     */
    cursor?: ScoringModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoringModels.
     */
    distinct?: ScoringModelScalarFieldEnum | ScoringModelScalarFieldEnum[]
  }

  /**
   * ScoringModel findFirstOrThrow
   */
  export type ScoringModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter, which ScoringModel to fetch.
     */
    where?: ScoringModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringModels to fetch.
     */
    orderBy?: ScoringModelOrderByWithRelationInput | ScoringModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoringModels.
     */
    cursor?: ScoringModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoringModels.
     */
    distinct?: ScoringModelScalarFieldEnum | ScoringModelScalarFieldEnum[]
  }

  /**
   * ScoringModel findMany
   */
  export type ScoringModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter, which ScoringModels to fetch.
     */
    where?: ScoringModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringModels to fetch.
     */
    orderBy?: ScoringModelOrderByWithRelationInput | ScoringModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoringModels.
     */
    cursor?: ScoringModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringModels.
     */
    skip?: number
    distinct?: ScoringModelScalarFieldEnum | ScoringModelScalarFieldEnum[]
  }

  /**
   * ScoringModel create
   */
  export type ScoringModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoringModel.
     */
    data: XOR<ScoringModelCreateInput, ScoringModelUncheckedCreateInput>
  }

  /**
   * ScoringModel createMany
   */
  export type ScoringModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoringModels.
     */
    data: ScoringModelCreateManyInput | ScoringModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoringModel createManyAndReturn
   */
  export type ScoringModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScoringModels.
     */
    data: ScoringModelCreateManyInput | ScoringModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoringModel update
   */
  export type ScoringModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoringModel.
     */
    data: XOR<ScoringModelUpdateInput, ScoringModelUncheckedUpdateInput>
    /**
     * Choose, which ScoringModel to update.
     */
    where: ScoringModelWhereUniqueInput
  }

  /**
   * ScoringModel updateMany
   */
  export type ScoringModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoringModels.
     */
    data: XOR<ScoringModelUpdateManyMutationInput, ScoringModelUncheckedUpdateManyInput>
    /**
     * Filter which ScoringModels to update
     */
    where?: ScoringModelWhereInput
  }

  /**
   * ScoringModel upsert
   */
  export type ScoringModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoringModel to update in case it exists.
     */
    where: ScoringModelWhereUniqueInput
    /**
     * In case the ScoringModel found by the `where` argument doesn't exist, create a new ScoringModel with this data.
     */
    create: XOR<ScoringModelCreateInput, ScoringModelUncheckedCreateInput>
    /**
     * In case the ScoringModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoringModelUpdateInput, ScoringModelUncheckedUpdateInput>
  }

  /**
   * ScoringModel delete
   */
  export type ScoringModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
    /**
     * Filter which ScoringModel to delete.
     */
    where: ScoringModelWhereUniqueInput
  }

  /**
   * ScoringModel deleteMany
   */
  export type ScoringModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoringModels to delete
     */
    where?: ScoringModelWhereInput
  }

  /**
   * ScoringModel.rules
   */
  export type ScoringModel$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    where?: ScoringRuleWhereInput
    orderBy?: ScoringRuleOrderByWithRelationInput | ScoringRuleOrderByWithRelationInput[]
    cursor?: ScoringRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoringRuleScalarFieldEnum | ScoringRuleScalarFieldEnum[]
  }

  /**
   * ScoringModel.leadScores
   */
  export type ScoringModel$leadScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    where?: LeadScoreWhereInput
    orderBy?: LeadScoreOrderByWithRelationInput | LeadScoreOrderByWithRelationInput[]
    cursor?: LeadScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScoreScalarFieldEnum | LeadScoreScalarFieldEnum[]
  }

  /**
   * ScoringModel without action
   */
  export type ScoringModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringModel
     */
    select?: ScoringModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringModelInclude<ExtArgs> | null
  }


  /**
   * Model ScoringRule
   */

  export type AggregateScoringRule = {
    _count: ScoringRuleCountAggregateOutputType | null
    _avg: ScoringRuleAvgAggregateOutputType | null
    _sum: ScoringRuleSumAggregateOutputType | null
    _min: ScoringRuleMinAggregateOutputType | null
    _max: ScoringRuleMaxAggregateOutputType | null
  }

  export type ScoringRuleAvgAggregateOutputType = {
    points: number | null
    priority: number | null
  }

  export type ScoringRuleSumAggregateOutputType = {
    points: number | null
    priority: number | null
  }

  export type ScoringRuleMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    modelId: string | null
    name: string | null
    entityType: string | null
    points: number | null
    isActive: boolean | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoringRuleMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    modelId: string | null
    name: string | null
    entityType: string | null
    points: number | null
    isActive: boolean | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScoringRuleCountAggregateOutputType = {
    id: number
    orgId: number
    modelId: number
    name: number
    entityType: number
    conditions: number
    points: number
    isActive: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScoringRuleAvgAggregateInputType = {
    points?: true
    priority?: true
  }

  export type ScoringRuleSumAggregateInputType = {
    points?: true
    priority?: true
  }

  export type ScoringRuleMinAggregateInputType = {
    id?: true
    orgId?: true
    modelId?: true
    name?: true
    entityType?: true
    points?: true
    isActive?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoringRuleMaxAggregateInputType = {
    id?: true
    orgId?: true
    modelId?: true
    name?: true
    entityType?: true
    points?: true
    isActive?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScoringRuleCountAggregateInputType = {
    id?: true
    orgId?: true
    modelId?: true
    name?: true
    entityType?: true
    conditions?: true
    points?: true
    isActive?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoringRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoringRule to aggregate.
     */
    where?: ScoringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringRules to fetch.
     */
    orderBy?: ScoringRuleOrderByWithRelationInput | ScoringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoringRules
    **/
    _count?: true | ScoringRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoringRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoringRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoringRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoringRuleMaxAggregateInputType
  }

  export type GetScoringRuleAggregateType<T extends ScoringRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateScoringRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoringRule[P]>
      : GetScalarType<T[P], AggregateScoringRule[P]>
  }




  export type ScoringRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoringRuleWhereInput
    orderBy?: ScoringRuleOrderByWithAggregationInput | ScoringRuleOrderByWithAggregationInput[]
    by: ScoringRuleScalarFieldEnum[] | ScoringRuleScalarFieldEnum
    having?: ScoringRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoringRuleCountAggregateInputType | true
    _avg?: ScoringRuleAvgAggregateInputType
    _sum?: ScoringRuleSumAggregateInputType
    _min?: ScoringRuleMinAggregateInputType
    _max?: ScoringRuleMaxAggregateInputType
  }

  export type ScoringRuleGroupByOutputType = {
    id: string
    orgId: string
    modelId: string
    name: string
    entityType: string
    conditions: JsonValue
    points: number
    isActive: boolean
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: ScoringRuleCountAggregateOutputType | null
    _avg: ScoringRuleAvgAggregateOutputType | null
    _sum: ScoringRuleSumAggregateOutputType | null
    _min: ScoringRuleMinAggregateOutputType | null
    _max: ScoringRuleMaxAggregateOutputType | null
  }

  type GetScoringRuleGroupByPayload<T extends ScoringRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoringRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoringRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoringRuleGroupByOutputType[P]>
            : GetScalarType<T[P], ScoringRuleGroupByOutputType[P]>
        }
      >
    >


  export type ScoringRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    modelId?: boolean
    name?: boolean
    entityType?: boolean
    conditions?: boolean
    points?: boolean
    isActive?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoringRule"]>

  export type ScoringRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    modelId?: boolean
    name?: boolean
    entityType?: boolean
    conditions?: boolean
    points?: boolean
    isActive?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoringRule"]>

  export type ScoringRuleSelectScalar = {
    id?: boolean
    orgId?: boolean
    modelId?: boolean
    name?: boolean
    entityType?: boolean
    conditions?: boolean
    points?: boolean
    isActive?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScoringRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }
  export type ScoringRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }

  export type $ScoringRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoringRule"
    objects: {
      model: Prisma.$ScoringModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      modelId: string
      name: string
      entityType: string
      conditions: Prisma.JsonValue
      points: number
      isActive: boolean
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scoringRule"]>
    composites: {}
  }

  type ScoringRuleGetPayload<S extends boolean | null | undefined | ScoringRuleDefaultArgs> = $Result.GetResult<Prisma.$ScoringRulePayload, S>

  type ScoringRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScoringRuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScoringRuleCountAggregateInputType | true
    }

  export interface ScoringRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoringRule'], meta: { name: 'ScoringRule' } }
    /**
     * Find zero or one ScoringRule that matches the filter.
     * @param {ScoringRuleFindUniqueArgs} args - Arguments to find a ScoringRule
     * @example
     * // Get one ScoringRule
     * const scoringRule = await prisma.scoringRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoringRuleFindUniqueArgs>(args: SelectSubset<T, ScoringRuleFindUniqueArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScoringRule that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScoringRuleFindUniqueOrThrowArgs} args - Arguments to find a ScoringRule
     * @example
     * // Get one ScoringRule
     * const scoringRule = await prisma.scoringRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoringRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoringRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScoringRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleFindFirstArgs} args - Arguments to find a ScoringRule
     * @example
     * // Get one ScoringRule
     * const scoringRule = await prisma.scoringRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoringRuleFindFirstArgs>(args?: SelectSubset<T, ScoringRuleFindFirstArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScoringRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleFindFirstOrThrowArgs} args - Arguments to find a ScoringRule
     * @example
     * // Get one ScoringRule
     * const scoringRule = await prisma.scoringRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoringRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoringRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScoringRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoringRules
     * const scoringRules = await prisma.scoringRule.findMany()
     * 
     * // Get first 10 ScoringRules
     * const scoringRules = await prisma.scoringRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoringRuleWithIdOnly = await prisma.scoringRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoringRuleFindManyArgs>(args?: SelectSubset<T, ScoringRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScoringRule.
     * @param {ScoringRuleCreateArgs} args - Arguments to create a ScoringRule.
     * @example
     * // Create one ScoringRule
     * const ScoringRule = await prisma.scoringRule.create({
     *   data: {
     *     // ... data to create a ScoringRule
     *   }
     * })
     * 
     */
    create<T extends ScoringRuleCreateArgs>(args: SelectSubset<T, ScoringRuleCreateArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScoringRules.
     * @param {ScoringRuleCreateManyArgs} args - Arguments to create many ScoringRules.
     * @example
     * // Create many ScoringRules
     * const scoringRule = await prisma.scoringRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoringRuleCreateManyArgs>(args?: SelectSubset<T, ScoringRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoringRules and returns the data saved in the database.
     * @param {ScoringRuleCreateManyAndReturnArgs} args - Arguments to create many ScoringRules.
     * @example
     * // Create many ScoringRules
     * const scoringRule = await prisma.scoringRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoringRules and only return the `id`
     * const scoringRuleWithIdOnly = await prisma.scoringRule.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoringRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoringRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ScoringRule.
     * @param {ScoringRuleDeleteArgs} args - Arguments to delete one ScoringRule.
     * @example
     * // Delete one ScoringRule
     * const ScoringRule = await prisma.scoringRule.delete({
     *   where: {
     *     // ... filter to delete one ScoringRule
     *   }
     * })
     * 
     */
    delete<T extends ScoringRuleDeleteArgs>(args: SelectSubset<T, ScoringRuleDeleteArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScoringRule.
     * @param {ScoringRuleUpdateArgs} args - Arguments to update one ScoringRule.
     * @example
     * // Update one ScoringRule
     * const scoringRule = await prisma.scoringRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoringRuleUpdateArgs>(args: SelectSubset<T, ScoringRuleUpdateArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScoringRules.
     * @param {ScoringRuleDeleteManyArgs} args - Arguments to filter ScoringRules to delete.
     * @example
     * // Delete a few ScoringRules
     * const { count } = await prisma.scoringRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoringRuleDeleteManyArgs>(args?: SelectSubset<T, ScoringRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoringRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoringRules
     * const scoringRule = await prisma.scoringRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoringRuleUpdateManyArgs>(args: SelectSubset<T, ScoringRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScoringRule.
     * @param {ScoringRuleUpsertArgs} args - Arguments to update or create a ScoringRule.
     * @example
     * // Update or create a ScoringRule
     * const scoringRule = await prisma.scoringRule.upsert({
     *   create: {
     *     // ... data to create a ScoringRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoringRule we want to update
     *   }
     * })
     */
    upsert<T extends ScoringRuleUpsertArgs>(args: SelectSubset<T, ScoringRuleUpsertArgs<ExtArgs>>): Prisma__ScoringRuleClient<$Result.GetResult<Prisma.$ScoringRulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ScoringRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleCountArgs} args - Arguments to filter ScoringRules to count.
     * @example
     * // Count the number of ScoringRules
     * const count = await prisma.scoringRule.count({
     *   where: {
     *     // ... the filter for the ScoringRules we want to count
     *   }
     * })
    **/
    count<T extends ScoringRuleCountArgs>(
      args?: Subset<T, ScoringRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoringRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoringRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScoringRuleAggregateArgs>(args: Subset<T, ScoringRuleAggregateArgs>): Prisma.PrismaPromise<GetScoringRuleAggregateType<T>>

    /**
     * Group by ScoringRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoringRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScoringRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoringRuleGroupByArgs['orderBy'] }
        : { orderBy?: ScoringRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScoringRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoringRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoringRule model
   */
  readonly fields: ScoringRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoringRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoringRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ScoringModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScoringModelDefaultArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScoringRule model
   */ 
  interface ScoringRuleFieldRefs {
    readonly id: FieldRef<"ScoringRule", 'String'>
    readonly orgId: FieldRef<"ScoringRule", 'String'>
    readonly modelId: FieldRef<"ScoringRule", 'String'>
    readonly name: FieldRef<"ScoringRule", 'String'>
    readonly entityType: FieldRef<"ScoringRule", 'String'>
    readonly conditions: FieldRef<"ScoringRule", 'Json'>
    readonly points: FieldRef<"ScoringRule", 'Int'>
    readonly isActive: FieldRef<"ScoringRule", 'Boolean'>
    readonly priority: FieldRef<"ScoringRule", 'Int'>
    readonly createdAt: FieldRef<"ScoringRule", 'DateTime'>
    readonly updatedAt: FieldRef<"ScoringRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoringRule findUnique
   */
  export type ScoringRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter, which ScoringRule to fetch.
     */
    where: ScoringRuleWhereUniqueInput
  }

  /**
   * ScoringRule findUniqueOrThrow
   */
  export type ScoringRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter, which ScoringRule to fetch.
     */
    where: ScoringRuleWhereUniqueInput
  }

  /**
   * ScoringRule findFirst
   */
  export type ScoringRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter, which ScoringRule to fetch.
     */
    where?: ScoringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringRules to fetch.
     */
    orderBy?: ScoringRuleOrderByWithRelationInput | ScoringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoringRules.
     */
    cursor?: ScoringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoringRules.
     */
    distinct?: ScoringRuleScalarFieldEnum | ScoringRuleScalarFieldEnum[]
  }

  /**
   * ScoringRule findFirstOrThrow
   */
  export type ScoringRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter, which ScoringRule to fetch.
     */
    where?: ScoringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringRules to fetch.
     */
    orderBy?: ScoringRuleOrderByWithRelationInput | ScoringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoringRules.
     */
    cursor?: ScoringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoringRules.
     */
    distinct?: ScoringRuleScalarFieldEnum | ScoringRuleScalarFieldEnum[]
  }

  /**
   * ScoringRule findMany
   */
  export type ScoringRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter, which ScoringRules to fetch.
     */
    where?: ScoringRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoringRules to fetch.
     */
    orderBy?: ScoringRuleOrderByWithRelationInput | ScoringRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoringRules.
     */
    cursor?: ScoringRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoringRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoringRules.
     */
    skip?: number
    distinct?: ScoringRuleScalarFieldEnum | ScoringRuleScalarFieldEnum[]
  }

  /**
   * ScoringRule create
   */
  export type ScoringRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoringRule.
     */
    data: XOR<ScoringRuleCreateInput, ScoringRuleUncheckedCreateInput>
  }

  /**
   * ScoringRule createMany
   */
  export type ScoringRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoringRules.
     */
    data: ScoringRuleCreateManyInput | ScoringRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoringRule createManyAndReturn
   */
  export type ScoringRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ScoringRules.
     */
    data: ScoringRuleCreateManyInput | ScoringRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoringRule update
   */
  export type ScoringRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoringRule.
     */
    data: XOR<ScoringRuleUpdateInput, ScoringRuleUncheckedUpdateInput>
    /**
     * Choose, which ScoringRule to update.
     */
    where: ScoringRuleWhereUniqueInput
  }

  /**
   * ScoringRule updateMany
   */
  export type ScoringRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoringRules.
     */
    data: XOR<ScoringRuleUpdateManyMutationInput, ScoringRuleUncheckedUpdateManyInput>
    /**
     * Filter which ScoringRules to update
     */
    where?: ScoringRuleWhereInput
  }

  /**
   * ScoringRule upsert
   */
  export type ScoringRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoringRule to update in case it exists.
     */
    where: ScoringRuleWhereUniqueInput
    /**
     * In case the ScoringRule found by the `where` argument doesn't exist, create a new ScoringRule with this data.
     */
    create: XOR<ScoringRuleCreateInput, ScoringRuleUncheckedCreateInput>
    /**
     * In case the ScoringRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoringRuleUpdateInput, ScoringRuleUncheckedUpdateInput>
  }

  /**
   * ScoringRule delete
   */
  export type ScoringRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
    /**
     * Filter which ScoringRule to delete.
     */
    where: ScoringRuleWhereUniqueInput
  }

  /**
   * ScoringRule deleteMany
   */
  export type ScoringRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoringRules to delete
     */
    where?: ScoringRuleWhereInput
  }

  /**
   * ScoringRule without action
   */
  export type ScoringRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoringRule
     */
    select?: ScoringRuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoringRuleInclude<ExtArgs> | null
  }


  /**
   * Model LeadScore
   */

  export type AggregateLeadScore = {
    _count: LeadScoreCountAggregateOutputType | null
    _avg: LeadScoreAvgAggregateOutputType | null
    _sum: LeadScoreSumAggregateOutputType | null
    _min: LeadScoreMinAggregateOutputType | null
    _max: LeadScoreMaxAggregateOutputType | null
  }

  export type LeadScoreAvgAggregateOutputType = {
    score: number | null
    previousScore: number | null
  }

  export type LeadScoreSumAggregateOutputType = {
    score: number | null
    previousScore: number | null
  }

  export type LeadScoreMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    contactId: string | null
    modelId: string | null
    score: number | null
    grade: string | null
    previousScore: number | null
    changedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadScoreMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    contactId: string | null
    modelId: string | null
    score: number | null
    grade: string | null
    previousScore: number | null
    changedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadScoreCountAggregateOutputType = {
    id: number
    orgId: number
    contactId: number
    modelId: number
    score: number
    grade: number
    factors: number
    previousScore: number
    changedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadScoreAvgAggregateInputType = {
    score?: true
    previousScore?: true
  }

  export type LeadScoreSumAggregateInputType = {
    score?: true
    previousScore?: true
  }

  export type LeadScoreMinAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    modelId?: true
    score?: true
    grade?: true
    previousScore?: true
    changedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadScoreMaxAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    modelId?: true
    score?: true
    grade?: true
    previousScore?: true
    changedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadScoreCountAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    modelId?: true
    score?: true
    grade?: true
    factors?: true
    previousScore?: true
    changedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadScore to aggregate.
     */
    where?: LeadScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadScores to fetch.
     */
    orderBy?: LeadScoreOrderByWithRelationInput | LeadScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeadScores
    **/
    _count?: true | LeadScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadScoreMaxAggregateInputType
  }

  export type GetLeadScoreAggregateType<T extends LeadScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateLeadScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeadScore[P]>
      : GetScalarType<T[P], AggregateLeadScore[P]>
  }




  export type LeadScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadScoreWhereInput
    orderBy?: LeadScoreOrderByWithAggregationInput | LeadScoreOrderByWithAggregationInput[]
    by: LeadScoreScalarFieldEnum[] | LeadScoreScalarFieldEnum
    having?: LeadScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadScoreCountAggregateInputType | true
    _avg?: LeadScoreAvgAggregateInputType
    _sum?: LeadScoreSumAggregateInputType
    _min?: LeadScoreMinAggregateInputType
    _max?: LeadScoreMaxAggregateInputType
  }

  export type LeadScoreGroupByOutputType = {
    id: string
    orgId: string
    contactId: string
    modelId: string
    score: number
    grade: string
    factors: JsonValue
    previousScore: number | null
    changedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: LeadScoreCountAggregateOutputType | null
    _avg: LeadScoreAvgAggregateOutputType | null
    _sum: LeadScoreSumAggregateOutputType | null
    _min: LeadScoreMinAggregateOutputType | null
    _max: LeadScoreMaxAggregateOutputType | null
  }

  type GetLeadScoreGroupByPayload<T extends LeadScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadScoreGroupByOutputType[P]>
            : GetScalarType<T[P], LeadScoreGroupByOutputType[P]>
        }
      >
    >


  export type LeadScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    modelId?: boolean
    score?: boolean
    grade?: boolean
    factors?: boolean
    previousScore?: boolean
    changedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadScore"]>

  export type LeadScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    modelId?: boolean
    score?: boolean
    grade?: boolean
    factors?: boolean
    previousScore?: boolean
    changedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leadScore"]>

  export type LeadScoreSelectScalar = {
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    modelId?: boolean
    score?: boolean
    grade?: boolean
    factors?: boolean
    previousScore?: boolean
    changedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }
  export type LeadScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ScoringModelDefaultArgs<ExtArgs>
  }

  export type $LeadScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeadScore"
    objects: {
      model: Prisma.$ScoringModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      contactId: string
      modelId: string
      score: number
      grade: string
      factors: Prisma.JsonValue
      previousScore: number | null
      changedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leadScore"]>
    composites: {}
  }

  type LeadScoreGetPayload<S extends boolean | null | undefined | LeadScoreDefaultArgs> = $Result.GetResult<Prisma.$LeadScorePayload, S>

  type LeadScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeadScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeadScoreCountAggregateInputType | true
    }

  export interface LeadScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeadScore'], meta: { name: 'LeadScore' } }
    /**
     * Find zero or one LeadScore that matches the filter.
     * @param {LeadScoreFindUniqueArgs} args - Arguments to find a LeadScore
     * @example
     * // Get one LeadScore
     * const leadScore = await prisma.leadScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadScoreFindUniqueArgs>(args: SelectSubset<T, LeadScoreFindUniqueArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LeadScore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeadScoreFindUniqueOrThrowArgs} args - Arguments to find a LeadScore
     * @example
     * // Get one LeadScore
     * const leadScore = await prisma.leadScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LeadScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreFindFirstArgs} args - Arguments to find a LeadScore
     * @example
     * // Get one LeadScore
     * const leadScore = await prisma.leadScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadScoreFindFirstArgs>(args?: SelectSubset<T, LeadScoreFindFirstArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LeadScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreFindFirstOrThrowArgs} args - Arguments to find a LeadScore
     * @example
     * // Get one LeadScore
     * const leadScore = await prisma.leadScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LeadScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeadScores
     * const leadScores = await prisma.leadScore.findMany()
     * 
     * // Get first 10 LeadScores
     * const leadScores = await prisma.leadScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadScoreWithIdOnly = await prisma.leadScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadScoreFindManyArgs>(args?: SelectSubset<T, LeadScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LeadScore.
     * @param {LeadScoreCreateArgs} args - Arguments to create a LeadScore.
     * @example
     * // Create one LeadScore
     * const LeadScore = await prisma.leadScore.create({
     *   data: {
     *     // ... data to create a LeadScore
     *   }
     * })
     * 
     */
    create<T extends LeadScoreCreateArgs>(args: SelectSubset<T, LeadScoreCreateArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LeadScores.
     * @param {LeadScoreCreateManyArgs} args - Arguments to create many LeadScores.
     * @example
     * // Create many LeadScores
     * const leadScore = await prisma.leadScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadScoreCreateManyArgs>(args?: SelectSubset<T, LeadScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeadScores and returns the data saved in the database.
     * @param {LeadScoreCreateManyAndReturnArgs} args - Arguments to create many LeadScores.
     * @example
     * // Create many LeadScores
     * const leadScore = await prisma.leadScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeadScores and only return the `id`
     * const leadScoreWithIdOnly = await prisma.leadScore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LeadScore.
     * @param {LeadScoreDeleteArgs} args - Arguments to delete one LeadScore.
     * @example
     * // Delete one LeadScore
     * const LeadScore = await prisma.leadScore.delete({
     *   where: {
     *     // ... filter to delete one LeadScore
     *   }
     * })
     * 
     */
    delete<T extends LeadScoreDeleteArgs>(args: SelectSubset<T, LeadScoreDeleteArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LeadScore.
     * @param {LeadScoreUpdateArgs} args - Arguments to update one LeadScore.
     * @example
     * // Update one LeadScore
     * const leadScore = await prisma.leadScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadScoreUpdateArgs>(args: SelectSubset<T, LeadScoreUpdateArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LeadScores.
     * @param {LeadScoreDeleteManyArgs} args - Arguments to filter LeadScores to delete.
     * @example
     * // Delete a few LeadScores
     * const { count } = await prisma.leadScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadScoreDeleteManyArgs>(args?: SelectSubset<T, LeadScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeadScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeadScores
     * const leadScore = await prisma.leadScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadScoreUpdateManyArgs>(args: SelectSubset<T, LeadScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LeadScore.
     * @param {LeadScoreUpsertArgs} args - Arguments to update or create a LeadScore.
     * @example
     * // Update or create a LeadScore
     * const leadScore = await prisma.leadScore.upsert({
     *   create: {
     *     // ... data to create a LeadScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeadScore we want to update
     *   }
     * })
     */
    upsert<T extends LeadScoreUpsertArgs>(args: SelectSubset<T, LeadScoreUpsertArgs<ExtArgs>>): Prisma__LeadScoreClient<$Result.GetResult<Prisma.$LeadScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LeadScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreCountArgs} args - Arguments to filter LeadScores to count.
     * @example
     * // Count the number of LeadScores
     * const count = await prisma.leadScore.count({
     *   where: {
     *     // ... the filter for the LeadScores we want to count
     *   }
     * })
    **/
    count<T extends LeadScoreCountArgs>(
      args?: Subset<T, LeadScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeadScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadScoreAggregateArgs>(args: Subset<T, LeadScoreAggregateArgs>): Prisma.PrismaPromise<GetLeadScoreAggregateType<T>>

    /**
     * Group by LeadScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadScoreGroupByArgs['orderBy'] }
        : { orderBy?: LeadScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeadScore model
   */
  readonly fields: LeadScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeadScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ScoringModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScoringModelDefaultArgs<ExtArgs>>): Prisma__ScoringModelClient<$Result.GetResult<Prisma.$ScoringModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeadScore model
   */ 
  interface LeadScoreFieldRefs {
    readonly id: FieldRef<"LeadScore", 'String'>
    readonly orgId: FieldRef<"LeadScore", 'String'>
    readonly contactId: FieldRef<"LeadScore", 'String'>
    readonly modelId: FieldRef<"LeadScore", 'String'>
    readonly score: FieldRef<"LeadScore", 'Int'>
    readonly grade: FieldRef<"LeadScore", 'String'>
    readonly factors: FieldRef<"LeadScore", 'Json'>
    readonly previousScore: FieldRef<"LeadScore", 'Int'>
    readonly changedAt: FieldRef<"LeadScore", 'DateTime'>
    readonly createdAt: FieldRef<"LeadScore", 'DateTime'>
    readonly updatedAt: FieldRef<"LeadScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeadScore findUnique
   */
  export type LeadScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter, which LeadScore to fetch.
     */
    where: LeadScoreWhereUniqueInput
  }

  /**
   * LeadScore findUniqueOrThrow
   */
  export type LeadScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter, which LeadScore to fetch.
     */
    where: LeadScoreWhereUniqueInput
  }

  /**
   * LeadScore findFirst
   */
  export type LeadScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter, which LeadScore to fetch.
     */
    where?: LeadScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadScores to fetch.
     */
    orderBy?: LeadScoreOrderByWithRelationInput | LeadScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadScores.
     */
    cursor?: LeadScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadScores.
     */
    distinct?: LeadScoreScalarFieldEnum | LeadScoreScalarFieldEnum[]
  }

  /**
   * LeadScore findFirstOrThrow
   */
  export type LeadScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter, which LeadScore to fetch.
     */
    where?: LeadScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadScores to fetch.
     */
    orderBy?: LeadScoreOrderByWithRelationInput | LeadScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeadScores.
     */
    cursor?: LeadScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeadScores.
     */
    distinct?: LeadScoreScalarFieldEnum | LeadScoreScalarFieldEnum[]
  }

  /**
   * LeadScore findMany
   */
  export type LeadScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter, which LeadScores to fetch.
     */
    where?: LeadScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeadScores to fetch.
     */
    orderBy?: LeadScoreOrderByWithRelationInput | LeadScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeadScores.
     */
    cursor?: LeadScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeadScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeadScores.
     */
    skip?: number
    distinct?: LeadScoreScalarFieldEnum | LeadScoreScalarFieldEnum[]
  }

  /**
   * LeadScore create
   */
  export type LeadScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a LeadScore.
     */
    data: XOR<LeadScoreCreateInput, LeadScoreUncheckedCreateInput>
  }

  /**
   * LeadScore createMany
   */
  export type LeadScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeadScores.
     */
    data: LeadScoreCreateManyInput | LeadScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeadScore createManyAndReturn
   */
  export type LeadScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LeadScores.
     */
    data: LeadScoreCreateManyInput | LeadScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeadScore update
   */
  export type LeadScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a LeadScore.
     */
    data: XOR<LeadScoreUpdateInput, LeadScoreUncheckedUpdateInput>
    /**
     * Choose, which LeadScore to update.
     */
    where: LeadScoreWhereUniqueInput
  }

  /**
   * LeadScore updateMany
   */
  export type LeadScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeadScores.
     */
    data: XOR<LeadScoreUpdateManyMutationInput, LeadScoreUncheckedUpdateManyInput>
    /**
     * Filter which LeadScores to update
     */
    where?: LeadScoreWhereInput
  }

  /**
   * LeadScore upsert
   */
  export type LeadScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the LeadScore to update in case it exists.
     */
    where: LeadScoreWhereUniqueInput
    /**
     * In case the LeadScore found by the `where` argument doesn't exist, create a new LeadScore with this data.
     */
    create: XOR<LeadScoreCreateInput, LeadScoreUncheckedCreateInput>
    /**
     * In case the LeadScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadScoreUpdateInput, LeadScoreUncheckedUpdateInput>
  }

  /**
   * LeadScore delete
   */
  export type LeadScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
    /**
     * Filter which LeadScore to delete.
     */
    where: LeadScoreWhereUniqueInput
  }

  /**
   * LeadScore deleteMany
   */
  export type LeadScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeadScores to delete
     */
    where?: LeadScoreWhereInput
  }

  /**
   * LeadScore without action
   */
  export type LeadScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadScore
     */
    select?: LeadScoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadScoreInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScoringModelScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    thresholds: 'thresholds',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScoringModelScalarFieldEnum = (typeof ScoringModelScalarFieldEnum)[keyof typeof ScoringModelScalarFieldEnum]


  export const ScoringRuleScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    modelId: 'modelId',
    name: 'name',
    entityType: 'entityType',
    conditions: 'conditions',
    points: 'points',
    isActive: 'isActive',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScoringRuleScalarFieldEnum = (typeof ScoringRuleScalarFieldEnum)[keyof typeof ScoringRuleScalarFieldEnum]


  export const LeadScoreScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    contactId: 'contactId',
    modelId: 'modelId',
    score: 'score',
    grade: 'grade',
    factors: 'factors',
    previousScore: 'previousScore',
    changedAt: 'changedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScoreScalarFieldEnum = (typeof LeadScoreScalarFieldEnum)[keyof typeof LeadScoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScoringModelWhereInput = {
    AND?: ScoringModelWhereInput | ScoringModelWhereInput[]
    OR?: ScoringModelWhereInput[]
    NOT?: ScoringModelWhereInput | ScoringModelWhereInput[]
    id?: StringFilter<"ScoringModel"> | string
    orgId?: StringFilter<"ScoringModel"> | string
    name?: StringFilter<"ScoringModel"> | string
    description?: StringNullableFilter<"ScoringModel"> | string | null
    thresholds?: JsonFilter<"ScoringModel">
    isActive?: BoolFilter<"ScoringModel"> | boolean
    createdAt?: DateTimeFilter<"ScoringModel"> | Date | string
    updatedAt?: DateTimeFilter<"ScoringModel"> | Date | string
    rules?: ScoringRuleListRelationFilter
    leadScores?: LeadScoreListRelationFilter
  }

  export type ScoringModelOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thresholds?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rules?: ScoringRuleOrderByRelationAggregateInput
    leadScores?: LeadScoreOrderByRelationAggregateInput
  }

  export type ScoringModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoringModelWhereInput | ScoringModelWhereInput[]
    OR?: ScoringModelWhereInput[]
    NOT?: ScoringModelWhereInput | ScoringModelWhereInput[]
    orgId?: StringFilter<"ScoringModel"> | string
    name?: StringFilter<"ScoringModel"> | string
    description?: StringNullableFilter<"ScoringModel"> | string | null
    thresholds?: JsonFilter<"ScoringModel">
    isActive?: BoolFilter<"ScoringModel"> | boolean
    createdAt?: DateTimeFilter<"ScoringModel"> | Date | string
    updatedAt?: DateTimeFilter<"ScoringModel"> | Date | string
    rules?: ScoringRuleListRelationFilter
    leadScores?: LeadScoreListRelationFilter
  }, "id">

  export type ScoringModelOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thresholds?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoringModelCountOrderByAggregateInput
    _max?: ScoringModelMaxOrderByAggregateInput
    _min?: ScoringModelMinOrderByAggregateInput
  }

  export type ScoringModelScalarWhereWithAggregatesInput = {
    AND?: ScoringModelScalarWhereWithAggregatesInput | ScoringModelScalarWhereWithAggregatesInput[]
    OR?: ScoringModelScalarWhereWithAggregatesInput[]
    NOT?: ScoringModelScalarWhereWithAggregatesInput | ScoringModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoringModel"> | string
    orgId?: StringWithAggregatesFilter<"ScoringModel"> | string
    name?: StringWithAggregatesFilter<"ScoringModel"> | string
    description?: StringNullableWithAggregatesFilter<"ScoringModel"> | string | null
    thresholds?: JsonWithAggregatesFilter<"ScoringModel">
    isActive?: BoolWithAggregatesFilter<"ScoringModel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ScoringModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScoringModel"> | Date | string
  }

  export type ScoringRuleWhereInput = {
    AND?: ScoringRuleWhereInput | ScoringRuleWhereInput[]
    OR?: ScoringRuleWhereInput[]
    NOT?: ScoringRuleWhereInput | ScoringRuleWhereInput[]
    id?: StringFilter<"ScoringRule"> | string
    orgId?: StringFilter<"ScoringRule"> | string
    modelId?: StringFilter<"ScoringRule"> | string
    name?: StringFilter<"ScoringRule"> | string
    entityType?: StringFilter<"ScoringRule"> | string
    conditions?: JsonFilter<"ScoringRule">
    points?: IntFilter<"ScoringRule"> | number
    isActive?: BoolFilter<"ScoringRule"> | boolean
    priority?: IntFilter<"ScoringRule"> | number
    createdAt?: DateTimeFilter<"ScoringRule"> | Date | string
    updatedAt?: DateTimeFilter<"ScoringRule"> | Date | string
    model?: XOR<ScoringModelRelationFilter, ScoringModelWhereInput>
  }

  export type ScoringRuleOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    conditions?: SortOrder
    points?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: ScoringModelOrderByWithRelationInput
  }

  export type ScoringRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoringRuleWhereInput | ScoringRuleWhereInput[]
    OR?: ScoringRuleWhereInput[]
    NOT?: ScoringRuleWhereInput | ScoringRuleWhereInput[]
    orgId?: StringFilter<"ScoringRule"> | string
    modelId?: StringFilter<"ScoringRule"> | string
    name?: StringFilter<"ScoringRule"> | string
    entityType?: StringFilter<"ScoringRule"> | string
    conditions?: JsonFilter<"ScoringRule">
    points?: IntFilter<"ScoringRule"> | number
    isActive?: BoolFilter<"ScoringRule"> | boolean
    priority?: IntFilter<"ScoringRule"> | number
    createdAt?: DateTimeFilter<"ScoringRule"> | Date | string
    updatedAt?: DateTimeFilter<"ScoringRule"> | Date | string
    model?: XOR<ScoringModelRelationFilter, ScoringModelWhereInput>
  }, "id">

  export type ScoringRuleOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    conditions?: SortOrder
    points?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoringRuleCountOrderByAggregateInput
    _avg?: ScoringRuleAvgOrderByAggregateInput
    _max?: ScoringRuleMaxOrderByAggregateInput
    _min?: ScoringRuleMinOrderByAggregateInput
    _sum?: ScoringRuleSumOrderByAggregateInput
  }

  export type ScoringRuleScalarWhereWithAggregatesInput = {
    AND?: ScoringRuleScalarWhereWithAggregatesInput | ScoringRuleScalarWhereWithAggregatesInput[]
    OR?: ScoringRuleScalarWhereWithAggregatesInput[]
    NOT?: ScoringRuleScalarWhereWithAggregatesInput | ScoringRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoringRule"> | string
    orgId?: StringWithAggregatesFilter<"ScoringRule"> | string
    modelId?: StringWithAggregatesFilter<"ScoringRule"> | string
    name?: StringWithAggregatesFilter<"ScoringRule"> | string
    entityType?: StringWithAggregatesFilter<"ScoringRule"> | string
    conditions?: JsonWithAggregatesFilter<"ScoringRule">
    points?: IntWithAggregatesFilter<"ScoringRule"> | number
    isActive?: BoolWithAggregatesFilter<"ScoringRule"> | boolean
    priority?: IntWithAggregatesFilter<"ScoringRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ScoringRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScoringRule"> | Date | string
  }

  export type LeadScoreWhereInput = {
    AND?: LeadScoreWhereInput | LeadScoreWhereInput[]
    OR?: LeadScoreWhereInput[]
    NOT?: LeadScoreWhereInput | LeadScoreWhereInput[]
    id?: StringFilter<"LeadScore"> | string
    orgId?: StringFilter<"LeadScore"> | string
    contactId?: StringFilter<"LeadScore"> | string
    modelId?: StringFilter<"LeadScore"> | string
    score?: IntFilter<"LeadScore"> | number
    grade?: StringFilter<"LeadScore"> | string
    factors?: JsonFilter<"LeadScore">
    previousScore?: IntNullableFilter<"LeadScore"> | number | null
    changedAt?: DateTimeFilter<"LeadScore"> | Date | string
    createdAt?: DateTimeFilter<"LeadScore"> | Date | string
    updatedAt?: DateTimeFilter<"LeadScore"> | Date | string
    model?: XOR<ScoringModelRelationFilter, ScoringModelWhereInput>
  }

  export type LeadScoreOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    modelId?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    factors?: SortOrder
    previousScore?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: ScoringModelOrderByWithRelationInput
  }

  export type LeadScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_contactId_modelId?: LeadScoreOrgIdContactIdModelIdCompoundUniqueInput
    AND?: LeadScoreWhereInput | LeadScoreWhereInput[]
    OR?: LeadScoreWhereInput[]
    NOT?: LeadScoreWhereInput | LeadScoreWhereInput[]
    orgId?: StringFilter<"LeadScore"> | string
    contactId?: StringFilter<"LeadScore"> | string
    modelId?: StringFilter<"LeadScore"> | string
    score?: IntFilter<"LeadScore"> | number
    grade?: StringFilter<"LeadScore"> | string
    factors?: JsonFilter<"LeadScore">
    previousScore?: IntNullableFilter<"LeadScore"> | number | null
    changedAt?: DateTimeFilter<"LeadScore"> | Date | string
    createdAt?: DateTimeFilter<"LeadScore"> | Date | string
    updatedAt?: DateTimeFilter<"LeadScore"> | Date | string
    model?: XOR<ScoringModelRelationFilter, ScoringModelWhereInput>
  }, "id" | "orgId_contactId_modelId">

  export type LeadScoreOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    modelId?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    factors?: SortOrder
    previousScore?: SortOrderInput | SortOrder
    changedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadScoreCountOrderByAggregateInput
    _avg?: LeadScoreAvgOrderByAggregateInput
    _max?: LeadScoreMaxOrderByAggregateInput
    _min?: LeadScoreMinOrderByAggregateInput
    _sum?: LeadScoreSumOrderByAggregateInput
  }

  export type LeadScoreScalarWhereWithAggregatesInput = {
    AND?: LeadScoreScalarWhereWithAggregatesInput | LeadScoreScalarWhereWithAggregatesInput[]
    OR?: LeadScoreScalarWhereWithAggregatesInput[]
    NOT?: LeadScoreScalarWhereWithAggregatesInput | LeadScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeadScore"> | string
    orgId?: StringWithAggregatesFilter<"LeadScore"> | string
    contactId?: StringWithAggregatesFilter<"LeadScore"> | string
    modelId?: StringWithAggregatesFilter<"LeadScore"> | string
    score?: IntWithAggregatesFilter<"LeadScore"> | number
    grade?: StringWithAggregatesFilter<"LeadScore"> | string
    factors?: JsonWithAggregatesFilter<"LeadScore">
    previousScore?: IntNullableWithAggregatesFilter<"LeadScore"> | number | null
    changedAt?: DateTimeWithAggregatesFilter<"LeadScore"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LeadScore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeadScore"> | Date | string
  }

  export type ScoringModelCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ScoringRuleCreateNestedManyWithoutModelInput
    leadScores?: LeadScoreCreateNestedManyWithoutModelInput
  }

  export type ScoringModelUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ScoringRuleUncheckedCreateNestedManyWithoutModelInput
    leadScores?: LeadScoreUncheckedCreateNestedManyWithoutModelInput
  }

  export type ScoringModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ScoringRuleUpdateManyWithoutModelNestedInput
    leadScores?: LeadScoreUpdateManyWithoutModelNestedInput
  }

  export type ScoringModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ScoringRuleUncheckedUpdateManyWithoutModelNestedInput
    leadScores?: LeadScoreUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ScoringModelCreateManyInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringRuleCreateInput = {
    id?: string
    orgId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ScoringModelCreateNestedOneWithoutRulesInput
  }

  export type ScoringRuleUncheckedCreateInput = {
    id?: string
    orgId: string
    modelId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ScoringModelUpdateOneRequiredWithoutRulesNestedInput
  }

  export type ScoringRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringRuleCreateManyInput = {
    id?: string
    orgId: string
    modelId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreCreateInput = {
    id?: string
    orgId: string
    contactId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ScoringModelCreateNestedOneWithoutLeadScoresInput
  }

  export type LeadScoreUncheckedCreateInput = {
    id?: string
    orgId: string
    contactId: string
    modelId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ScoringModelUpdateOneRequiredWithoutLeadScoresNestedInput
  }

  export type LeadScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreCreateManyInput = {
    id?: string
    orgId: string
    contactId: string
    modelId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ScoringRuleListRelationFilter = {
    every?: ScoringRuleWhereInput
    some?: ScoringRuleWhereInput
    none?: ScoringRuleWhereInput
  }

  export type LeadScoreListRelationFilter = {
    every?: LeadScoreWhereInput
    some?: LeadScoreWhereInput
    none?: LeadScoreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScoringRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScoringModelCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thresholds?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoringModelMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoringModelMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ScoringModelRelationFilter = {
    is?: ScoringModelWhereInput
    isNot?: ScoringModelWhereInput
  }

  export type ScoringRuleCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    conditions?: SortOrder
    points?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoringRuleAvgOrderByAggregateInput = {
    points?: SortOrder
    priority?: SortOrder
  }

  export type ScoringRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    points?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoringRuleMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    modelId?: SortOrder
    name?: SortOrder
    entityType?: SortOrder
    points?: SortOrder
    isActive?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoringRuleSumOrderByAggregateInput = {
    points?: SortOrder
    priority?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LeadScoreOrgIdContactIdModelIdCompoundUniqueInput = {
    orgId: string
    contactId: string
    modelId: string
  }

  export type LeadScoreCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    modelId?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    factors?: SortOrder
    previousScore?: SortOrder
    changedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    previousScore?: SortOrder
  }

  export type LeadScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    modelId?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    previousScore?: SortOrder
    changedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadScoreMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    modelId?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    previousScore?: SortOrder
    changedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadScoreSumOrderByAggregateInput = {
    score?: SortOrder
    previousScore?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ScoringRuleCreateNestedManyWithoutModelInput = {
    create?: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput> | ScoringRuleCreateWithoutModelInput[] | ScoringRuleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ScoringRuleCreateOrConnectWithoutModelInput | ScoringRuleCreateOrConnectWithoutModelInput[]
    createMany?: ScoringRuleCreateManyModelInputEnvelope
    connect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
  }

  export type LeadScoreCreateNestedManyWithoutModelInput = {
    create?: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput> | LeadScoreCreateWithoutModelInput[] | LeadScoreUncheckedCreateWithoutModelInput[]
    connectOrCreate?: LeadScoreCreateOrConnectWithoutModelInput | LeadScoreCreateOrConnectWithoutModelInput[]
    createMany?: LeadScoreCreateManyModelInputEnvelope
    connect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
  }

  export type ScoringRuleUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput> | ScoringRuleCreateWithoutModelInput[] | ScoringRuleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ScoringRuleCreateOrConnectWithoutModelInput | ScoringRuleCreateOrConnectWithoutModelInput[]
    createMany?: ScoringRuleCreateManyModelInputEnvelope
    connect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
  }

  export type LeadScoreUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput> | LeadScoreCreateWithoutModelInput[] | LeadScoreUncheckedCreateWithoutModelInput[]
    connectOrCreate?: LeadScoreCreateOrConnectWithoutModelInput | LeadScoreCreateOrConnectWithoutModelInput[]
    createMany?: LeadScoreCreateManyModelInputEnvelope
    connect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScoringRuleUpdateManyWithoutModelNestedInput = {
    create?: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput> | ScoringRuleCreateWithoutModelInput[] | ScoringRuleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ScoringRuleCreateOrConnectWithoutModelInput | ScoringRuleCreateOrConnectWithoutModelInput[]
    upsert?: ScoringRuleUpsertWithWhereUniqueWithoutModelInput | ScoringRuleUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ScoringRuleCreateManyModelInputEnvelope
    set?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    disconnect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    delete?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    connect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    update?: ScoringRuleUpdateWithWhereUniqueWithoutModelInput | ScoringRuleUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ScoringRuleUpdateManyWithWhereWithoutModelInput | ScoringRuleUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ScoringRuleScalarWhereInput | ScoringRuleScalarWhereInput[]
  }

  export type LeadScoreUpdateManyWithoutModelNestedInput = {
    create?: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput> | LeadScoreCreateWithoutModelInput[] | LeadScoreUncheckedCreateWithoutModelInput[]
    connectOrCreate?: LeadScoreCreateOrConnectWithoutModelInput | LeadScoreCreateOrConnectWithoutModelInput[]
    upsert?: LeadScoreUpsertWithWhereUniqueWithoutModelInput | LeadScoreUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: LeadScoreCreateManyModelInputEnvelope
    set?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    disconnect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    delete?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    connect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    update?: LeadScoreUpdateWithWhereUniqueWithoutModelInput | LeadScoreUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: LeadScoreUpdateManyWithWhereWithoutModelInput | LeadScoreUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: LeadScoreScalarWhereInput | LeadScoreScalarWhereInput[]
  }

  export type ScoringRuleUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput> | ScoringRuleCreateWithoutModelInput[] | ScoringRuleUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ScoringRuleCreateOrConnectWithoutModelInput | ScoringRuleCreateOrConnectWithoutModelInput[]
    upsert?: ScoringRuleUpsertWithWhereUniqueWithoutModelInput | ScoringRuleUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ScoringRuleCreateManyModelInputEnvelope
    set?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    disconnect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    delete?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    connect?: ScoringRuleWhereUniqueInput | ScoringRuleWhereUniqueInput[]
    update?: ScoringRuleUpdateWithWhereUniqueWithoutModelInput | ScoringRuleUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ScoringRuleUpdateManyWithWhereWithoutModelInput | ScoringRuleUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ScoringRuleScalarWhereInput | ScoringRuleScalarWhereInput[]
  }

  export type LeadScoreUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput> | LeadScoreCreateWithoutModelInput[] | LeadScoreUncheckedCreateWithoutModelInput[]
    connectOrCreate?: LeadScoreCreateOrConnectWithoutModelInput | LeadScoreCreateOrConnectWithoutModelInput[]
    upsert?: LeadScoreUpsertWithWhereUniqueWithoutModelInput | LeadScoreUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: LeadScoreCreateManyModelInputEnvelope
    set?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    disconnect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    delete?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    connect?: LeadScoreWhereUniqueInput | LeadScoreWhereUniqueInput[]
    update?: LeadScoreUpdateWithWhereUniqueWithoutModelInput | LeadScoreUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: LeadScoreUpdateManyWithWhereWithoutModelInput | LeadScoreUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: LeadScoreScalarWhereInput | LeadScoreScalarWhereInput[]
  }

  export type ScoringModelCreateNestedOneWithoutRulesInput = {
    create?: XOR<ScoringModelCreateWithoutRulesInput, ScoringModelUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ScoringModelCreateOrConnectWithoutRulesInput
    connect?: ScoringModelWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScoringModelUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<ScoringModelCreateWithoutRulesInput, ScoringModelUncheckedCreateWithoutRulesInput>
    connectOrCreate?: ScoringModelCreateOrConnectWithoutRulesInput
    upsert?: ScoringModelUpsertWithoutRulesInput
    connect?: ScoringModelWhereUniqueInput
    update?: XOR<XOR<ScoringModelUpdateToOneWithWhereWithoutRulesInput, ScoringModelUpdateWithoutRulesInput>, ScoringModelUncheckedUpdateWithoutRulesInput>
  }

  export type ScoringModelCreateNestedOneWithoutLeadScoresInput = {
    create?: XOR<ScoringModelCreateWithoutLeadScoresInput, ScoringModelUncheckedCreateWithoutLeadScoresInput>
    connectOrCreate?: ScoringModelCreateOrConnectWithoutLeadScoresInput
    connect?: ScoringModelWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScoringModelUpdateOneRequiredWithoutLeadScoresNestedInput = {
    create?: XOR<ScoringModelCreateWithoutLeadScoresInput, ScoringModelUncheckedCreateWithoutLeadScoresInput>
    connectOrCreate?: ScoringModelCreateOrConnectWithoutLeadScoresInput
    upsert?: ScoringModelUpsertWithoutLeadScoresInput
    connect?: ScoringModelWhereUniqueInput
    update?: XOR<XOR<ScoringModelUpdateToOneWithWhereWithoutLeadScoresInput, ScoringModelUpdateWithoutLeadScoresInput>, ScoringModelUncheckedUpdateWithoutLeadScoresInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ScoringRuleCreateWithoutModelInput = {
    id?: string
    orgId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringRuleUncheckedCreateWithoutModelInput = {
    id?: string
    orgId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringRuleCreateOrConnectWithoutModelInput = {
    where: ScoringRuleWhereUniqueInput
    create: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput>
  }

  export type ScoringRuleCreateManyModelInputEnvelope = {
    data: ScoringRuleCreateManyModelInput | ScoringRuleCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type LeadScoreCreateWithoutModelInput = {
    id?: string
    orgId: string
    contactId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadScoreUncheckedCreateWithoutModelInput = {
    id?: string
    orgId: string
    contactId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadScoreCreateOrConnectWithoutModelInput = {
    where: LeadScoreWhereUniqueInput
    create: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput>
  }

  export type LeadScoreCreateManyModelInputEnvelope = {
    data: LeadScoreCreateManyModelInput | LeadScoreCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type ScoringRuleUpsertWithWhereUniqueWithoutModelInput = {
    where: ScoringRuleWhereUniqueInput
    update: XOR<ScoringRuleUpdateWithoutModelInput, ScoringRuleUncheckedUpdateWithoutModelInput>
    create: XOR<ScoringRuleCreateWithoutModelInput, ScoringRuleUncheckedCreateWithoutModelInput>
  }

  export type ScoringRuleUpdateWithWhereUniqueWithoutModelInput = {
    where: ScoringRuleWhereUniqueInput
    data: XOR<ScoringRuleUpdateWithoutModelInput, ScoringRuleUncheckedUpdateWithoutModelInput>
  }

  export type ScoringRuleUpdateManyWithWhereWithoutModelInput = {
    where: ScoringRuleScalarWhereInput
    data: XOR<ScoringRuleUpdateManyMutationInput, ScoringRuleUncheckedUpdateManyWithoutModelInput>
  }

  export type ScoringRuleScalarWhereInput = {
    AND?: ScoringRuleScalarWhereInput | ScoringRuleScalarWhereInput[]
    OR?: ScoringRuleScalarWhereInput[]
    NOT?: ScoringRuleScalarWhereInput | ScoringRuleScalarWhereInput[]
    id?: StringFilter<"ScoringRule"> | string
    orgId?: StringFilter<"ScoringRule"> | string
    modelId?: StringFilter<"ScoringRule"> | string
    name?: StringFilter<"ScoringRule"> | string
    entityType?: StringFilter<"ScoringRule"> | string
    conditions?: JsonFilter<"ScoringRule">
    points?: IntFilter<"ScoringRule"> | number
    isActive?: BoolFilter<"ScoringRule"> | boolean
    priority?: IntFilter<"ScoringRule"> | number
    createdAt?: DateTimeFilter<"ScoringRule"> | Date | string
    updatedAt?: DateTimeFilter<"ScoringRule"> | Date | string
  }

  export type LeadScoreUpsertWithWhereUniqueWithoutModelInput = {
    where: LeadScoreWhereUniqueInput
    update: XOR<LeadScoreUpdateWithoutModelInput, LeadScoreUncheckedUpdateWithoutModelInput>
    create: XOR<LeadScoreCreateWithoutModelInput, LeadScoreUncheckedCreateWithoutModelInput>
  }

  export type LeadScoreUpdateWithWhereUniqueWithoutModelInput = {
    where: LeadScoreWhereUniqueInput
    data: XOR<LeadScoreUpdateWithoutModelInput, LeadScoreUncheckedUpdateWithoutModelInput>
  }

  export type LeadScoreUpdateManyWithWhereWithoutModelInput = {
    where: LeadScoreScalarWhereInput
    data: XOR<LeadScoreUpdateManyMutationInput, LeadScoreUncheckedUpdateManyWithoutModelInput>
  }

  export type LeadScoreScalarWhereInput = {
    AND?: LeadScoreScalarWhereInput | LeadScoreScalarWhereInput[]
    OR?: LeadScoreScalarWhereInput[]
    NOT?: LeadScoreScalarWhereInput | LeadScoreScalarWhereInput[]
    id?: StringFilter<"LeadScore"> | string
    orgId?: StringFilter<"LeadScore"> | string
    contactId?: StringFilter<"LeadScore"> | string
    modelId?: StringFilter<"LeadScore"> | string
    score?: IntFilter<"LeadScore"> | number
    grade?: StringFilter<"LeadScore"> | string
    factors?: JsonFilter<"LeadScore">
    previousScore?: IntNullableFilter<"LeadScore"> | number | null
    changedAt?: DateTimeFilter<"LeadScore"> | Date | string
    createdAt?: DateTimeFilter<"LeadScore"> | Date | string
    updatedAt?: DateTimeFilter<"LeadScore"> | Date | string
  }

  export type ScoringModelCreateWithoutRulesInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leadScores?: LeadScoreCreateNestedManyWithoutModelInput
  }

  export type ScoringModelUncheckedCreateWithoutRulesInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leadScores?: LeadScoreUncheckedCreateNestedManyWithoutModelInput
  }

  export type ScoringModelCreateOrConnectWithoutRulesInput = {
    where: ScoringModelWhereUniqueInput
    create: XOR<ScoringModelCreateWithoutRulesInput, ScoringModelUncheckedCreateWithoutRulesInput>
  }

  export type ScoringModelUpsertWithoutRulesInput = {
    update: XOR<ScoringModelUpdateWithoutRulesInput, ScoringModelUncheckedUpdateWithoutRulesInput>
    create: XOR<ScoringModelCreateWithoutRulesInput, ScoringModelUncheckedCreateWithoutRulesInput>
    where?: ScoringModelWhereInput
  }

  export type ScoringModelUpdateToOneWithWhereWithoutRulesInput = {
    where?: ScoringModelWhereInput
    data: XOR<ScoringModelUpdateWithoutRulesInput, ScoringModelUncheckedUpdateWithoutRulesInput>
  }

  export type ScoringModelUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadScores?: LeadScoreUpdateManyWithoutModelNestedInput
  }

  export type ScoringModelUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leadScores?: LeadScoreUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ScoringModelCreateWithoutLeadScoresInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ScoringRuleCreateNestedManyWithoutModelInput
  }

  export type ScoringModelUncheckedCreateWithoutLeadScoresInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    thresholds: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rules?: ScoringRuleUncheckedCreateNestedManyWithoutModelInput
  }

  export type ScoringModelCreateOrConnectWithoutLeadScoresInput = {
    where: ScoringModelWhereUniqueInput
    create: XOR<ScoringModelCreateWithoutLeadScoresInput, ScoringModelUncheckedCreateWithoutLeadScoresInput>
  }

  export type ScoringModelUpsertWithoutLeadScoresInput = {
    update: XOR<ScoringModelUpdateWithoutLeadScoresInput, ScoringModelUncheckedUpdateWithoutLeadScoresInput>
    create: XOR<ScoringModelCreateWithoutLeadScoresInput, ScoringModelUncheckedCreateWithoutLeadScoresInput>
    where?: ScoringModelWhereInput
  }

  export type ScoringModelUpdateToOneWithWhereWithoutLeadScoresInput = {
    where?: ScoringModelWhereInput
    data: XOR<ScoringModelUpdateWithoutLeadScoresInput, ScoringModelUncheckedUpdateWithoutLeadScoresInput>
  }

  export type ScoringModelUpdateWithoutLeadScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ScoringRuleUpdateManyWithoutModelNestedInput
  }

  export type ScoringModelUncheckedUpdateWithoutLeadScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thresholds?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: ScoringRuleUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ScoringRuleCreateManyModelInput = {
    id?: string
    orgId: string
    name: string
    entityType?: string
    conditions: JsonNullValueInput | InputJsonValue
    points: number
    isActive?: boolean
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadScoreCreateManyModelInput = {
    id?: string
    orgId: string
    contactId: string
    score: number
    grade: string
    factors: JsonNullValueInput | InputJsonValue
    previousScore?: number | null
    changedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScoringRuleUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringRuleUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoringRuleUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    conditions?: JsonNullValueInput | InputJsonValue
    points?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadScoreUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    factors?: JsonNullValueInput | InputJsonValue
    previousScore?: NullableIntFieldUpdateOperationsInput | number | null
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ScoringModelCountOutputTypeDefaultArgs instead
     */
    export type ScoringModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoringModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoringModelDefaultArgs instead
     */
    export type ScoringModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoringModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ScoringRuleDefaultArgs instead
     */
    export type ScoringRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScoringRuleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeadScoreDefaultArgs instead
     */
    export type LeadScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeadScoreDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}