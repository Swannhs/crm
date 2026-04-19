
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
 * Model Automation
 * 
 */
export type Automation = $Result.DefaultSelection<Prisma.$AutomationPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowNode
 * 
 */
export type WorkflowNode = $Result.DefaultSelection<Prisma.$WorkflowNodePayload>
/**
 * Model WorkflowWorkspace
 * 
 */
export type WorkflowWorkspace = $Result.DefaultSelection<Prisma.$WorkflowWorkspacePayload>
/**
 * Model WorkflowStartAction
 * 
 */
export type WorkflowStartAction = $Result.DefaultSelection<Prisma.$WorkflowStartActionPayload>
/**
 * Model WorkflowActivityLog
 * 
 */
export type WorkflowActivityLog = $Result.DefaultSelection<Prisma.$WorkflowActivityLogPayload>
/**
 * Model WorkflowExecutionHistory
 * 
 */
export type WorkflowExecutionHistory = $Result.DefaultSelection<Prisma.$WorkflowExecutionHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Automations
 * const automations = await prisma.automation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Automations
   * const automations = await prisma.automation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.automation`: Exposes CRUD operations for the **Automation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automations
    * const automations = await prisma.automation.findMany()
    * ```
    */
  get automation(): Prisma.AutomationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowNode`: Exposes CRUD operations for the **WorkflowNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowNodes
    * const workflowNodes = await prisma.workflowNode.findMany()
    * ```
    */
  get workflowNode(): Prisma.WorkflowNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowWorkspace`: Exposes CRUD operations for the **WorkflowWorkspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowWorkspaces
    * const workflowWorkspaces = await prisma.workflowWorkspace.findMany()
    * ```
    */
  get workflowWorkspace(): Prisma.WorkflowWorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowStartAction`: Exposes CRUD operations for the **WorkflowStartAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowStartActions
    * const workflowStartActions = await prisma.workflowStartAction.findMany()
    * ```
    */
  get workflowStartAction(): Prisma.WorkflowStartActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowActivityLog`: Exposes CRUD operations for the **WorkflowActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowActivityLogs
    * const workflowActivityLogs = await prisma.workflowActivityLog.findMany()
    * ```
    */
  get workflowActivityLog(): Prisma.WorkflowActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowExecutionHistory`: Exposes CRUD operations for the **WorkflowExecutionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowExecutionHistories
    * const workflowExecutionHistories = await prisma.workflowExecutionHistory.findMany()
    * ```
    */
  get workflowExecutionHistory(): Prisma.WorkflowExecutionHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Automation: 'Automation',
    Workflow: 'Workflow',
    WorkflowNode: 'WorkflowNode',
    WorkflowWorkspace: 'WorkflowWorkspace',
    WorkflowStartAction: 'WorkflowStartAction',
    WorkflowActivityLog: 'WorkflowActivityLog',
    WorkflowExecutionHistory: 'WorkflowExecutionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "automation" | "workflow" | "workflowNode" | "workflowWorkspace" | "workflowStartAction" | "workflowActivityLog" | "workflowExecutionHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Automation: {
        payload: Prisma.$AutomationPayload<ExtArgs>
        fields: Prisma.AutomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findFirst: {
            args: Prisma.AutomationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findMany: {
            args: Prisma.AutomationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          create: {
            args: Prisma.AutomationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          createMany: {
            args: Prisma.AutomationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          delete: {
            args: Prisma.AutomationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          update: {
            args: Prisma.AutomationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          deleteMany: {
            args: Prisma.AutomationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutomationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          aggregate: {
            args: Prisma.AutomationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomation>
          }
          groupBy: {
            args: Prisma.AutomationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowNode: {
        payload: Prisma.$WorkflowNodePayload<ExtArgs>
        fields: Prisma.WorkflowNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findFirst: {
            args: Prisma.WorkflowNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          findMany: {
            args: Prisma.WorkflowNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          create: {
            args: Prisma.WorkflowNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          createMany: {
            args: Prisma.WorkflowNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>[]
          }
          delete: {
            args: Prisma.WorkflowNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          update: {
            args: Prisma.WorkflowNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          deleteMany: {
            args: Prisma.WorkflowNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowNodePayload>
          }
          aggregate: {
            args: Prisma.WorkflowNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowNode>
          }
          groupBy: {
            args: Prisma.WorkflowNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowNodeCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowNodeCountAggregateOutputType> | number
          }
        }
      }
      WorkflowWorkspace: {
        payload: Prisma.$WorkflowWorkspacePayload<ExtArgs>
        fields: Prisma.WorkflowWorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowWorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowWorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkflowWorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowWorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkflowWorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkflowWorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkflowWorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowWorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkflowWorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          update: {
            args: Prisma.WorkflowWorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkflowWorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowWorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowWorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowWorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkflowWorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowWorkspace>
          }
          groupBy: {
            args: Prisma.WorkflowWorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowWorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowWorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowWorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkflowStartAction: {
        payload: Prisma.$WorkflowStartActionPayload<ExtArgs>
        fields: Prisma.WorkflowStartActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowStartActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowStartActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowStartActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowStartActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          findMany: {
            args: Prisma.WorkflowStartActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>[]
          }
          create: {
            args: Prisma.WorkflowStartActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          createMany: {
            args: Prisma.WorkflowStartActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowStartActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>[]
          }
          delete: {
            args: Prisma.WorkflowStartActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          update: {
            args: Prisma.WorkflowStartActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowStartActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowStartActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowStartActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStartActionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowStartActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowStartAction>
          }
          groupBy: {
            args: Prisma.WorkflowStartActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowStartActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowStartActionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowStartActionCountAggregateOutputType> | number
          }
        }
      }
      WorkflowActivityLog: {
        payload: Prisma.$WorkflowActivityLogPayload<ExtArgs>
        fields: Prisma.WorkflowActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          findFirst: {
            args: Prisma.WorkflowActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          findMany: {
            args: Prisma.WorkflowActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>[]
          }
          create: {
            args: Prisma.WorkflowActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          createMany: {
            args: Prisma.WorkflowActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>[]
          }
          delete: {
            args: Prisma.WorkflowActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          update: {
            args: Prisma.WorkflowActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowActivityLogPayload>
          }
          aggregate: {
            args: Prisma.WorkflowActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowActivityLog>
          }
          groupBy: {
            args: Prisma.WorkflowActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowActivityLogCountAggregateOutputType> | number
          }
        }
      }
      WorkflowExecutionHistory: {
        payload: Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>
        fields: Prisma.WorkflowExecutionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowExecutionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          findFirst: {
            args: Prisma.WorkflowExecutionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowExecutionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          findMany: {
            args: Prisma.WorkflowExecutionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>[]
          }
          create: {
            args: Prisma.WorkflowExecutionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          createMany: {
            args: Prisma.WorkflowExecutionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowExecutionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>[]
          }
          delete: {
            args: Prisma.WorkflowExecutionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          update: {
            args: Prisma.WorkflowExecutionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowExecutionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowExecutionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowExecutionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionHistoryPayload>
          }
          aggregate: {
            args: Prisma.WorkflowExecutionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowExecutionHistory>
          }
          groupBy: {
            args: Prisma.WorkflowExecutionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowExecutionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionHistoryCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    automation?: AutomationOmit
    workflow?: WorkflowOmit
    workflowNode?: WorkflowNodeOmit
    workflowWorkspace?: WorkflowWorkspaceOmit
    workflowStartAction?: WorkflowStartActionOmit
    workflowActivityLog?: WorkflowActivityLogOmit
    workflowExecutionHistory?: WorkflowExecutionHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Automation
   */

  export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  export type AutomationMinAggregateOutputType = {
    id: string | null
    automationName: string | null
    userEmail: string | null
    userPhone: string | null
    userName: string | null
    userId: string | null
    organizationId: string | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationMaxAggregateOutputType = {
    id: string | null
    automationName: string | null
    userEmail: string | null
    userPhone: string | null
    userName: string | null
    userId: string | null
    organizationId: string | null
    isActive: boolean | null
    isDelete: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutomationCountAggregateOutputType = {
    id: number
    automationName: number
    contactInfo: number
    activationUpon: number
    activateTime: number
    userEmail: number
    userPhone: number
    userName: number
    userId: number
    organizationId: number
    isActive: number
    isDelete: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutomationMinAggregateInputType = {
    id?: true
    automationName?: true
    userEmail?: true
    userPhone?: true
    userName?: true
    userId?: true
    organizationId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationMaxAggregateInputType = {
    id?: true
    automationName?: true
    userEmail?: true
    userPhone?: true
    userName?: true
    userId?: true
    organizationId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutomationCountAggregateInputType = {
    id?: true
    automationName?: true
    contactInfo?: true
    activationUpon?: true
    activateTime?: true
    userEmail?: true
    userPhone?: true
    userName?: true
    userId?: true
    organizationId?: true
    isActive?: true
    isDelete?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automation to aggregate.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automations
    **/
    _count?: true | AutomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationMaxAggregateInputType
  }

  export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomation[P]>
      : GetScalarType<T[P], AggregateAutomation[P]>
  }




  export type AutomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithAggregationInput | AutomationOrderByWithAggregationInput[]
    by: AutomationScalarFieldEnum[] | AutomationScalarFieldEnum
    having?: AutomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationCountAggregateInputType | true
    _min?: AutomationMinAggregateInputType
    _max?: AutomationMaxAggregateInputType
  }

  export type AutomationGroupByOutputType = {
    id: string
    automationName: string | null
    contactInfo: JsonValue | null
    activationUpon: JsonValue | null
    activateTime: JsonValue | null
    userEmail: string | null
    userPhone: string | null
    userName: string | null
    userId: string | null
    organizationId: string | null
    isActive: boolean
    isDelete: boolean
    createdAt: Date
    updatedAt: Date
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationGroupByOutputType[P]>
        }
      >
    >


  export type AutomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationName?: boolean
    contactInfo?: boolean
    activationUpon?: boolean
    activateTime?: boolean
    userEmail?: boolean
    userPhone?: boolean
    userName?: boolean
    userId?: boolean
    organizationId?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationName?: boolean
    contactInfo?: boolean
    activationUpon?: boolean
    activateTime?: boolean
    userEmail?: boolean
    userPhone?: boolean
    userName?: boolean
    userId?: boolean
    organizationId?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["automation"]>


  export type AutomationSelectScalar = {
    id?: boolean
    automationName?: boolean
    contactInfo?: boolean
    activationUpon?: boolean
    activateTime?: boolean
    userEmail?: boolean
    userPhone?: boolean
    userName?: boolean
    userId?: boolean
    organizationId?: boolean
    isActive?: boolean
    isDelete?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutomationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "automationName" | "contactInfo" | "activationUpon" | "activateTime" | "userEmail" | "userPhone" | "userName" | "userId" | "organizationId" | "isActive" | "isDelete" | "createdAt" | "updatedAt", ExtArgs["result"]["automation"]>

  export type $AutomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      automationName: string | null
      contactInfo: Prisma.JsonValue | null
      activationUpon: Prisma.JsonValue | null
      activateTime: Prisma.JsonValue | null
      userEmail: string | null
      userPhone: string | null
      userName: string | null
      userId: string | null
      organizationId: string | null
      isActive: boolean
      isDelete: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["automation"]>
    composites: {}
  }

  type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = $Result.GetResult<Prisma.$AutomationPayload, S>

  type AutomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationCountAggregateInputType | true
    }

  export interface AutomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automation'], meta: { name: 'Automation' } }
    /**
     * Find zero or one Automation that matches the filter.
     * @param {AutomationFindUniqueArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationFindUniqueArgs>(args: SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationFindUniqueOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationFindFirstArgs>(args?: SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automations
     * const automations = await prisma.automation.findMany()
     * 
     * // Get first 10 Automations
     * const automations = await prisma.automation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWithIdOnly = await prisma.automation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationFindManyArgs>(args?: SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automation.
     * @param {AutomationCreateArgs} args - Arguments to create a Automation.
     * @example
     * // Create one Automation
     * const Automation = await prisma.automation.create({
     *   data: {
     *     // ... data to create a Automation
     *   }
     * })
     * 
     */
    create<T extends AutomationCreateArgs>(args: SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automations.
     * @param {AutomationCreateManyArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationCreateManyArgs>(args?: SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Automations and returns the data saved in the database.
     * @param {AutomationCreateManyAndReturnArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Automation.
     * @param {AutomationDeleteArgs} args - Arguments to delete one Automation.
     * @example
     * // Delete one Automation
     * const Automation = await prisma.automation.delete({
     *   where: {
     *     // ... filter to delete one Automation
     *   }
     * })
     * 
     */
    delete<T extends AutomationDeleteArgs>(args: SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automation.
     * @param {AutomationUpdateArgs} args - Arguments to update one Automation.
     * @example
     * // Update one Automation
     * const automation = await prisma.automation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationUpdateArgs>(args: SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automations.
     * @param {AutomationDeleteManyArgs} args - Arguments to filter Automations to delete.
     * @example
     * // Delete a few Automations
     * const { count } = await prisma.automation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationDeleteManyArgs>(args?: SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationUpdateManyArgs>(args: SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Automation.
     * @param {AutomationUpsertArgs} args - Arguments to update or create a Automation.
     * @example
     * // Update or create a Automation
     * const automation = await prisma.automation.upsert({
     *   create: {
     *     // ... data to create a Automation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automation we want to update
     *   }
     * })
     */
    upsert<T extends AutomationUpsertArgs>(args: SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationCountArgs} args - Arguments to filter Automations to count.
     * @example
     * // Count the number of Automations
     * const count = await prisma.automation.count({
     *   where: {
     *     // ... the filter for the Automations we want to count
     *   }
     * })
    **/
    count<T extends AutomationCountArgs>(
      args?: Subset<T, AutomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationAggregateArgs>(args: Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>

    /**
     * Group by Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationGroupByArgs} args - Group by arguments.
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
      T extends AutomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationGroupByArgs['orderBy'] }
        : { orderBy?: AutomationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automation model
   */
  readonly fields: AutomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Automation model
   */
  interface AutomationFieldRefs {
    readonly id: FieldRef<"Automation", 'String'>
    readonly automationName: FieldRef<"Automation", 'String'>
    readonly contactInfo: FieldRef<"Automation", 'Json'>
    readonly activationUpon: FieldRef<"Automation", 'Json'>
    readonly activateTime: FieldRef<"Automation", 'Json'>
    readonly userEmail: FieldRef<"Automation", 'String'>
    readonly userPhone: FieldRef<"Automation", 'String'>
    readonly userName: FieldRef<"Automation", 'String'>
    readonly userId: FieldRef<"Automation", 'String'>
    readonly organizationId: FieldRef<"Automation", 'String'>
    readonly isActive: FieldRef<"Automation", 'Boolean'>
    readonly isDelete: FieldRef<"Automation", 'Boolean'>
    readonly createdAt: FieldRef<"Automation", 'DateTime'>
    readonly updatedAt: FieldRef<"Automation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Automation findUnique
   */
  export type AutomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findUniqueOrThrow
   */
  export type AutomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findFirst
   */
  export type AutomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findFirstOrThrow
   */
  export type AutomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findMany
   */
  export type AutomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter, which Automations to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation create
   */
  export type AutomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data needed to create a Automation.
     */
    data: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
  }

  /**
   * Automation createMany
   */
  export type AutomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation createManyAndReturn
   */
  export type AutomationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation update
   */
  export type AutomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data needed to update a Automation.
     */
    data: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
    /**
     * Choose, which Automation to update.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation updateMany
   */
  export type AutomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
  }

  /**
   * Automation upsert
   */
  export type AutomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The filter to search for the Automation to update in case it exists.
     */
    where: AutomationWhereUniqueInput
    /**
     * In case the Automation found by the `where` argument doesn't exist, create a new Automation with this data.
     */
    create: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
    /**
     * In case the Automation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
  }

  /**
   * Automation delete
   */
  export type AutomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Filter which Automation to delete.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation deleteMany
   */
  export type AutomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automations to delete
     */
    where?: AutomationWhereInput
  }

  /**
   * Automation without action
   */
  export type AutomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workspaceId: string | null
    title: string | null
    description: string | null
    status: string | null
    verticalFlow: boolean | null
    creatorType: string | null
    isForSystemNotification: boolean | null
    isForUserNotification: boolean | null
    isForClientNotification: boolean | null
    isCopyFromSystemNotification: boolean | null
    parentWorkflowId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workspaceId: string | null
    title: string | null
    description: string | null
    status: string | null
    verticalFlow: boolean | null
    creatorType: string | null
    isForSystemNotification: boolean | null
    isForUserNotification: boolean | null
    isForClientNotification: boolean | null
    isCopyFromSystemNotification: boolean | null
    parentWorkflowId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    workspaceId: number
    title: number
    description: number
    status: number
    verticalFlow: number
    creatorType: number
    isForSystemNotification: number
    isForUserNotification: number
    isForClientNotification: number
    isCopyFromSystemNotification: number
    parentWorkflowId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workspaceId?: true
    title?: true
    description?: true
    status?: true
    verticalFlow?: true
    creatorType?: true
    isForSystemNotification?: true
    isForUserNotification?: true
    isForClientNotification?: true
    isCopyFromSystemNotification?: true
    parentWorkflowId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workspaceId?: true
    title?: true
    description?: true
    status?: true
    verticalFlow?: true
    creatorType?: true
    isForSystemNotification?: true
    isForUserNotification?: true
    isForClientNotification?: true
    isCopyFromSystemNotification?: true
    parentWorkflowId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workspaceId?: true
    title?: true
    description?: true
    status?: true
    verticalFlow?: true
    creatorType?: true
    isForSystemNotification?: true
    isForUserNotification?: true
    isForClientNotification?: true
    isCopyFromSystemNotification?: true
    parentWorkflowId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    workspaceId: string
    title: string
    description: string | null
    status: string
    verticalFlow: boolean
    creatorType: string
    isForSystemNotification: boolean
    isForUserNotification: boolean
    isForClientNotification: boolean
    isCopyFromSystemNotification: boolean
    parentWorkflowId: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    verticalFlow?: boolean
    creatorType?: boolean
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    verticalFlow?: boolean
    creatorType?: boolean
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflow"]>


  export type WorkflowSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workspaceId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    verticalFlow?: boolean
    creatorType?: boolean
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "workspaceId" | "title" | "description" | "status" | "verticalFlow" | "creatorType" | "isForSystemNotification" | "isForUserNotification" | "isForClientNotification" | "isCopyFromSystemNotification" | "parentWorkflowId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      workspaceId: string
      title: string
      description: string | null
      status: string
      verticalFlow: boolean
      creatorType: string
      isForSystemNotification: boolean
      isForUserNotification: boolean
      isForClientNotification: boolean
      isCopyFromSystemNotification: boolean
      parentWorkflowId: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly organizationId: FieldRef<"Workflow", 'String'>
    readonly workspaceId: FieldRef<"Workflow", 'String'>
    readonly title: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly status: FieldRef<"Workflow", 'String'>
    readonly verticalFlow: FieldRef<"Workflow", 'Boolean'>
    readonly creatorType: FieldRef<"Workflow", 'String'>
    readonly isForSystemNotification: FieldRef<"Workflow", 'Boolean'>
    readonly isForUserNotification: FieldRef<"Workflow", 'Boolean'>
    readonly isForClientNotification: FieldRef<"Workflow", 'Boolean'>
    readonly isCopyFromSystemNotification: FieldRef<"Workflow", 'Boolean'>
    readonly parentWorkflowId: FieldRef<"Workflow", 'String'>
    readonly isDeleted: FieldRef<"Workflow", 'Boolean'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
  }


  /**
   * Model WorkflowNode
   */

  export type AggregateWorkflowNode = {
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  export type WorkflowNodeAvgAggregateOutputType = {
    height: number | null
    width: number | null
  }

  export type WorkflowNodeSumAggregateOutputType = {
    height: number | null
    width: number | null
  }

  export type WorkflowNodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    key: string | null
    type: string | null
    height: number | null
    width: number | null
    sourcePosition: string | null
    targetPosition: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowNodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    key: string | null
    type: string | null
    height: number | null
    width: number | null
    sourcePosition: string | null
    targetPosition: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowNodeCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    workflowId: number
    key: number
    data: number
    type: number
    source: number
    height: number
    width: number
    position: number
    positionAbsolute: number
    sourcePosition: number
    targetPosition: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowNodeAvgAggregateInputType = {
    height?: true
    width?: true
  }

  export type WorkflowNodeSumAggregateInputType = {
    height?: true
    width?: true
  }

  export type WorkflowNodeMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    key?: true
    type?: true
    height?: true
    width?: true
    sourcePosition?: true
    targetPosition?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowNodeMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    key?: true
    type?: true
    height?: true
    width?: true
    sourcePosition?: true
    targetPosition?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowNodeCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    key?: true
    data?: true
    type?: true
    source?: true
    height?: true
    width?: true
    position?: true
    positionAbsolute?: true
    sourcePosition?: true
    targetPosition?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNode to aggregate.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowNodes
    **/
    _count?: true | WorkflowNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type GetWorkflowNodeAggregateType<T extends WorkflowNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowNode[P]>
      : GetScalarType<T[P], AggregateWorkflowNode[P]>
  }




  export type WorkflowNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowNodeWhereInput
    orderBy?: WorkflowNodeOrderByWithAggregationInput | WorkflowNodeOrderByWithAggregationInput[]
    by: WorkflowNodeScalarFieldEnum[] | WorkflowNodeScalarFieldEnum
    having?: WorkflowNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowNodeCountAggregateInputType | true
    _avg?: WorkflowNodeAvgAggregateInputType
    _sum?: WorkflowNodeSumAggregateInputType
    _min?: WorkflowNodeMinAggregateInputType
    _max?: WorkflowNodeMaxAggregateInputType
  }

  export type WorkflowNodeGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    workflowId: string
    key: string | null
    data: JsonValue | null
    type: string
    source: string[]
    height: number
    width: number
    position: JsonValue | null
    positionAbsolute: JsonValue | null
    sourcePosition: string
    targetPosition: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkflowNodeCountAggregateOutputType | null
    _avg: WorkflowNodeAvgAggregateOutputType | null
    _sum: WorkflowNodeSumAggregateOutputType | null
    _min: WorkflowNodeMinAggregateOutputType | null
    _max: WorkflowNodeMaxAggregateOutputType | null
  }

  type GetWorkflowNodeGroupByPayload<T extends WorkflowNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowNodeGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    key?: boolean
    data?: boolean
    type?: boolean
    source?: boolean
    height?: boolean
    width?: boolean
    position?: boolean
    positionAbsolute?: boolean
    sourcePosition?: boolean
    targetPosition?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowNode"]>

  export type WorkflowNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    key?: boolean
    data?: boolean
    type?: boolean
    source?: boolean
    height?: boolean
    width?: boolean
    position?: boolean
    positionAbsolute?: boolean
    sourcePosition?: boolean
    targetPosition?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowNode"]>


  export type WorkflowNodeSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    key?: boolean
    data?: boolean
    type?: boolean
    source?: boolean
    height?: boolean
    width?: boolean
    position?: boolean
    positionAbsolute?: boolean
    sourcePosition?: boolean
    targetPosition?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "workflowId" | "key" | "data" | "type" | "source" | "height" | "width" | "position" | "positionAbsolute" | "sourcePosition" | "targetPosition" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["workflowNode"]>

  export type $WorkflowNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowNode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      workflowId: string
      key: string | null
      data: Prisma.JsonValue | null
      type: string
      source: string[]
      height: number
      width: number
      position: Prisma.JsonValue | null
      positionAbsolute: Prisma.JsonValue | null
      sourcePosition: string
      targetPosition: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowNode"]>
    composites: {}
  }

  type WorkflowNodeGetPayload<S extends boolean | null | undefined | WorkflowNodeDefaultArgs> = $Result.GetResult<Prisma.$WorkflowNodePayload, S>

  type WorkflowNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowNodeCountAggregateInputType | true
    }

  export interface WorkflowNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowNode'], meta: { name: 'WorkflowNode' } }
    /**
     * Find zero or one WorkflowNode that matches the filter.
     * @param {WorkflowNodeFindUniqueArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowNodeFindUniqueArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowNodeFindUniqueOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowNodeFindFirstArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindFirstOrThrowArgs} args - Arguments to find a WorkflowNode
     * @example
     * // Get one WorkflowNode
     * const workflowNode = await prisma.workflowNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany()
     * 
     * // Get first 10 WorkflowNodes
     * const workflowNodes = await prisma.workflowNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowNodeFindManyArgs>(args?: SelectSubset<T, WorkflowNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowNode.
     * @param {WorkflowNodeCreateArgs} args - Arguments to create a WorkflowNode.
     * @example
     * // Create one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.create({
     *   data: {
     *     // ... data to create a WorkflowNode
     *   }
     * })
     * 
     */
    create<T extends WorkflowNodeCreateArgs>(args: SelectSubset<T, WorkflowNodeCreateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowNodes.
     * @param {WorkflowNodeCreateManyArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowNodeCreateManyArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowNodes and returns the data saved in the database.
     * @param {WorkflowNodeCreateManyAndReturnArgs} args - Arguments to create many WorkflowNodes.
     * @example
     * // Create many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowNodes and only return the `id`
     * const workflowNodeWithIdOnly = await prisma.workflowNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowNode.
     * @param {WorkflowNodeDeleteArgs} args - Arguments to delete one WorkflowNode.
     * @example
     * // Delete one WorkflowNode
     * const WorkflowNode = await prisma.workflowNode.delete({
     *   where: {
     *     // ... filter to delete one WorkflowNode
     *   }
     * })
     * 
     */
    delete<T extends WorkflowNodeDeleteArgs>(args: SelectSubset<T, WorkflowNodeDeleteArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowNode.
     * @param {WorkflowNodeUpdateArgs} args - Arguments to update one WorkflowNode.
     * @example
     * // Update one WorkflowNode
     * const workflowNode = await prisma.workflowNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowNodeUpdateArgs>(args: SelectSubset<T, WorkflowNodeUpdateArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowNodes.
     * @param {WorkflowNodeDeleteManyArgs} args - Arguments to filter WorkflowNodes to delete.
     * @example
     * // Delete a few WorkflowNodes
     * const { count } = await prisma.workflowNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowNodeDeleteManyArgs>(args?: SelectSubset<T, WorkflowNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowNodes
     * const workflowNode = await prisma.workflowNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowNodeUpdateManyArgs>(args: SelectSubset<T, WorkflowNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowNode.
     * @param {WorkflowNodeUpsertArgs} args - Arguments to update or create a WorkflowNode.
     * @example
     * // Update or create a WorkflowNode
     * const workflowNode = await prisma.workflowNode.upsert({
     *   create: {
     *     // ... data to create a WorkflowNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowNode we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowNodeUpsertArgs>(args: SelectSubset<T, WorkflowNodeUpsertArgs<ExtArgs>>): Prisma__WorkflowNodeClient<$Result.GetResult<Prisma.$WorkflowNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeCountArgs} args - Arguments to filter WorkflowNodes to count.
     * @example
     * // Count the number of WorkflowNodes
     * const count = await prisma.workflowNode.count({
     *   where: {
     *     // ... the filter for the WorkflowNodes we want to count
     *   }
     * })
    **/
    count<T extends WorkflowNodeCountArgs>(
      args?: Subset<T, WorkflowNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowNodeAggregateArgs>(args: Subset<T, WorkflowNodeAggregateArgs>): Prisma.PrismaPromise<GetWorkflowNodeAggregateType<T>>

    /**
     * Group by WorkflowNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowNodeGroupByArgs} args - Group by arguments.
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
      T extends WorkflowNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowNodeGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowNodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowNode model
   */
  readonly fields: WorkflowNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkflowNode model
   */
  interface WorkflowNodeFieldRefs {
    readonly id: FieldRef<"WorkflowNode", 'String'>
    readonly userId: FieldRef<"WorkflowNode", 'String'>
    readonly organizationId: FieldRef<"WorkflowNode", 'String'>
    readonly workflowId: FieldRef<"WorkflowNode", 'String'>
    readonly key: FieldRef<"WorkflowNode", 'String'>
    readonly data: FieldRef<"WorkflowNode", 'Json'>
    readonly type: FieldRef<"WorkflowNode", 'String'>
    readonly source: FieldRef<"WorkflowNode", 'String[]'>
    readonly height: FieldRef<"WorkflowNode", 'Int'>
    readonly width: FieldRef<"WorkflowNode", 'Int'>
    readonly position: FieldRef<"WorkflowNode", 'Json'>
    readonly positionAbsolute: FieldRef<"WorkflowNode", 'Json'>
    readonly sourcePosition: FieldRef<"WorkflowNode", 'String'>
    readonly targetPosition: FieldRef<"WorkflowNode", 'String'>
    readonly isDeleted: FieldRef<"WorkflowNode", 'Boolean'>
    readonly createdAt: FieldRef<"WorkflowNode", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowNode findUnique
   */
  export type WorkflowNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findUniqueOrThrow
   */
  export type WorkflowNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode findFirst
   */
  export type WorkflowNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findFirstOrThrow
   */
  export type WorkflowNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowNode to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowNodes.
     */
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode findMany
   */
  export type WorkflowNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowNodes to fetch.
     */
    where?: WorkflowNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowNodes to fetch.
     */
    orderBy?: WorkflowNodeOrderByWithRelationInput | WorkflowNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowNodes.
     */
    cursor?: WorkflowNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowNodes.
     */
    skip?: number
    distinct?: WorkflowNodeScalarFieldEnum | WorkflowNodeScalarFieldEnum[]
  }

  /**
   * WorkflowNode create
   */
  export type WorkflowNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkflowNode.
     */
    data: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
  }

  /**
   * WorkflowNode createMany
   */
  export type WorkflowNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowNode createManyAndReturn
   */
  export type WorkflowNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowNodes.
     */
    data: WorkflowNodeCreateManyInput | WorkflowNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowNode update
   */
  export type WorkflowNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkflowNode.
     */
    data: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
    /**
     * Choose, which WorkflowNode to update.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode updateMany
   */
  export type WorkflowNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowNodes.
     */
    data: XOR<WorkflowNodeUpdateManyMutationInput, WorkflowNodeUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowNodes to update
     */
    where?: WorkflowNodeWhereInput
  }

  /**
   * WorkflowNode upsert
   */
  export type WorkflowNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkflowNode to update in case it exists.
     */
    where: WorkflowNodeWhereUniqueInput
    /**
     * In case the WorkflowNode found by the `where` argument doesn't exist, create a new WorkflowNode with this data.
     */
    create: XOR<WorkflowNodeCreateInput, WorkflowNodeUncheckedCreateInput>
    /**
     * In case the WorkflowNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowNodeUpdateInput, WorkflowNodeUncheckedUpdateInput>
  }

  /**
   * WorkflowNode delete
   */
  export type WorkflowNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
    /**
     * Filter which WorkflowNode to delete.
     */
    where: WorkflowNodeWhereUniqueInput
  }

  /**
   * WorkflowNode deleteMany
   */
  export type WorkflowNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowNodes to delete
     */
    where?: WorkflowNodeWhereInput
  }

  /**
   * WorkflowNode without action
   */
  export type WorkflowNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowNode
     */
    select?: WorkflowNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowNode
     */
    omit?: WorkflowNodeOmit<ExtArgs> | null
  }


  /**
   * Model WorkflowWorkspace
   */

  export type AggregateWorkflowWorkspace = {
    _count: WorkflowWorkspaceCountAggregateOutputType | null
    _min: WorkflowWorkspaceMinAggregateOutputType | null
    _max: WorkflowWorkspaceMaxAggregateOutputType | null
  }

  export type WorkflowWorkspaceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowWorkspaceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    name: string | null
    description: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowWorkspaceCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    name: number
    description: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowWorkspaceMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowWorkspaceMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowWorkspaceCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    name?: true
    description?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowWorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowWorkspace to aggregate.
     */
    where?: WorkflowWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowWorkspaces to fetch.
     */
    orderBy?: WorkflowWorkspaceOrderByWithRelationInput | WorkflowWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowWorkspaces
    **/
    _count?: true | WorkflowWorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowWorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowWorkspaceMaxAggregateInputType
  }

  export type GetWorkflowWorkspaceAggregateType<T extends WorkflowWorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkflowWorkspace[P]>
  }




  export type WorkflowWorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWorkspaceWhereInput
    orderBy?: WorkflowWorkspaceOrderByWithAggregationInput | WorkflowWorkspaceOrderByWithAggregationInput[]
    by: WorkflowWorkspaceScalarFieldEnum[] | WorkflowWorkspaceScalarFieldEnum
    having?: WorkflowWorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowWorkspaceCountAggregateInputType | true
    _min?: WorkflowWorkspaceMinAggregateInputType
    _max?: WorkflowWorkspaceMaxAggregateInputType
  }

  export type WorkflowWorkspaceGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    name: string
    description: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkflowWorkspaceCountAggregateOutputType | null
    _min: WorkflowWorkspaceMinAggregateOutputType | null
    _max: WorkflowWorkspaceMaxAggregateOutputType | null
  }

  type GetWorkflowWorkspaceGroupByPayload<T extends WorkflowWorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowWorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowWorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowWorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowWorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowWorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowWorkspace"]>

  export type WorkflowWorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowWorkspace"]>


  export type WorkflowWorkspaceSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    name?: boolean
    description?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowWorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "name" | "description" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["workflowWorkspace"]>

  export type $WorkflowWorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowWorkspace"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      name: string
      description: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowWorkspace"]>
    composites: {}
  }

  type WorkflowWorkspaceGetPayload<S extends boolean | null | undefined | WorkflowWorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkflowWorkspacePayload, S>

  type WorkflowWorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowWorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowWorkspaceCountAggregateInputType | true
    }

  export interface WorkflowWorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowWorkspace'], meta: { name: 'WorkflowWorkspace' } }
    /**
     * Find zero or one WorkflowWorkspace that matches the filter.
     * @param {WorkflowWorkspaceFindUniqueArgs} args - Arguments to find a WorkflowWorkspace
     * @example
     * // Get one WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowWorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkflowWorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowWorkspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowWorkspaceFindUniqueOrThrowArgs} args - Arguments to find a WorkflowWorkspace
     * @example
     * // Get one WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowWorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowWorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowWorkspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceFindFirstArgs} args - Arguments to find a WorkflowWorkspace
     * @example
     * // Get one WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowWorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkflowWorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowWorkspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceFindFirstOrThrowArgs} args - Arguments to find a WorkflowWorkspace
     * @example
     * // Get one WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowWorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowWorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowWorkspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowWorkspaces
     * const workflowWorkspaces = await prisma.workflowWorkspace.findMany()
     * 
     * // Get first 10 WorkflowWorkspaces
     * const workflowWorkspaces = await prisma.workflowWorkspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWorkspaceWithIdOnly = await prisma.workflowWorkspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowWorkspaceFindManyArgs>(args?: SelectSubset<T, WorkflowWorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowWorkspace.
     * @param {WorkflowWorkspaceCreateArgs} args - Arguments to create a WorkflowWorkspace.
     * @example
     * // Create one WorkflowWorkspace
     * const WorkflowWorkspace = await prisma.workflowWorkspace.create({
     *   data: {
     *     // ... data to create a WorkflowWorkspace
     *   }
     * })
     * 
     */
    create<T extends WorkflowWorkspaceCreateArgs>(args: SelectSubset<T, WorkflowWorkspaceCreateArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowWorkspaces.
     * @param {WorkflowWorkspaceCreateManyArgs} args - Arguments to create many WorkflowWorkspaces.
     * @example
     * // Create many WorkflowWorkspaces
     * const workflowWorkspace = await prisma.workflowWorkspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowWorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkflowWorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowWorkspaces and returns the data saved in the database.
     * @param {WorkflowWorkspaceCreateManyAndReturnArgs} args - Arguments to create many WorkflowWorkspaces.
     * @example
     * // Create many WorkflowWorkspaces
     * const workflowWorkspace = await prisma.workflowWorkspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowWorkspaces and only return the `id`
     * const workflowWorkspaceWithIdOnly = await prisma.workflowWorkspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowWorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowWorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowWorkspace.
     * @param {WorkflowWorkspaceDeleteArgs} args - Arguments to delete one WorkflowWorkspace.
     * @example
     * // Delete one WorkflowWorkspace
     * const WorkflowWorkspace = await prisma.workflowWorkspace.delete({
     *   where: {
     *     // ... filter to delete one WorkflowWorkspace
     *   }
     * })
     * 
     */
    delete<T extends WorkflowWorkspaceDeleteArgs>(args: SelectSubset<T, WorkflowWorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowWorkspace.
     * @param {WorkflowWorkspaceUpdateArgs} args - Arguments to update one WorkflowWorkspace.
     * @example
     * // Update one WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowWorkspaceUpdateArgs>(args: SelectSubset<T, WorkflowWorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowWorkspaces.
     * @param {WorkflowWorkspaceDeleteManyArgs} args - Arguments to filter WorkflowWorkspaces to delete.
     * @example
     * // Delete a few WorkflowWorkspaces
     * const { count } = await prisma.workflowWorkspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowWorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkflowWorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowWorkspaces
     * const workflowWorkspace = await prisma.workflowWorkspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowWorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkflowWorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowWorkspace.
     * @param {WorkflowWorkspaceUpsertArgs} args - Arguments to update or create a WorkflowWorkspace.
     * @example
     * // Update or create a WorkflowWorkspace
     * const workflowWorkspace = await prisma.workflowWorkspace.upsert({
     *   create: {
     *     // ... data to create a WorkflowWorkspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowWorkspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowWorkspaceUpsertArgs>(args: SelectSubset<T, WorkflowWorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkflowWorkspaceClient<$Result.GetResult<Prisma.$WorkflowWorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowWorkspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceCountArgs} args - Arguments to filter WorkflowWorkspaces to count.
     * @example
     * // Count the number of WorkflowWorkspaces
     * const count = await prisma.workflowWorkspace.count({
     *   where: {
     *     // ... the filter for the WorkflowWorkspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkflowWorkspaceCountArgs>(
      args?: Subset<T, WorkflowWorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowWorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowWorkspaceAggregateArgs>(args: Subset<T, WorkflowWorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkflowWorkspaceAggregateType<T>>

    /**
     * Group by WorkflowWorkspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowWorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkflowWorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowWorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowWorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowWorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowWorkspace model
   */
  readonly fields: WorkflowWorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowWorkspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowWorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkflowWorkspace model
   */
  interface WorkflowWorkspaceFieldRefs {
    readonly id: FieldRef<"WorkflowWorkspace", 'String'>
    readonly userId: FieldRef<"WorkflowWorkspace", 'String'>
    readonly organizationId: FieldRef<"WorkflowWorkspace", 'String'>
    readonly name: FieldRef<"WorkflowWorkspace", 'String'>
    readonly description: FieldRef<"WorkflowWorkspace", 'String'>
    readonly isDeleted: FieldRef<"WorkflowWorkspace", 'Boolean'>
    readonly createdAt: FieldRef<"WorkflowWorkspace", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowWorkspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowWorkspace findUnique
   */
  export type WorkflowWorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowWorkspace to fetch.
     */
    where: WorkflowWorkspaceWhereUniqueInput
  }

  /**
   * WorkflowWorkspace findUniqueOrThrow
   */
  export type WorkflowWorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowWorkspace to fetch.
     */
    where: WorkflowWorkspaceWhereUniqueInput
  }

  /**
   * WorkflowWorkspace findFirst
   */
  export type WorkflowWorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowWorkspace to fetch.
     */
    where?: WorkflowWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowWorkspaces to fetch.
     */
    orderBy?: WorkflowWorkspaceOrderByWithRelationInput | WorkflowWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowWorkspaces.
     */
    cursor?: WorkflowWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowWorkspaces.
     */
    distinct?: WorkflowWorkspaceScalarFieldEnum | WorkflowWorkspaceScalarFieldEnum[]
  }

  /**
   * WorkflowWorkspace findFirstOrThrow
   */
  export type WorkflowWorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowWorkspace to fetch.
     */
    where?: WorkflowWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowWorkspaces to fetch.
     */
    orderBy?: WorkflowWorkspaceOrderByWithRelationInput | WorkflowWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowWorkspaces.
     */
    cursor?: WorkflowWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowWorkspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowWorkspaces.
     */
    distinct?: WorkflowWorkspaceScalarFieldEnum | WorkflowWorkspaceScalarFieldEnum[]
  }

  /**
   * WorkflowWorkspace findMany
   */
  export type WorkflowWorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowWorkspaces to fetch.
     */
    where?: WorkflowWorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowWorkspaces to fetch.
     */
    orderBy?: WorkflowWorkspaceOrderByWithRelationInput | WorkflowWorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowWorkspaces.
     */
    cursor?: WorkflowWorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowWorkspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowWorkspaces.
     */
    skip?: number
    distinct?: WorkflowWorkspaceScalarFieldEnum | WorkflowWorkspaceScalarFieldEnum[]
  }

  /**
   * WorkflowWorkspace create
   */
  export type WorkflowWorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkflowWorkspace.
     */
    data: XOR<WorkflowWorkspaceCreateInput, WorkflowWorkspaceUncheckedCreateInput>
  }

  /**
   * WorkflowWorkspace createMany
   */
  export type WorkflowWorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowWorkspaces.
     */
    data: WorkflowWorkspaceCreateManyInput | WorkflowWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowWorkspace createManyAndReturn
   */
  export type WorkflowWorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowWorkspaces.
     */
    data: WorkflowWorkspaceCreateManyInput | WorkflowWorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowWorkspace update
   */
  export type WorkflowWorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkflowWorkspace.
     */
    data: XOR<WorkflowWorkspaceUpdateInput, WorkflowWorkspaceUncheckedUpdateInput>
    /**
     * Choose, which WorkflowWorkspace to update.
     */
    where: WorkflowWorkspaceWhereUniqueInput
  }

  /**
   * WorkflowWorkspace updateMany
   */
  export type WorkflowWorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowWorkspaces.
     */
    data: XOR<WorkflowWorkspaceUpdateManyMutationInput, WorkflowWorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowWorkspaces to update
     */
    where?: WorkflowWorkspaceWhereInput
  }

  /**
   * WorkflowWorkspace upsert
   */
  export type WorkflowWorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkflowWorkspace to update in case it exists.
     */
    where: WorkflowWorkspaceWhereUniqueInput
    /**
     * In case the WorkflowWorkspace found by the `where` argument doesn't exist, create a new WorkflowWorkspace with this data.
     */
    create: XOR<WorkflowWorkspaceCreateInput, WorkflowWorkspaceUncheckedCreateInput>
    /**
     * In case the WorkflowWorkspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowWorkspaceUpdateInput, WorkflowWorkspaceUncheckedUpdateInput>
  }

  /**
   * WorkflowWorkspace delete
   */
  export type WorkflowWorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
    /**
     * Filter which WorkflowWorkspace to delete.
     */
    where: WorkflowWorkspaceWhereUniqueInput
  }

  /**
   * WorkflowWorkspace deleteMany
   */
  export type WorkflowWorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowWorkspaces to delete
     */
    where?: WorkflowWorkspaceWhereInput
  }

  /**
   * WorkflowWorkspace without action
   */
  export type WorkflowWorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowWorkspace
     */
    select?: WorkflowWorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowWorkspace
     */
    omit?: WorkflowWorkspaceOmit<ExtArgs> | null
  }


  /**
   * Model WorkflowStartAction
   */

  export type AggregateWorkflowStartAction = {
    _count: WorkflowStartActionCountAggregateOutputType | null
    _min: WorkflowStartActionMinAggregateOutputType | null
    _max: WorkflowStartActionMaxAggregateOutputType | null
  }

  export type WorkflowStartActionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    actionType: string | null
    parentId: string | null
    setCustomTime: boolean | null
    useSubscriberTimeZone: boolean | null
    subject: string | null
    content: string | null
    condition: string | null
    isStart: boolean | null
    isLast: boolean | null
    isCondition: boolean | null
    isException: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowStartActionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    actionType: string | null
    parentId: string | null
    setCustomTime: boolean | null
    useSubscriberTimeZone: boolean | null
    subject: string | null
    content: string | null
    condition: string | null
    isStart: boolean | null
    isLast: boolean | null
    isCondition: boolean | null
    isException: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowStartActionCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    workflowId: number
    actionType: number
    duration: number
    parentId: number
    setCustomTime: number
    useSubscriberTimeZone: number
    customTime: number
    subject: number
    content: number
    template: number
    attachments: number
    condition: number
    confirmProgress: number
    notificationTo: number
    taskContent: number
    isStart: number
    isLast: number
    isCondition: number
    isException: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowStartActionMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    actionType?: true
    parentId?: true
    setCustomTime?: true
    useSubscriberTimeZone?: true
    subject?: true
    content?: true
    condition?: true
    isStart?: true
    isLast?: true
    isCondition?: true
    isException?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowStartActionMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    actionType?: true
    parentId?: true
    setCustomTime?: true
    useSubscriberTimeZone?: true
    subject?: true
    content?: true
    condition?: true
    isStart?: true
    isLast?: true
    isCondition?: true
    isException?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowStartActionCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    actionType?: true
    duration?: true
    parentId?: true
    setCustomTime?: true
    useSubscriberTimeZone?: true
    customTime?: true
    subject?: true
    content?: true
    template?: true
    attachments?: true
    condition?: true
    confirmProgress?: true
    notificationTo?: true
    taskContent?: true
    isStart?: true
    isLast?: true
    isCondition?: true
    isException?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowStartActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowStartAction to aggregate.
     */
    where?: WorkflowStartActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowStartActions to fetch.
     */
    orderBy?: WorkflowStartActionOrderByWithRelationInput | WorkflowStartActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowStartActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowStartActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowStartActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowStartActions
    **/
    _count?: true | WorkflowStartActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowStartActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowStartActionMaxAggregateInputType
  }

  export type GetWorkflowStartActionAggregateType<T extends WorkflowStartActionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowStartAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowStartAction[P]>
      : GetScalarType<T[P], AggregateWorkflowStartAction[P]>
  }




  export type WorkflowStartActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowStartActionWhereInput
    orderBy?: WorkflowStartActionOrderByWithAggregationInput | WorkflowStartActionOrderByWithAggregationInput[]
    by: WorkflowStartActionScalarFieldEnum[] | WorkflowStartActionScalarFieldEnum
    having?: WorkflowStartActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowStartActionCountAggregateInputType | true
    _min?: WorkflowStartActionMinAggregateInputType
    _max?: WorkflowStartActionMaxAggregateInputType
  }

  export type WorkflowStartActionGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    workflowId: string
    actionType: string | null
    duration: JsonValue | null
    parentId: string | null
    setCustomTime: boolean
    useSubscriberTimeZone: boolean
    customTime: JsonValue | null
    subject: string | null
    content: string | null
    template: JsonValue | null
    attachments: JsonValue | null
    condition: string | null
    confirmProgress: JsonValue | null
    notificationTo: JsonValue | null
    taskContent: JsonValue | null
    isStart: boolean
    isLast: boolean
    isCondition: boolean
    isException: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkflowStartActionCountAggregateOutputType | null
    _min: WorkflowStartActionMinAggregateOutputType | null
    _max: WorkflowStartActionMaxAggregateOutputType | null
  }

  type GetWorkflowStartActionGroupByPayload<T extends WorkflowStartActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowStartActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowStartActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowStartActionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowStartActionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowStartActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    actionType?: boolean
    duration?: boolean
    parentId?: boolean
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: boolean
    subject?: boolean
    content?: boolean
    template?: boolean
    attachments?: boolean
    condition?: boolean
    confirmProgress?: boolean
    notificationTo?: boolean
    taskContent?: boolean
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowStartAction"]>

  export type WorkflowStartActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    actionType?: boolean
    duration?: boolean
    parentId?: boolean
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: boolean
    subject?: boolean
    content?: boolean
    template?: boolean
    attachments?: boolean
    condition?: boolean
    confirmProgress?: boolean
    notificationTo?: boolean
    taskContent?: boolean
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflowStartAction"]>


  export type WorkflowStartActionSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    actionType?: boolean
    duration?: boolean
    parentId?: boolean
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: boolean
    subject?: boolean
    content?: boolean
    template?: boolean
    attachments?: boolean
    condition?: boolean
    confirmProgress?: boolean
    notificationTo?: boolean
    taskContent?: boolean
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowStartActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "workflowId" | "actionType" | "duration" | "parentId" | "setCustomTime" | "useSubscriberTimeZone" | "customTime" | "subject" | "content" | "template" | "attachments" | "condition" | "confirmProgress" | "notificationTo" | "taskContent" | "isStart" | "isLast" | "isCondition" | "isException" | "createdAt" | "updatedAt", ExtArgs["result"]["workflowStartAction"]>

  export type $WorkflowStartActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowStartAction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      workflowId: string
      actionType: string | null
      duration: Prisma.JsonValue | null
      parentId: string | null
      setCustomTime: boolean
      useSubscriberTimeZone: boolean
      customTime: Prisma.JsonValue | null
      subject: string | null
      content: string | null
      template: Prisma.JsonValue | null
      attachments: Prisma.JsonValue | null
      condition: string | null
      confirmProgress: Prisma.JsonValue | null
      notificationTo: Prisma.JsonValue | null
      taskContent: Prisma.JsonValue | null
      isStart: boolean
      isLast: boolean
      isCondition: boolean
      isException: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowStartAction"]>
    composites: {}
  }

  type WorkflowStartActionGetPayload<S extends boolean | null | undefined | WorkflowStartActionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowStartActionPayload, S>

  type WorkflowStartActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowStartActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowStartActionCountAggregateInputType | true
    }

  export interface WorkflowStartActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowStartAction'], meta: { name: 'WorkflowStartAction' } }
    /**
     * Find zero or one WorkflowStartAction that matches the filter.
     * @param {WorkflowStartActionFindUniqueArgs} args - Arguments to find a WorkflowStartAction
     * @example
     * // Get one WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowStartActionFindUniqueArgs>(args: SelectSubset<T, WorkflowStartActionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowStartAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowStartActionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowStartAction
     * @example
     * // Get one WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowStartActionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowStartActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowStartAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionFindFirstArgs} args - Arguments to find a WorkflowStartAction
     * @example
     * // Get one WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowStartActionFindFirstArgs>(args?: SelectSubset<T, WorkflowStartActionFindFirstArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowStartAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionFindFirstOrThrowArgs} args - Arguments to find a WorkflowStartAction
     * @example
     * // Get one WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowStartActionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowStartActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowStartActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowStartActions
     * const workflowStartActions = await prisma.workflowStartAction.findMany()
     * 
     * // Get first 10 WorkflowStartActions
     * const workflowStartActions = await prisma.workflowStartAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowStartActionWithIdOnly = await prisma.workflowStartAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowStartActionFindManyArgs>(args?: SelectSubset<T, WorkflowStartActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowStartAction.
     * @param {WorkflowStartActionCreateArgs} args - Arguments to create a WorkflowStartAction.
     * @example
     * // Create one WorkflowStartAction
     * const WorkflowStartAction = await prisma.workflowStartAction.create({
     *   data: {
     *     // ... data to create a WorkflowStartAction
     *   }
     * })
     * 
     */
    create<T extends WorkflowStartActionCreateArgs>(args: SelectSubset<T, WorkflowStartActionCreateArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowStartActions.
     * @param {WorkflowStartActionCreateManyArgs} args - Arguments to create many WorkflowStartActions.
     * @example
     * // Create many WorkflowStartActions
     * const workflowStartAction = await prisma.workflowStartAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowStartActionCreateManyArgs>(args?: SelectSubset<T, WorkflowStartActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowStartActions and returns the data saved in the database.
     * @param {WorkflowStartActionCreateManyAndReturnArgs} args - Arguments to create many WorkflowStartActions.
     * @example
     * // Create many WorkflowStartActions
     * const workflowStartAction = await prisma.workflowStartAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowStartActions and only return the `id`
     * const workflowStartActionWithIdOnly = await prisma.workflowStartAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowStartActionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowStartActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowStartAction.
     * @param {WorkflowStartActionDeleteArgs} args - Arguments to delete one WorkflowStartAction.
     * @example
     * // Delete one WorkflowStartAction
     * const WorkflowStartAction = await prisma.workflowStartAction.delete({
     *   where: {
     *     // ... filter to delete one WorkflowStartAction
     *   }
     * })
     * 
     */
    delete<T extends WorkflowStartActionDeleteArgs>(args: SelectSubset<T, WorkflowStartActionDeleteArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowStartAction.
     * @param {WorkflowStartActionUpdateArgs} args - Arguments to update one WorkflowStartAction.
     * @example
     * // Update one WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowStartActionUpdateArgs>(args: SelectSubset<T, WorkflowStartActionUpdateArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowStartActions.
     * @param {WorkflowStartActionDeleteManyArgs} args - Arguments to filter WorkflowStartActions to delete.
     * @example
     * // Delete a few WorkflowStartActions
     * const { count } = await prisma.workflowStartAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowStartActionDeleteManyArgs>(args?: SelectSubset<T, WorkflowStartActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowStartActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowStartActions
     * const workflowStartAction = await prisma.workflowStartAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowStartActionUpdateManyArgs>(args: SelectSubset<T, WorkflowStartActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowStartAction.
     * @param {WorkflowStartActionUpsertArgs} args - Arguments to update or create a WorkflowStartAction.
     * @example
     * // Update or create a WorkflowStartAction
     * const workflowStartAction = await prisma.workflowStartAction.upsert({
     *   create: {
     *     // ... data to create a WorkflowStartAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowStartAction we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowStartActionUpsertArgs>(args: SelectSubset<T, WorkflowStartActionUpsertArgs<ExtArgs>>): Prisma__WorkflowStartActionClient<$Result.GetResult<Prisma.$WorkflowStartActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowStartActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionCountArgs} args - Arguments to filter WorkflowStartActions to count.
     * @example
     * // Count the number of WorkflowStartActions
     * const count = await prisma.workflowStartAction.count({
     *   where: {
     *     // ... the filter for the WorkflowStartActions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowStartActionCountArgs>(
      args?: Subset<T, WorkflowStartActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowStartActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowStartAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowStartActionAggregateArgs>(args: Subset<T, WorkflowStartActionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowStartActionAggregateType<T>>

    /**
     * Group by WorkflowStartAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStartActionGroupByArgs} args - Group by arguments.
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
      T extends WorkflowStartActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowStartActionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowStartActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowStartActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowStartActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowStartAction model
   */
  readonly fields: WorkflowStartActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowStartAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowStartActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkflowStartAction model
   */
  interface WorkflowStartActionFieldRefs {
    readonly id: FieldRef<"WorkflowStartAction", 'String'>
    readonly userId: FieldRef<"WorkflowStartAction", 'String'>
    readonly organizationId: FieldRef<"WorkflowStartAction", 'String'>
    readonly workflowId: FieldRef<"WorkflowStartAction", 'String'>
    readonly actionType: FieldRef<"WorkflowStartAction", 'String'>
    readonly duration: FieldRef<"WorkflowStartAction", 'Json'>
    readonly parentId: FieldRef<"WorkflowStartAction", 'String'>
    readonly setCustomTime: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly useSubscriberTimeZone: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly customTime: FieldRef<"WorkflowStartAction", 'Json'>
    readonly subject: FieldRef<"WorkflowStartAction", 'String'>
    readonly content: FieldRef<"WorkflowStartAction", 'String'>
    readonly template: FieldRef<"WorkflowStartAction", 'Json'>
    readonly attachments: FieldRef<"WorkflowStartAction", 'Json'>
    readonly condition: FieldRef<"WorkflowStartAction", 'String'>
    readonly confirmProgress: FieldRef<"WorkflowStartAction", 'Json'>
    readonly notificationTo: FieldRef<"WorkflowStartAction", 'Json'>
    readonly taskContent: FieldRef<"WorkflowStartAction", 'Json'>
    readonly isStart: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly isLast: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly isCondition: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly isException: FieldRef<"WorkflowStartAction", 'Boolean'>
    readonly createdAt: FieldRef<"WorkflowStartAction", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowStartAction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowStartAction findUnique
   */
  export type WorkflowStartActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowStartAction to fetch.
     */
    where: WorkflowStartActionWhereUniqueInput
  }

  /**
   * WorkflowStartAction findUniqueOrThrow
   */
  export type WorkflowStartActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowStartAction to fetch.
     */
    where: WorkflowStartActionWhereUniqueInput
  }

  /**
   * WorkflowStartAction findFirst
   */
  export type WorkflowStartActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowStartAction to fetch.
     */
    where?: WorkflowStartActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowStartActions to fetch.
     */
    orderBy?: WorkflowStartActionOrderByWithRelationInput | WorkflowStartActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowStartActions.
     */
    cursor?: WorkflowStartActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowStartActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowStartActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowStartActions.
     */
    distinct?: WorkflowStartActionScalarFieldEnum | WorkflowStartActionScalarFieldEnum[]
  }

  /**
   * WorkflowStartAction findFirstOrThrow
   */
  export type WorkflowStartActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowStartAction to fetch.
     */
    where?: WorkflowStartActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowStartActions to fetch.
     */
    orderBy?: WorkflowStartActionOrderByWithRelationInput | WorkflowStartActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowStartActions.
     */
    cursor?: WorkflowStartActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowStartActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowStartActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowStartActions.
     */
    distinct?: WorkflowStartActionScalarFieldEnum | WorkflowStartActionScalarFieldEnum[]
  }

  /**
   * WorkflowStartAction findMany
   */
  export type WorkflowStartActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowStartActions to fetch.
     */
    where?: WorkflowStartActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowStartActions to fetch.
     */
    orderBy?: WorkflowStartActionOrderByWithRelationInput | WorkflowStartActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowStartActions.
     */
    cursor?: WorkflowStartActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowStartActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowStartActions.
     */
    skip?: number
    distinct?: WorkflowStartActionScalarFieldEnum | WorkflowStartActionScalarFieldEnum[]
  }

  /**
   * WorkflowStartAction create
   */
  export type WorkflowStartActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkflowStartAction.
     */
    data: XOR<WorkflowStartActionCreateInput, WorkflowStartActionUncheckedCreateInput>
  }

  /**
   * WorkflowStartAction createMany
   */
  export type WorkflowStartActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowStartActions.
     */
    data: WorkflowStartActionCreateManyInput | WorkflowStartActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowStartAction createManyAndReturn
   */
  export type WorkflowStartActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowStartActions.
     */
    data: WorkflowStartActionCreateManyInput | WorkflowStartActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowStartAction update
   */
  export type WorkflowStartActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkflowStartAction.
     */
    data: XOR<WorkflowStartActionUpdateInput, WorkflowStartActionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowStartAction to update.
     */
    where: WorkflowStartActionWhereUniqueInput
  }

  /**
   * WorkflowStartAction updateMany
   */
  export type WorkflowStartActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowStartActions.
     */
    data: XOR<WorkflowStartActionUpdateManyMutationInput, WorkflowStartActionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowStartActions to update
     */
    where?: WorkflowStartActionWhereInput
  }

  /**
   * WorkflowStartAction upsert
   */
  export type WorkflowStartActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkflowStartAction to update in case it exists.
     */
    where: WorkflowStartActionWhereUniqueInput
    /**
     * In case the WorkflowStartAction found by the `where` argument doesn't exist, create a new WorkflowStartAction with this data.
     */
    create: XOR<WorkflowStartActionCreateInput, WorkflowStartActionUncheckedCreateInput>
    /**
     * In case the WorkflowStartAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowStartActionUpdateInput, WorkflowStartActionUncheckedUpdateInput>
  }

  /**
   * WorkflowStartAction delete
   */
  export type WorkflowStartActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
    /**
     * Filter which WorkflowStartAction to delete.
     */
    where: WorkflowStartActionWhereUniqueInput
  }

  /**
   * WorkflowStartAction deleteMany
   */
  export type WorkflowStartActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowStartActions to delete
     */
    where?: WorkflowStartActionWhereInput
  }

  /**
   * WorkflowStartAction without action
   */
  export type WorkflowStartActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStartAction
     */
    select?: WorkflowStartActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStartAction
     */
    omit?: WorkflowStartActionOmit<ExtArgs> | null
  }


  /**
   * Model WorkflowActivityLog
   */

  export type AggregateWorkflowActivityLog = {
    _count: WorkflowActivityLogCountAggregateOutputType | null
    _min: WorkflowActivityLogMinAggregateOutputType | null
    _max: WorkflowActivityLogMaxAggregateOutputType | null
  }

  export type WorkflowActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    contactId: string | null
    nodeId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type WorkflowActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    contactId: string | null
    nodeId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type WorkflowActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    workflowId: number
    contactId: number
    nodeId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type WorkflowActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    nodeId?: true
    action?: true
    createdAt?: true
  }

  export type WorkflowActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    nodeId?: true
    action?: true
    createdAt?: true
  }

  export type WorkflowActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    nodeId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowActivityLog to aggregate.
     */
    where?: WorkflowActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowActivityLogs to fetch.
     */
    orderBy?: WorkflowActivityLogOrderByWithRelationInput | WorkflowActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowActivityLogs
    **/
    _count?: true | WorkflowActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowActivityLogMaxAggregateInputType
  }

  export type GetWorkflowActivityLogAggregateType<T extends WorkflowActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowActivityLog[P]>
      : GetScalarType<T[P], AggregateWorkflowActivityLog[P]>
  }




  export type WorkflowActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowActivityLogWhereInput
    orderBy?: WorkflowActivityLogOrderByWithAggregationInput | WorkflowActivityLogOrderByWithAggregationInput[]
    by: WorkflowActivityLogScalarFieldEnum[] | WorkflowActivityLogScalarFieldEnum
    having?: WorkflowActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowActivityLogCountAggregateInputType | true
    _min?: WorkflowActivityLogMinAggregateInputType
    _max?: WorkflowActivityLogMaxAggregateInputType
  }

  export type WorkflowActivityLogGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    workflowId: string
    contactId: string | null
    nodeId: string | null
    action: string | null
    details: JsonValue | null
    createdAt: Date
    _count: WorkflowActivityLogCountAggregateOutputType | null
    _min: WorkflowActivityLogMinAggregateOutputType | null
    _max: WorkflowActivityLogMaxAggregateOutputType | null
  }

  type GetWorkflowActivityLogGroupByPayload<T extends WorkflowActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    nodeId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workflowActivityLog"]>

  export type WorkflowActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    nodeId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workflowActivityLog"]>


  export type WorkflowActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    nodeId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type WorkflowActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "workflowId" | "contactId" | "nodeId" | "action" | "details" | "createdAt", ExtArgs["result"]["workflowActivityLog"]>

  export type $WorkflowActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      workflowId: string
      contactId: string | null
      nodeId: string | null
      action: string | null
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["workflowActivityLog"]>
    composites: {}
  }

  type WorkflowActivityLogGetPayload<S extends boolean | null | undefined | WorkflowActivityLogDefaultArgs> = $Result.GetResult<Prisma.$WorkflowActivityLogPayload, S>

  type WorkflowActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowActivityLogCountAggregateInputType | true
    }

  export interface WorkflowActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowActivityLog'], meta: { name: 'WorkflowActivityLog' } }
    /**
     * Find zero or one WorkflowActivityLog that matches the filter.
     * @param {WorkflowActivityLogFindUniqueArgs} args - Arguments to find a WorkflowActivityLog
     * @example
     * // Get one WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowActivityLogFindUniqueArgs>(args: SelectSubset<T, WorkflowActivityLogFindUniqueArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowActivityLogFindUniqueOrThrowArgs} args - Arguments to find a WorkflowActivityLog
     * @example
     * // Get one WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogFindFirstArgs} args - Arguments to find a WorkflowActivityLog
     * @example
     * // Get one WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowActivityLogFindFirstArgs>(args?: SelectSubset<T, WorkflowActivityLogFindFirstArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogFindFirstOrThrowArgs} args - Arguments to find a WorkflowActivityLog
     * @example
     * // Get one WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowActivityLogs
     * const workflowActivityLogs = await prisma.workflowActivityLog.findMany()
     * 
     * // Get first 10 WorkflowActivityLogs
     * const workflowActivityLogs = await prisma.workflowActivityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowActivityLogWithIdOnly = await prisma.workflowActivityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowActivityLogFindManyArgs>(args?: SelectSubset<T, WorkflowActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowActivityLog.
     * @param {WorkflowActivityLogCreateArgs} args - Arguments to create a WorkflowActivityLog.
     * @example
     * // Create one WorkflowActivityLog
     * const WorkflowActivityLog = await prisma.workflowActivityLog.create({
     *   data: {
     *     // ... data to create a WorkflowActivityLog
     *   }
     * })
     * 
     */
    create<T extends WorkflowActivityLogCreateArgs>(args: SelectSubset<T, WorkflowActivityLogCreateArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowActivityLogs.
     * @param {WorkflowActivityLogCreateManyArgs} args - Arguments to create many WorkflowActivityLogs.
     * @example
     * // Create many WorkflowActivityLogs
     * const workflowActivityLog = await prisma.workflowActivityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowActivityLogCreateManyArgs>(args?: SelectSubset<T, WorkflowActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowActivityLogs and returns the data saved in the database.
     * @param {WorkflowActivityLogCreateManyAndReturnArgs} args - Arguments to create many WorkflowActivityLogs.
     * @example
     * // Create many WorkflowActivityLogs
     * const workflowActivityLog = await prisma.workflowActivityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowActivityLogs and only return the `id`
     * const workflowActivityLogWithIdOnly = await prisma.workflowActivityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowActivityLog.
     * @param {WorkflowActivityLogDeleteArgs} args - Arguments to delete one WorkflowActivityLog.
     * @example
     * // Delete one WorkflowActivityLog
     * const WorkflowActivityLog = await prisma.workflowActivityLog.delete({
     *   where: {
     *     // ... filter to delete one WorkflowActivityLog
     *   }
     * })
     * 
     */
    delete<T extends WorkflowActivityLogDeleteArgs>(args: SelectSubset<T, WorkflowActivityLogDeleteArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowActivityLog.
     * @param {WorkflowActivityLogUpdateArgs} args - Arguments to update one WorkflowActivityLog.
     * @example
     * // Update one WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowActivityLogUpdateArgs>(args: SelectSubset<T, WorkflowActivityLogUpdateArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowActivityLogs.
     * @param {WorkflowActivityLogDeleteManyArgs} args - Arguments to filter WorkflowActivityLogs to delete.
     * @example
     * // Delete a few WorkflowActivityLogs
     * const { count } = await prisma.workflowActivityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowActivityLogDeleteManyArgs>(args?: SelectSubset<T, WorkflowActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowActivityLogs
     * const workflowActivityLog = await prisma.workflowActivityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowActivityLogUpdateManyArgs>(args: SelectSubset<T, WorkflowActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowActivityLog.
     * @param {WorkflowActivityLogUpsertArgs} args - Arguments to update or create a WorkflowActivityLog.
     * @example
     * // Update or create a WorkflowActivityLog
     * const workflowActivityLog = await prisma.workflowActivityLog.upsert({
     *   create: {
     *     // ... data to create a WorkflowActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowActivityLogUpsertArgs>(args: SelectSubset<T, WorkflowActivityLogUpsertArgs<ExtArgs>>): Prisma__WorkflowActivityLogClient<$Result.GetResult<Prisma.$WorkflowActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogCountArgs} args - Arguments to filter WorkflowActivityLogs to count.
     * @example
     * // Count the number of WorkflowActivityLogs
     * const count = await prisma.workflowActivityLog.count({
     *   where: {
     *     // ... the filter for the WorkflowActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkflowActivityLogCountArgs>(
      args?: Subset<T, WorkflowActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowActivityLogAggregateArgs>(args: Subset<T, WorkflowActivityLogAggregateArgs>): Prisma.PrismaPromise<GetWorkflowActivityLogAggregateType<T>>

    /**
     * Group by WorkflowActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowActivityLogGroupByArgs} args - Group by arguments.
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
      T extends WorkflowActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowActivityLog model
   */
  readonly fields: WorkflowActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkflowActivityLog model
   */
  interface WorkflowActivityLogFieldRefs {
    readonly id: FieldRef<"WorkflowActivityLog", 'String'>
    readonly userId: FieldRef<"WorkflowActivityLog", 'String'>
    readonly organizationId: FieldRef<"WorkflowActivityLog", 'String'>
    readonly workflowId: FieldRef<"WorkflowActivityLog", 'String'>
    readonly contactId: FieldRef<"WorkflowActivityLog", 'String'>
    readonly nodeId: FieldRef<"WorkflowActivityLog", 'String'>
    readonly action: FieldRef<"WorkflowActivityLog", 'String'>
    readonly details: FieldRef<"WorkflowActivityLog", 'Json'>
    readonly createdAt: FieldRef<"WorkflowActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowActivityLog findUnique
   */
  export type WorkflowActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowActivityLog to fetch.
     */
    where: WorkflowActivityLogWhereUniqueInput
  }

  /**
   * WorkflowActivityLog findUniqueOrThrow
   */
  export type WorkflowActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowActivityLog to fetch.
     */
    where: WorkflowActivityLogWhereUniqueInput
  }

  /**
   * WorkflowActivityLog findFirst
   */
  export type WorkflowActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowActivityLog to fetch.
     */
    where?: WorkflowActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowActivityLogs to fetch.
     */
    orderBy?: WorkflowActivityLogOrderByWithRelationInput | WorkflowActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowActivityLogs.
     */
    cursor?: WorkflowActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowActivityLogs.
     */
    distinct?: WorkflowActivityLogScalarFieldEnum | WorkflowActivityLogScalarFieldEnum[]
  }

  /**
   * WorkflowActivityLog findFirstOrThrow
   */
  export type WorkflowActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowActivityLog to fetch.
     */
    where?: WorkflowActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowActivityLogs to fetch.
     */
    orderBy?: WorkflowActivityLogOrderByWithRelationInput | WorkflowActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowActivityLogs.
     */
    cursor?: WorkflowActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowActivityLogs.
     */
    distinct?: WorkflowActivityLogScalarFieldEnum | WorkflowActivityLogScalarFieldEnum[]
  }

  /**
   * WorkflowActivityLog findMany
   */
  export type WorkflowActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowActivityLogs to fetch.
     */
    where?: WorkflowActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowActivityLogs to fetch.
     */
    orderBy?: WorkflowActivityLogOrderByWithRelationInput | WorkflowActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowActivityLogs.
     */
    cursor?: WorkflowActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowActivityLogs.
     */
    skip?: number
    distinct?: WorkflowActivityLogScalarFieldEnum | WorkflowActivityLogScalarFieldEnum[]
  }

  /**
   * WorkflowActivityLog create
   */
  export type WorkflowActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkflowActivityLog.
     */
    data: XOR<WorkflowActivityLogCreateInput, WorkflowActivityLogUncheckedCreateInput>
  }

  /**
   * WorkflowActivityLog createMany
   */
  export type WorkflowActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowActivityLogs.
     */
    data: WorkflowActivityLogCreateManyInput | WorkflowActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowActivityLog createManyAndReturn
   */
  export type WorkflowActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowActivityLogs.
     */
    data: WorkflowActivityLogCreateManyInput | WorkflowActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowActivityLog update
   */
  export type WorkflowActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkflowActivityLog.
     */
    data: XOR<WorkflowActivityLogUpdateInput, WorkflowActivityLogUncheckedUpdateInput>
    /**
     * Choose, which WorkflowActivityLog to update.
     */
    where: WorkflowActivityLogWhereUniqueInput
  }

  /**
   * WorkflowActivityLog updateMany
   */
  export type WorkflowActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowActivityLogs.
     */
    data: XOR<WorkflowActivityLogUpdateManyMutationInput, WorkflowActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowActivityLogs to update
     */
    where?: WorkflowActivityLogWhereInput
  }

  /**
   * WorkflowActivityLog upsert
   */
  export type WorkflowActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkflowActivityLog to update in case it exists.
     */
    where: WorkflowActivityLogWhereUniqueInput
    /**
     * In case the WorkflowActivityLog found by the `where` argument doesn't exist, create a new WorkflowActivityLog with this data.
     */
    create: XOR<WorkflowActivityLogCreateInput, WorkflowActivityLogUncheckedCreateInput>
    /**
     * In case the WorkflowActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowActivityLogUpdateInput, WorkflowActivityLogUncheckedUpdateInput>
  }

  /**
   * WorkflowActivityLog delete
   */
  export type WorkflowActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
    /**
     * Filter which WorkflowActivityLog to delete.
     */
    where: WorkflowActivityLogWhereUniqueInput
  }

  /**
   * WorkflowActivityLog deleteMany
   */
  export type WorkflowActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowActivityLogs to delete
     */
    where?: WorkflowActivityLogWhereInput
  }

  /**
   * WorkflowActivityLog without action
   */
  export type WorkflowActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowActivityLog
     */
    select?: WorkflowActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowActivityLog
     */
    omit?: WorkflowActivityLogOmit<ExtArgs> | null
  }


  /**
   * Model WorkflowExecutionHistory
   */

  export type AggregateWorkflowExecutionHistory = {
    _count: WorkflowExecutionHistoryCountAggregateOutputType | null
    _min: WorkflowExecutionHistoryMinAggregateOutputType | null
    _max: WorkflowExecutionHistoryMaxAggregateOutputType | null
  }

  export type WorkflowExecutionHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    contactId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type WorkflowExecutionHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    workflowId: string | null
    contactId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type WorkflowExecutionHistoryCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    workflowId: number
    contactId: number
    status: number
    startedAt: number
    completedAt: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type WorkflowExecutionHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
  }

  export type WorkflowExecutionHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
  }

  export type WorkflowExecutionHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    workflowId?: true
    contactId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowExecutionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecutionHistory to aggregate.
     */
    where?: WorkflowExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutionHistories to fetch.
     */
    orderBy?: WorkflowExecutionHistoryOrderByWithRelationInput | WorkflowExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowExecutionHistories
    **/
    _count?: true | WorkflowExecutionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowExecutionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowExecutionHistoryMaxAggregateInputType
  }

  export type GetWorkflowExecutionHistoryAggregateType<T extends WorkflowExecutionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowExecutionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowExecutionHistory[P]>
      : GetScalarType<T[P], AggregateWorkflowExecutionHistory[P]>
  }




  export type WorkflowExecutionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionHistoryWhereInput
    orderBy?: WorkflowExecutionHistoryOrderByWithAggregationInput | WorkflowExecutionHistoryOrderByWithAggregationInput[]
    by: WorkflowExecutionHistoryScalarFieldEnum[] | WorkflowExecutionHistoryScalarFieldEnum
    having?: WorkflowExecutionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowExecutionHistoryCountAggregateInputType | true
    _min?: WorkflowExecutionHistoryMinAggregateInputType
    _max?: WorkflowExecutionHistoryMaxAggregateInputType
  }

  export type WorkflowExecutionHistoryGroupByOutputType = {
    id: string
    userId: string
    organizationId: string | null
    workflowId: string
    contactId: string | null
    status: string | null
    startedAt: Date
    completedAt: Date | null
    errorMessage: string | null
    createdAt: Date
    _count: WorkflowExecutionHistoryCountAggregateOutputType | null
    _min: WorkflowExecutionHistoryMinAggregateOutputType | null
    _max: WorkflowExecutionHistoryMaxAggregateOutputType | null
  }

  type GetWorkflowExecutionHistoryGroupByPayload<T extends WorkflowExecutionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowExecutionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowExecutionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowExecutionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowExecutionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowExecutionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workflowExecutionHistory"]>

  export type WorkflowExecutionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workflowExecutionHistory"]>


  export type WorkflowExecutionHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    workflowId?: boolean
    contactId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type WorkflowExecutionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "workflowId" | "contactId" | "status" | "startedAt" | "completedAt" | "errorMessage" | "createdAt", ExtArgs["result"]["workflowExecutionHistory"]>

  export type $WorkflowExecutionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowExecutionHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string | null
      workflowId: string
      contactId: string | null
      status: string | null
      startedAt: Date
      completedAt: Date | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["workflowExecutionHistory"]>
    composites: {}
  }

  type WorkflowExecutionHistoryGetPayload<S extends boolean | null | undefined | WorkflowExecutionHistoryDefaultArgs> = $Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload, S>

  type WorkflowExecutionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowExecutionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowExecutionHistoryCountAggregateInputType | true
    }

  export interface WorkflowExecutionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowExecutionHistory'], meta: { name: 'WorkflowExecutionHistory' } }
    /**
     * Find zero or one WorkflowExecutionHistory that matches the filter.
     * @param {WorkflowExecutionHistoryFindUniqueArgs} args - Arguments to find a WorkflowExecutionHistory
     * @example
     * // Get one WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowExecutionHistoryFindUniqueArgs>(args: SelectSubset<T, WorkflowExecutionHistoryFindUniqueArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowExecutionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowExecutionHistoryFindUniqueOrThrowArgs} args - Arguments to find a WorkflowExecutionHistory
     * @example
     * // Get one WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowExecutionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExecutionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryFindFirstArgs} args - Arguments to find a WorkflowExecutionHistory
     * @example
     * // Get one WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowExecutionHistoryFindFirstArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryFindFirstArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowExecutionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryFindFirstOrThrowArgs} args - Arguments to find a WorkflowExecutionHistory
     * @example
     * // Get one WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowExecutionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowExecutionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowExecutionHistories
     * const workflowExecutionHistories = await prisma.workflowExecutionHistory.findMany()
     * 
     * // Get first 10 WorkflowExecutionHistories
     * const workflowExecutionHistories = await prisma.workflowExecutionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowExecutionHistoryWithIdOnly = await prisma.workflowExecutionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowExecutionHistoryFindManyArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowExecutionHistory.
     * @param {WorkflowExecutionHistoryCreateArgs} args - Arguments to create a WorkflowExecutionHistory.
     * @example
     * // Create one WorkflowExecutionHistory
     * const WorkflowExecutionHistory = await prisma.workflowExecutionHistory.create({
     *   data: {
     *     // ... data to create a WorkflowExecutionHistory
     *   }
     * })
     * 
     */
    create<T extends WorkflowExecutionHistoryCreateArgs>(args: SelectSubset<T, WorkflowExecutionHistoryCreateArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowExecutionHistories.
     * @param {WorkflowExecutionHistoryCreateManyArgs} args - Arguments to create many WorkflowExecutionHistories.
     * @example
     * // Create many WorkflowExecutionHistories
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowExecutionHistoryCreateManyArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowExecutionHistories and returns the data saved in the database.
     * @param {WorkflowExecutionHistoryCreateManyAndReturnArgs} args - Arguments to create many WorkflowExecutionHistories.
     * @example
     * // Create many WorkflowExecutionHistories
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowExecutionHistories and only return the `id`
     * const workflowExecutionHistoryWithIdOnly = await prisma.workflowExecutionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowExecutionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowExecutionHistory.
     * @param {WorkflowExecutionHistoryDeleteArgs} args - Arguments to delete one WorkflowExecutionHistory.
     * @example
     * // Delete one WorkflowExecutionHistory
     * const WorkflowExecutionHistory = await prisma.workflowExecutionHistory.delete({
     *   where: {
     *     // ... filter to delete one WorkflowExecutionHistory
     *   }
     * })
     * 
     */
    delete<T extends WorkflowExecutionHistoryDeleteArgs>(args: SelectSubset<T, WorkflowExecutionHistoryDeleteArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowExecutionHistory.
     * @param {WorkflowExecutionHistoryUpdateArgs} args - Arguments to update one WorkflowExecutionHistory.
     * @example
     * // Update one WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowExecutionHistoryUpdateArgs>(args: SelectSubset<T, WorkflowExecutionHistoryUpdateArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowExecutionHistories.
     * @param {WorkflowExecutionHistoryDeleteManyArgs} args - Arguments to filter WorkflowExecutionHistories to delete.
     * @example
     * // Delete a few WorkflowExecutionHistories
     * const { count } = await prisma.workflowExecutionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowExecutionHistoryDeleteManyArgs>(args?: SelectSubset<T, WorkflowExecutionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowExecutionHistories
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowExecutionHistoryUpdateManyArgs>(args: SelectSubset<T, WorkflowExecutionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowExecutionHistory.
     * @param {WorkflowExecutionHistoryUpsertArgs} args - Arguments to update or create a WorkflowExecutionHistory.
     * @example
     * // Update or create a WorkflowExecutionHistory
     * const workflowExecutionHistory = await prisma.workflowExecutionHistory.upsert({
     *   create: {
     *     // ... data to create a WorkflowExecutionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowExecutionHistory we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowExecutionHistoryUpsertArgs>(args: SelectSubset<T, WorkflowExecutionHistoryUpsertArgs<ExtArgs>>): Prisma__WorkflowExecutionHistoryClient<$Result.GetResult<Prisma.$WorkflowExecutionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryCountArgs} args - Arguments to filter WorkflowExecutionHistories to count.
     * @example
     * // Count the number of WorkflowExecutionHistories
     * const count = await prisma.workflowExecutionHistory.count({
     *   where: {
     *     // ... the filter for the WorkflowExecutionHistories we want to count
     *   }
     * })
    **/
    count<T extends WorkflowExecutionHistoryCountArgs>(
      args?: Subset<T, WorkflowExecutionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowExecutionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowExecutionHistoryAggregateArgs>(args: Subset<T, WorkflowExecutionHistoryAggregateArgs>): Prisma.PrismaPromise<GetWorkflowExecutionHistoryAggregateType<T>>

    /**
     * Group by WorkflowExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionHistoryGroupByArgs} args - Group by arguments.
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
      T extends WorkflowExecutionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowExecutionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowExecutionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowExecutionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowExecutionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowExecutionHistory model
   */
  readonly fields: WorkflowExecutionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowExecutionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowExecutionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WorkflowExecutionHistory model
   */
  interface WorkflowExecutionHistoryFieldRefs {
    readonly id: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly userId: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly organizationId: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly workflowId: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly contactId: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly status: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly startedAt: FieldRef<"WorkflowExecutionHistory", 'DateTime'>
    readonly completedAt: FieldRef<"WorkflowExecutionHistory", 'DateTime'>
    readonly errorMessage: FieldRef<"WorkflowExecutionHistory", 'String'>
    readonly createdAt: FieldRef<"WorkflowExecutionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowExecutionHistory findUnique
   */
  export type WorkflowExecutionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutionHistory to fetch.
     */
    where: WorkflowExecutionHistoryWhereUniqueInput
  }

  /**
   * WorkflowExecutionHistory findUniqueOrThrow
   */
  export type WorkflowExecutionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutionHistory to fetch.
     */
    where: WorkflowExecutionHistoryWhereUniqueInput
  }

  /**
   * WorkflowExecutionHistory findFirst
   */
  export type WorkflowExecutionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutionHistory to fetch.
     */
    where?: WorkflowExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutionHistories to fetch.
     */
    orderBy?: WorkflowExecutionHistoryOrderByWithRelationInput | WorkflowExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutionHistories.
     */
    cursor?: WorkflowExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutionHistories.
     */
    distinct?: WorkflowExecutionHistoryScalarFieldEnum | WorkflowExecutionHistoryScalarFieldEnum[]
  }

  /**
   * WorkflowExecutionHistory findFirstOrThrow
   */
  export type WorkflowExecutionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutionHistory to fetch.
     */
    where?: WorkflowExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutionHistories to fetch.
     */
    orderBy?: WorkflowExecutionHistoryOrderByWithRelationInput | WorkflowExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutionHistories.
     */
    cursor?: WorkflowExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutionHistories.
     */
    distinct?: WorkflowExecutionHistoryScalarFieldEnum | WorkflowExecutionHistoryScalarFieldEnum[]
  }

  /**
   * WorkflowExecutionHistory findMany
   */
  export type WorkflowExecutionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutionHistories to fetch.
     */
    where?: WorkflowExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutionHistories to fetch.
     */
    orderBy?: WorkflowExecutionHistoryOrderByWithRelationInput | WorkflowExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowExecutionHistories.
     */
    cursor?: WorkflowExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutionHistories.
     */
    skip?: number
    distinct?: WorkflowExecutionHistoryScalarFieldEnum | WorkflowExecutionHistoryScalarFieldEnum[]
  }

  /**
   * WorkflowExecutionHistory create
   */
  export type WorkflowExecutionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a WorkflowExecutionHistory.
     */
    data: XOR<WorkflowExecutionHistoryCreateInput, WorkflowExecutionHistoryUncheckedCreateInput>
  }

  /**
   * WorkflowExecutionHistory createMany
   */
  export type WorkflowExecutionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowExecutionHistories.
     */
    data: WorkflowExecutionHistoryCreateManyInput | WorkflowExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowExecutionHistory createManyAndReturn
   */
  export type WorkflowExecutionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowExecutionHistories.
     */
    data: WorkflowExecutionHistoryCreateManyInput | WorkflowExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowExecutionHistory update
   */
  export type WorkflowExecutionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a WorkflowExecutionHistory.
     */
    data: XOR<WorkflowExecutionHistoryUpdateInput, WorkflowExecutionHistoryUncheckedUpdateInput>
    /**
     * Choose, which WorkflowExecutionHistory to update.
     */
    where: WorkflowExecutionHistoryWhereUniqueInput
  }

  /**
   * WorkflowExecutionHistory updateMany
   */
  export type WorkflowExecutionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowExecutionHistories.
     */
    data: XOR<WorkflowExecutionHistoryUpdateManyMutationInput, WorkflowExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExecutionHistories to update
     */
    where?: WorkflowExecutionHistoryWhereInput
  }

  /**
   * WorkflowExecutionHistory upsert
   */
  export type WorkflowExecutionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the WorkflowExecutionHistory to update in case it exists.
     */
    where: WorkflowExecutionHistoryWhereUniqueInput
    /**
     * In case the WorkflowExecutionHistory found by the `where` argument doesn't exist, create a new WorkflowExecutionHistory with this data.
     */
    create: XOR<WorkflowExecutionHistoryCreateInput, WorkflowExecutionHistoryUncheckedCreateInput>
    /**
     * In case the WorkflowExecutionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowExecutionHistoryUpdateInput, WorkflowExecutionHistoryUncheckedUpdateInput>
  }

  /**
   * WorkflowExecutionHistory delete
   */
  export type WorkflowExecutionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
    /**
     * Filter which WorkflowExecutionHistory to delete.
     */
    where: WorkflowExecutionHistoryWhereUniqueInput
  }

  /**
   * WorkflowExecutionHistory deleteMany
   */
  export type WorkflowExecutionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecutionHistories to delete
     */
    where?: WorkflowExecutionHistoryWhereInput
  }

  /**
   * WorkflowExecutionHistory without action
   */
  export type WorkflowExecutionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionHistory
     */
    select?: WorkflowExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowExecutionHistory
     */
    omit?: WorkflowExecutionHistoryOmit<ExtArgs> | null
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


  export const AutomationScalarFieldEnum: {
    id: 'id',
    automationName: 'automationName',
    contactInfo: 'contactInfo',
    activationUpon: 'activationUpon',
    activateTime: 'activateTime',
    userEmail: 'userEmail',
    userPhone: 'userPhone',
    userName: 'userName',
    userId: 'userId',
    organizationId: 'organizationId',
    isActive: 'isActive',
    isDelete: 'isDelete',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    workspaceId: 'workspaceId',
    title: 'title',
    description: 'description',
    status: 'status',
    verticalFlow: 'verticalFlow',
    creatorType: 'creatorType',
    isForSystemNotification: 'isForSystemNotification',
    isForUserNotification: 'isForUserNotification',
    isForClientNotification: 'isForClientNotification',
    isCopyFromSystemNotification: 'isCopyFromSystemNotification',
    parentWorkflowId: 'parentWorkflowId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowNodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    workflowId: 'workflowId',
    key: 'key',
    data: 'data',
    type: 'type',
    source: 'source',
    height: 'height',
    width: 'width',
    position: 'position',
    positionAbsolute: 'positionAbsolute',
    sourcePosition: 'sourcePosition',
    targetPosition: 'targetPosition',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowNodeScalarFieldEnum = (typeof WorkflowNodeScalarFieldEnum)[keyof typeof WorkflowNodeScalarFieldEnum]


  export const WorkflowWorkspaceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    name: 'name',
    description: 'description',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowWorkspaceScalarFieldEnum = (typeof WorkflowWorkspaceScalarFieldEnum)[keyof typeof WorkflowWorkspaceScalarFieldEnum]


  export const WorkflowStartActionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    workflowId: 'workflowId',
    actionType: 'actionType',
    duration: 'duration',
    parentId: 'parentId',
    setCustomTime: 'setCustomTime',
    useSubscriberTimeZone: 'useSubscriberTimeZone',
    customTime: 'customTime',
    subject: 'subject',
    content: 'content',
    template: 'template',
    attachments: 'attachments',
    condition: 'condition',
    confirmProgress: 'confirmProgress',
    notificationTo: 'notificationTo',
    taskContent: 'taskContent',
    isStart: 'isStart',
    isLast: 'isLast',
    isCondition: 'isCondition',
    isException: 'isException',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowStartActionScalarFieldEnum = (typeof WorkflowStartActionScalarFieldEnum)[keyof typeof WorkflowStartActionScalarFieldEnum]


  export const WorkflowActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    workflowId: 'workflowId',
    contactId: 'contactId',
    nodeId: 'nodeId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type WorkflowActivityLogScalarFieldEnum = (typeof WorkflowActivityLogScalarFieldEnum)[keyof typeof WorkflowActivityLogScalarFieldEnum]


  export const WorkflowExecutionHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    workflowId: 'workflowId',
    contactId: 'contactId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type WorkflowExecutionHistoryScalarFieldEnum = (typeof WorkflowExecutionHistoryScalarFieldEnum)[keyof typeof WorkflowExecutionHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export type AutomationWhereInput = {
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    id?: UuidFilter<"Automation"> | string
    automationName?: StringNullableFilter<"Automation"> | string | null
    contactInfo?: JsonNullableFilter<"Automation">
    activationUpon?: JsonNullableFilter<"Automation">
    activateTime?: JsonNullableFilter<"Automation">
    userEmail?: StringNullableFilter<"Automation"> | string | null
    userPhone?: StringNullableFilter<"Automation"> | string | null
    userName?: StringNullableFilter<"Automation"> | string | null
    userId?: UuidNullableFilter<"Automation"> | string | null
    organizationId?: UuidNullableFilter<"Automation"> | string | null
    isActive?: BoolFilter<"Automation"> | boolean
    isDelete?: BoolFilter<"Automation"> | boolean
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    updatedAt?: DateTimeFilter<"Automation"> | Date | string
  }

  export type AutomationOrderByWithRelationInput = {
    id?: SortOrder
    automationName?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    activationUpon?: SortOrderInput | SortOrder
    activateTime?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    automationName?: StringNullableFilter<"Automation"> | string | null
    contactInfo?: JsonNullableFilter<"Automation">
    activationUpon?: JsonNullableFilter<"Automation">
    activateTime?: JsonNullableFilter<"Automation">
    userEmail?: StringNullableFilter<"Automation"> | string | null
    userPhone?: StringNullableFilter<"Automation"> | string | null
    userName?: StringNullableFilter<"Automation"> | string | null
    userId?: UuidNullableFilter<"Automation"> | string | null
    organizationId?: UuidNullableFilter<"Automation"> | string | null
    isActive?: BoolFilter<"Automation"> | boolean
    isDelete?: BoolFilter<"Automation"> | boolean
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    updatedAt?: DateTimeFilter<"Automation"> | Date | string
  }, "id">

  export type AutomationOrderByWithAggregationInput = {
    id?: SortOrder
    automationName?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    activationUpon?: SortOrderInput | SortOrder
    activateTime?: SortOrderInput | SortOrder
    userEmail?: SortOrderInput | SortOrder
    userPhone?: SortOrderInput | SortOrder
    userName?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutomationCountOrderByAggregateInput
    _max?: AutomationMaxOrderByAggregateInput
    _min?: AutomationMinOrderByAggregateInput
  }

  export type AutomationScalarWhereWithAggregatesInput = {
    AND?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    OR?: AutomationScalarWhereWithAggregatesInput[]
    NOT?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Automation"> | string
    automationName?: StringNullableWithAggregatesFilter<"Automation"> | string | null
    contactInfo?: JsonNullableWithAggregatesFilter<"Automation">
    activationUpon?: JsonNullableWithAggregatesFilter<"Automation">
    activateTime?: JsonNullableWithAggregatesFilter<"Automation">
    userEmail?: StringNullableWithAggregatesFilter<"Automation"> | string | null
    userPhone?: StringNullableWithAggregatesFilter<"Automation"> | string | null
    userName?: StringNullableWithAggregatesFilter<"Automation"> | string | null
    userId?: UuidNullableWithAggregatesFilter<"Automation"> | string | null
    organizationId?: UuidNullableWithAggregatesFilter<"Automation"> | string | null
    isActive?: BoolWithAggregatesFilter<"Automation"> | boolean
    isDelete?: BoolWithAggregatesFilter<"Automation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: UuidFilter<"Workflow"> | string
    userId?: UuidFilter<"Workflow"> | string
    organizationId?: UuidNullableFilter<"Workflow"> | string | null
    workspaceId?: UuidFilter<"Workflow"> | string
    title?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    status?: StringFilter<"Workflow"> | string
    verticalFlow?: BoolFilter<"Workflow"> | boolean
    creatorType?: StringFilter<"Workflow"> | string
    isForSystemNotification?: BoolFilter<"Workflow"> | boolean
    isForUserNotification?: BoolFilter<"Workflow"> | boolean
    isForClientNotification?: BoolFilter<"Workflow"> | boolean
    isCopyFromSystemNotification?: BoolFilter<"Workflow"> | boolean
    parentWorkflowId?: UuidNullableFilter<"Workflow"> | string | null
    isDeleted?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    verticalFlow?: SortOrder
    creatorType?: SortOrder
    isForSystemNotification?: SortOrder
    isForUserNotification?: SortOrder
    isForClientNotification?: SortOrder
    isCopyFromSystemNotification?: SortOrder
    parentWorkflowId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    userId?: UuidFilter<"Workflow"> | string
    organizationId?: UuidNullableFilter<"Workflow"> | string | null
    workspaceId?: UuidFilter<"Workflow"> | string
    title?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    status?: StringFilter<"Workflow"> | string
    verticalFlow?: BoolFilter<"Workflow"> | boolean
    creatorType?: StringFilter<"Workflow"> | string
    isForSystemNotification?: BoolFilter<"Workflow"> | boolean
    isForUserNotification?: BoolFilter<"Workflow"> | boolean
    isForClientNotification?: BoolFilter<"Workflow"> | boolean
    isCopyFromSystemNotification?: BoolFilter<"Workflow"> | boolean
    parentWorkflowId?: UuidNullableFilter<"Workflow"> | string | null
    isDeleted?: BoolFilter<"Workflow"> | boolean
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    verticalFlow?: SortOrder
    creatorType?: SortOrder
    isForSystemNotification?: SortOrder
    isForUserNotification?: SortOrder
    isForClientNotification?: SortOrder
    isCopyFromSystemNotification?: SortOrder
    parentWorkflowId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Workflow"> | string
    userId?: UuidWithAggregatesFilter<"Workflow"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"Workflow"> | string | null
    workspaceId?: UuidWithAggregatesFilter<"Workflow"> | string
    title?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    status?: StringWithAggregatesFilter<"Workflow"> | string
    verticalFlow?: BoolWithAggregatesFilter<"Workflow"> | boolean
    creatorType?: StringWithAggregatesFilter<"Workflow"> | string
    isForSystemNotification?: BoolWithAggregatesFilter<"Workflow"> | boolean
    isForUserNotification?: BoolWithAggregatesFilter<"Workflow"> | boolean
    isForClientNotification?: BoolWithAggregatesFilter<"Workflow"> | boolean
    isCopyFromSystemNotification?: BoolWithAggregatesFilter<"Workflow"> | boolean
    parentWorkflowId?: UuidNullableWithAggregatesFilter<"Workflow"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Workflow"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type WorkflowNodeWhereInput = {
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    id?: UuidFilter<"WorkflowNode"> | string
    userId?: UuidFilter<"WorkflowNode"> | string
    organizationId?: UuidNullableFilter<"WorkflowNode"> | string | null
    workflowId?: UuidFilter<"WorkflowNode"> | string
    key?: StringNullableFilter<"WorkflowNode"> | string | null
    data?: JsonNullableFilter<"WorkflowNode">
    type?: StringFilter<"WorkflowNode"> | string
    source?: StringNullableListFilter<"WorkflowNode">
    height?: IntFilter<"WorkflowNode"> | number
    width?: IntFilter<"WorkflowNode"> | number
    position?: JsonNullableFilter<"WorkflowNode">
    positionAbsolute?: JsonNullableFilter<"WorkflowNode">
    sourcePosition?: StringFilter<"WorkflowNode"> | string
    targetPosition?: StringFilter<"WorkflowNode"> | string
    isDeleted?: BoolFilter<"WorkflowNode"> | boolean
    createdAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNode"> | Date | string
  }

  export type WorkflowNodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    key?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    type?: SortOrder
    source?: SortOrder
    height?: SortOrder
    width?: SortOrder
    position?: SortOrderInput | SortOrder
    positionAbsolute?: SortOrderInput | SortOrder
    sourcePosition?: SortOrder
    targetPosition?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    OR?: WorkflowNodeWhereInput[]
    NOT?: WorkflowNodeWhereInput | WorkflowNodeWhereInput[]
    userId?: UuidFilter<"WorkflowNode"> | string
    organizationId?: UuidNullableFilter<"WorkflowNode"> | string | null
    workflowId?: UuidFilter<"WorkflowNode"> | string
    key?: StringNullableFilter<"WorkflowNode"> | string | null
    data?: JsonNullableFilter<"WorkflowNode">
    type?: StringFilter<"WorkflowNode"> | string
    source?: StringNullableListFilter<"WorkflowNode">
    height?: IntFilter<"WorkflowNode"> | number
    width?: IntFilter<"WorkflowNode"> | number
    position?: JsonNullableFilter<"WorkflowNode">
    positionAbsolute?: JsonNullableFilter<"WorkflowNode">
    sourcePosition?: StringFilter<"WorkflowNode"> | string
    targetPosition?: StringFilter<"WorkflowNode"> | string
    isDeleted?: BoolFilter<"WorkflowNode"> | boolean
    createdAt?: DateTimeFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowNode"> | Date | string
  }, "id">

  export type WorkflowNodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    key?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    type?: SortOrder
    source?: SortOrder
    height?: SortOrder
    width?: SortOrder
    position?: SortOrderInput | SortOrder
    positionAbsolute?: SortOrderInput | SortOrder
    sourcePosition?: SortOrder
    targetPosition?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowNodeCountOrderByAggregateInput
    _avg?: WorkflowNodeAvgOrderByAggregateInput
    _max?: WorkflowNodeMaxOrderByAggregateInput
    _min?: WorkflowNodeMinOrderByAggregateInput
    _sum?: WorkflowNodeSumOrderByAggregateInput
  }

  export type WorkflowNodeScalarWhereWithAggregatesInput = {
    AND?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    OR?: WorkflowNodeScalarWhereWithAggregatesInput[]
    NOT?: WorkflowNodeScalarWhereWithAggregatesInput | WorkflowNodeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkflowNode"> | string
    userId?: UuidWithAggregatesFilter<"WorkflowNode"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WorkflowNode"> | string | null
    workflowId?: UuidWithAggregatesFilter<"WorkflowNode"> | string
    key?: StringNullableWithAggregatesFilter<"WorkflowNode"> | string | null
    data?: JsonNullableWithAggregatesFilter<"WorkflowNode">
    type?: StringWithAggregatesFilter<"WorkflowNode"> | string
    source?: StringNullableListFilter<"WorkflowNode">
    height?: IntWithAggregatesFilter<"WorkflowNode"> | number
    width?: IntWithAggregatesFilter<"WorkflowNode"> | number
    position?: JsonNullableWithAggregatesFilter<"WorkflowNode">
    positionAbsolute?: JsonNullableWithAggregatesFilter<"WorkflowNode">
    sourcePosition?: StringWithAggregatesFilter<"WorkflowNode"> | string
    targetPosition?: StringWithAggregatesFilter<"WorkflowNode"> | string
    isDeleted?: BoolWithAggregatesFilter<"WorkflowNode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowNode"> | Date | string
  }

  export type WorkflowWorkspaceWhereInput = {
    AND?: WorkflowWorkspaceWhereInput | WorkflowWorkspaceWhereInput[]
    OR?: WorkflowWorkspaceWhereInput[]
    NOT?: WorkflowWorkspaceWhereInput | WorkflowWorkspaceWhereInput[]
    id?: UuidFilter<"WorkflowWorkspace"> | string
    userId?: UuidFilter<"WorkflowWorkspace"> | string
    organizationId?: UuidNullableFilter<"WorkflowWorkspace"> | string | null
    name?: StringFilter<"WorkflowWorkspace"> | string
    description?: StringNullableFilter<"WorkflowWorkspace"> | string | null
    isDeleted?: BoolFilter<"WorkflowWorkspace"> | boolean
    createdAt?: DateTimeFilter<"WorkflowWorkspace"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowWorkspace"> | Date | string
  }

  export type WorkflowWorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowWorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWorkspaceWhereInput | WorkflowWorkspaceWhereInput[]
    OR?: WorkflowWorkspaceWhereInput[]
    NOT?: WorkflowWorkspaceWhereInput | WorkflowWorkspaceWhereInput[]
    userId?: UuidFilter<"WorkflowWorkspace"> | string
    organizationId?: UuidNullableFilter<"WorkflowWorkspace"> | string | null
    name?: StringFilter<"WorkflowWorkspace"> | string
    description?: StringNullableFilter<"WorkflowWorkspace"> | string | null
    isDeleted?: BoolFilter<"WorkflowWorkspace"> | boolean
    createdAt?: DateTimeFilter<"WorkflowWorkspace"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowWorkspace"> | Date | string
  }, "id">

  export type WorkflowWorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowWorkspaceCountOrderByAggregateInput
    _max?: WorkflowWorkspaceMaxOrderByAggregateInput
    _min?: WorkflowWorkspaceMinOrderByAggregateInput
  }

  export type WorkflowWorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkflowWorkspaceScalarWhereWithAggregatesInput | WorkflowWorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkflowWorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkflowWorkspaceScalarWhereWithAggregatesInput | WorkflowWorkspaceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkflowWorkspace"> | string
    userId?: UuidWithAggregatesFilter<"WorkflowWorkspace"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WorkflowWorkspace"> | string | null
    name?: StringWithAggregatesFilter<"WorkflowWorkspace"> | string
    description?: StringNullableWithAggregatesFilter<"WorkflowWorkspace"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"WorkflowWorkspace"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowWorkspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowWorkspace"> | Date | string
  }

  export type WorkflowStartActionWhereInput = {
    AND?: WorkflowStartActionWhereInput | WorkflowStartActionWhereInput[]
    OR?: WorkflowStartActionWhereInput[]
    NOT?: WorkflowStartActionWhereInput | WorkflowStartActionWhereInput[]
    id?: UuidFilter<"WorkflowStartAction"> | string
    userId?: UuidFilter<"WorkflowStartAction"> | string
    organizationId?: UuidNullableFilter<"WorkflowStartAction"> | string | null
    workflowId?: UuidFilter<"WorkflowStartAction"> | string
    actionType?: StringNullableFilter<"WorkflowStartAction"> | string | null
    duration?: JsonNullableFilter<"WorkflowStartAction">
    parentId?: UuidNullableFilter<"WorkflowStartAction"> | string | null
    setCustomTime?: BoolFilter<"WorkflowStartAction"> | boolean
    useSubscriberTimeZone?: BoolFilter<"WorkflowStartAction"> | boolean
    customTime?: JsonNullableFilter<"WorkflowStartAction">
    subject?: StringNullableFilter<"WorkflowStartAction"> | string | null
    content?: StringNullableFilter<"WorkflowStartAction"> | string | null
    template?: JsonNullableFilter<"WorkflowStartAction">
    attachments?: JsonNullableFilter<"WorkflowStartAction">
    condition?: StringNullableFilter<"WorkflowStartAction"> | string | null
    confirmProgress?: JsonNullableFilter<"WorkflowStartAction">
    notificationTo?: JsonNullableFilter<"WorkflowStartAction">
    taskContent?: JsonNullableFilter<"WorkflowStartAction">
    isStart?: BoolFilter<"WorkflowStartAction"> | boolean
    isLast?: BoolFilter<"WorkflowStartAction"> | boolean
    isCondition?: BoolFilter<"WorkflowStartAction"> | boolean
    isException?: BoolFilter<"WorkflowStartAction"> | boolean
    createdAt?: DateTimeFilter<"WorkflowStartAction"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowStartAction"> | Date | string
  }

  export type WorkflowStartActionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    actionType?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    setCustomTime?: SortOrder
    useSubscriberTimeZone?: SortOrder
    customTime?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    template?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    confirmProgress?: SortOrderInput | SortOrder
    notificationTo?: SortOrderInput | SortOrder
    taskContent?: SortOrderInput | SortOrder
    isStart?: SortOrder
    isLast?: SortOrder
    isCondition?: SortOrder
    isException?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowStartActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowStartActionWhereInput | WorkflowStartActionWhereInput[]
    OR?: WorkflowStartActionWhereInput[]
    NOT?: WorkflowStartActionWhereInput | WorkflowStartActionWhereInput[]
    userId?: UuidFilter<"WorkflowStartAction"> | string
    organizationId?: UuidNullableFilter<"WorkflowStartAction"> | string | null
    workflowId?: UuidFilter<"WorkflowStartAction"> | string
    actionType?: StringNullableFilter<"WorkflowStartAction"> | string | null
    duration?: JsonNullableFilter<"WorkflowStartAction">
    parentId?: UuidNullableFilter<"WorkflowStartAction"> | string | null
    setCustomTime?: BoolFilter<"WorkflowStartAction"> | boolean
    useSubscriberTimeZone?: BoolFilter<"WorkflowStartAction"> | boolean
    customTime?: JsonNullableFilter<"WorkflowStartAction">
    subject?: StringNullableFilter<"WorkflowStartAction"> | string | null
    content?: StringNullableFilter<"WorkflowStartAction"> | string | null
    template?: JsonNullableFilter<"WorkflowStartAction">
    attachments?: JsonNullableFilter<"WorkflowStartAction">
    condition?: StringNullableFilter<"WorkflowStartAction"> | string | null
    confirmProgress?: JsonNullableFilter<"WorkflowStartAction">
    notificationTo?: JsonNullableFilter<"WorkflowStartAction">
    taskContent?: JsonNullableFilter<"WorkflowStartAction">
    isStart?: BoolFilter<"WorkflowStartAction"> | boolean
    isLast?: BoolFilter<"WorkflowStartAction"> | boolean
    isCondition?: BoolFilter<"WorkflowStartAction"> | boolean
    isException?: BoolFilter<"WorkflowStartAction"> | boolean
    createdAt?: DateTimeFilter<"WorkflowStartAction"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowStartAction"> | Date | string
  }, "id">

  export type WorkflowStartActionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    actionType?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    setCustomTime?: SortOrder
    useSubscriberTimeZone?: SortOrder
    customTime?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    template?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    confirmProgress?: SortOrderInput | SortOrder
    notificationTo?: SortOrderInput | SortOrder
    taskContent?: SortOrderInput | SortOrder
    isStart?: SortOrder
    isLast?: SortOrder
    isCondition?: SortOrder
    isException?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowStartActionCountOrderByAggregateInput
    _max?: WorkflowStartActionMaxOrderByAggregateInput
    _min?: WorkflowStartActionMinOrderByAggregateInput
  }

  export type WorkflowStartActionScalarWhereWithAggregatesInput = {
    AND?: WorkflowStartActionScalarWhereWithAggregatesInput | WorkflowStartActionScalarWhereWithAggregatesInput[]
    OR?: WorkflowStartActionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowStartActionScalarWhereWithAggregatesInput | WorkflowStartActionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkflowStartAction"> | string
    userId?: UuidWithAggregatesFilter<"WorkflowStartAction"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    workflowId?: UuidWithAggregatesFilter<"WorkflowStartAction"> | string
    actionType?: StringNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    duration?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    parentId?: UuidNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    setCustomTime?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    useSubscriberTimeZone?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    customTime?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    subject?: StringNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    content?: StringNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    template?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    attachments?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    condition?: StringNullableWithAggregatesFilter<"WorkflowStartAction"> | string | null
    confirmProgress?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    notificationTo?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    taskContent?: JsonNullableWithAggregatesFilter<"WorkflowStartAction">
    isStart?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    isLast?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    isCondition?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    isException?: BoolWithAggregatesFilter<"WorkflowStartAction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowStartAction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowStartAction"> | Date | string
  }

  export type WorkflowActivityLogWhereInput = {
    AND?: WorkflowActivityLogWhereInput | WorkflowActivityLogWhereInput[]
    OR?: WorkflowActivityLogWhereInput[]
    NOT?: WorkflowActivityLogWhereInput | WorkflowActivityLogWhereInput[]
    id?: UuidFilter<"WorkflowActivityLog"> | string
    userId?: UuidFilter<"WorkflowActivityLog"> | string
    organizationId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    workflowId?: UuidFilter<"WorkflowActivityLog"> | string
    contactId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    nodeId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    action?: StringNullableFilter<"WorkflowActivityLog"> | string | null
    details?: JsonNullableFilter<"WorkflowActivityLog">
    createdAt?: DateTimeFilter<"WorkflowActivityLog"> | Date | string
  }

  export type WorkflowActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    nodeId?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowActivityLogWhereInput | WorkflowActivityLogWhereInput[]
    OR?: WorkflowActivityLogWhereInput[]
    NOT?: WorkflowActivityLogWhereInput | WorkflowActivityLogWhereInput[]
    userId?: UuidFilter<"WorkflowActivityLog"> | string
    organizationId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    workflowId?: UuidFilter<"WorkflowActivityLog"> | string
    contactId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    nodeId?: UuidNullableFilter<"WorkflowActivityLog"> | string | null
    action?: StringNullableFilter<"WorkflowActivityLog"> | string | null
    details?: JsonNullableFilter<"WorkflowActivityLog">
    createdAt?: DateTimeFilter<"WorkflowActivityLog"> | Date | string
  }, "id">

  export type WorkflowActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    nodeId?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowActivityLogCountOrderByAggregateInput
    _max?: WorkflowActivityLogMaxOrderByAggregateInput
    _min?: WorkflowActivityLogMinOrderByAggregateInput
  }

  export type WorkflowActivityLogScalarWhereWithAggregatesInput = {
    AND?: WorkflowActivityLogScalarWhereWithAggregatesInput | WorkflowActivityLogScalarWhereWithAggregatesInput[]
    OR?: WorkflowActivityLogScalarWhereWithAggregatesInput[]
    NOT?: WorkflowActivityLogScalarWhereWithAggregatesInput | WorkflowActivityLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkflowActivityLog"> | string
    userId?: UuidWithAggregatesFilter<"WorkflowActivityLog"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WorkflowActivityLog"> | string | null
    workflowId?: UuidWithAggregatesFilter<"WorkflowActivityLog"> | string
    contactId?: UuidNullableWithAggregatesFilter<"WorkflowActivityLog"> | string | null
    nodeId?: UuidNullableWithAggregatesFilter<"WorkflowActivityLog"> | string | null
    action?: StringNullableWithAggregatesFilter<"WorkflowActivityLog"> | string | null
    details?: JsonNullableWithAggregatesFilter<"WorkflowActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowActivityLog"> | Date | string
  }

  export type WorkflowExecutionHistoryWhereInput = {
    AND?: WorkflowExecutionHistoryWhereInput | WorkflowExecutionHistoryWhereInput[]
    OR?: WorkflowExecutionHistoryWhereInput[]
    NOT?: WorkflowExecutionHistoryWhereInput | WorkflowExecutionHistoryWhereInput[]
    id?: UuidFilter<"WorkflowExecutionHistory"> | string
    userId?: UuidFilter<"WorkflowExecutionHistory"> | string
    organizationId?: UuidNullableFilter<"WorkflowExecutionHistory"> | string | null
    workflowId?: UuidFilter<"WorkflowExecutionHistory"> | string
    contactId?: UuidNullableFilter<"WorkflowExecutionHistory"> | string | null
    status?: StringNullableFilter<"WorkflowExecutionHistory"> | string | null
    startedAt?: DateTimeFilter<"WorkflowExecutionHistory"> | Date | string
    completedAt?: DateTimeNullableFilter<"WorkflowExecutionHistory"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkflowExecutionHistory"> | string | null
    createdAt?: DateTimeFilter<"WorkflowExecutionHistory"> | Date | string
  }

  export type WorkflowExecutionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowExecutionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowExecutionHistoryWhereInput | WorkflowExecutionHistoryWhereInput[]
    OR?: WorkflowExecutionHistoryWhereInput[]
    NOT?: WorkflowExecutionHistoryWhereInput | WorkflowExecutionHistoryWhereInput[]
    userId?: UuidFilter<"WorkflowExecutionHistory"> | string
    organizationId?: UuidNullableFilter<"WorkflowExecutionHistory"> | string | null
    workflowId?: UuidFilter<"WorkflowExecutionHistory"> | string
    contactId?: UuidNullableFilter<"WorkflowExecutionHistory"> | string | null
    status?: StringNullableFilter<"WorkflowExecutionHistory"> | string | null
    startedAt?: DateTimeFilter<"WorkflowExecutionHistory"> | Date | string
    completedAt?: DateTimeNullableFilter<"WorkflowExecutionHistory"> | Date | string | null
    errorMessage?: StringNullableFilter<"WorkflowExecutionHistory"> | string | null
    createdAt?: DateTimeFilter<"WorkflowExecutionHistory"> | Date | string
  }, "id">

  export type WorkflowExecutionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowExecutionHistoryCountOrderByAggregateInput
    _max?: WorkflowExecutionHistoryMaxOrderByAggregateInput
    _min?: WorkflowExecutionHistoryMinOrderByAggregateInput
  }

  export type WorkflowExecutionHistoryScalarWhereWithAggregatesInput = {
    AND?: WorkflowExecutionHistoryScalarWhereWithAggregatesInput | WorkflowExecutionHistoryScalarWhereWithAggregatesInput[]
    OR?: WorkflowExecutionHistoryScalarWhereWithAggregatesInput[]
    NOT?: WorkflowExecutionHistoryScalarWhereWithAggregatesInput | WorkflowExecutionHistoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WorkflowExecutionHistory"> | string
    userId?: UuidWithAggregatesFilter<"WorkflowExecutionHistory"> | string
    organizationId?: UuidNullableWithAggregatesFilter<"WorkflowExecutionHistory"> | string | null
    workflowId?: UuidWithAggregatesFilter<"WorkflowExecutionHistory"> | string
    contactId?: UuidNullableWithAggregatesFilter<"WorkflowExecutionHistory"> | string | null
    status?: StringNullableWithAggregatesFilter<"WorkflowExecutionHistory"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"WorkflowExecutionHistory"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"WorkflowExecutionHistory"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"WorkflowExecutionHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowExecutionHistory"> | Date | string
  }

  export type AutomationCreateInput = {
    id?: string
    automationName?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: string | null
    userPhone?: string | null
    userName?: string | null
    userId?: string | null
    organizationId?: string | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUncheckedCreateInput = {
    id?: string
    automationName?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: string | null
    userPhone?: string | null
    userName?: string | null
    userId?: string | null
    organizationId?: string | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationName?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationName?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationCreateManyInput = {
    id?: string
    automationName?: string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: string | null
    userPhone?: string | null
    userName?: string | null
    userId?: string | null
    organizationId?: string | null
    isActive?: boolean
    isDelete?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutomationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationName?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutomationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationName?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableJsonNullValueInput | InputJsonValue
    activationUpon?: NullableJsonNullValueInput | InputJsonValue
    activateTime?: NullableJsonNullValueInput | InputJsonValue
    userEmail?: NullableStringFieldUpdateOperationsInput | string | null
    userPhone?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDelete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workspaceId: string
    title: string
    description?: string | null
    status?: string
    verticalFlow?: boolean
    creatorType?: string
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workspaceId: string
    title: string
    description?: string | null
    status?: string
    verticalFlow?: boolean
    creatorType?: string
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verticalFlow?: BoolFieldUpdateOperationsInput | boolean
    creatorType?: StringFieldUpdateOperationsInput | string
    isForSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    isForUserNotification?: BoolFieldUpdateOperationsInput | boolean
    isForClientNotification?: BoolFieldUpdateOperationsInput | boolean
    isCopyFromSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    parentWorkflowId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verticalFlow?: BoolFieldUpdateOperationsInput | boolean
    creatorType?: StringFieldUpdateOperationsInput | string
    isForSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    isForUserNotification?: BoolFieldUpdateOperationsInput | boolean
    isForClientNotification?: BoolFieldUpdateOperationsInput | boolean
    isCopyFromSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    parentWorkflowId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workspaceId: string
    title: string
    description?: string | null
    status?: string
    verticalFlow?: boolean
    creatorType?: string
    isForSystemNotification?: boolean
    isForUserNotification?: boolean
    isForClientNotification?: boolean
    isCopyFromSystemNotification?: boolean
    parentWorkflowId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verticalFlow?: BoolFieldUpdateOperationsInput | boolean
    creatorType?: StringFieldUpdateOperationsInput | string
    isForSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    isForUserNotification?: BoolFieldUpdateOperationsInput | boolean
    isForClientNotification?: BoolFieldUpdateOperationsInput | boolean
    isCopyFromSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    parentWorkflowId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    verticalFlow?: BoolFieldUpdateOperationsInput | boolean
    creatorType?: StringFieldUpdateOperationsInput | string
    isForSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    isForUserNotification?: BoolFieldUpdateOperationsInput | boolean
    isForClientNotification?: BoolFieldUpdateOperationsInput | boolean
    isCopyFromSystemNotification?: BoolFieldUpdateOperationsInput | boolean
    parentWorkflowId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    key?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type: string
    source?: WorkflowNodeCreatesourceInput | string[]
    height?: number
    width?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: string
    targetPosition?: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    key?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type: string
    source?: WorkflowNodeCreatesourceInput | string[]
    height?: number
    width?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: string
    targetPosition?: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    source?: WorkflowNodeUpdatesourceInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: StringFieldUpdateOperationsInput | string
    targetPosition?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    source?: WorkflowNodeUpdatesourceInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: StringFieldUpdateOperationsInput | string
    targetPosition?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    key?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type: string
    source?: WorkflowNodeCreatesourceInput | string[]
    height?: number
    width?: number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: string
    targetPosition?: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    source?: WorkflowNodeUpdatesourceInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: StringFieldUpdateOperationsInput | string
    targetPosition?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    key?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
    source?: WorkflowNodeUpdatesourceInput | string[]
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    position?: NullableJsonNullValueInput | InputJsonValue
    positionAbsolute?: NullableJsonNullValueInput | InputJsonValue
    sourcePosition?: StringFieldUpdateOperationsInput | string
    targetPosition?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowWorkspaceCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowWorkspaceUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowWorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowWorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowWorkspaceCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    name: string
    description?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowWorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowWorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStartActionCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    actionType?: string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: string | null
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: string | null
    content?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowStartActionUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    actionType?: string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: string | null
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: string | null
    content?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowStartActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    setCustomTime?: BoolFieldUpdateOperationsInput | boolean
    useSubscriberTimeZone?: BoolFieldUpdateOperationsInput | boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: BoolFieldUpdateOperationsInput | boolean
    isLast?: BoolFieldUpdateOperationsInput | boolean
    isCondition?: BoolFieldUpdateOperationsInput | boolean
    isException?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStartActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    setCustomTime?: BoolFieldUpdateOperationsInput | boolean
    useSubscriberTimeZone?: BoolFieldUpdateOperationsInput | boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: BoolFieldUpdateOperationsInput | boolean
    isLast?: BoolFieldUpdateOperationsInput | boolean
    isCondition?: BoolFieldUpdateOperationsInput | boolean
    isException?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStartActionCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    actionType?: string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: string | null
    setCustomTime?: boolean
    useSubscriberTimeZone?: boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: string | null
    content?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: boolean
    isLast?: boolean
    isCondition?: boolean
    isException?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowStartActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    setCustomTime?: BoolFieldUpdateOperationsInput | boolean
    useSubscriberTimeZone?: BoolFieldUpdateOperationsInput | boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: BoolFieldUpdateOperationsInput | boolean
    isLast?: BoolFieldUpdateOperationsInput | boolean
    isCondition?: BoolFieldUpdateOperationsInput | boolean
    isException?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStartActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    actionType?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableJsonNullValueInput | InputJsonValue
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    setCustomTime?: BoolFieldUpdateOperationsInput | boolean
    useSubscriberTimeZone?: BoolFieldUpdateOperationsInput | boolean
    customTime?: NullableJsonNullValueInput | InputJsonValue
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    attachments?: NullableJsonNullValueInput | InputJsonValue
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    confirmProgress?: NullableJsonNullValueInput | InputJsonValue
    notificationTo?: NullableJsonNullValueInput | InputJsonValue
    taskContent?: NullableJsonNullValueInput | InputJsonValue
    isStart?: BoolFieldUpdateOperationsInput | boolean
    isLast?: BoolFieldUpdateOperationsInput | boolean
    isCondition?: BoolFieldUpdateOperationsInput | boolean
    isException?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowActivityLogCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    nodeId?: string | null
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowActivityLogUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    nodeId?: string | null
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowActivityLogCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    nodeId?: string | null
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    nodeId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionHistoryCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    status?: string | null
    startedAt: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WorkflowExecutionHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    status?: string | null
    startedAt: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WorkflowExecutionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionHistoryCreateManyInput = {
    id?: string
    userId: string
    organizationId?: string | null
    workflowId: string
    contactId?: string | null
    status?: string | null
    startedAt: Date | string
    completedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type WorkflowExecutionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AutomationCountOrderByAggregateInput = {
    id?: SortOrder
    automationName?: SortOrder
    contactInfo?: SortOrder
    activationUpon?: SortOrder
    activateTime?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationMaxOrderByAggregateInput = {
    id?: SortOrder
    automationName?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutomationMinOrderByAggregateInput = {
    id?: SortOrder
    automationName?: SortOrder
    userEmail?: SortOrder
    userPhone?: SortOrder
    userName?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    isActive?: SortOrder
    isDelete?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    verticalFlow?: SortOrder
    creatorType?: SortOrder
    isForSystemNotification?: SortOrder
    isForUserNotification?: SortOrder
    isForClientNotification?: SortOrder
    isCopyFromSystemNotification?: SortOrder
    parentWorkflowId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    verticalFlow?: SortOrder
    creatorType?: SortOrder
    isForSystemNotification?: SortOrder
    isForUserNotification?: SortOrder
    isForClientNotification?: SortOrder
    isCopyFromSystemNotification?: SortOrder
    parentWorkflowId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    verticalFlow?: SortOrder
    creatorType?: SortOrder
    isForSystemNotification?: SortOrder
    isForUserNotification?: SortOrder
    isForClientNotification?: SortOrder
    isCopyFromSystemNotification?: SortOrder
    parentWorkflowId?: SortOrder
    isDeleted?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type WorkflowNodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    key?: SortOrder
    data?: SortOrder
    type?: SortOrder
    source?: SortOrder
    height?: SortOrder
    width?: SortOrder
    position?: SortOrder
    positionAbsolute?: SortOrder
    sourcePosition?: SortOrder
    targetPosition?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeAvgOrderByAggregateInput = {
    height?: SortOrder
    width?: SortOrder
  }

  export type WorkflowNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    sourcePosition?: SortOrder
    targetPosition?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    key?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    sourcePosition?: SortOrder
    targetPosition?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowNodeSumOrderByAggregateInput = {
    height?: SortOrder
    width?: SortOrder
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

  export type WorkflowWorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowWorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowWorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowStartActionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    duration?: SortOrder
    parentId?: SortOrder
    setCustomTime?: SortOrder
    useSubscriberTimeZone?: SortOrder
    customTime?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    template?: SortOrder
    attachments?: SortOrder
    condition?: SortOrder
    confirmProgress?: SortOrder
    notificationTo?: SortOrder
    taskContent?: SortOrder
    isStart?: SortOrder
    isLast?: SortOrder
    isCondition?: SortOrder
    isException?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowStartActionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    parentId?: SortOrder
    setCustomTime?: SortOrder
    useSubscriberTimeZone?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    condition?: SortOrder
    isStart?: SortOrder
    isLast?: SortOrder
    isCondition?: SortOrder
    isException?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowStartActionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    actionType?: SortOrder
    parentId?: SortOrder
    setCustomTime?: SortOrder
    useSubscriberTimeZone?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    condition?: SortOrder
    isStart?: SortOrder
    isLast?: SortOrder
    isCondition?: SortOrder
    isException?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    nodeId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    nodeId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    nodeId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WorkflowExecutionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowExecutionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowExecutionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    workflowId?: SortOrder
    contactId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type WorkflowNodeCreatesourceInput = {
    set: string[]
  }

  export type WorkflowNodeUpdatesourceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }



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