
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
 * Model BookingType
 * 
 */
export type BookingType = $Result.DefaultSelection<Prisma.$BookingTypePayload>
/**
 * Model BookingSlot
 * 
 */
export type BookingSlot = $Result.DefaultSelection<Prisma.$BookingSlotPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model BookingTypeGroup
 * 
 */
export type BookingTypeGroup = $Result.DefaultSelection<Prisma.$BookingTypeGroupPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BookingTypes
 * const bookingTypes = await prisma.bookingType.findMany()
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
   * // Fetch zero or more BookingTypes
   * const bookingTypes = await prisma.bookingType.findMany()
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
   * `prisma.bookingType`: Exposes CRUD operations for the **BookingType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingTypes
    * const bookingTypes = await prisma.bookingType.findMany()
    * ```
    */
  get bookingType(): Prisma.BookingTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingSlot`: Exposes CRUD operations for the **BookingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingSlots
    * const bookingSlots = await prisma.bookingSlot.findMany()
    * ```
    */
  get bookingSlot(): Prisma.BookingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingTypeGroup`: Exposes CRUD operations for the **BookingTypeGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingTypeGroups
    * const bookingTypeGroups = await prisma.bookingTypeGroup.findMany()
    * ```
    */
  get bookingTypeGroup(): Prisma.BookingTypeGroupDelegate<ExtArgs, ClientOptions>;
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
    BookingType: 'BookingType',
    BookingSlot: 'BookingSlot',
    Appointment: 'Appointment',
    BookingTypeGroup: 'BookingTypeGroup'
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
      modelProps: "bookingType" | "bookingSlot" | "appointment" | "bookingTypeGroup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BookingType: {
        payload: Prisma.$BookingTypePayload<ExtArgs>
        fields: Prisma.BookingTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          findFirst: {
            args: Prisma.BookingTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          findMany: {
            args: Prisma.BookingTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>[]
          }
          create: {
            args: Prisma.BookingTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          createMany: {
            args: Prisma.BookingTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>[]
          }
          delete: {
            args: Prisma.BookingTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          update: {
            args: Prisma.BookingTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          deleteMany: {
            args: Prisma.BookingTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>[]
          }
          upsert: {
            args: Prisma.BookingTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypePayload>
          }
          aggregate: {
            args: Prisma.BookingTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingType>
          }
          groupBy: {
            args: Prisma.BookingTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingTypeCountArgs<ExtArgs>
            result: $Utils.Optional<BookingTypeCountAggregateOutputType> | number
          }
        }
      }
      BookingSlot: {
        payload: Prisma.$BookingSlotPayload<ExtArgs>
        fields: Prisma.BookingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          findFirst: {
            args: Prisma.BookingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          findMany: {
            args: Prisma.BookingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>[]
          }
          create: {
            args: Prisma.BookingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          createMany: {
            args: Prisma.BookingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>[]
          }
          delete: {
            args: Prisma.BookingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          update: {
            args: Prisma.BookingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          deleteMany: {
            args: Prisma.BookingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>[]
          }
          upsert: {
            args: Prisma.BookingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingSlotPayload>
          }
          aggregate: {
            args: Prisma.BookingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingSlot>
          }
          groupBy: {
            args: Prisma.BookingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<BookingSlotCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      BookingTypeGroup: {
        payload: Prisma.$BookingTypeGroupPayload<ExtArgs>
        fields: Prisma.BookingTypeGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingTypeGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingTypeGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          findFirst: {
            args: Prisma.BookingTypeGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingTypeGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          findMany: {
            args: Prisma.BookingTypeGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>[]
          }
          create: {
            args: Prisma.BookingTypeGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          createMany: {
            args: Prisma.BookingTypeGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingTypeGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>[]
          }
          delete: {
            args: Prisma.BookingTypeGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          update: {
            args: Prisma.BookingTypeGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          deleteMany: {
            args: Prisma.BookingTypeGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingTypeGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingTypeGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>[]
          }
          upsert: {
            args: Prisma.BookingTypeGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingTypeGroupPayload>
          }
          aggregate: {
            args: Prisma.BookingTypeGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingTypeGroup>
          }
          groupBy: {
            args: Prisma.BookingTypeGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingTypeGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingTypeGroupCountArgs<ExtArgs>
            result: $Utils.Optional<BookingTypeGroupCountAggregateOutputType> | number
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
    bookingType?: BookingTypeOmit
    bookingSlot?: BookingSlotOmit
    appointment?: AppointmentOmit
    bookingTypeGroup?: BookingTypeGroupOmit
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
   * Count Type BookingTypeCountOutputType
   */

  export type BookingTypeCountOutputType = {
    slots: number
    appointments: number
  }

  export type BookingTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | BookingTypeCountOutputTypeCountSlotsArgs
    appointments?: boolean | BookingTypeCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * BookingTypeCountOutputType without action
   */
  export type BookingTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeCountOutputType
     */
    select?: BookingTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingTypeCountOutputType without action
   */
  export type BookingTypeCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSlotWhereInput
  }

  /**
   * BookingTypeCountOutputType without action
   */
  export type BookingTypeCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BookingType
   */

  export type AggregateBookingType = {
    _count: BookingTypeCountAggregateOutputType | null
    _avg: BookingTypeAvgAggregateOutputType | null
    _sum: BookingTypeSumAggregateOutputType | null
    _min: BookingTypeMinAggregateOutputType | null
    _max: BookingTypeMaxAggregateOutputType | null
  }

  export type BookingTypeAvgAggregateOutputType = {
    duration_minutes: number | null
    notification_mins: number | null
  }

  export type BookingTypeSumAggregateOutputType = {
    duration_minutes: number | null
    notification_mins: number | null
  }

  export type BookingTypeMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    title: string | null
    description: string | null
    link: string | null
    meeting_type: string | null
    location: string | null
    duration_minutes: number | null
    color: string | null
    notification_mins: number | null
    notification_type: string | null
    email_subject: string | null
    email_body: string | null
    submit_button_label: string | null
    status: string | null
    is_archived: boolean | null
    synced_with_schedule: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingTypeMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    title: string | null
    description: string | null
    link: string | null
    meeting_type: string | null
    location: string | null
    duration_minutes: number | null
    color: string | null
    notification_mins: number | null
    notification_type: string | null
    email_subject: string | null
    email_body: string | null
    submit_button_label: string | null
    status: string | null
    is_archived: boolean | null
    synced_with_schedule: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingTypeCountAggregateOutputType = {
    id: number
    org_id: number
    created_by_user_id: number
    title: number
    description: number
    link: number
    meeting_type: number
    location: number
    geo_location: number
    duration_minutes: number
    color: number
    notification_mins: number
    notification_type: number
    email_subject: number
    email_body: number
    submit_button_label: number
    status: number
    is_archived: number
    synced_with_schedule: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingTypeAvgAggregateInputType = {
    duration_minutes?: true
    notification_mins?: true
  }

  export type BookingTypeSumAggregateInputType = {
    duration_minutes?: true
    notification_mins?: true
  }

  export type BookingTypeMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    link?: true
    meeting_type?: true
    location?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    email_subject?: true
    email_body?: true
    submit_button_label?: true
    status?: true
    is_archived?: true
    synced_with_schedule?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingTypeMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    link?: true
    meeting_type?: true
    location?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    email_subject?: true
    email_body?: true
    submit_button_label?: true
    status?: true
    is_archived?: true
    synced_with_schedule?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingTypeCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    link?: true
    meeting_type?: true
    location?: true
    geo_location?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    email_subject?: true
    email_body?: true
    submit_button_label?: true
    status?: true
    is_archived?: true
    synced_with_schedule?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingType to aggregate.
     */
    where?: BookingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypes to fetch.
     */
    orderBy?: BookingTypeOrderByWithRelationInput | BookingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingTypes
    **/
    _count?: true | BookingTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingTypeMaxAggregateInputType
  }

  export type GetBookingTypeAggregateType<T extends BookingTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingType[P]>
      : GetScalarType<T[P], AggregateBookingType[P]>
  }




  export type BookingTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingTypeWhereInput
    orderBy?: BookingTypeOrderByWithAggregationInput | BookingTypeOrderByWithAggregationInput[]
    by: BookingTypeScalarFieldEnum[] | BookingTypeScalarFieldEnum
    having?: BookingTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingTypeCountAggregateInputType | true
    _avg?: BookingTypeAvgAggregateInputType
    _sum?: BookingTypeSumAggregateInputType
    _min?: BookingTypeMinAggregateInputType
    _max?: BookingTypeMaxAggregateInputType
  }

  export type BookingTypeGroupByOutputType = {
    id: string
    org_id: string
    created_by_user_id: string
    title: string
    description: string | null
    link: string
    meeting_type: string
    location: string | null
    geo_location: JsonValue | null
    duration_minutes: number
    color: string | null
    notification_mins: number | null
    notification_type: string | null
    email_subject: string | null
    email_body: string | null
    submit_button_label: string
    status: string
    is_archived: boolean
    synced_with_schedule: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: BookingTypeCountAggregateOutputType | null
    _avg: BookingTypeAvgAggregateOutputType | null
    _sum: BookingTypeSumAggregateOutputType | null
    _min: BookingTypeMinAggregateOutputType | null
    _max: BookingTypeMaxAggregateOutputType | null
  }

  type GetBookingTypeGroupByPayload<T extends BookingTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingTypeGroupByOutputType[P]>
            : GetScalarType<T[P], BookingTypeGroupByOutputType[P]>
        }
      >
    >


  export type BookingTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    meeting_type?: boolean
    location?: boolean
    geo_location?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    email_subject?: boolean
    email_body?: boolean
    submit_button_label?: boolean
    status?: boolean
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    slots?: boolean | BookingType$slotsArgs<ExtArgs>
    appointments?: boolean | BookingType$appointmentsArgs<ExtArgs>
    _count?: boolean | BookingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingType"]>

  export type BookingTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    meeting_type?: boolean
    location?: boolean
    geo_location?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    email_subject?: boolean
    email_body?: boolean
    submit_button_label?: boolean
    status?: boolean
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["bookingType"]>

  export type BookingTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    meeting_type?: boolean
    location?: boolean
    geo_location?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    email_subject?: boolean
    email_body?: boolean
    submit_button_label?: boolean
    status?: boolean
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["bookingType"]>

  export type BookingTypeSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    link?: boolean
    meeting_type?: boolean
    location?: boolean
    geo_location?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    email_subject?: boolean
    email_body?: boolean
    submit_button_label?: boolean
    status?: boolean
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by_user_id" | "title" | "description" | "link" | "meeting_type" | "location" | "geo_location" | "duration_minutes" | "color" | "notification_mins" | "notification_type" | "email_subject" | "email_body" | "submit_button_label" | "status" | "is_archived" | "synced_with_schedule" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["bookingType"]>
  export type BookingTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | BookingType$slotsArgs<ExtArgs>
    appointments?: boolean | BookingType$appointmentsArgs<ExtArgs>
    _count?: boolean | BookingTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookingTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookingTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingType"
    objects: {
      slots: Prisma.$BookingSlotPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by_user_id: string
      title: string
      description: string | null
      link: string
      meeting_type: string
      location: string | null
      geo_location: Prisma.JsonValue | null
      duration_minutes: number
      color: string | null
      notification_mins: number | null
      notification_type: string | null
      email_subject: string | null
      email_body: string | null
      submit_button_label: string
      status: string
      is_archived: boolean
      synced_with_schedule: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bookingType"]>
    composites: {}
  }

  type BookingTypeGetPayload<S extends boolean | null | undefined | BookingTypeDefaultArgs> = $Result.GetResult<Prisma.$BookingTypePayload, S>

  type BookingTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingTypeCountAggregateInputType | true
    }

  export interface BookingTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingType'], meta: { name: 'BookingType' } }
    /**
     * Find zero or one BookingType that matches the filter.
     * @param {BookingTypeFindUniqueArgs} args - Arguments to find a BookingType
     * @example
     * // Get one BookingType
     * const bookingType = await prisma.bookingType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingTypeFindUniqueArgs>(args: SelectSubset<T, BookingTypeFindUniqueArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingTypeFindUniqueOrThrowArgs} args - Arguments to find a BookingType
     * @example
     * // Get one BookingType
     * const bookingType = await prisma.bookingType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeFindFirstArgs} args - Arguments to find a BookingType
     * @example
     * // Get one BookingType
     * const bookingType = await prisma.bookingType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingTypeFindFirstArgs>(args?: SelectSubset<T, BookingTypeFindFirstArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeFindFirstOrThrowArgs} args - Arguments to find a BookingType
     * @example
     * // Get one BookingType
     * const bookingType = await prisma.bookingType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingTypes
     * const bookingTypes = await prisma.bookingType.findMany()
     * 
     * // Get first 10 BookingTypes
     * const bookingTypes = await prisma.bookingType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingTypeWithIdOnly = await prisma.bookingType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingTypeFindManyArgs>(args?: SelectSubset<T, BookingTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingType.
     * @param {BookingTypeCreateArgs} args - Arguments to create a BookingType.
     * @example
     * // Create one BookingType
     * const BookingType = await prisma.bookingType.create({
     *   data: {
     *     // ... data to create a BookingType
     *   }
     * })
     * 
     */
    create<T extends BookingTypeCreateArgs>(args: SelectSubset<T, BookingTypeCreateArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingTypes.
     * @param {BookingTypeCreateManyArgs} args - Arguments to create many BookingTypes.
     * @example
     * // Create many BookingTypes
     * const bookingType = await prisma.bookingType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingTypeCreateManyArgs>(args?: SelectSubset<T, BookingTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingTypes and returns the data saved in the database.
     * @param {BookingTypeCreateManyAndReturnArgs} args - Arguments to create many BookingTypes.
     * @example
     * // Create many BookingTypes
     * const bookingType = await prisma.bookingType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingTypes and only return the `id`
     * const bookingTypeWithIdOnly = await prisma.bookingType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingType.
     * @param {BookingTypeDeleteArgs} args - Arguments to delete one BookingType.
     * @example
     * // Delete one BookingType
     * const BookingType = await prisma.bookingType.delete({
     *   where: {
     *     // ... filter to delete one BookingType
     *   }
     * })
     * 
     */
    delete<T extends BookingTypeDeleteArgs>(args: SelectSubset<T, BookingTypeDeleteArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingType.
     * @param {BookingTypeUpdateArgs} args - Arguments to update one BookingType.
     * @example
     * // Update one BookingType
     * const bookingType = await prisma.bookingType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingTypeUpdateArgs>(args: SelectSubset<T, BookingTypeUpdateArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingTypes.
     * @param {BookingTypeDeleteManyArgs} args - Arguments to filter BookingTypes to delete.
     * @example
     * // Delete a few BookingTypes
     * const { count } = await prisma.bookingType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingTypeDeleteManyArgs>(args?: SelectSubset<T, BookingTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingTypes
     * const bookingType = await prisma.bookingType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingTypeUpdateManyArgs>(args: SelectSubset<T, BookingTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTypes and returns the data updated in the database.
     * @param {BookingTypeUpdateManyAndReturnArgs} args - Arguments to update many BookingTypes.
     * @example
     * // Update many BookingTypes
     * const bookingType = await prisma.bookingType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingTypes and only return the `id`
     * const bookingTypeWithIdOnly = await prisma.bookingType.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingType.
     * @param {BookingTypeUpsertArgs} args - Arguments to update or create a BookingType.
     * @example
     * // Update or create a BookingType
     * const bookingType = await prisma.bookingType.upsert({
     *   create: {
     *     // ... data to create a BookingType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingType we want to update
     *   }
     * })
     */
    upsert<T extends BookingTypeUpsertArgs>(args: SelectSubset<T, BookingTypeUpsertArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeCountArgs} args - Arguments to filter BookingTypes to count.
     * @example
     * // Count the number of BookingTypes
     * const count = await prisma.bookingType.count({
     *   where: {
     *     // ... the filter for the BookingTypes we want to count
     *   }
     * })
    **/
    count<T extends BookingTypeCountArgs>(
      args?: Subset<T, BookingTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingTypeAggregateArgs>(args: Subset<T, BookingTypeAggregateArgs>): Prisma.PrismaPromise<GetBookingTypeAggregateType<T>>

    /**
     * Group by BookingType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupByArgs} args - Group by arguments.
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
      T extends BookingTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingTypeGroupByArgs['orderBy'] }
        : { orderBy?: BookingTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingType model
   */
  readonly fields: BookingTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slots<T extends BookingType$slotsArgs<ExtArgs> = {}>(args?: Subset<T, BookingType$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends BookingType$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, BookingType$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BookingType model
   */
  interface BookingTypeFieldRefs {
    readonly id: FieldRef<"BookingType", 'String'>
    readonly org_id: FieldRef<"BookingType", 'String'>
    readonly created_by_user_id: FieldRef<"BookingType", 'String'>
    readonly title: FieldRef<"BookingType", 'String'>
    readonly description: FieldRef<"BookingType", 'String'>
    readonly link: FieldRef<"BookingType", 'String'>
    readonly meeting_type: FieldRef<"BookingType", 'String'>
    readonly location: FieldRef<"BookingType", 'String'>
    readonly geo_location: FieldRef<"BookingType", 'Json'>
    readonly duration_minutes: FieldRef<"BookingType", 'Int'>
    readonly color: FieldRef<"BookingType", 'String'>
    readonly notification_mins: FieldRef<"BookingType", 'Int'>
    readonly notification_type: FieldRef<"BookingType", 'String'>
    readonly email_subject: FieldRef<"BookingType", 'String'>
    readonly email_body: FieldRef<"BookingType", 'String'>
    readonly submit_button_label: FieldRef<"BookingType", 'String'>
    readonly status: FieldRef<"BookingType", 'String'>
    readonly is_archived: FieldRef<"BookingType", 'Boolean'>
    readonly synced_with_schedule: FieldRef<"BookingType", 'Boolean'>
    readonly metadata: FieldRef<"BookingType", 'Json'>
    readonly created_at: FieldRef<"BookingType", 'DateTime'>
    readonly updated_at: FieldRef<"BookingType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingType findUnique
   */
  export type BookingTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter, which BookingType to fetch.
     */
    where: BookingTypeWhereUniqueInput
  }

  /**
   * BookingType findUniqueOrThrow
   */
  export type BookingTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter, which BookingType to fetch.
     */
    where: BookingTypeWhereUniqueInput
  }

  /**
   * BookingType findFirst
   */
  export type BookingTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter, which BookingType to fetch.
     */
    where?: BookingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypes to fetch.
     */
    orderBy?: BookingTypeOrderByWithRelationInput | BookingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTypes.
     */
    cursor?: BookingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTypes.
     */
    distinct?: BookingTypeScalarFieldEnum | BookingTypeScalarFieldEnum[]
  }

  /**
   * BookingType findFirstOrThrow
   */
  export type BookingTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter, which BookingType to fetch.
     */
    where?: BookingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypes to fetch.
     */
    orderBy?: BookingTypeOrderByWithRelationInput | BookingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTypes.
     */
    cursor?: BookingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTypes.
     */
    distinct?: BookingTypeScalarFieldEnum | BookingTypeScalarFieldEnum[]
  }

  /**
   * BookingType findMany
   */
  export type BookingTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter, which BookingTypes to fetch.
     */
    where?: BookingTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypes to fetch.
     */
    orderBy?: BookingTypeOrderByWithRelationInput | BookingTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingTypes.
     */
    cursor?: BookingTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypes.
     */
    skip?: number
    distinct?: BookingTypeScalarFieldEnum | BookingTypeScalarFieldEnum[]
  }

  /**
   * BookingType create
   */
  export type BookingTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingType.
     */
    data: XOR<BookingTypeCreateInput, BookingTypeUncheckedCreateInput>
  }

  /**
   * BookingType createMany
   */
  export type BookingTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingTypes.
     */
    data: BookingTypeCreateManyInput | BookingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingType createManyAndReturn
   */
  export type BookingTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * The data used to create many BookingTypes.
     */
    data: BookingTypeCreateManyInput | BookingTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingType update
   */
  export type BookingTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingType.
     */
    data: XOR<BookingTypeUpdateInput, BookingTypeUncheckedUpdateInput>
    /**
     * Choose, which BookingType to update.
     */
    where: BookingTypeWhereUniqueInput
  }

  /**
   * BookingType updateMany
   */
  export type BookingTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingTypes.
     */
    data: XOR<BookingTypeUpdateManyMutationInput, BookingTypeUncheckedUpdateManyInput>
    /**
     * Filter which BookingTypes to update
     */
    where?: BookingTypeWhereInput
    /**
     * Limit how many BookingTypes to update.
     */
    limit?: number
  }

  /**
   * BookingType updateManyAndReturn
   */
  export type BookingTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * The data used to update BookingTypes.
     */
    data: XOR<BookingTypeUpdateManyMutationInput, BookingTypeUncheckedUpdateManyInput>
    /**
     * Filter which BookingTypes to update
     */
    where?: BookingTypeWhereInput
    /**
     * Limit how many BookingTypes to update.
     */
    limit?: number
  }

  /**
   * BookingType upsert
   */
  export type BookingTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingType to update in case it exists.
     */
    where: BookingTypeWhereUniqueInput
    /**
     * In case the BookingType found by the `where` argument doesn't exist, create a new BookingType with this data.
     */
    create: XOR<BookingTypeCreateInput, BookingTypeUncheckedCreateInput>
    /**
     * In case the BookingType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingTypeUpdateInput, BookingTypeUncheckedUpdateInput>
  }

  /**
   * BookingType delete
   */
  export type BookingTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    /**
     * Filter which BookingType to delete.
     */
    where: BookingTypeWhereUniqueInput
  }

  /**
   * BookingType deleteMany
   */
  export type BookingTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingTypes to delete
     */
    where?: BookingTypeWhereInput
    /**
     * Limit how many BookingTypes to delete.
     */
    limit?: number
  }

  /**
   * BookingType.slots
   */
  export type BookingType$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    where?: BookingSlotWhereInput
    orderBy?: BookingSlotOrderByWithRelationInput | BookingSlotOrderByWithRelationInput[]
    cursor?: BookingSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingSlotScalarFieldEnum | BookingSlotScalarFieldEnum[]
  }

  /**
   * BookingType.appointments
   */
  export type BookingType$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * BookingType without action
   */
  export type BookingTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
  }


  /**
   * Model BookingSlot
   */

  export type AggregateBookingSlot = {
    _count: BookingSlotCountAggregateOutputType | null
    _avg: BookingSlotAvgAggregateOutputType | null
    _sum: BookingSlotSumAggregateOutputType | null
    _min: BookingSlotMinAggregateOutputType | null
    _max: BookingSlotMaxAggregateOutputType | null
  }

  export type BookingSlotAvgAggregateOutputType = {
    capacity: number | null
    booked_count: number | null
  }

  export type BookingSlotSumAggregateOutputType = {
    capacity: number | null
    booked_count: number | null
  }

  export type BookingSlotMinAggregateOutputType = {
    id: string | null
    booking_type_id: string | null
    date: Date | null
    start_time: string | null
    end_time: string | null
    is_available: boolean | null
    capacity: number | null
    booked_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingSlotMaxAggregateOutputType = {
    id: string | null
    booking_type_id: string | null
    date: Date | null
    start_time: string | null
    end_time: string | null
    is_available: boolean | null
    capacity: number | null
    booked_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingSlotCountAggregateOutputType = {
    id: number
    booking_type_id: number
    date: number
    start_time: number
    end_time: number
    is_available: number
    capacity: number
    booked_count: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingSlotAvgAggregateInputType = {
    capacity?: true
    booked_count?: true
  }

  export type BookingSlotSumAggregateInputType = {
    capacity?: true
    booked_count?: true
  }

  export type BookingSlotMinAggregateInputType = {
    id?: true
    booking_type_id?: true
    date?: true
    start_time?: true
    end_time?: true
    is_available?: true
    capacity?: true
    booked_count?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingSlotMaxAggregateInputType = {
    id?: true
    booking_type_id?: true
    date?: true
    start_time?: true
    end_time?: true
    is_available?: true
    capacity?: true
    booked_count?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingSlotCountAggregateInputType = {
    id?: true
    booking_type_id?: true
    date?: true
    start_time?: true
    end_time?: true
    is_available?: true
    capacity?: true
    booked_count?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSlot to aggregate.
     */
    where?: BookingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSlots to fetch.
     */
    orderBy?: BookingSlotOrderByWithRelationInput | BookingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingSlots
    **/
    _count?: true | BookingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingSlotMaxAggregateInputType
  }

  export type GetBookingSlotAggregateType<T extends BookingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingSlot[P]>
      : GetScalarType<T[P], AggregateBookingSlot[P]>
  }




  export type BookingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingSlotWhereInput
    orderBy?: BookingSlotOrderByWithAggregationInput | BookingSlotOrderByWithAggregationInput[]
    by: BookingSlotScalarFieldEnum[] | BookingSlotScalarFieldEnum
    having?: BookingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingSlotCountAggregateInputType | true
    _avg?: BookingSlotAvgAggregateInputType
    _sum?: BookingSlotSumAggregateInputType
    _min?: BookingSlotMinAggregateInputType
    _max?: BookingSlotMaxAggregateInputType
  }

  export type BookingSlotGroupByOutputType = {
    id: string
    booking_type_id: string
    date: Date
    start_time: string
    end_time: string
    is_available: boolean
    capacity: number
    booked_count: number
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: BookingSlotCountAggregateOutputType | null
    _avg: BookingSlotAvgAggregateOutputType | null
    _sum: BookingSlotSumAggregateOutputType | null
    _min: BookingSlotMinAggregateOutputType | null
    _max: BookingSlotMaxAggregateOutputType | null
  }

  type GetBookingSlotGroupByPayload<T extends BookingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], BookingSlotGroupByOutputType[P]>
        }
      >
    >


  export type BookingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_type_id?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    capacity?: boolean
    booked_count?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSlot"]>

  export type BookingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_type_id?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    capacity?: boolean
    booked_count?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSlot"]>

  export type BookingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    booking_type_id?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    capacity?: boolean
    booked_count?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingSlot"]>

  export type BookingSlotSelectScalar = {
    id?: boolean
    booking_type_id?: boolean
    date?: boolean
    start_time?: boolean
    end_time?: boolean
    is_available?: boolean
    capacity?: boolean
    booked_count?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "booking_type_id" | "date" | "start_time" | "end_time" | "is_available" | "capacity" | "booked_count" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["bookingSlot"]>
  export type BookingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }
  export type BookingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }
  export type BookingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | BookingTypeDefaultArgs<ExtArgs>
  }

  export type $BookingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingSlot"
    objects: {
      booking_type: Prisma.$BookingTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      booking_type_id: string
      date: Date
      start_time: string
      end_time: string
      is_available: boolean
      capacity: number
      booked_count: number
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bookingSlot"]>
    composites: {}
  }

  type BookingSlotGetPayload<S extends boolean | null | undefined | BookingSlotDefaultArgs> = $Result.GetResult<Prisma.$BookingSlotPayload, S>

  type BookingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingSlotCountAggregateInputType | true
    }

  export interface BookingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingSlot'], meta: { name: 'BookingSlot' } }
    /**
     * Find zero or one BookingSlot that matches the filter.
     * @param {BookingSlotFindUniqueArgs} args - Arguments to find a BookingSlot
     * @example
     * // Get one BookingSlot
     * const bookingSlot = await prisma.bookingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingSlotFindUniqueArgs>(args: SelectSubset<T, BookingSlotFindUniqueArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingSlotFindUniqueOrThrowArgs} args - Arguments to find a BookingSlot
     * @example
     * // Get one BookingSlot
     * const bookingSlot = await prisma.bookingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotFindFirstArgs} args - Arguments to find a BookingSlot
     * @example
     * // Get one BookingSlot
     * const bookingSlot = await prisma.bookingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingSlotFindFirstArgs>(args?: SelectSubset<T, BookingSlotFindFirstArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotFindFirstOrThrowArgs} args - Arguments to find a BookingSlot
     * @example
     * // Get one BookingSlot
     * const bookingSlot = await prisma.bookingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingSlots
     * const bookingSlots = await prisma.bookingSlot.findMany()
     * 
     * // Get first 10 BookingSlots
     * const bookingSlots = await prisma.bookingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingSlotWithIdOnly = await prisma.bookingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingSlotFindManyArgs>(args?: SelectSubset<T, BookingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingSlot.
     * @param {BookingSlotCreateArgs} args - Arguments to create a BookingSlot.
     * @example
     * // Create one BookingSlot
     * const BookingSlot = await prisma.bookingSlot.create({
     *   data: {
     *     // ... data to create a BookingSlot
     *   }
     * })
     * 
     */
    create<T extends BookingSlotCreateArgs>(args: SelectSubset<T, BookingSlotCreateArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingSlots.
     * @param {BookingSlotCreateManyArgs} args - Arguments to create many BookingSlots.
     * @example
     * // Create many BookingSlots
     * const bookingSlot = await prisma.bookingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingSlotCreateManyArgs>(args?: SelectSubset<T, BookingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingSlots and returns the data saved in the database.
     * @param {BookingSlotCreateManyAndReturnArgs} args - Arguments to create many BookingSlots.
     * @example
     * // Create many BookingSlots
     * const bookingSlot = await prisma.bookingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingSlots and only return the `id`
     * const bookingSlotWithIdOnly = await prisma.bookingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingSlot.
     * @param {BookingSlotDeleteArgs} args - Arguments to delete one BookingSlot.
     * @example
     * // Delete one BookingSlot
     * const BookingSlot = await prisma.bookingSlot.delete({
     *   where: {
     *     // ... filter to delete one BookingSlot
     *   }
     * })
     * 
     */
    delete<T extends BookingSlotDeleteArgs>(args: SelectSubset<T, BookingSlotDeleteArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingSlot.
     * @param {BookingSlotUpdateArgs} args - Arguments to update one BookingSlot.
     * @example
     * // Update one BookingSlot
     * const bookingSlot = await prisma.bookingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingSlotUpdateArgs>(args: SelectSubset<T, BookingSlotUpdateArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingSlots.
     * @param {BookingSlotDeleteManyArgs} args - Arguments to filter BookingSlots to delete.
     * @example
     * // Delete a few BookingSlots
     * const { count } = await prisma.bookingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingSlotDeleteManyArgs>(args?: SelectSubset<T, BookingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingSlots
     * const bookingSlot = await prisma.bookingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingSlotUpdateManyArgs>(args: SelectSubset<T, BookingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingSlots and returns the data updated in the database.
     * @param {BookingSlotUpdateManyAndReturnArgs} args - Arguments to update many BookingSlots.
     * @example
     * // Update many BookingSlots
     * const bookingSlot = await prisma.bookingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingSlots and only return the `id`
     * const bookingSlotWithIdOnly = await prisma.bookingSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingSlot.
     * @param {BookingSlotUpsertArgs} args - Arguments to update or create a BookingSlot.
     * @example
     * // Update or create a BookingSlot
     * const bookingSlot = await prisma.bookingSlot.upsert({
     *   create: {
     *     // ... data to create a BookingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingSlot we want to update
     *   }
     * })
     */
    upsert<T extends BookingSlotUpsertArgs>(args: SelectSubset<T, BookingSlotUpsertArgs<ExtArgs>>): Prisma__BookingSlotClient<$Result.GetResult<Prisma.$BookingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotCountArgs} args - Arguments to filter BookingSlots to count.
     * @example
     * // Count the number of BookingSlots
     * const count = await prisma.bookingSlot.count({
     *   where: {
     *     // ... the filter for the BookingSlots we want to count
     *   }
     * })
    **/
    count<T extends BookingSlotCountArgs>(
      args?: Subset<T, BookingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingSlotAggregateArgs>(args: Subset<T, BookingSlotAggregateArgs>): Prisma.PrismaPromise<GetBookingSlotAggregateType<T>>

    /**
     * Group by BookingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingSlotGroupByArgs} args - Group by arguments.
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
      T extends BookingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingSlotGroupByArgs['orderBy'] }
        : { orderBy?: BookingSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingSlot model
   */
  readonly fields: BookingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking_type<T extends BookingTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingTypeDefaultArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingSlot model
   */
  interface BookingSlotFieldRefs {
    readonly id: FieldRef<"BookingSlot", 'String'>
    readonly booking_type_id: FieldRef<"BookingSlot", 'String'>
    readonly date: FieldRef<"BookingSlot", 'DateTime'>
    readonly start_time: FieldRef<"BookingSlot", 'String'>
    readonly end_time: FieldRef<"BookingSlot", 'String'>
    readonly is_available: FieldRef<"BookingSlot", 'Boolean'>
    readonly capacity: FieldRef<"BookingSlot", 'Int'>
    readonly booked_count: FieldRef<"BookingSlot", 'Int'>
    readonly metadata: FieldRef<"BookingSlot", 'Json'>
    readonly created_at: FieldRef<"BookingSlot", 'DateTime'>
    readonly updated_at: FieldRef<"BookingSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingSlot findUnique
   */
  export type BookingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookingSlot to fetch.
     */
    where: BookingSlotWhereUniqueInput
  }

  /**
   * BookingSlot findUniqueOrThrow
   */
  export type BookingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookingSlot to fetch.
     */
    where: BookingSlotWhereUniqueInput
  }

  /**
   * BookingSlot findFirst
   */
  export type BookingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookingSlot to fetch.
     */
    where?: BookingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSlots to fetch.
     */
    orderBy?: BookingSlotOrderByWithRelationInput | BookingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSlots.
     */
    cursor?: BookingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSlots.
     */
    distinct?: BookingSlotScalarFieldEnum | BookingSlotScalarFieldEnum[]
  }

  /**
   * BookingSlot findFirstOrThrow
   */
  export type BookingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookingSlot to fetch.
     */
    where?: BookingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSlots to fetch.
     */
    orderBy?: BookingSlotOrderByWithRelationInput | BookingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingSlots.
     */
    cursor?: BookingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingSlots.
     */
    distinct?: BookingSlotScalarFieldEnum | BookingSlotScalarFieldEnum[]
  }

  /**
   * BookingSlot findMany
   */
  export type BookingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter, which BookingSlots to fetch.
     */
    where?: BookingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingSlots to fetch.
     */
    orderBy?: BookingSlotOrderByWithRelationInput | BookingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingSlots.
     */
    cursor?: BookingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingSlots.
     */
    skip?: number
    distinct?: BookingSlotScalarFieldEnum | BookingSlotScalarFieldEnum[]
  }

  /**
   * BookingSlot create
   */
  export type BookingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingSlot.
     */
    data: XOR<BookingSlotCreateInput, BookingSlotUncheckedCreateInput>
  }

  /**
   * BookingSlot createMany
   */
  export type BookingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingSlots.
     */
    data: BookingSlotCreateManyInput | BookingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingSlot createManyAndReturn
   */
  export type BookingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many BookingSlots.
     */
    data: BookingSlotCreateManyInput | BookingSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingSlot update
   */
  export type BookingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingSlot.
     */
    data: XOR<BookingSlotUpdateInput, BookingSlotUncheckedUpdateInput>
    /**
     * Choose, which BookingSlot to update.
     */
    where: BookingSlotWhereUniqueInput
  }

  /**
   * BookingSlot updateMany
   */
  export type BookingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingSlots.
     */
    data: XOR<BookingSlotUpdateManyMutationInput, BookingSlotUncheckedUpdateManyInput>
    /**
     * Filter which BookingSlots to update
     */
    where?: BookingSlotWhereInput
    /**
     * Limit how many BookingSlots to update.
     */
    limit?: number
  }

  /**
   * BookingSlot updateManyAndReturn
   */
  export type BookingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * The data used to update BookingSlots.
     */
    data: XOR<BookingSlotUpdateManyMutationInput, BookingSlotUncheckedUpdateManyInput>
    /**
     * Filter which BookingSlots to update
     */
    where?: BookingSlotWhereInput
    /**
     * Limit how many BookingSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingSlot upsert
   */
  export type BookingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingSlot to update in case it exists.
     */
    where: BookingSlotWhereUniqueInput
    /**
     * In case the BookingSlot found by the `where` argument doesn't exist, create a new BookingSlot with this data.
     */
    create: XOR<BookingSlotCreateInput, BookingSlotUncheckedCreateInput>
    /**
     * In case the BookingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingSlotUpdateInput, BookingSlotUncheckedUpdateInput>
  }

  /**
   * BookingSlot delete
   */
  export type BookingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
    /**
     * Filter which BookingSlot to delete.
     */
    where: BookingSlotWhereUniqueInput
  }

  /**
   * BookingSlot deleteMany
   */
  export type BookingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingSlots to delete
     */
    where?: BookingSlotWhereInput
    /**
     * Limit how many BookingSlots to delete.
     */
    limit?: number
  }

  /**
   * BookingSlot without action
   */
  export type BookingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingSlot
     */
    select?: BookingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingSlot
     */
    omit?: BookingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingSlotInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    duration_minutes: number | null
    notification_mins: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    duration_minutes: number | null
    notification_mins: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    booking_type_id: string | null
    created_by_user_id: string | null
    title: string | null
    description: string | null
    note: string | null
    contact_id: string | null
    meeting_type: string | null
    meeting_link: string | null
    location: string | null
    start_datetime: Date | null
    end_datetime: Date | null
    duration_minutes: number | null
    color: string | null
    notification_mins: number | null
    notification_type: string | null
    status: string | null
    series_id: string | null
    is_recurring: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    booking_type_id: string | null
    created_by_user_id: string | null
    title: string | null
    description: string | null
    note: string | null
    contact_id: string | null
    meeting_type: string | null
    meeting_link: string | null
    location: string | null
    start_datetime: Date | null
    end_datetime: Date | null
    duration_minutes: number | null
    color: string | null
    notification_mins: number | null
    notification_type: string | null
    status: string | null
    series_id: string | null
    is_recurring: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    org_id: number
    booking_type_id: number
    created_by_user_id: number
    title: number
    description: number
    note: number
    contact_id: number
    invited_users: number
    meeting_type: number
    meeting_link: number
    location: number
    geo_location: number
    start_datetime: number
    end_datetime: number
    duration_minutes: number
    color: number
    notification_mins: number
    notification_type: number
    status: number
    series_id: number
    is_recurring: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    duration_minutes?: true
    notification_mins?: true
  }

  export type AppointmentSumAggregateInputType = {
    duration_minutes?: true
    notification_mins?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    org_id?: true
    booking_type_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    note?: true
    contact_id?: true
    meeting_type?: true
    meeting_link?: true
    location?: true
    start_datetime?: true
    end_datetime?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    status?: true
    series_id?: true
    is_recurring?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    org_id?: true
    booking_type_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    note?: true
    contact_id?: true
    meeting_type?: true
    meeting_link?: true
    location?: true
    start_datetime?: true
    end_datetime?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    status?: true
    series_id?: true
    is_recurring?: true
    created_at?: true
    updated_at?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    org_id?: true
    booking_type_id?: true
    created_by_user_id?: true
    title?: true
    description?: true
    note?: true
    contact_id?: true
    invited_users?: true
    meeting_type?: true
    meeting_link?: true
    location?: true
    geo_location?: true
    start_datetime?: true
    end_datetime?: true
    duration_minutes?: true
    color?: true
    notification_mins?: true
    notification_type?: true
    status?: true
    series_id?: true
    is_recurring?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    org_id: string
    booking_type_id: string | null
    created_by_user_id: string
    title: string
    description: string | null
    note: string | null
    contact_id: string | null
    invited_users: string[]
    meeting_type: string
    meeting_link: string | null
    location: string | null
    geo_location: JsonValue | null
    start_datetime: Date
    end_datetime: Date
    duration_minutes: number
    color: string
    notification_mins: number | null
    notification_type: string | null
    status: string
    series_id: string | null
    is_recurring: boolean
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    booking_type_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    note?: boolean
    contact_id?: boolean
    invited_users?: boolean
    meeting_type?: boolean
    meeting_link?: boolean
    location?: boolean
    geo_location?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    status?: boolean
    series_id?: boolean
    is_recurring?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    booking_type_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    note?: boolean
    contact_id?: boolean
    invited_users?: boolean
    meeting_type?: boolean
    meeting_link?: boolean
    location?: boolean
    geo_location?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    status?: boolean
    series_id?: boolean
    is_recurring?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    booking_type_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    note?: boolean
    contact_id?: boolean
    invited_users?: boolean
    meeting_type?: boolean
    meeting_link?: boolean
    location?: boolean
    geo_location?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    status?: boolean
    series_id?: boolean
    is_recurring?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    org_id?: boolean
    booking_type_id?: boolean
    created_by_user_id?: boolean
    title?: boolean
    description?: boolean
    note?: boolean
    contact_id?: boolean
    invited_users?: boolean
    meeting_type?: boolean
    meeting_link?: boolean
    location?: boolean
    geo_location?: boolean
    start_datetime?: boolean
    end_datetime?: boolean
    duration_minutes?: boolean
    color?: boolean
    notification_mins?: boolean
    notification_type?: boolean
    status?: boolean
    series_id?: boolean
    is_recurring?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "booking_type_id" | "created_by_user_id" | "title" | "description" | "note" | "contact_id" | "invited_users" | "meeting_type" | "meeting_link" | "location" | "geo_location" | "start_datetime" | "end_datetime" | "duration_minutes" | "color" | "notification_mins" | "notification_type" | "status" | "series_id" | "is_recurring" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking_type?: boolean | Appointment$booking_typeArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      booking_type: Prisma.$BookingTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      booking_type_id: string | null
      created_by_user_id: string
      title: string
      description: string | null
      note: string | null
      contact_id: string | null
      invited_users: string[]
      meeting_type: string
      meeting_link: string | null
      location: string | null
      geo_location: Prisma.JsonValue | null
      start_datetime: Date
      end_datetime: Date
      duration_minutes: number
      color: string
      notification_mins: number | null
      notification_type: string | null
      status: string
      series_id: string | null
      is_recurring: boolean
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking_type<T extends Appointment$booking_typeArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$booking_typeArgs<ExtArgs>>): Prisma__BookingTypeClient<$Result.GetResult<Prisma.$BookingTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly org_id: FieldRef<"Appointment", 'String'>
    readonly booking_type_id: FieldRef<"Appointment", 'String'>
    readonly created_by_user_id: FieldRef<"Appointment", 'String'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly description: FieldRef<"Appointment", 'String'>
    readonly note: FieldRef<"Appointment", 'String'>
    readonly contact_id: FieldRef<"Appointment", 'String'>
    readonly invited_users: FieldRef<"Appointment", 'String[]'>
    readonly meeting_type: FieldRef<"Appointment", 'String'>
    readonly meeting_link: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly geo_location: FieldRef<"Appointment", 'Json'>
    readonly start_datetime: FieldRef<"Appointment", 'DateTime'>
    readonly end_datetime: FieldRef<"Appointment", 'DateTime'>
    readonly duration_minutes: FieldRef<"Appointment", 'Int'>
    readonly color: FieldRef<"Appointment", 'String'>
    readonly notification_mins: FieldRef<"Appointment", 'Int'>
    readonly notification_type: FieldRef<"Appointment", 'String'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly series_id: FieldRef<"Appointment", 'String'>
    readonly is_recurring: FieldRef<"Appointment", 'Boolean'>
    readonly metadata: FieldRef<"Appointment", 'Json'>
    readonly created_at: FieldRef<"Appointment", 'DateTime'>
    readonly updated_at: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.booking_type
   */
  export type Appointment$booking_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingType
     */
    select?: BookingTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingType
     */
    omit?: BookingTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingTypeInclude<ExtArgs> | null
    where?: BookingTypeWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model BookingTypeGroup
   */

  export type AggregateBookingTypeGroup = {
    _count: BookingTypeGroupCountAggregateOutputType | null
    _min: BookingTypeGroupMinAggregateOutputType | null
    _max: BookingTypeGroupMaxAggregateOutputType | null
  }

  export type BookingTypeGroupMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingTypeGroupMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    created_by_user_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingTypeGroupCountAggregateOutputType = {
    id: number
    org_id: number
    created_by_user_id: number
    name: number
    description: number
    booking_type_ids: number
    metadata: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingTypeGroupMinAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingTypeGroupMaxAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingTypeGroupCountAggregateInputType = {
    id?: true
    org_id?: true
    created_by_user_id?: true
    name?: true
    description?: true
    booking_type_ids?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingTypeGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingTypeGroup to aggregate.
     */
    where?: BookingTypeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypeGroups to fetch.
     */
    orderBy?: BookingTypeGroupOrderByWithRelationInput | BookingTypeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingTypeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingTypeGroups
    **/
    _count?: true | BookingTypeGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingTypeGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingTypeGroupMaxAggregateInputType
  }

  export type GetBookingTypeGroupAggregateType<T extends BookingTypeGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingTypeGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingTypeGroup[P]>
      : GetScalarType<T[P], AggregateBookingTypeGroup[P]>
  }




  export type BookingTypeGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingTypeGroupWhereInput
    orderBy?: BookingTypeGroupOrderByWithAggregationInput | BookingTypeGroupOrderByWithAggregationInput[]
    by: BookingTypeGroupScalarFieldEnum[] | BookingTypeGroupScalarFieldEnum
    having?: BookingTypeGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingTypeGroupCountAggregateInputType | true
    _min?: BookingTypeGroupMinAggregateInputType
    _max?: BookingTypeGroupMaxAggregateInputType
  }

  export type BookingTypeGroupGroupByOutputType = {
    id: string
    org_id: string
    created_by_user_id: string
    name: string
    description: string | null
    booking_type_ids: string[]
    metadata: JsonValue
    created_at: Date
    updated_at: Date
    _count: BookingTypeGroupCountAggregateOutputType | null
    _min: BookingTypeGroupMinAggregateOutputType | null
    _max: BookingTypeGroupMaxAggregateOutputType | null
  }

  type GetBookingTypeGroupGroupByPayload<T extends BookingTypeGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingTypeGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingTypeGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingTypeGroupGroupByOutputType[P]>
            : GetScalarType<T[P], BookingTypeGroupGroupByOutputType[P]>
        }
      >
    >


  export type BookingTypeGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    description?: boolean
    booking_type_ids?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["bookingTypeGroup"]>

  export type BookingTypeGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    description?: boolean
    booking_type_ids?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["bookingTypeGroup"]>

  export type BookingTypeGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    description?: boolean
    booking_type_ids?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["bookingTypeGroup"]>

  export type BookingTypeGroupSelectScalar = {
    id?: boolean
    org_id?: boolean
    created_by_user_id?: boolean
    name?: boolean
    description?: boolean
    booking_type_ids?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingTypeGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "created_by_user_id" | "name" | "description" | "booking_type_ids" | "metadata" | "created_at" | "updated_at", ExtArgs["result"]["bookingTypeGroup"]>

  export type $BookingTypeGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingTypeGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      created_by_user_id: string
      name: string
      description: string | null
      booking_type_ids: string[]
      metadata: Prisma.JsonValue
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["bookingTypeGroup"]>
    composites: {}
  }

  type BookingTypeGroupGetPayload<S extends boolean | null | undefined | BookingTypeGroupDefaultArgs> = $Result.GetResult<Prisma.$BookingTypeGroupPayload, S>

  type BookingTypeGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingTypeGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingTypeGroupCountAggregateInputType | true
    }

  export interface BookingTypeGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingTypeGroup'], meta: { name: 'BookingTypeGroup' } }
    /**
     * Find zero or one BookingTypeGroup that matches the filter.
     * @param {BookingTypeGroupFindUniqueArgs} args - Arguments to find a BookingTypeGroup
     * @example
     * // Get one BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingTypeGroupFindUniqueArgs>(args: SelectSubset<T, BookingTypeGroupFindUniqueArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingTypeGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingTypeGroupFindUniqueOrThrowArgs} args - Arguments to find a BookingTypeGroup
     * @example
     * // Get one BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingTypeGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingTypeGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingTypeGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupFindFirstArgs} args - Arguments to find a BookingTypeGroup
     * @example
     * // Get one BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingTypeGroupFindFirstArgs>(args?: SelectSubset<T, BookingTypeGroupFindFirstArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingTypeGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupFindFirstOrThrowArgs} args - Arguments to find a BookingTypeGroup
     * @example
     * // Get one BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingTypeGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingTypeGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingTypeGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingTypeGroups
     * const bookingTypeGroups = await prisma.bookingTypeGroup.findMany()
     * 
     * // Get first 10 BookingTypeGroups
     * const bookingTypeGroups = await prisma.bookingTypeGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingTypeGroupWithIdOnly = await prisma.bookingTypeGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingTypeGroupFindManyArgs>(args?: SelectSubset<T, BookingTypeGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingTypeGroup.
     * @param {BookingTypeGroupCreateArgs} args - Arguments to create a BookingTypeGroup.
     * @example
     * // Create one BookingTypeGroup
     * const BookingTypeGroup = await prisma.bookingTypeGroup.create({
     *   data: {
     *     // ... data to create a BookingTypeGroup
     *   }
     * })
     * 
     */
    create<T extends BookingTypeGroupCreateArgs>(args: SelectSubset<T, BookingTypeGroupCreateArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingTypeGroups.
     * @param {BookingTypeGroupCreateManyArgs} args - Arguments to create many BookingTypeGroups.
     * @example
     * // Create many BookingTypeGroups
     * const bookingTypeGroup = await prisma.bookingTypeGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingTypeGroupCreateManyArgs>(args?: SelectSubset<T, BookingTypeGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingTypeGroups and returns the data saved in the database.
     * @param {BookingTypeGroupCreateManyAndReturnArgs} args - Arguments to create many BookingTypeGroups.
     * @example
     * // Create many BookingTypeGroups
     * const bookingTypeGroup = await prisma.bookingTypeGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingTypeGroups and only return the `id`
     * const bookingTypeGroupWithIdOnly = await prisma.bookingTypeGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingTypeGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingTypeGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingTypeGroup.
     * @param {BookingTypeGroupDeleteArgs} args - Arguments to delete one BookingTypeGroup.
     * @example
     * // Delete one BookingTypeGroup
     * const BookingTypeGroup = await prisma.bookingTypeGroup.delete({
     *   where: {
     *     // ... filter to delete one BookingTypeGroup
     *   }
     * })
     * 
     */
    delete<T extends BookingTypeGroupDeleteArgs>(args: SelectSubset<T, BookingTypeGroupDeleteArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingTypeGroup.
     * @param {BookingTypeGroupUpdateArgs} args - Arguments to update one BookingTypeGroup.
     * @example
     * // Update one BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingTypeGroupUpdateArgs>(args: SelectSubset<T, BookingTypeGroupUpdateArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingTypeGroups.
     * @param {BookingTypeGroupDeleteManyArgs} args - Arguments to filter BookingTypeGroups to delete.
     * @example
     * // Delete a few BookingTypeGroups
     * const { count } = await prisma.bookingTypeGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingTypeGroupDeleteManyArgs>(args?: SelectSubset<T, BookingTypeGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTypeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingTypeGroups
     * const bookingTypeGroup = await prisma.bookingTypeGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingTypeGroupUpdateManyArgs>(args: SelectSubset<T, BookingTypeGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingTypeGroups and returns the data updated in the database.
     * @param {BookingTypeGroupUpdateManyAndReturnArgs} args - Arguments to update many BookingTypeGroups.
     * @example
     * // Update many BookingTypeGroups
     * const bookingTypeGroup = await prisma.bookingTypeGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingTypeGroups and only return the `id`
     * const bookingTypeGroupWithIdOnly = await prisma.bookingTypeGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingTypeGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingTypeGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingTypeGroup.
     * @param {BookingTypeGroupUpsertArgs} args - Arguments to update or create a BookingTypeGroup.
     * @example
     * // Update or create a BookingTypeGroup
     * const bookingTypeGroup = await prisma.bookingTypeGroup.upsert({
     *   create: {
     *     // ... data to create a BookingTypeGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingTypeGroup we want to update
     *   }
     * })
     */
    upsert<T extends BookingTypeGroupUpsertArgs>(args: SelectSubset<T, BookingTypeGroupUpsertArgs<ExtArgs>>): Prisma__BookingTypeGroupClient<$Result.GetResult<Prisma.$BookingTypeGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingTypeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupCountArgs} args - Arguments to filter BookingTypeGroups to count.
     * @example
     * // Count the number of BookingTypeGroups
     * const count = await prisma.bookingTypeGroup.count({
     *   where: {
     *     // ... the filter for the BookingTypeGroups we want to count
     *   }
     * })
    **/
    count<T extends BookingTypeGroupCountArgs>(
      args?: Subset<T, BookingTypeGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingTypeGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingTypeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingTypeGroupAggregateArgs>(args: Subset<T, BookingTypeGroupAggregateArgs>): Prisma.PrismaPromise<GetBookingTypeGroupAggregateType<T>>

    /**
     * Group by BookingTypeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingTypeGroupGroupByArgs} args - Group by arguments.
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
      T extends BookingTypeGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingTypeGroupGroupByArgs['orderBy'] }
        : { orderBy?: BookingTypeGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingTypeGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingTypeGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingTypeGroup model
   */
  readonly fields: BookingTypeGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingTypeGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingTypeGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BookingTypeGroup model
   */
  interface BookingTypeGroupFieldRefs {
    readonly id: FieldRef<"BookingTypeGroup", 'String'>
    readonly org_id: FieldRef<"BookingTypeGroup", 'String'>
    readonly created_by_user_id: FieldRef<"BookingTypeGroup", 'String'>
    readonly name: FieldRef<"BookingTypeGroup", 'String'>
    readonly description: FieldRef<"BookingTypeGroup", 'String'>
    readonly booking_type_ids: FieldRef<"BookingTypeGroup", 'String[]'>
    readonly metadata: FieldRef<"BookingTypeGroup", 'Json'>
    readonly created_at: FieldRef<"BookingTypeGroup", 'DateTime'>
    readonly updated_at: FieldRef<"BookingTypeGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingTypeGroup findUnique
   */
  export type BookingTypeGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter, which BookingTypeGroup to fetch.
     */
    where: BookingTypeGroupWhereUniqueInput
  }

  /**
   * BookingTypeGroup findUniqueOrThrow
   */
  export type BookingTypeGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter, which BookingTypeGroup to fetch.
     */
    where: BookingTypeGroupWhereUniqueInput
  }

  /**
   * BookingTypeGroup findFirst
   */
  export type BookingTypeGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter, which BookingTypeGroup to fetch.
     */
    where?: BookingTypeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypeGroups to fetch.
     */
    orderBy?: BookingTypeGroupOrderByWithRelationInput | BookingTypeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTypeGroups.
     */
    cursor?: BookingTypeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTypeGroups.
     */
    distinct?: BookingTypeGroupScalarFieldEnum | BookingTypeGroupScalarFieldEnum[]
  }

  /**
   * BookingTypeGroup findFirstOrThrow
   */
  export type BookingTypeGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter, which BookingTypeGroup to fetch.
     */
    where?: BookingTypeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypeGroups to fetch.
     */
    orderBy?: BookingTypeGroupOrderByWithRelationInput | BookingTypeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingTypeGroups.
     */
    cursor?: BookingTypeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingTypeGroups.
     */
    distinct?: BookingTypeGroupScalarFieldEnum | BookingTypeGroupScalarFieldEnum[]
  }

  /**
   * BookingTypeGroup findMany
   */
  export type BookingTypeGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter, which BookingTypeGroups to fetch.
     */
    where?: BookingTypeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingTypeGroups to fetch.
     */
    orderBy?: BookingTypeGroupOrderByWithRelationInput | BookingTypeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingTypeGroups.
     */
    cursor?: BookingTypeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingTypeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingTypeGroups.
     */
    skip?: number
    distinct?: BookingTypeGroupScalarFieldEnum | BookingTypeGroupScalarFieldEnum[]
  }

  /**
   * BookingTypeGroup create
   */
  export type BookingTypeGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a BookingTypeGroup.
     */
    data: XOR<BookingTypeGroupCreateInput, BookingTypeGroupUncheckedCreateInput>
  }

  /**
   * BookingTypeGroup createMany
   */
  export type BookingTypeGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingTypeGroups.
     */
    data: BookingTypeGroupCreateManyInput | BookingTypeGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingTypeGroup createManyAndReturn
   */
  export type BookingTypeGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * The data used to create many BookingTypeGroups.
     */
    data: BookingTypeGroupCreateManyInput | BookingTypeGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingTypeGroup update
   */
  export type BookingTypeGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a BookingTypeGroup.
     */
    data: XOR<BookingTypeGroupUpdateInput, BookingTypeGroupUncheckedUpdateInput>
    /**
     * Choose, which BookingTypeGroup to update.
     */
    where: BookingTypeGroupWhereUniqueInput
  }

  /**
   * BookingTypeGroup updateMany
   */
  export type BookingTypeGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingTypeGroups.
     */
    data: XOR<BookingTypeGroupUpdateManyMutationInput, BookingTypeGroupUncheckedUpdateManyInput>
    /**
     * Filter which BookingTypeGroups to update
     */
    where?: BookingTypeGroupWhereInput
    /**
     * Limit how many BookingTypeGroups to update.
     */
    limit?: number
  }

  /**
   * BookingTypeGroup updateManyAndReturn
   */
  export type BookingTypeGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * The data used to update BookingTypeGroups.
     */
    data: XOR<BookingTypeGroupUpdateManyMutationInput, BookingTypeGroupUncheckedUpdateManyInput>
    /**
     * Filter which BookingTypeGroups to update
     */
    where?: BookingTypeGroupWhereInput
    /**
     * Limit how many BookingTypeGroups to update.
     */
    limit?: number
  }

  /**
   * BookingTypeGroup upsert
   */
  export type BookingTypeGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the BookingTypeGroup to update in case it exists.
     */
    where: BookingTypeGroupWhereUniqueInput
    /**
     * In case the BookingTypeGroup found by the `where` argument doesn't exist, create a new BookingTypeGroup with this data.
     */
    create: XOR<BookingTypeGroupCreateInput, BookingTypeGroupUncheckedCreateInput>
    /**
     * In case the BookingTypeGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingTypeGroupUpdateInput, BookingTypeGroupUncheckedUpdateInput>
  }

  /**
   * BookingTypeGroup delete
   */
  export type BookingTypeGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
    /**
     * Filter which BookingTypeGroup to delete.
     */
    where: BookingTypeGroupWhereUniqueInput
  }

  /**
   * BookingTypeGroup deleteMany
   */
  export type BookingTypeGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingTypeGroups to delete
     */
    where?: BookingTypeGroupWhereInput
    /**
     * Limit how many BookingTypeGroups to delete.
     */
    limit?: number
  }

  /**
   * BookingTypeGroup without action
   */
  export type BookingTypeGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingTypeGroup
     */
    select?: BookingTypeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingTypeGroup
     */
    omit?: BookingTypeGroupOmit<ExtArgs> | null
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


  export const BookingTypeScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    title: 'title',
    description: 'description',
    link: 'link',
    meeting_type: 'meeting_type',
    location: 'location',
    geo_location: 'geo_location',
    duration_minutes: 'duration_minutes',
    color: 'color',
    notification_mins: 'notification_mins',
    notification_type: 'notification_type',
    email_subject: 'email_subject',
    email_body: 'email_body',
    submit_button_label: 'submit_button_label',
    status: 'status',
    is_archived: 'is_archived',
    synced_with_schedule: 'synced_with_schedule',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingTypeScalarFieldEnum = (typeof BookingTypeScalarFieldEnum)[keyof typeof BookingTypeScalarFieldEnum]


  export const BookingSlotScalarFieldEnum: {
    id: 'id',
    booking_type_id: 'booking_type_id',
    date: 'date',
    start_time: 'start_time',
    end_time: 'end_time',
    is_available: 'is_available',
    capacity: 'capacity',
    booked_count: 'booked_count',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingSlotScalarFieldEnum = (typeof BookingSlotScalarFieldEnum)[keyof typeof BookingSlotScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    booking_type_id: 'booking_type_id',
    created_by_user_id: 'created_by_user_id',
    title: 'title',
    description: 'description',
    note: 'note',
    contact_id: 'contact_id',
    invited_users: 'invited_users',
    meeting_type: 'meeting_type',
    meeting_link: 'meeting_link',
    location: 'location',
    geo_location: 'geo_location',
    start_datetime: 'start_datetime',
    end_datetime: 'end_datetime',
    duration_minutes: 'duration_minutes',
    color: 'color',
    notification_mins: 'notification_mins',
    notification_type: 'notification_type',
    status: 'status',
    series_id: 'series_id',
    is_recurring: 'is_recurring',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const BookingTypeGroupScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    created_by_user_id: 'created_by_user_id',
    name: 'name',
    description: 'description',
    booking_type_ids: 'booking_type_ids',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BookingTypeGroupScalarFieldEnum = (typeof BookingTypeGroupScalarFieldEnum)[keyof typeof BookingTypeGroupScalarFieldEnum]


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


  export type BookingTypeWhereInput = {
    AND?: BookingTypeWhereInput | BookingTypeWhereInput[]
    OR?: BookingTypeWhereInput[]
    NOT?: BookingTypeWhereInput | BookingTypeWhereInput[]
    id?: UuidFilter<"BookingType"> | string
    org_id?: UuidFilter<"BookingType"> | string
    created_by_user_id?: StringFilter<"BookingType"> | string
    title?: StringFilter<"BookingType"> | string
    description?: StringNullableFilter<"BookingType"> | string | null
    link?: StringFilter<"BookingType"> | string
    meeting_type?: StringFilter<"BookingType"> | string
    location?: StringNullableFilter<"BookingType"> | string | null
    geo_location?: JsonNullableFilter<"BookingType">
    duration_minutes?: IntFilter<"BookingType"> | number
    color?: StringNullableFilter<"BookingType"> | string | null
    notification_mins?: IntNullableFilter<"BookingType"> | number | null
    notification_type?: StringNullableFilter<"BookingType"> | string | null
    email_subject?: StringNullableFilter<"BookingType"> | string | null
    email_body?: StringNullableFilter<"BookingType"> | string | null
    submit_button_label?: StringFilter<"BookingType"> | string
    status?: StringFilter<"BookingType"> | string
    is_archived?: BoolFilter<"BookingType"> | boolean
    synced_with_schedule?: BoolFilter<"BookingType"> | boolean
    metadata?: JsonFilter<"BookingType">
    created_at?: DateTimeFilter<"BookingType"> | Date | string
    updated_at?: DateTimeFilter<"BookingType"> | Date | string
    slots?: BookingSlotListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type BookingTypeOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrder
    meeting_type?: SortOrder
    location?: SortOrderInput | SortOrder
    geo_location?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    color?: SortOrderInput | SortOrder
    notification_mins?: SortOrderInput | SortOrder
    notification_type?: SortOrderInput | SortOrder
    email_subject?: SortOrderInput | SortOrder
    email_body?: SortOrderInput | SortOrder
    submit_button_label?: SortOrder
    status?: SortOrder
    is_archived?: SortOrder
    synced_with_schedule?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    slots?: BookingSlotOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type BookingTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    link?: string
    AND?: BookingTypeWhereInput | BookingTypeWhereInput[]
    OR?: BookingTypeWhereInput[]
    NOT?: BookingTypeWhereInput | BookingTypeWhereInput[]
    org_id?: UuidFilter<"BookingType"> | string
    created_by_user_id?: StringFilter<"BookingType"> | string
    title?: StringFilter<"BookingType"> | string
    description?: StringNullableFilter<"BookingType"> | string | null
    meeting_type?: StringFilter<"BookingType"> | string
    location?: StringNullableFilter<"BookingType"> | string | null
    geo_location?: JsonNullableFilter<"BookingType">
    duration_minutes?: IntFilter<"BookingType"> | number
    color?: StringNullableFilter<"BookingType"> | string | null
    notification_mins?: IntNullableFilter<"BookingType"> | number | null
    notification_type?: StringNullableFilter<"BookingType"> | string | null
    email_subject?: StringNullableFilter<"BookingType"> | string | null
    email_body?: StringNullableFilter<"BookingType"> | string | null
    submit_button_label?: StringFilter<"BookingType"> | string
    status?: StringFilter<"BookingType"> | string
    is_archived?: BoolFilter<"BookingType"> | boolean
    synced_with_schedule?: BoolFilter<"BookingType"> | boolean
    metadata?: JsonFilter<"BookingType">
    created_at?: DateTimeFilter<"BookingType"> | Date | string
    updated_at?: DateTimeFilter<"BookingType"> | Date | string
    slots?: BookingSlotListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id" | "link">

  export type BookingTypeOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    link?: SortOrder
    meeting_type?: SortOrder
    location?: SortOrderInput | SortOrder
    geo_location?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    color?: SortOrderInput | SortOrder
    notification_mins?: SortOrderInput | SortOrder
    notification_type?: SortOrderInput | SortOrder
    email_subject?: SortOrderInput | SortOrder
    email_body?: SortOrderInput | SortOrder
    submit_button_label?: SortOrder
    status?: SortOrder
    is_archived?: SortOrder
    synced_with_schedule?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingTypeCountOrderByAggregateInput
    _avg?: BookingTypeAvgOrderByAggregateInput
    _max?: BookingTypeMaxOrderByAggregateInput
    _min?: BookingTypeMinOrderByAggregateInput
    _sum?: BookingTypeSumOrderByAggregateInput
  }

  export type BookingTypeScalarWhereWithAggregatesInput = {
    AND?: BookingTypeScalarWhereWithAggregatesInput | BookingTypeScalarWhereWithAggregatesInput[]
    OR?: BookingTypeScalarWhereWithAggregatesInput[]
    NOT?: BookingTypeScalarWhereWithAggregatesInput | BookingTypeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingType"> | string
    org_id?: UuidWithAggregatesFilter<"BookingType"> | string
    created_by_user_id?: StringWithAggregatesFilter<"BookingType"> | string
    title?: StringWithAggregatesFilter<"BookingType"> | string
    description?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    link?: StringWithAggregatesFilter<"BookingType"> | string
    meeting_type?: StringWithAggregatesFilter<"BookingType"> | string
    location?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    geo_location?: JsonNullableWithAggregatesFilter<"BookingType">
    duration_minutes?: IntWithAggregatesFilter<"BookingType"> | number
    color?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    notification_mins?: IntNullableWithAggregatesFilter<"BookingType"> | number | null
    notification_type?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    email_subject?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    email_body?: StringNullableWithAggregatesFilter<"BookingType"> | string | null
    submit_button_label?: StringWithAggregatesFilter<"BookingType"> | string
    status?: StringWithAggregatesFilter<"BookingType"> | string
    is_archived?: BoolWithAggregatesFilter<"BookingType"> | boolean
    synced_with_schedule?: BoolWithAggregatesFilter<"BookingType"> | boolean
    metadata?: JsonWithAggregatesFilter<"BookingType">
    created_at?: DateTimeWithAggregatesFilter<"BookingType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BookingType"> | Date | string
  }

  export type BookingSlotWhereInput = {
    AND?: BookingSlotWhereInput | BookingSlotWhereInput[]
    OR?: BookingSlotWhereInput[]
    NOT?: BookingSlotWhereInput | BookingSlotWhereInput[]
    id?: UuidFilter<"BookingSlot"> | string
    booking_type_id?: UuidFilter<"BookingSlot"> | string
    date?: DateTimeFilter<"BookingSlot"> | Date | string
    start_time?: StringFilter<"BookingSlot"> | string
    end_time?: StringFilter<"BookingSlot"> | string
    is_available?: BoolFilter<"BookingSlot"> | boolean
    capacity?: IntFilter<"BookingSlot"> | number
    booked_count?: IntFilter<"BookingSlot"> | number
    metadata?: JsonFilter<"BookingSlot">
    created_at?: DateTimeFilter<"BookingSlot"> | Date | string
    updated_at?: DateTimeFilter<"BookingSlot"> | Date | string
    booking_type?: XOR<BookingTypeScalarRelationFilter, BookingTypeWhereInput>
  }

  export type BookingSlotOrderByWithRelationInput = {
    id?: SortOrder
    booking_type_id?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    capacity?: SortOrder
    booked_count?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking_type?: BookingTypeOrderByWithRelationInput
  }

  export type BookingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingSlotWhereInput | BookingSlotWhereInput[]
    OR?: BookingSlotWhereInput[]
    NOT?: BookingSlotWhereInput | BookingSlotWhereInput[]
    booking_type_id?: UuidFilter<"BookingSlot"> | string
    date?: DateTimeFilter<"BookingSlot"> | Date | string
    start_time?: StringFilter<"BookingSlot"> | string
    end_time?: StringFilter<"BookingSlot"> | string
    is_available?: BoolFilter<"BookingSlot"> | boolean
    capacity?: IntFilter<"BookingSlot"> | number
    booked_count?: IntFilter<"BookingSlot"> | number
    metadata?: JsonFilter<"BookingSlot">
    created_at?: DateTimeFilter<"BookingSlot"> | Date | string
    updated_at?: DateTimeFilter<"BookingSlot"> | Date | string
    booking_type?: XOR<BookingTypeScalarRelationFilter, BookingTypeWhereInput>
  }, "id">

  export type BookingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    booking_type_id?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    capacity?: SortOrder
    booked_count?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingSlotCountOrderByAggregateInput
    _avg?: BookingSlotAvgOrderByAggregateInput
    _max?: BookingSlotMaxOrderByAggregateInput
    _min?: BookingSlotMinOrderByAggregateInput
    _sum?: BookingSlotSumOrderByAggregateInput
  }

  export type BookingSlotScalarWhereWithAggregatesInput = {
    AND?: BookingSlotScalarWhereWithAggregatesInput | BookingSlotScalarWhereWithAggregatesInput[]
    OR?: BookingSlotScalarWhereWithAggregatesInput[]
    NOT?: BookingSlotScalarWhereWithAggregatesInput | BookingSlotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingSlot"> | string
    booking_type_id?: UuidWithAggregatesFilter<"BookingSlot"> | string
    date?: DateTimeWithAggregatesFilter<"BookingSlot"> | Date | string
    start_time?: StringWithAggregatesFilter<"BookingSlot"> | string
    end_time?: StringWithAggregatesFilter<"BookingSlot"> | string
    is_available?: BoolWithAggregatesFilter<"BookingSlot"> | boolean
    capacity?: IntWithAggregatesFilter<"BookingSlot"> | number
    booked_count?: IntWithAggregatesFilter<"BookingSlot"> | number
    metadata?: JsonWithAggregatesFilter<"BookingSlot">
    created_at?: DateTimeWithAggregatesFilter<"BookingSlot"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BookingSlot"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    org_id?: UuidFilter<"Appointment"> | string
    booking_type_id?: UuidNullableFilter<"Appointment"> | string | null
    created_by_user_id?: StringFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    contact_id?: UuidNullableFilter<"Appointment"> | string | null
    invited_users?: StringNullableListFilter<"Appointment">
    meeting_type?: StringFilter<"Appointment"> | string
    meeting_link?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    geo_location?: JsonNullableFilter<"Appointment">
    start_datetime?: DateTimeFilter<"Appointment"> | Date | string
    end_datetime?: DateTimeFilter<"Appointment"> | Date | string
    duration_minutes?: IntFilter<"Appointment"> | number
    color?: StringFilter<"Appointment"> | string
    notification_mins?: IntNullableFilter<"Appointment"> | number | null
    notification_type?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    series_id?: StringNullableFilter<"Appointment"> | string | null
    is_recurring?: BoolFilter<"Appointment"> | boolean
    metadata?: JsonFilter<"Appointment">
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    booking_type?: XOR<BookingTypeNullableScalarRelationFilter, BookingTypeWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    booking_type_id?: SortOrderInput | SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    contact_id?: SortOrderInput | SortOrder
    invited_users?: SortOrder
    meeting_type?: SortOrder
    meeting_link?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    geo_location?: SortOrderInput | SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrderInput | SortOrder
    notification_type?: SortOrderInput | SortOrder
    status?: SortOrder
    series_id?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    booking_type?: BookingTypeOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    org_id?: UuidFilter<"Appointment"> | string
    booking_type_id?: UuidNullableFilter<"Appointment"> | string | null
    created_by_user_id?: StringFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    contact_id?: UuidNullableFilter<"Appointment"> | string | null
    invited_users?: StringNullableListFilter<"Appointment">
    meeting_type?: StringFilter<"Appointment"> | string
    meeting_link?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    geo_location?: JsonNullableFilter<"Appointment">
    start_datetime?: DateTimeFilter<"Appointment"> | Date | string
    end_datetime?: DateTimeFilter<"Appointment"> | Date | string
    duration_minutes?: IntFilter<"Appointment"> | number
    color?: StringFilter<"Appointment"> | string
    notification_mins?: IntNullableFilter<"Appointment"> | number | null
    notification_type?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    series_id?: StringNullableFilter<"Appointment"> | string | null
    is_recurring?: BoolFilter<"Appointment"> | boolean
    metadata?: JsonFilter<"Appointment">
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
    booking_type?: XOR<BookingTypeNullableScalarRelationFilter, BookingTypeWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    booking_type_id?: SortOrderInput | SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    contact_id?: SortOrderInput | SortOrder
    invited_users?: SortOrder
    meeting_type?: SortOrder
    meeting_link?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    geo_location?: SortOrderInput | SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrderInput | SortOrder
    notification_type?: SortOrderInput | SortOrder
    status?: SortOrder
    series_id?: SortOrderInput | SortOrder
    is_recurring?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Appointment"> | string
    org_id?: UuidWithAggregatesFilter<"Appointment"> | string
    booking_type_id?: UuidNullableWithAggregatesFilter<"Appointment"> | string | null
    created_by_user_id?: StringWithAggregatesFilter<"Appointment"> | string
    title?: StringWithAggregatesFilter<"Appointment"> | string
    description?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    note?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    contact_id?: UuidNullableWithAggregatesFilter<"Appointment"> | string | null
    invited_users?: StringNullableListFilter<"Appointment">
    meeting_type?: StringWithAggregatesFilter<"Appointment"> | string
    meeting_link?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    geo_location?: JsonNullableWithAggregatesFilter<"Appointment">
    start_datetime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    end_datetime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    duration_minutes?: IntWithAggregatesFilter<"Appointment"> | number
    color?: StringWithAggregatesFilter<"Appointment"> | string
    notification_mins?: IntNullableWithAggregatesFilter<"Appointment"> | number | null
    notification_type?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    status?: StringWithAggregatesFilter<"Appointment"> | string
    series_id?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    is_recurring?: BoolWithAggregatesFilter<"Appointment"> | boolean
    metadata?: JsonWithAggregatesFilter<"Appointment">
    created_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type BookingTypeGroupWhereInput = {
    AND?: BookingTypeGroupWhereInput | BookingTypeGroupWhereInput[]
    OR?: BookingTypeGroupWhereInput[]
    NOT?: BookingTypeGroupWhereInput | BookingTypeGroupWhereInput[]
    id?: UuidFilter<"BookingTypeGroup"> | string
    org_id?: UuidFilter<"BookingTypeGroup"> | string
    created_by_user_id?: StringFilter<"BookingTypeGroup"> | string
    name?: StringFilter<"BookingTypeGroup"> | string
    description?: StringNullableFilter<"BookingTypeGroup"> | string | null
    booking_type_ids?: StringNullableListFilter<"BookingTypeGroup">
    metadata?: JsonFilter<"BookingTypeGroup">
    created_at?: DateTimeFilter<"BookingTypeGroup"> | Date | string
    updated_at?: DateTimeFilter<"BookingTypeGroup"> | Date | string
  }

  export type BookingTypeGroupOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    booking_type_ids?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingTypeGroupWhereInput | BookingTypeGroupWhereInput[]
    OR?: BookingTypeGroupWhereInput[]
    NOT?: BookingTypeGroupWhereInput | BookingTypeGroupWhereInput[]
    org_id?: UuidFilter<"BookingTypeGroup"> | string
    created_by_user_id?: StringFilter<"BookingTypeGroup"> | string
    name?: StringFilter<"BookingTypeGroup"> | string
    description?: StringNullableFilter<"BookingTypeGroup"> | string | null
    booking_type_ids?: StringNullableListFilter<"BookingTypeGroup">
    metadata?: JsonFilter<"BookingTypeGroup">
    created_at?: DateTimeFilter<"BookingTypeGroup"> | Date | string
    updated_at?: DateTimeFilter<"BookingTypeGroup"> | Date | string
  }, "id">

  export type BookingTypeGroupOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    booking_type_ids?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingTypeGroupCountOrderByAggregateInput
    _max?: BookingTypeGroupMaxOrderByAggregateInput
    _min?: BookingTypeGroupMinOrderByAggregateInput
  }

  export type BookingTypeGroupScalarWhereWithAggregatesInput = {
    AND?: BookingTypeGroupScalarWhereWithAggregatesInput | BookingTypeGroupScalarWhereWithAggregatesInput[]
    OR?: BookingTypeGroupScalarWhereWithAggregatesInput[]
    NOT?: BookingTypeGroupScalarWhereWithAggregatesInput | BookingTypeGroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BookingTypeGroup"> | string
    org_id?: UuidWithAggregatesFilter<"BookingTypeGroup"> | string
    created_by_user_id?: StringWithAggregatesFilter<"BookingTypeGroup"> | string
    name?: StringWithAggregatesFilter<"BookingTypeGroup"> | string
    description?: StringNullableWithAggregatesFilter<"BookingTypeGroup"> | string | null
    booking_type_ids?: StringNullableListFilter<"BookingTypeGroup">
    metadata?: JsonWithAggregatesFilter<"BookingTypeGroup">
    created_at?: DateTimeWithAggregatesFilter<"BookingTypeGroup"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BookingTypeGroup"> | Date | string
  }

  export type BookingTypeCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    slots?: BookingSlotCreateNestedManyWithoutBooking_typeInput
    appointments?: AppointmentCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    slots?: BookingSlotUncheckedCreateNestedManyWithoutBooking_typeInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: BookingSlotUpdateManyWithoutBooking_typeNestedInput
    appointments?: AppointmentUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: BookingSlotUncheckedUpdateManyWithoutBooking_typeNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingTypeCreateManyInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSlotCreateInput = {
    id?: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    booking_type: BookingTypeCreateNestedOneWithoutSlotsInput
  }

  export type BookingSlotUncheckedCreateInput = {
    id?: string
    booking_type_id: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_type?: BookingTypeUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type BookingSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_type_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSlotCreateManyInput = {
    id?: string
    booking_type_id: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    booking_type_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    booking_type?: BookingTypeCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    org_id: string
    booking_type_id?: string | null
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking_type?: BookingTypeUpdateOneWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    booking_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    org_id: string
    booking_type_id?: string | null
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    booking_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTypeGroupCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    description?: string | null
    booking_type_ids?: BookingTypeGroupCreatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingTypeGroupUncheckedCreateInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    description?: string | null
    booking_type_ids?: BookingTypeGroupCreatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingTypeGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking_type_ids?: BookingTypeGroupUpdatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTypeGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking_type_ids?: BookingTypeGroupUpdatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTypeGroupCreateManyInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    name: string
    description?: string | null
    booking_type_ids?: BookingTypeGroupCreatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingTypeGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking_type_ids?: BookingTypeGroupUpdatebooking_type_idsInput | string[]
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingTypeGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    booking_type_ids?: BookingTypeGroupUpdatebooking_type_idsInput | string[]
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

  export type BookingSlotListRelationFilter = {
    every?: BookingSlotWhereInput
    some?: BookingSlotWhereInput
    none?: BookingSlotWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingTypeCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    meeting_type?: SortOrder
    location?: SortOrder
    geo_location?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    email_subject?: SortOrder
    email_body?: SortOrder
    submit_button_label?: SortOrder
    status?: SortOrder
    is_archived?: SortOrder
    synced_with_schedule?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeAvgOrderByAggregateInput = {
    duration_minutes?: SortOrder
    notification_mins?: SortOrder
  }

  export type BookingTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    meeting_type?: SortOrder
    location?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    email_subject?: SortOrder
    email_body?: SortOrder
    submit_button_label?: SortOrder
    status?: SortOrder
    is_archived?: SortOrder
    synced_with_schedule?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    link?: SortOrder
    meeting_type?: SortOrder
    location?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    email_subject?: SortOrder
    email_body?: SortOrder
    submit_button_label?: SortOrder
    status?: SortOrder
    is_archived?: SortOrder
    synced_with_schedule?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeSumOrderByAggregateInput = {
    duration_minutes?: SortOrder
    notification_mins?: SortOrder
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BookingTypeScalarRelationFilter = {
    is?: BookingTypeWhereInput
    isNot?: BookingTypeWhereInput
  }

  export type BookingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    booking_type_id?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    capacity?: SortOrder
    booked_count?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSlotAvgOrderByAggregateInput = {
    capacity?: SortOrder
    booked_count?: SortOrder
  }

  export type BookingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    booking_type_id?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    capacity?: SortOrder
    booked_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    booking_type_id?: SortOrder
    date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    is_available?: SortOrder
    capacity?: SortOrder
    booked_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSlotSumOrderByAggregateInput = {
    capacity?: SortOrder
    booked_count?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BookingTypeNullableScalarRelationFilter = {
    is?: BookingTypeWhereInput | null
    isNot?: BookingTypeWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    booking_type_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note?: SortOrder
    contact_id?: SortOrder
    invited_users?: SortOrder
    meeting_type?: SortOrder
    meeting_link?: SortOrder
    location?: SortOrder
    geo_location?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    status?: SortOrder
    series_id?: SortOrder
    is_recurring?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    duration_minutes?: SortOrder
    notification_mins?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    booking_type_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note?: SortOrder
    contact_id?: SortOrder
    meeting_type?: SortOrder
    meeting_link?: SortOrder
    location?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    status?: SortOrder
    series_id?: SortOrder
    is_recurring?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    booking_type_id?: SortOrder
    created_by_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note?: SortOrder
    contact_id?: SortOrder
    meeting_type?: SortOrder
    meeting_link?: SortOrder
    location?: SortOrder
    start_datetime?: SortOrder
    end_datetime?: SortOrder
    duration_minutes?: SortOrder
    color?: SortOrder
    notification_mins?: SortOrder
    notification_type?: SortOrder
    status?: SortOrder
    series_id?: SortOrder
    is_recurring?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    duration_minutes?: SortOrder
    notification_mins?: SortOrder
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

  export type BookingTypeGroupCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    booking_type_ids?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingTypeGroupMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    created_by_user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSlotCreateNestedManyWithoutBooking_typeInput = {
    create?: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput> | BookingSlotCreateWithoutBooking_typeInput[] | BookingSlotUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: BookingSlotCreateOrConnectWithoutBooking_typeInput | BookingSlotCreateOrConnectWithoutBooking_typeInput[]
    createMany?: BookingSlotCreateManyBooking_typeInputEnvelope
    connect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutBooking_typeInput = {
    create?: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput> | AppointmentCreateWithoutBooking_typeInput[] | AppointmentUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBooking_typeInput | AppointmentCreateOrConnectWithoutBooking_typeInput[]
    createMany?: AppointmentCreateManyBooking_typeInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type BookingSlotUncheckedCreateNestedManyWithoutBooking_typeInput = {
    create?: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput> | BookingSlotCreateWithoutBooking_typeInput[] | BookingSlotUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: BookingSlotCreateOrConnectWithoutBooking_typeInput | BookingSlotCreateOrConnectWithoutBooking_typeInput[]
    createMany?: BookingSlotCreateManyBooking_typeInputEnvelope
    connect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutBooking_typeInput = {
    create?: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput> | AppointmentCreateWithoutBooking_typeInput[] | AppointmentUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBooking_typeInput | AppointmentCreateOrConnectWithoutBooking_typeInput[]
    createMany?: AppointmentCreateManyBooking_typeInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingSlotUpdateManyWithoutBooking_typeNestedInput = {
    create?: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput> | BookingSlotCreateWithoutBooking_typeInput[] | BookingSlotUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: BookingSlotCreateOrConnectWithoutBooking_typeInput | BookingSlotCreateOrConnectWithoutBooking_typeInput[]
    upsert?: BookingSlotUpsertWithWhereUniqueWithoutBooking_typeInput | BookingSlotUpsertWithWhereUniqueWithoutBooking_typeInput[]
    createMany?: BookingSlotCreateManyBooking_typeInputEnvelope
    set?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    disconnect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    delete?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    connect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    update?: BookingSlotUpdateWithWhereUniqueWithoutBooking_typeInput | BookingSlotUpdateWithWhereUniqueWithoutBooking_typeInput[]
    updateMany?: BookingSlotUpdateManyWithWhereWithoutBooking_typeInput | BookingSlotUpdateManyWithWhereWithoutBooking_typeInput[]
    deleteMany?: BookingSlotScalarWhereInput | BookingSlotScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutBooking_typeNestedInput = {
    create?: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput> | AppointmentCreateWithoutBooking_typeInput[] | AppointmentUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBooking_typeInput | AppointmentCreateOrConnectWithoutBooking_typeInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBooking_typeInput | AppointmentUpsertWithWhereUniqueWithoutBooking_typeInput[]
    createMany?: AppointmentCreateManyBooking_typeInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBooking_typeInput | AppointmentUpdateWithWhereUniqueWithoutBooking_typeInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBooking_typeInput | AppointmentUpdateManyWithWhereWithoutBooking_typeInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookingSlotUncheckedUpdateManyWithoutBooking_typeNestedInput = {
    create?: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput> | BookingSlotCreateWithoutBooking_typeInput[] | BookingSlotUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: BookingSlotCreateOrConnectWithoutBooking_typeInput | BookingSlotCreateOrConnectWithoutBooking_typeInput[]
    upsert?: BookingSlotUpsertWithWhereUniqueWithoutBooking_typeInput | BookingSlotUpsertWithWhereUniqueWithoutBooking_typeInput[]
    createMany?: BookingSlotCreateManyBooking_typeInputEnvelope
    set?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    disconnect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    delete?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    connect?: BookingSlotWhereUniqueInput | BookingSlotWhereUniqueInput[]
    update?: BookingSlotUpdateWithWhereUniqueWithoutBooking_typeInput | BookingSlotUpdateWithWhereUniqueWithoutBooking_typeInput[]
    updateMany?: BookingSlotUpdateManyWithWhereWithoutBooking_typeInput | BookingSlotUpdateManyWithWhereWithoutBooking_typeInput[]
    deleteMany?: BookingSlotScalarWhereInput | BookingSlotScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutBooking_typeNestedInput = {
    create?: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput> | AppointmentCreateWithoutBooking_typeInput[] | AppointmentUncheckedCreateWithoutBooking_typeInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutBooking_typeInput | AppointmentCreateOrConnectWithoutBooking_typeInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutBooking_typeInput | AppointmentUpsertWithWhereUniqueWithoutBooking_typeInput[]
    createMany?: AppointmentCreateManyBooking_typeInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutBooking_typeInput | AppointmentUpdateWithWhereUniqueWithoutBooking_typeInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutBooking_typeInput | AppointmentUpdateManyWithWhereWithoutBooking_typeInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type BookingTypeCreateNestedOneWithoutSlotsInput = {
    create?: XOR<BookingTypeCreateWithoutSlotsInput, BookingTypeUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: BookingTypeCreateOrConnectWithoutSlotsInput
    connect?: BookingTypeWhereUniqueInput
  }

  export type BookingTypeUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<BookingTypeCreateWithoutSlotsInput, BookingTypeUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: BookingTypeCreateOrConnectWithoutSlotsInput
    upsert?: BookingTypeUpsertWithoutSlotsInput
    connect?: BookingTypeWhereUniqueInput
    update?: XOR<XOR<BookingTypeUpdateToOneWithWhereWithoutSlotsInput, BookingTypeUpdateWithoutSlotsInput>, BookingTypeUncheckedUpdateWithoutSlotsInput>
  }

  export type AppointmentCreateinvited_usersInput = {
    set: string[]
  }

  export type BookingTypeCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<BookingTypeCreateWithoutAppointmentsInput, BookingTypeUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: BookingTypeCreateOrConnectWithoutAppointmentsInput
    connect?: BookingTypeWhereUniqueInput
  }

  export type AppointmentUpdateinvited_usersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BookingTypeUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<BookingTypeCreateWithoutAppointmentsInput, BookingTypeUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: BookingTypeCreateOrConnectWithoutAppointmentsInput
    upsert?: BookingTypeUpsertWithoutAppointmentsInput
    disconnect?: BookingTypeWhereInput | boolean
    delete?: BookingTypeWhereInput | boolean
    connect?: BookingTypeWhereUniqueInput
    update?: XOR<XOR<BookingTypeUpdateToOneWithWhereWithoutAppointmentsInput, BookingTypeUpdateWithoutAppointmentsInput>, BookingTypeUncheckedUpdateWithoutAppointmentsInput>
  }

  export type BookingTypeGroupCreatebooking_type_idsInput = {
    set: string[]
  }

  export type BookingTypeGroupUpdatebooking_type_idsInput = {
    set?: string[]
    push?: string | string[]
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type BookingSlotCreateWithoutBooking_typeInput = {
    id?: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingSlotUncheckedCreateWithoutBooking_typeInput = {
    id?: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingSlotCreateOrConnectWithoutBooking_typeInput = {
    where: BookingSlotWhereUniqueInput
    create: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput>
  }

  export type BookingSlotCreateManyBooking_typeInputEnvelope = {
    data: BookingSlotCreateManyBooking_typeInput | BookingSlotCreateManyBooking_typeInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutBooking_typeInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentUncheckedCreateWithoutBooking_typeInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutBooking_typeInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput>
  }

  export type AppointmentCreateManyBooking_typeInputEnvelope = {
    data: AppointmentCreateManyBooking_typeInput | AppointmentCreateManyBooking_typeInput[]
    skipDuplicates?: boolean
  }

  export type BookingSlotUpsertWithWhereUniqueWithoutBooking_typeInput = {
    where: BookingSlotWhereUniqueInput
    update: XOR<BookingSlotUpdateWithoutBooking_typeInput, BookingSlotUncheckedUpdateWithoutBooking_typeInput>
    create: XOR<BookingSlotCreateWithoutBooking_typeInput, BookingSlotUncheckedCreateWithoutBooking_typeInput>
  }

  export type BookingSlotUpdateWithWhereUniqueWithoutBooking_typeInput = {
    where: BookingSlotWhereUniqueInput
    data: XOR<BookingSlotUpdateWithoutBooking_typeInput, BookingSlotUncheckedUpdateWithoutBooking_typeInput>
  }

  export type BookingSlotUpdateManyWithWhereWithoutBooking_typeInput = {
    where: BookingSlotScalarWhereInput
    data: XOR<BookingSlotUpdateManyMutationInput, BookingSlotUncheckedUpdateManyWithoutBooking_typeInput>
  }

  export type BookingSlotScalarWhereInput = {
    AND?: BookingSlotScalarWhereInput | BookingSlotScalarWhereInput[]
    OR?: BookingSlotScalarWhereInput[]
    NOT?: BookingSlotScalarWhereInput | BookingSlotScalarWhereInput[]
    id?: UuidFilter<"BookingSlot"> | string
    booking_type_id?: UuidFilter<"BookingSlot"> | string
    date?: DateTimeFilter<"BookingSlot"> | Date | string
    start_time?: StringFilter<"BookingSlot"> | string
    end_time?: StringFilter<"BookingSlot"> | string
    is_available?: BoolFilter<"BookingSlot"> | boolean
    capacity?: IntFilter<"BookingSlot"> | number
    booked_count?: IntFilter<"BookingSlot"> | number
    metadata?: JsonFilter<"BookingSlot">
    created_at?: DateTimeFilter<"BookingSlot"> | Date | string
    updated_at?: DateTimeFilter<"BookingSlot"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutBooking_typeInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutBooking_typeInput, AppointmentUncheckedUpdateWithoutBooking_typeInput>
    create: XOR<AppointmentCreateWithoutBooking_typeInput, AppointmentUncheckedCreateWithoutBooking_typeInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutBooking_typeInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutBooking_typeInput, AppointmentUncheckedUpdateWithoutBooking_typeInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutBooking_typeInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutBooking_typeInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: UuidFilter<"Appointment"> | string
    org_id?: UuidFilter<"Appointment"> | string
    booking_type_id?: UuidNullableFilter<"Appointment"> | string | null
    created_by_user_id?: StringFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    note?: StringNullableFilter<"Appointment"> | string | null
    contact_id?: UuidNullableFilter<"Appointment"> | string | null
    invited_users?: StringNullableListFilter<"Appointment">
    meeting_type?: StringFilter<"Appointment"> | string
    meeting_link?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    geo_location?: JsonNullableFilter<"Appointment">
    start_datetime?: DateTimeFilter<"Appointment"> | Date | string
    end_datetime?: DateTimeFilter<"Appointment"> | Date | string
    duration_minutes?: IntFilter<"Appointment"> | number
    color?: StringFilter<"Appointment"> | string
    notification_mins?: IntNullableFilter<"Appointment"> | number | null
    notification_type?: StringNullableFilter<"Appointment"> | string | null
    status?: StringFilter<"Appointment"> | string
    series_id?: StringNullableFilter<"Appointment"> | string | null
    is_recurring?: BoolFilter<"Appointment"> | boolean
    metadata?: JsonFilter<"Appointment">
    created_at?: DateTimeFilter<"Appointment"> | Date | string
    updated_at?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type BookingTypeCreateWithoutSlotsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeUncheckedCreateWithoutSlotsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeCreateOrConnectWithoutSlotsInput = {
    where: BookingTypeWhereUniqueInput
    create: XOR<BookingTypeCreateWithoutSlotsInput, BookingTypeUncheckedCreateWithoutSlotsInput>
  }

  export type BookingTypeUpsertWithoutSlotsInput = {
    update: XOR<BookingTypeUpdateWithoutSlotsInput, BookingTypeUncheckedUpdateWithoutSlotsInput>
    create: XOR<BookingTypeCreateWithoutSlotsInput, BookingTypeUncheckedCreateWithoutSlotsInput>
    where?: BookingTypeWhereInput
  }

  export type BookingTypeUpdateToOneWithWhereWithoutSlotsInput = {
    where?: BookingTypeWhereInput
    data: XOR<BookingTypeUpdateWithoutSlotsInput, BookingTypeUncheckedUpdateWithoutSlotsInput>
  }

  export type BookingTypeUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingTypeUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingTypeCreateWithoutAppointmentsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    slots?: BookingSlotCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    link: string
    meeting_type?: string
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: number
    color?: string | null
    notification_mins?: number | null
    notification_type?: string | null
    email_subject?: string | null
    email_body?: string | null
    submit_button_label?: string
    status?: string
    is_archived?: boolean
    synced_with_schedule?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    slots?: BookingSlotUncheckedCreateNestedManyWithoutBooking_typeInput
  }

  export type BookingTypeCreateOrConnectWithoutAppointmentsInput = {
    where: BookingTypeWhereUniqueInput
    create: XOR<BookingTypeCreateWithoutAppointmentsInput, BookingTypeUncheckedCreateWithoutAppointmentsInput>
  }

  export type BookingTypeUpsertWithoutAppointmentsInput = {
    update: XOR<BookingTypeUpdateWithoutAppointmentsInput, BookingTypeUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<BookingTypeCreateWithoutAppointmentsInput, BookingTypeUncheckedCreateWithoutAppointmentsInput>
    where?: BookingTypeWhereInput
  }

  export type BookingTypeUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: BookingTypeWhereInput
    data: XOR<BookingTypeUpdateWithoutAppointmentsInput, BookingTypeUncheckedUpdateWithoutAppointmentsInput>
  }

  export type BookingTypeUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: BookingSlotUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingTypeUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    link?: StringFieldUpdateOperationsInput | string
    meeting_type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    email_subject?: NullableStringFieldUpdateOperationsInput | string | null
    email_body?: NullableStringFieldUpdateOperationsInput | string | null
    submit_button_label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    synced_with_schedule?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: BookingSlotUncheckedUpdateManyWithoutBooking_typeNestedInput
  }

  export type BookingSlotCreateManyBooking_typeInput = {
    id?: string
    date: Date | string
    start_time: string
    end_time: string
    is_available?: boolean
    capacity?: number
    booked_count?: number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AppointmentCreateManyBooking_typeInput = {
    id?: string
    org_id: string
    created_by_user_id: string
    title: string
    description?: string | null
    note?: string | null
    contact_id?: string | null
    invited_users?: AppointmentCreateinvited_usersInput | string[]
    meeting_type?: string
    meeting_link?: string | null
    location?: string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime: Date | string
    end_datetime: Date | string
    duration_minutes?: number
    color?: string
    notification_mins?: number | null
    notification_type?: string | null
    status?: string
    series_id?: string | null
    is_recurring?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingSlotUpdateWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSlotUncheckedUpdateWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingSlotUncheckedUpdateManyWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: StringFieldUpdateOperationsInput | string
    end_time?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    capacity?: IntFieldUpdateOperationsInput | number
    booked_count?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutBooking_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contact_id?: NullableStringFieldUpdateOperationsInput | string | null
    invited_users?: AppointmentUpdateinvited_usersInput | string[]
    meeting_type?: StringFieldUpdateOperationsInput | string
    meeting_link?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    geo_location?: NullableJsonNullValueInput | InputJsonValue
    start_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    end_datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration_minutes?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    notification_mins?: NullableIntFieldUpdateOperationsInput | number | null
    notification_type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    series_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_recurring?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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