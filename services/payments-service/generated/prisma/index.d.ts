
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
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model InvoiceActivity
 * 
 */
export type InvoiceActivity = $Result.DefaultSelection<Prisma.$InvoiceActivityPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Invoices
 * const invoices = await prisma.invoice.findMany()
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
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
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
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceActivity`: Exposes CRUD operations for the **InvoiceActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceActivities
    * const invoiceActivities = await prisma.invoiceActivity.findMany()
    * ```
    */
  get invoiceActivity(): Prisma.InvoiceActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Invoice: 'Invoice',
    Payment: 'Payment',
    InvoiceActivity: 'InvoiceActivity',
    Deposit: 'Deposit'
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
      modelProps: "invoice" | "payment" | "invoiceActivity" | "deposit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      InvoiceActivity: {
        payload: Prisma.$InvoiceActivityPayload<ExtArgs>
        fields: Prisma.InvoiceActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          findFirst: {
            args: Prisma.InvoiceActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          findMany: {
            args: Prisma.InvoiceActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>[]
          }
          create: {
            args: Prisma.InvoiceActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          createMany: {
            args: Prisma.InvoiceActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>[]
          }
          delete: {
            args: Prisma.InvoiceActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          update: {
            args: Prisma.InvoiceActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceActivityPayload>
          }
          aggregate: {
            args: Prisma.InvoiceActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceActivity>
          }
          groupBy: {
            args: Prisma.InvoiceActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceActivityCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceActivityCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
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
    invoice?: InvoiceOmit
    payment?: PaymentOmit
    invoiceActivity?: InvoiceActivityOmit
    deposit?: DepositOmit
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
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    payments: number
    activities: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | InvoiceCountOutputTypeCountPaymentsArgs
    activities?: boolean | InvoiceCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount_cents: number | null
    tax_cents: number | null
    discount_cents: number | null
    total_cents: number | null
    paid_cents: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount_cents: bigint | null
    tax_cents: bigint | null
    discount_cents: bigint | null
    total_cents: bigint | null
    paid_cents: bigint | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    contact_id: string | null
    invoice_number: string | null
    title: string | null
    status: string | null
    amount_cents: bigint | null
    tax_cents: bigint | null
    discount_cents: bigint | null
    total_cents: bigint | null
    paid_cents: bigint | null
    currency: string | null
    due_date: Date | null
    paid_at: Date | null
    sent_at: Date | null
    is_delete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    contact_id: string | null
    invoice_number: string | null
    title: string | null
    status: string | null
    amount_cents: bigint | null
    tax_cents: bigint | null
    discount_cents: bigint | null
    total_cents: bigint | null
    paid_cents: bigint | null
    currency: string | null
    due_date: Date | null
    paid_at: Date | null
    sent_at: Date | null
    is_delete: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    org_id: number
    created_by_user_id: number
    contact_id: number
    invoice_number: number
    title: number
    status: number
    amount_cents: number
    tax_cents: number
    discount_cents: number
    total_cents: number
    paid_cents: number
    currency: number
    due_date: number
    paid_at: number
    sent_at: number
    is_delete: number
    line_items: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount_cents?: true
    tax_cents?: true
    discount_cents?: true
    total_cents?: true
    paid_cents?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount_cents?: true
    tax_cents?: true
    discount_cents?: true
    total_cents?: true
    paid_cents?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    invoice_number?: true
    title?: true
    status?: true
    amount_cents?: true
    tax_cents?: true
    discount_cents?: true
    total_cents?: true
    paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    sent_at?: true
    is_delete?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    invoice_number?: true
    title?: true
    status?: true
    amount_cents?: true
    tax_cents?: true
    discount_cents?: true
    total_cents?: true
    paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    sent_at?: true
    is_delete?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    invoice_number?: true
    title?: true
    status?: true
    amount_cents?: true
    tax_cents?: true
    discount_cents?: true
    total_cents?: true
    paid_cents?: true
    currency?: true
    due_date?: true
    paid_at?: true
    sent_at?: true
    is_delete?: true
    line_items?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    org_id: string
    created_by_user_id: string
    contact_id: string | null
    invoice_number: string | null
    title: string | null
    status: string
    amount_cents: bigint
    tax_cents: bigint
    discount_cents: bigint
    total_cents: bigint
    paid_cents: bigint
    currency: string
    due_date: Date | null
    paid_at: Date | null
    sent_at: Date | null
    is_delete: boolean
    line_items: JsonValue
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    invoice_number?: boolean
    title?: boolean
    status?: boolean
    amount_cents?: boolean
    tax_cents?: boolean
    discount_cents?: boolean
    total_cents?: boolean
    paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    sent_at?: boolean
    is_delete?: boolean
    line_items?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    activities?: boolean | Invoice$activitiesArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    invoice_number?: boolean
    title?: boolean
    status?: boolean
    amount_cents?: boolean
    tax_cents?: boolean
    discount_cents?: boolean
    total_cents?: boolean
    paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    sent_at?: boolean
    is_delete?: boolean
    line_items?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    invoice_number?: boolean
    title?: boolean
    status?: boolean
    amount_cents?: boolean
    tax_cents?: boolean
    discount_cents?: boolean
    total_cents?: boolean
    paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    sent_at?: boolean
    is_delete?: boolean
    line_items?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    invoice_number?: boolean
    title?: boolean
    status?: boolean
    amount_cents?: boolean
    tax_cents?: boolean
    discount_cents?: boolean
    total_cents?: boolean
    paid_cents?: boolean
    currency?: boolean
    due_date?: boolean
    paid_at?: boolean
    sent_at?: boolean
    is_delete?: boolean
    line_items?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by_user_id" | "contact_id" | "invoice_number" | "title" | "status" | "amount_cents" | "tax_cents" | "discount_cents" | "total_cents" | "paid_cents" | "currency" | "due_date" | "paid_at" | "sent_at" | "is_delete" | "line_items" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | Invoice$paymentsArgs<ExtArgs>
    activities?: boolean | Invoice$activitiesArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      activities: Prisma.$InvoiceActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by_user_id: string
      contact_id: string | null
      invoice_number: string | null
      title: string | null
      status: string
      amount_cents: bigint
      tax_cents: bigint
      discount_cents: bigint
      total_cents: bigint
      paid_cents: bigint
      currency: string
      due_date: Date | null
      paid_at: Date | null
      sent_at: Date | null
      is_delete: boolean
      line_items: Prisma.JsonValue
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends Invoice$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Invoice$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly org_id: FieldRef<"Invoice", 'String'>
    readonly created_by_user_id: FieldRef<"Invoice", 'String'>
    readonly contact_id: FieldRef<"Invoice", 'String'>
    readonly invoice_number: FieldRef<"Invoice", 'String'>
    readonly title: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly amount_cents: FieldRef<"Invoice", 'BigInt'>
    readonly tax_cents: FieldRef<"Invoice", 'BigInt'>
    readonly discount_cents: FieldRef<"Invoice", 'BigInt'>
    readonly total_cents: FieldRef<"Invoice", 'BigInt'>
    readonly paid_cents: FieldRef<"Invoice", 'BigInt'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly due_date: FieldRef<"Invoice", 'DateTime'>
    readonly paid_at: FieldRef<"Invoice", 'DateTime'>
    readonly sent_at: FieldRef<"Invoice", 'DateTime'>
    readonly is_delete: FieldRef<"Invoice", 'Boolean'>
    readonly line_items: FieldRef<"Invoice", 'Json'>
    readonly metadata: FieldRef<"Invoice", 'Json'>
    readonly created_at: FieldRef<"Invoice", 'DateTime'>
    readonly updated_at: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.payments
   */
  export type Invoice$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Invoice.activities
   */
  export type Invoice$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    where?: InvoiceActivityWhereInput
    orderBy?: InvoiceActivityOrderByWithRelationInput | InvoiceActivityOrderByWithRelationInput[]
    cursor?: InvoiceActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceActivityScalarFieldEnum | InvoiceActivityScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount_cents: number | null
    refunded_cents: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount_cents: bigint | null
    refunded_cents: bigint | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    org_id: string | null
    created_by_user_id: string | null
    amount_cents: bigint | null
    method: string | null
    status: string | null
    reference: string | null
    processor: string | null
    processor_id: string | null
    refunded_cents: bigint | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    org_id: string | null
    created_by_user_id: string | null
    amount_cents: bigint | null
    method: string | null
    status: string | null
    reference: string | null
    processor: string | null
    processor_id: string | null
    refunded_cents: bigint | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    invoice_id: number
    org_id: number
    created_by_user_id: number
    amount_cents: number
    method: number
    status: number
    reference: number
    processor: number
    processor_id: number
    refunded_cents: number
    notes: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount_cents?: true
    refunded_cents?: true
  }

  export type PaymentSumAggregateInputType = {
    amount_cents?: true
    refunded_cents?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    created_by_user_id?: true
    amount_cents?: true
    method?: true
    status?: true
    reference?: true
    processor?: true
    processor_id?: true
    refunded_cents?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    created_by_user_id?: true
    amount_cents?: true
    method?: true
    status?: true
    reference?: true
    processor?: true
    processor_id?: true
    refunded_cents?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    created_by_user_id?: true
    amount_cents?: true
    method?: true
    status?: true
    reference?: true
    processor?: true
    processor_id?: true
    refunded_cents?: true
    notes?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    invoice_id: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint
    method: string
    status: string
    reference: string | null
    processor: string | null
    processor_id: string | null
    refunded_cents: bigint
    notes: string | null
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    amount_cents?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    processor?: boolean
    processor_id?: boolean
    refunded_cents?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    amount_cents?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    processor?: boolean
    processor_id?: boolean
    refunded_cents?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    amount_cents?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    processor?: boolean
    processor_id?: boolean
    refunded_cents?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    amount_cents?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    processor?: boolean
    processor_id?: boolean
    refunded_cents?: boolean
    notes?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "org_id" | "created_by_user_id" | "amount_cents" | "method" | "status" | "reference" | "processor" | "processor_id" | "refunded_cents" | "notes" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoice_id: string
      org_id: string
      created_by_user_id: string
      amount_cents: bigint
      method: string
      status: string
      reference: string | null
      processor: string | null
      processor_id: string | null
      refunded_cents: bigint
      notes: string | null
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly invoice_id: FieldRef<"Payment", 'String'>
    readonly org_id: FieldRef<"Payment", 'String'>
    readonly created_by_user_id: FieldRef<"Payment", 'String'>
    readonly amount_cents: FieldRef<"Payment", 'BigInt'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly processor: FieldRef<"Payment", 'String'>
    readonly processor_id: FieldRef<"Payment", 'String'>
    readonly refunded_cents: FieldRef<"Payment", 'BigInt'>
    readonly notes: FieldRef<"Payment", 'String'>
    readonly metadata: FieldRef<"Payment", 'Json'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
    readonly updated_at: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceActivity
   */

  export type AggregateInvoiceActivity = {
    _count: InvoiceActivityCountAggregateOutputType | null
    _min: InvoiceActivityMinAggregateOutputType | null
    _max: InvoiceActivityMaxAggregateOutputType | null
  }

  export type InvoiceActivityMinAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    org_id: string | null
    user_id: string | null
    action: string | null
    note: string | null
    created_at: Date | null
  }

  export type InvoiceActivityMaxAggregateOutputType = {
    id: string | null
    invoice_id: string | null
    org_id: string | null
    user_id: string | null
    action: string | null
    note: string | null
    created_at: Date | null
  }

  export type InvoiceActivityCountAggregateOutputType = {
    id: number
    invoice_id: number
    org_id: number
    user_id: number
    action: number
    note: number
    metadata: number
    created_at: number
    _all: number
  }


  export type InvoiceActivityMinAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    user_id?: true
    action?: true
    note?: true
    created_at?: true
  }

  export type InvoiceActivityMaxAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    user_id?: true
    action?: true
    note?: true
    created_at?: true
  }

  export type InvoiceActivityCountAggregateInputType = {
    id?: true
    invoice_id?: true
    org_id?: true
    user_id?: true
    action?: true
    note?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type InvoiceActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceActivity to aggregate.
     */
    where?: InvoiceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceActivities to fetch.
     */
    orderBy?: InvoiceActivityOrderByWithRelationInput | InvoiceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceActivities
    **/
    _count?: true | InvoiceActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceActivityMaxAggregateInputType
  }

  export type GetInvoiceActivityAggregateType<T extends InvoiceActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceActivity[P]>
      : GetScalarType<T[P], AggregateInvoiceActivity[P]>
  }




  export type InvoiceActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceActivityWhereInput
    orderBy?: InvoiceActivityOrderByWithAggregationInput | InvoiceActivityOrderByWithAggregationInput[]
    by: InvoiceActivityScalarFieldEnum[] | InvoiceActivityScalarFieldEnum
    having?: InvoiceActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceActivityCountAggregateInputType | true
    _min?: InvoiceActivityMinAggregateInputType
    _max?: InvoiceActivityMaxAggregateInputType
  }

  export type InvoiceActivityGroupByOutputType = {
    id: string
    invoice_id: string
    org_id: string
    user_id: string | null
    action: string
    note: string | null
    metadata: JsonValue
    created_at: Date
    _count: InvoiceActivityCountAggregateOutputType | null
    _min: InvoiceActivityMinAggregateOutputType | null
    _max: InvoiceActivityMaxAggregateOutputType | null
  }

  type GetInvoiceActivityGroupByPayload<T extends InvoiceActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceActivityGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceActivityGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    user_id?: boolean
    action?: boolean
    note?: boolean
    metadata?: boolean
    created_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceActivity"]>

  export type InvoiceActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    user_id?: boolean
    action?: boolean
    note?: boolean
    metadata?: boolean
    created_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceActivity"]>

  export type InvoiceActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    user_id?: boolean
    action?: boolean
    note?: boolean
    metadata?: boolean
    created_at?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceActivity"]>

  export type InvoiceActivitySelectScalar = {
    id?: boolean
    invoice_id?: boolean
    org_id?: boolean
    user_id?: boolean
    action?: boolean
    note?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type InvoiceActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoice_id" | "org_id" | "user_id" | "action" | "note" | "metadata" | "created_at", ExtArgs["result"]["invoiceActivity"]>
  export type InvoiceActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceActivity"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoice_id: string
      org_id: string
      user_id: string | null
      action: string
      note: string | null
      metadata: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["invoiceActivity"]>
    composites: {}
  }

  type InvoiceActivityGetPayload<S extends boolean | null | undefined | InvoiceActivityDefaultArgs> = $Result.GetResult<Prisma.$InvoiceActivityPayload, S>

  type InvoiceActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceActivityCountAggregateInputType | true
    }

  export interface InvoiceActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceActivity'], meta: { name: 'InvoiceActivity' } }
    /**
     * Find zero or one InvoiceActivity that matches the filter.
     * @param {InvoiceActivityFindUniqueArgs} args - Arguments to find a InvoiceActivity
     * @example
     * // Get one InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceActivityFindUniqueArgs>(args: SelectSubset<T, InvoiceActivityFindUniqueArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceActivityFindUniqueOrThrowArgs} args - Arguments to find a InvoiceActivity
     * @example
     * // Get one InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityFindFirstArgs} args - Arguments to find a InvoiceActivity
     * @example
     * // Get one InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceActivityFindFirstArgs>(args?: SelectSubset<T, InvoiceActivityFindFirstArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityFindFirstOrThrowArgs} args - Arguments to find a InvoiceActivity
     * @example
     * // Get one InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceActivities
     * const invoiceActivities = await prisma.invoiceActivity.findMany()
     * 
     * // Get first 10 InvoiceActivities
     * const invoiceActivities = await prisma.invoiceActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceActivityWithIdOnly = await prisma.invoiceActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceActivityFindManyArgs>(args?: SelectSubset<T, InvoiceActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceActivity.
     * @param {InvoiceActivityCreateArgs} args - Arguments to create a InvoiceActivity.
     * @example
     * // Create one InvoiceActivity
     * const InvoiceActivity = await prisma.invoiceActivity.create({
     *   data: {
     *     // ... data to create a InvoiceActivity
     *   }
     * })
     * 
     */
    create<T extends InvoiceActivityCreateArgs>(args: SelectSubset<T, InvoiceActivityCreateArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceActivities.
     * @param {InvoiceActivityCreateManyArgs} args - Arguments to create many InvoiceActivities.
     * @example
     * // Create many InvoiceActivities
     * const invoiceActivity = await prisma.invoiceActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceActivityCreateManyArgs>(args?: SelectSubset<T, InvoiceActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceActivities and returns the data saved in the database.
     * @param {InvoiceActivityCreateManyAndReturnArgs} args - Arguments to create many InvoiceActivities.
     * @example
     * // Create many InvoiceActivities
     * const invoiceActivity = await prisma.invoiceActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceActivities and only return the `id`
     * const invoiceActivityWithIdOnly = await prisma.invoiceActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceActivity.
     * @param {InvoiceActivityDeleteArgs} args - Arguments to delete one InvoiceActivity.
     * @example
     * // Delete one InvoiceActivity
     * const InvoiceActivity = await prisma.invoiceActivity.delete({
     *   where: {
     *     // ... filter to delete one InvoiceActivity
     *   }
     * })
     * 
     */
    delete<T extends InvoiceActivityDeleteArgs>(args: SelectSubset<T, InvoiceActivityDeleteArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceActivity.
     * @param {InvoiceActivityUpdateArgs} args - Arguments to update one InvoiceActivity.
     * @example
     * // Update one InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceActivityUpdateArgs>(args: SelectSubset<T, InvoiceActivityUpdateArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceActivities.
     * @param {InvoiceActivityDeleteManyArgs} args - Arguments to filter InvoiceActivities to delete.
     * @example
     * // Delete a few InvoiceActivities
     * const { count } = await prisma.invoiceActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceActivityDeleteManyArgs>(args?: SelectSubset<T, InvoiceActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceActivities
     * const invoiceActivity = await prisma.invoiceActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceActivityUpdateManyArgs>(args: SelectSubset<T, InvoiceActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceActivities and returns the data updated in the database.
     * @param {InvoiceActivityUpdateManyAndReturnArgs} args - Arguments to update many InvoiceActivities.
     * @example
     * // Update many InvoiceActivities
     * const invoiceActivity = await prisma.invoiceActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceActivities and only return the `id`
     * const invoiceActivityWithIdOnly = await prisma.invoiceActivity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceActivity.
     * @param {InvoiceActivityUpsertArgs} args - Arguments to update or create a InvoiceActivity.
     * @example
     * // Update or create a InvoiceActivity
     * const invoiceActivity = await prisma.invoiceActivity.upsert({
     *   create: {
     *     // ... data to create a InvoiceActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceActivity we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceActivityUpsertArgs>(args: SelectSubset<T, InvoiceActivityUpsertArgs<ExtArgs>>): Prisma__InvoiceActivityClient<$Result.GetResult<Prisma.$InvoiceActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityCountArgs} args - Arguments to filter InvoiceActivities to count.
     * @example
     * // Count the number of InvoiceActivities
     * const count = await prisma.invoiceActivity.count({
     *   where: {
     *     // ... the filter for the InvoiceActivities we want to count
     *   }
     * })
    **/
    count<T extends InvoiceActivityCountArgs>(
      args?: Subset<T, InvoiceActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceActivityAggregateArgs>(args: Subset<T, InvoiceActivityAggregateArgs>): Prisma.PrismaPromise<GetInvoiceActivityAggregateType<T>>

    /**
     * Group by InvoiceActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceActivityGroupByArgs} args - Group by arguments.
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
      T extends InvoiceActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceActivityGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceActivity model
   */
  readonly fields: InvoiceActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceActivity model
   */
  interface InvoiceActivityFieldRefs {
    readonly id: FieldRef<"InvoiceActivity", 'String'>
    readonly invoice_id: FieldRef<"InvoiceActivity", 'String'>
    readonly org_id: FieldRef<"InvoiceActivity", 'String'>
    readonly user_id: FieldRef<"InvoiceActivity", 'String'>
    readonly action: FieldRef<"InvoiceActivity", 'String'>
    readonly note: FieldRef<"InvoiceActivity", 'String'>
    readonly metadata: FieldRef<"InvoiceActivity", 'Json'>
    readonly created_at: FieldRef<"InvoiceActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceActivity findUnique
   */
  export type InvoiceActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceActivity to fetch.
     */
    where: InvoiceActivityWhereUniqueInput
  }

  /**
   * InvoiceActivity findUniqueOrThrow
   */
  export type InvoiceActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceActivity to fetch.
     */
    where: InvoiceActivityWhereUniqueInput
  }

  /**
   * InvoiceActivity findFirst
   */
  export type InvoiceActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceActivity to fetch.
     */
    where?: InvoiceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceActivities to fetch.
     */
    orderBy?: InvoiceActivityOrderByWithRelationInput | InvoiceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceActivities.
     */
    cursor?: InvoiceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceActivities.
     */
    distinct?: InvoiceActivityScalarFieldEnum | InvoiceActivityScalarFieldEnum[]
  }

  /**
   * InvoiceActivity findFirstOrThrow
   */
  export type InvoiceActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceActivity to fetch.
     */
    where?: InvoiceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceActivities to fetch.
     */
    orderBy?: InvoiceActivityOrderByWithRelationInput | InvoiceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceActivities.
     */
    cursor?: InvoiceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceActivities.
     */
    distinct?: InvoiceActivityScalarFieldEnum | InvoiceActivityScalarFieldEnum[]
  }

  /**
   * InvoiceActivity findMany
   */
  export type InvoiceActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceActivities to fetch.
     */
    where?: InvoiceActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceActivities to fetch.
     */
    orderBy?: InvoiceActivityOrderByWithRelationInput | InvoiceActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceActivities.
     */
    cursor?: InvoiceActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceActivities.
     */
    skip?: number
    distinct?: InvoiceActivityScalarFieldEnum | InvoiceActivityScalarFieldEnum[]
  }

  /**
   * InvoiceActivity create
   */
  export type InvoiceActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceActivity.
     */
    data: XOR<InvoiceActivityCreateInput, InvoiceActivityUncheckedCreateInput>
  }

  /**
   * InvoiceActivity createMany
   */
  export type InvoiceActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceActivities.
     */
    data: InvoiceActivityCreateManyInput | InvoiceActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceActivity createManyAndReturn
   */
  export type InvoiceActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceActivities.
     */
    data: InvoiceActivityCreateManyInput | InvoiceActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceActivity update
   */
  export type InvoiceActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceActivity.
     */
    data: XOR<InvoiceActivityUpdateInput, InvoiceActivityUncheckedUpdateInput>
    /**
     * Choose, which InvoiceActivity to update.
     */
    where: InvoiceActivityWhereUniqueInput
  }

  /**
   * InvoiceActivity updateMany
   */
  export type InvoiceActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceActivities.
     */
    data: XOR<InvoiceActivityUpdateManyMutationInput, InvoiceActivityUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceActivities to update
     */
    where?: InvoiceActivityWhereInput
    /**
     * Limit how many InvoiceActivities to update.
     */
    limit?: number
  }

  /**
   * InvoiceActivity updateManyAndReturn
   */
  export type InvoiceActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceActivities.
     */
    data: XOR<InvoiceActivityUpdateManyMutationInput, InvoiceActivityUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceActivities to update
     */
    where?: InvoiceActivityWhereInput
    /**
     * Limit how many InvoiceActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceActivity upsert
   */
  export type InvoiceActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceActivity to update in case it exists.
     */
    where: InvoiceActivityWhereUniqueInput
    /**
     * In case the InvoiceActivity found by the `where` argument doesn't exist, create a new InvoiceActivity with this data.
     */
    create: XOR<InvoiceActivityCreateInput, InvoiceActivityUncheckedCreateInput>
    /**
     * In case the InvoiceActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceActivityUpdateInput, InvoiceActivityUncheckedUpdateInput>
  }

  /**
   * InvoiceActivity delete
   */
  export type InvoiceActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
    /**
     * Filter which InvoiceActivity to delete.
     */
    where: InvoiceActivityWhereUniqueInput
  }

  /**
   * InvoiceActivity deleteMany
   */
  export type InvoiceActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceActivities to delete
     */
    where?: InvoiceActivityWhereInput
    /**
     * Limit how many InvoiceActivities to delete.
     */
    limit?: number
  }

  /**
   * InvoiceActivity without action
   */
  export type InvoiceActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceActivity
     */
    select?: InvoiceActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceActivity
     */
    omit?: InvoiceActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceActivityInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount_cents: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount_cents: bigint | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    contact_id: string | null
    amount_cents: bigint | null
    currency: string | null
    status: string | null
    description: string | null
    payment_method: string | null
    processor_id: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    contact_id: string | null
    amount_cents: bigint | null
    currency: string | null
    status: string | null
    description: string | null
    payment_method: string | null
    processor_id: string | null
    is_deleted: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    org_id: number
    created_by_user_id: number
    contact_id: number
    amount_cents: number
    currency: number
    status: number
    description: number
    payment_method: number
    processor_id: number
    is_deleted: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount_cents?: true
  }

  export type DepositSumAggregateInputType = {
    amount_cents?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    description?: true
    payment_method?: true
    processor_id?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    description?: true
    payment_method?: true
    processor_id?: true
    is_deleted?: true
    created_at?: true
    updated_at?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    contact_id?: true
    amount_cents?: true
    currency?: true
    status?: true
    description?: true
    payment_method?: true
    processor_id?: true
    is_deleted?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    org_id: string
    created_by_user_id: string
    contact_id: string | null
    amount_cents: bigint
    currency: string
    status: string
    description: string | null
    payment_method: string | null
    processor_id: string | null
    is_deleted: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    payment_method?: boolean
    processor_id?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    payment_method?: boolean
    processor_id?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    payment_method?: boolean
    processor_id?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    contact_id?: boolean
    amount_cents?: boolean
    currency?: boolean
    status?: boolean
    description?: boolean
    payment_method?: boolean
    processor_id?: boolean
    is_deleted?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by_user_id" | "contact_id" | "amount_cents" | "currency" | "status" | "description" | "payment_method" | "processor_id" | "is_deleted" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["deposit"]>

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by_user_id: string
      contact_id: string | null
      amount_cents: bigint
      currency: string
      status: string
      description: string | null
      payment_method: string | null
      processor_id: string | null
      is_deleted: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
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
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly org_id: FieldRef<"Deposit", 'String'>
    readonly created_by_user_id: FieldRef<"Deposit", 'String'>
    readonly contact_id: FieldRef<"Deposit", 'String'>
    readonly amount_cents: FieldRef<"Deposit", 'BigInt'>
    readonly currency: FieldRef<"Deposit", 'String'>
    readonly status: FieldRef<"Deposit", 'String'>
    readonly description: FieldRef<"Deposit", 'String'>
    readonly payment_method: FieldRef<"Deposit", 'String'>
    readonly processor_id: FieldRef<"Deposit", 'String'>
    readonly is_deleted: FieldRef<"Deposit", 'Boolean'>
    readonly metadata: FieldRef<"Deposit", 'Json'>
    readonly created_at: FieldRef<"Deposit", 'DateTime'>
    readonly updated_at: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
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


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    contact_id: 'contact_id',
    invoice_number: 'invoice_number',
    title: 'title',
    status: 'status',
    amount_cents: 'amount_cents',
    tax_cents: 'tax_cents',
    discount_cents: 'discount_cents',
    total_cents: 'total_cents',
    paid_cents: 'paid_cents',
    currency: 'currency',
    due_date: 'due_date',
    paid_at: 'paid_at',
    sent_at: 'sent_at',
    is_delete: 'is_delete',
    line_items: 'line_items',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    amount_cents: 'amount_cents',
    method: 'method',
    status: 'status',
    reference: 'reference',
    processor: 'processor',
    processor_id: 'processor_id',
    refunded_cents: 'refunded_cents',
    notes: 'notes',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InvoiceActivityScalarFieldEnum: {
    id: 'id',
    invoice_id: 'invoice_id',
    org_id: 'org_id',
    user_id: 'user_id',
    action: 'action',
    note: 'note',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type InvoiceActivityScalarFieldEnum = (typeof InvoiceActivityScalarFieldEnum)[keyof typeof InvoiceActivityScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    contact_id: 'contact_id',
    amount_cents: 'amount_cents',
    currency: 'currency',
    status: 'status',
    description: 'description',
    payment_method: 'payment_method',
    processor_id: 'processor_id',
    is_deleted: 'is_deleted',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: UuidFilter<"Invoice"> | string
    org_id?: UuidFilter<"Invoice"> | string
    created_by_user_id?: StringFilter<"Invoice"> | string
    contact_id?: UuidNullableFilter<"Invoice"> | string | null
    invoice_number?: StringNullableFilter<"Invoice"> | string | null
    title?: StringNullableFilter<"Invoice"> | string | null
    status?: StringFilter<"Invoice"> | string
    amount_cents?: BigIntFilter<"Invoice"> | bigint | number
    tax_cents?: BigIntFilter<"Invoice"> | bigint | number
    discount_cents?: BigIntFilter<"Invoice"> | bigint | number
    total_cents?: BigIntFilter<"Invoice"> | bigint | number
    paid_cents?: BigIntFilter<"Invoice"> | bigint | number
    currency?: StringFilter<"Invoice"> | string
    due_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paid_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    sent_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    is_delete?: BoolFilter<"Invoice"> | boolean
    line_items?: JsonFilter<"Invoice">
    metadata?: JsonFilter<"Invoice">
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    payments?: PaymentListRelationFilter
    activities?: InvoiceActivityListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    invoice_number?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_delete?: SortOrder
    line_items?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    activities?: InvoiceActivityOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    org_id?: UuidFilter<"Invoice"> | string
    created_by_user_id?: StringFilter<"Invoice"> | string
    contact_id?: UuidNullableFilter<"Invoice"> | string | null
    invoice_number?: StringNullableFilter<"Invoice"> | string | null
    title?: StringNullableFilter<"Invoice"> | string | null
    status?: StringFilter<"Invoice"> | string
    amount_cents?: BigIntFilter<"Invoice"> | bigint | number
    tax_cents?: BigIntFilter<"Invoice"> | bigint | number
    discount_cents?: BigIntFilter<"Invoice"> | bigint | number
    total_cents?: BigIntFilter<"Invoice"> | bigint | number
    paid_cents?: BigIntFilter<"Invoice"> | bigint | number
    currency?: StringFilter<"Invoice"> | string
    due_date?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paid_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    sent_at?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    is_delete?: BoolFilter<"Invoice"> | boolean
    line_items?: JsonFilter<"Invoice">
    metadata?: JsonFilter<"Invoice">
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    payments?: PaymentListRelationFilter
    activities?: InvoiceActivityListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    invoice_number?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrderInput | SortOrder
    paid_at?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    is_delete?: SortOrder
    line_items?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invoice"> | string
    org_id?: UuidWithAggregatesFilter<"Invoice"> | string
    created_by_user_id?: StringWithAggregatesFilter<"Invoice"> | string
    contact_id?: UuidNullableWithAggregatesFilter<"Invoice"> | string | null
    invoice_number?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    title?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    status?: StringWithAggregatesFilter<"Invoice"> | string
    amount_cents?: BigIntWithAggregatesFilter<"Invoice"> | bigint | number
    tax_cents?: BigIntWithAggregatesFilter<"Invoice"> | bigint | number
    discount_cents?: BigIntWithAggregatesFilter<"Invoice"> | bigint | number
    total_cents?: BigIntWithAggregatesFilter<"Invoice"> | bigint | number
    paid_cents?: BigIntWithAggregatesFilter<"Invoice"> | bigint | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    due_date?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    paid_at?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    is_delete?: BoolWithAggregatesFilter<"Invoice"> | boolean
    line_items?: JsonWithAggregatesFilter<"Invoice">
    metadata?: JsonWithAggregatesFilter<"Invoice">
    created_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: UuidFilter<"Payment"> | string
    invoice_id?: UuidFilter<"Payment"> | string
    org_id?: UuidFilter<"Payment"> | string
    created_by_user_id?: StringFilter<"Payment"> | string
    amount_cents?: BigIntFilter<"Payment"> | bigint | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    processor?: StringNullableFilter<"Payment"> | string | null
    processor_id?: StringNullableFilter<"Payment"> | string | null
    refunded_cents?: BigIntFilter<"Payment"> | bigint | number
    notes?: StringNullableFilter<"Payment"> | string | null
    metadata?: JsonFilter<"Payment">
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    amount_cents?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    processor?: SortOrderInput | SortOrder
    processor_id?: SortOrderInput | SortOrder
    refunded_cents?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    invoice_id?: UuidFilter<"Payment"> | string
    org_id?: UuidFilter<"Payment"> | string
    created_by_user_id?: StringFilter<"Payment"> | string
    amount_cents?: BigIntFilter<"Payment"> | bigint | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    processor?: StringNullableFilter<"Payment"> | string | null
    processor_id?: StringNullableFilter<"Payment"> | string | null
    refunded_cents?: BigIntFilter<"Payment"> | bigint | number
    notes?: StringNullableFilter<"Payment"> | string | null
    metadata?: JsonFilter<"Payment">
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    amount_cents?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    processor?: SortOrderInput | SortOrder
    processor_id?: SortOrderInput | SortOrder
    refunded_cents?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Payment"> | string
    invoice_id?: UuidWithAggregatesFilter<"Payment"> | string
    org_id?: UuidWithAggregatesFilter<"Payment"> | string
    created_by_user_id?: StringWithAggregatesFilter<"Payment"> | string
    amount_cents?: BigIntWithAggregatesFilter<"Payment"> | bigint | number
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processor?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processor_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refunded_cents?: BigIntWithAggregatesFilter<"Payment"> | bigint | number
    notes?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    metadata?: JsonWithAggregatesFilter<"Payment">
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type InvoiceActivityWhereInput = {
    AND?: InvoiceActivityWhereInput | InvoiceActivityWhereInput[]
    OR?: InvoiceActivityWhereInput[]
    NOT?: InvoiceActivityWhereInput | InvoiceActivityWhereInput[]
    id?: UuidFilter<"InvoiceActivity"> | string
    invoice_id?: UuidFilter<"InvoiceActivity"> | string
    org_id?: UuidFilter<"InvoiceActivity"> | string
    user_id?: StringNullableFilter<"InvoiceActivity"> | string | null
    action?: StringFilter<"InvoiceActivity"> | string
    note?: StringNullableFilter<"InvoiceActivity"> | string | null
    metadata?: JsonFilter<"InvoiceActivity">
    created_at?: DateTimeFilter<"InvoiceActivity"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceActivityOrderByWithRelationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceActivityWhereInput | InvoiceActivityWhereInput[]
    OR?: InvoiceActivityWhereInput[]
    NOT?: InvoiceActivityWhereInput | InvoiceActivityWhereInput[]
    invoice_id?: UuidFilter<"InvoiceActivity"> | string
    org_id?: UuidFilter<"InvoiceActivity"> | string
    user_id?: StringNullableFilter<"InvoiceActivity"> | string | null
    action?: StringFilter<"InvoiceActivity"> | string
    note?: StringNullableFilter<"InvoiceActivity"> | string | null
    metadata?: JsonFilter<"InvoiceActivity">
    created_at?: DateTimeFilter<"InvoiceActivity"> | Date | string
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceActivityOrderByWithAggregationInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    _count?: InvoiceActivityCountOrderByAggregateInput
    _max?: InvoiceActivityMaxOrderByAggregateInput
    _min?: InvoiceActivityMinOrderByAggregateInput
  }

  export type InvoiceActivityScalarWhereWithAggregatesInput = {
    AND?: InvoiceActivityScalarWhereWithAggregatesInput | InvoiceActivityScalarWhereWithAggregatesInput[]
    OR?: InvoiceActivityScalarWhereWithAggregatesInput[]
    NOT?: InvoiceActivityScalarWhereWithAggregatesInput | InvoiceActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"InvoiceActivity"> | string
    invoice_id?: UuidWithAggregatesFilter<"InvoiceActivity"> | string
    org_id?: UuidWithAggregatesFilter<"InvoiceActivity"> | string
    user_id?: StringNullableWithAggregatesFilter<"InvoiceActivity"> | string | null
    action?: StringWithAggregatesFilter<"InvoiceActivity"> | string
    note?: StringNullableWithAggregatesFilter<"InvoiceActivity"> | string | null
    metadata?: JsonWithAggregatesFilter<"InvoiceActivity">
    created_at?: DateTimeWithAggregatesFilter<"InvoiceActivity"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: UuidFilter<"Deposit"> | string
    org_id?: UuidFilter<"Deposit"> | string
    created_by_user_id?: StringFilter<"Deposit"> | string
    contact_id?: UuidNullableFilter<"Deposit"> | string | null
    amount_cents?: BigIntFilter<"Deposit"> | bigint | number
    currency?: StringFilter<"Deposit"> | string
    status?: StringFilter<"Deposit"> | string
    description?: StringNullableFilter<"Deposit"> | string | null
    payment_method?: StringNullableFilter<"Deposit"> | string | null
    processor_id?: StringNullableFilter<"Deposit"> | string | null
    is_deleted?: BoolFilter<"Deposit"> | boolean
    metadata?: JsonFilter<"Deposit">
    created_at?: DateTimeFilter<"Deposit"> | Date | string
    updated_at?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    processor_id?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    org_id?: UuidFilter<"Deposit"> | string
    created_by_user_id?: StringFilter<"Deposit"> | string
    contact_id?: UuidNullableFilter<"Deposit"> | string | null
    amount_cents?: BigIntFilter<"Deposit"> | bigint | number
    currency?: StringFilter<"Deposit"> | string
    status?: StringFilter<"Deposit"> | string
    description?: StringNullableFilter<"Deposit"> | string | null
    payment_method?: StringNullableFilter<"Deposit"> | string | null
    processor_id?: StringNullableFilter<"Deposit"> | string | null
    is_deleted?: BoolFilter<"Deposit"> | boolean
    metadata?: JsonFilter<"Deposit">
    created_at?: DateTimeFilter<"Deposit"> | Date | string
    updated_at?: DateTimeFilter<"Deposit"> | Date | string
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrderInput | SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    payment_method?: SortOrderInput | SortOrder
    processor_id?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Deposit"> | string
    org_id?: UuidWithAggregatesFilter<"Deposit"> | string
    created_by_user_id?: StringWithAggregatesFilter<"Deposit"> | string
    contact_id?: UuidNullableWithAggregatesFilter<"Deposit"> | string | null
    amount_cents?: BigIntWithAggregatesFilter<"Deposit"> | bigint | number
    currency?: StringWithAggregatesFilter<"Deposit"> | string
    status?: StringWithAggregatesFilter<"Deposit"> | string
    description?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    payment_method?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    processor_id?: StringNullableWithAggregatesFilter<"Deposit"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"Deposit"> | boolean
    metadata?: JsonWithAggregatesFilter<"Deposit">
    created_at?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
    activities?: InvoiceActivityCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
    activities?: InvoiceActivityUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
    activities?: InvoiceActivityUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
    activities?: InvoiceActivityUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    invoice: InvoiceCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    invoice_id: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    invoice_id: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityCreateInput = {
    id?: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    invoice: InvoiceCreateNestedOneWithoutActivitiesInput
  }

  export type InvoiceActivityUncheckedCreateInput = {
    id?: string
    invoice_id: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type InvoiceActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type InvoiceActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityCreateManyInput = {
    id?: string
    invoice_id: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type InvoiceActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    amount_cents: bigint | number
    currency?: string
    status?: string
    description?: string | null
    payment_method?: string | null
    processor_id?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    amount_cents: bigint | number
    currency?: string
    status?: string
    description?: string | null
    payment_method?: string | null
    processor_id?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    amount_cents: bigint | number
    currency?: string
    status?: string
    description?: string | null
    payment_method?: string | null
    processor_id?: string | null
    is_deleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type InvoiceActivityListRelationFilter = {
    every?: InvoiceActivityWhereInput
    some?: InvoiceActivityWhereInput
    none?: InvoiceActivityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    invoice_number?: SortOrder
    title?: SortOrder
    status?: SortOrder
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    sent_at?: SortOrder
    is_delete?: SortOrder
    line_items?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    invoice_number?: SortOrder
    title?: SortOrder
    status?: SortOrder
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    sent_at?: SortOrder
    is_delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    invoice_number?: SortOrder
    title?: SortOrder
    status?: SortOrder
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
    currency?: SortOrder
    due_date?: SortOrder
    paid_at?: SortOrder
    sent_at?: SortOrder
    is_delete?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount_cents?: SortOrder
    tax_cents?: SortOrder
    discount_cents?: SortOrder
    total_cents?: SortOrder
    paid_cents?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    amount_cents?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processor?: SortOrder
    processor_id?: SortOrder
    refunded_cents?: SortOrder
    notes?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount_cents?: SortOrder
    refunded_cents?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    amount_cents?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processor?: SortOrder
    processor_id?: SortOrder
    refunded_cents?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    amount_cents?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    processor?: SortOrder
    processor_id?: SortOrder
    refunded_cents?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount_cents?: SortOrder
    refunded_cents?: SortOrder
  }

  export type InvoiceActivityCountOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    note?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type InvoiceActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
  }

  export type InvoiceActivityMinOrderByAggregateInput = {
    id?: SortOrder
    invoice_id?: SortOrder
    org_id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    payment_method?: SortOrder
    processor_id?: SortOrder
    is_deleted?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    payment_method?: SortOrder
    processor_id?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    contact_id?: SortOrder
    amount_cents?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    description?: SortOrder
    payment_method?: SortOrder
    processor_id?: SortOrder
    is_deleted?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount_cents?: SortOrder
  }

  export type PaymentCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceActivityCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput> | InvoiceActivityCreateWithoutInvoiceInput[] | InvoiceActivityUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceActivityCreateOrConnectWithoutInvoiceInput | InvoiceActivityCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceActivityCreateManyInvoiceInputEnvelope
    connect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceActivityUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput> | InvoiceActivityCreateWithoutInvoiceInput[] | InvoiceActivityUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceActivityCreateOrConnectWithoutInvoiceInput | InvoiceActivityCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceActivityCreateManyInvoiceInputEnvelope
    connect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceActivityUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput> | InvoiceActivityCreateWithoutInvoiceInput[] | InvoiceActivityUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceActivityCreateOrConnectWithoutInvoiceInput | InvoiceActivityCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceActivityUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceActivityUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceActivityCreateManyInvoiceInputEnvelope
    set?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    disconnect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    delete?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    connect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    update?: InvoiceActivityUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceActivityUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceActivityUpdateManyWithWhereWithoutInvoiceInput | InvoiceActivityUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceActivityScalarWhereInput | InvoiceActivityScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput> | PaymentCreateWithoutInvoiceInput[] | PaymentUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoiceInput | PaymentCreateOrConnectWithoutInvoiceInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutInvoiceInput | PaymentUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: PaymentCreateManyInvoiceInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutInvoiceInput | PaymentUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutInvoiceInput | PaymentUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceActivityUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput> | InvoiceActivityCreateWithoutInvoiceInput[] | InvoiceActivityUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceActivityCreateOrConnectWithoutInvoiceInput | InvoiceActivityCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceActivityUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceActivityUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceActivityCreateManyInvoiceInputEnvelope
    set?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    disconnect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    delete?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    connect?: InvoiceActivityWhereUniqueInput | InvoiceActivityWhereUniqueInput[]
    update?: InvoiceActivityUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceActivityUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceActivityUpdateManyWithWhereWithoutInvoiceInput | InvoiceActivityUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceActivityScalarWhereInput | InvoiceActivityScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentsInput
    upsert?: InvoiceUpsertWithoutPaymentsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutPaymentsInput, InvoiceUpdateWithoutPaymentsInput>, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<InvoiceCreateWithoutActivitiesInput, InvoiceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutActivitiesInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<InvoiceCreateWithoutActivitiesInput, InvoiceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutActivitiesInput
    upsert?: InvoiceUpsertWithoutActivitiesInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutActivitiesInput, InvoiceUpdateWithoutActivitiesInput>, InvoiceUncheckedUpdateWithoutActivitiesInput>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type PaymentCreateWithoutInvoiceInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUncheckedCreateWithoutInvoiceInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentCreateManyInvoiceInputEnvelope = {
    data: PaymentCreateManyInvoiceInput | PaymentCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceActivityCreateWithoutInvoiceInput = {
    id?: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type InvoiceActivityUncheckedCreateWithoutInvoiceInput = {
    id?: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type InvoiceActivityCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceActivityWhereUniqueInput
    create: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceActivityCreateManyInvoiceInputEnvelope = {
    data: InvoiceActivityCreateManyInvoiceInput | InvoiceActivityCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
    create: XOR<PaymentCreateWithoutInvoiceInput, PaymentUncheckedCreateWithoutInvoiceInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutInvoiceInput, PaymentUncheckedUpdateWithoutInvoiceInput>
  }

  export type PaymentUpdateManyWithWhereWithoutInvoiceInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: UuidFilter<"Payment"> | string
    invoice_id?: UuidFilter<"Payment"> | string
    org_id?: UuidFilter<"Payment"> | string
    created_by_user_id?: StringFilter<"Payment"> | string
    amount_cents?: BigIntFilter<"Payment"> | bigint | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    processor?: StringNullableFilter<"Payment"> | string | null
    processor_id?: StringNullableFilter<"Payment"> | string | null
    refunded_cents?: BigIntFilter<"Payment"> | bigint | number
    notes?: StringNullableFilter<"Payment"> | string | null
    metadata?: JsonFilter<"Payment">
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
  }

  export type InvoiceActivityUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceActivityWhereUniqueInput
    update: XOR<InvoiceActivityUpdateWithoutInvoiceInput, InvoiceActivityUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceActivityCreateWithoutInvoiceInput, InvoiceActivityUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceActivityUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceActivityWhereUniqueInput
    data: XOR<InvoiceActivityUpdateWithoutInvoiceInput, InvoiceActivityUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceActivityUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceActivityScalarWhereInput
    data: XOR<InvoiceActivityUpdateManyMutationInput, InvoiceActivityUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceActivityScalarWhereInput = {
    AND?: InvoiceActivityScalarWhereInput | InvoiceActivityScalarWhereInput[]
    OR?: InvoiceActivityScalarWhereInput[]
    NOT?: InvoiceActivityScalarWhereInput | InvoiceActivityScalarWhereInput[]
    id?: UuidFilter<"InvoiceActivity"> | string
    invoice_id?: UuidFilter<"InvoiceActivity"> | string
    org_id?: UuidFilter<"InvoiceActivity"> | string
    user_id?: StringNullableFilter<"InvoiceActivity"> | string | null
    action?: StringFilter<"InvoiceActivity"> | string
    note?: StringNullableFilter<"InvoiceActivity"> | string | null
    metadata?: JsonFilter<"InvoiceActivity">
    created_at?: DateTimeFilter<"InvoiceActivity"> | Date | string
  }

  export type InvoiceCreateWithoutPaymentsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: InvoiceActivityCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    activities?: InvoiceActivityUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutPaymentsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceUpsertWithoutPaymentsInput = {
    update: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
    create: XOR<InvoiceCreateWithoutPaymentsInput, InvoiceUncheckedCreateWithoutPaymentsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutPaymentsInput, InvoiceUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: InvoiceActivityUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: InvoiceActivityUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateWithoutActivitiesInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutActivitiesInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    contact_id?: string | null
    invoice_number?: string | null
    title?: string | null
    status?: string
    amount_cents?: bigint | number
    tax_cents?: bigint | number
    discount_cents?: bigint | number
    total_cents?: bigint | number
    paid_cents?: bigint | number
    currency?: string
    due_date?: Date | string | null
    paid_at?: Date | string | null
    sent_at?: Date | string | null
    is_delete?: boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutActivitiesInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutActivitiesInput, InvoiceUncheckedCreateWithoutActivitiesInput>
  }

  export type InvoiceUpsertWithoutActivitiesInput = {
    update: XOR<InvoiceUpdateWithoutActivitiesInput, InvoiceUncheckedUpdateWithoutActivitiesInput>
    create: XOR<InvoiceCreateWithoutActivitiesInput, InvoiceUncheckedCreateWithoutActivitiesInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutActivitiesInput, InvoiceUncheckedUpdateWithoutActivitiesInput>
  }

  export type InvoiceUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_number?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    tax_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    discount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    total_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    paid_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    currency?: StringFieldUpdateOperationsInput | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paid_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    line_items?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type PaymentCreateManyInvoiceInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    amount_cents: bigint | number
    method: string
    status?: string
    reference?: string | null
    processor?: string | null
    processor_id?: string | null
    refunded_cents?: bigint | number
    notes?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceActivityCreateManyInvoiceInput = {
    id?: string
    org_id: string
    user_id?: string | null
    action: string
    note?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type PaymentUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    amount_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    processor?: NullableStringFieldUpdateOperationsInput | string | null
    processor_id?: NullableStringFieldUpdateOperationsInput | string | null
    refunded_cents?: BigIntFieldUpdateOperationsInput | bigint | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceActivityUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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