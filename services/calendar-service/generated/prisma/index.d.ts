
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
 * Model Calendar
 * 
 */
export type Calendar = $Result.DefaultSelection<Prisma.$CalendarPayload>
/**
 * Model CalendarSettings
 * 
 */
export type CalendarSettings = $Result.DefaultSelection<Prisma.$CalendarSettingsPayload>
/**
 * Model EventCategory
 * 
 */
export type EventCategory = $Result.DefaultSelection<Prisma.$EventCategoryPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventScheduleItem
 * 
 */
export type EventScheduleItem = $Result.DefaultSelection<Prisma.$EventScheduleItemPayload>
/**
 * Model EventActivity
 * 
 */
export type EventActivity = $Result.DefaultSelection<Prisma.$EventActivityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Calendars
 * const calendars = await prisma.calendar.findMany()
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
   * // Fetch zero or more Calendars
   * const calendars = await prisma.calendar.findMany()
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
   * `prisma.calendar`: Exposes CRUD operations for the **Calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.CalendarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarSettings`: Exposes CRUD operations for the **CalendarSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarSettings
    * const calendarSettings = await prisma.calendarSettings.findMany()
    * ```
    */
  get calendarSettings(): Prisma.CalendarSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventCategory`: Exposes CRUD operations for the **EventCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventCategories
    * const eventCategories = await prisma.eventCategory.findMany()
    * ```
    */
  get eventCategory(): Prisma.EventCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventScheduleItem`: Exposes CRUD operations for the **EventScheduleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventScheduleItems
    * const eventScheduleItems = await prisma.eventScheduleItem.findMany()
    * ```
    */
  get eventScheduleItem(): Prisma.EventScheduleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventActivity`: Exposes CRUD operations for the **EventActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventActivities
    * const eventActivities = await prisma.eventActivity.findMany()
    * ```
    */
  get eventActivity(): Prisma.EventActivityDelegate<ExtArgs, ClientOptions>;
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
    Calendar: 'Calendar',
    CalendarSettings: 'CalendarSettings',
    EventCategory: 'EventCategory',
    Event: 'Event',
    EventScheduleItem: 'EventScheduleItem',
    EventActivity: 'EventActivity'
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
      modelProps: "calendar" | "calendarSettings" | "eventCategory" | "event" | "eventScheduleItem" | "eventActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Calendar: {
        payload: Prisma.$CalendarPayload<ExtArgs>
        fields: Prisma.CalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findFirst: {
            args: Prisma.CalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findMany: {
            args: Prisma.CalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          create: {
            args: Prisma.CalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          createMany: {
            args: Prisma.CalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          delete: {
            args: Prisma.CalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          update: {
            args: Prisma.CalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          deleteMany: {
            args: Prisma.CalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          upsert: {
            args: Prisma.CalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          aggregate: {
            args: Prisma.CalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar>
          }
          groupBy: {
            args: Prisma.CalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarCountAggregateOutputType> | number
          }
        }
      }
      CalendarSettings: {
        payload: Prisma.$CalendarSettingsPayload<ExtArgs>
        fields: Prisma.CalendarSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          findFirst: {
            args: Prisma.CalendarSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          findMany: {
            args: Prisma.CalendarSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>[]
          }
          create: {
            args: Prisma.CalendarSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          createMany: {
            args: Prisma.CalendarSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>[]
          }
          delete: {
            args: Prisma.CalendarSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          update: {
            args: Prisma.CalendarSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          deleteMany: {
            args: Prisma.CalendarSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>[]
          }
          upsert: {
            args: Prisma.CalendarSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarSettingsPayload>
          }
          aggregate: {
            args: Prisma.CalendarSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarSettings>
          }
          groupBy: {
            args: Prisma.CalendarSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarSettingsCountAggregateOutputType> | number
          }
        }
      }
      EventCategory: {
        payload: Prisma.$EventCategoryPayload<ExtArgs>
        fields: Prisma.EventCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          findFirst: {
            args: Prisma.EventCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          findMany: {
            args: Prisma.EventCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          create: {
            args: Prisma.EventCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          createMany: {
            args: Prisma.EventCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          delete: {
            args: Prisma.EventCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          update: {
            args: Prisma.EventCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EventCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          upsert: {
            args: Prisma.EventCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          aggregate: {
            args: Prisma.EventCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventCategory>
          }
          groupBy: {
            args: Prisma.EventCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EventCategoryCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventScheduleItem: {
        payload: Prisma.$EventScheduleItemPayload<ExtArgs>
        fields: Prisma.EventScheduleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventScheduleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventScheduleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          findFirst: {
            args: Prisma.EventScheduleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventScheduleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          findMany: {
            args: Prisma.EventScheduleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>[]
          }
          create: {
            args: Prisma.EventScheduleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          createMany: {
            args: Prisma.EventScheduleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventScheduleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>[]
          }
          delete: {
            args: Prisma.EventScheduleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          update: {
            args: Prisma.EventScheduleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          deleteMany: {
            args: Prisma.EventScheduleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventScheduleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventScheduleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>[]
          }
          upsert: {
            args: Prisma.EventScheduleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScheduleItemPayload>
          }
          aggregate: {
            args: Prisma.EventScheduleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventScheduleItem>
          }
          groupBy: {
            args: Prisma.EventScheduleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventScheduleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventScheduleItemCountArgs<ExtArgs>
            result: $Utils.Optional<EventScheduleItemCountAggregateOutputType> | number
          }
        }
      }
      EventActivity: {
        payload: Prisma.$EventActivityPayload<ExtArgs>
        fields: Prisma.EventActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          findFirst: {
            args: Prisma.EventActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          findMany: {
            args: Prisma.EventActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>[]
          }
          create: {
            args: Prisma.EventActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          createMany: {
            args: Prisma.EventActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>[]
          }
          delete: {
            args: Prisma.EventActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          update: {
            args: Prisma.EventActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          deleteMany: {
            args: Prisma.EventActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>[]
          }
          upsert: {
            args: Prisma.EventActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventActivityPayload>
          }
          aggregate: {
            args: Prisma.EventActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventActivity>
          }
          groupBy: {
            args: Prisma.EventActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventActivityCountArgs<ExtArgs>
            result: $Utils.Optional<EventActivityCountAggregateOutputType> | number
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
    calendar?: CalendarOmit
    calendarSettings?: CalendarSettingsOmit
    eventCategory?: EventCategoryOmit
    event?: EventOmit
    eventScheduleItem?: EventScheduleItemOmit
    eventActivity?: EventActivityOmit
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
   * Count Type CalendarCountOutputType
   */

  export type CalendarCountOutputType = {
    events: number
  }

  export type CalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CalendarCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarCountOutputType
     */
    select?: CalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCategoryCountOutputType
   */

  export type EventCategoryCountOutputType = {
    events: number
  }

  export type EventCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventCategoryCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * EventCategoryCountOutputType without action
   */
  export type EventCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategoryCountOutputType
     */
    select?: EventCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCategoryCountOutputType without action
   */
  export type EventCategoryCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    scheduleItems: number
    activities: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduleItems?: boolean | EventCountOutputTypeCountScheduleItemsArgs
    activities?: boolean | EventCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountScheduleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScheduleItemWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventActivityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Calendar
   */

  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    name: string | null
    color: string | null
    isDefault: boolean | null
    isVisible: boolean | null
    provider: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    name: string | null
    color: string | null
    isDefault: boolean | null
    isVisible: boolean | null
    provider: string | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    name: number
    color: number
    isDefault: number
    isVisible: number
    provider: number
    externalId: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    name?: true
    color?: true
    isDefault?: true
    isVisible?: true
    provider?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    name?: true
    color?: true
    isDefault?: true
    isVisible?: true
    provider?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    name?: true
    color?: true
    isDefault?: true
    isVisible?: true
    provider?: true
    externalId?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendar to aggregate.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type CalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarWhereInput
    orderBy?: CalendarOrderByWithAggregationInput | CalendarOrderByWithAggregationInput[]
    by: CalendarScalarFieldEnum[] | CalendarScalarFieldEnum
    having?: CalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }

  export type CalendarGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    name: string
    color: string
    isDefault: boolean
    isVisible: boolean
    provider: string | null
    externalId: string | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CalendarCountAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends CalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    isDefault?: boolean
    isVisible?: boolean
    provider?: boolean
    externalId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | Calendar$eventsArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    isDefault?: boolean
    isVisible?: boolean
    provider?: boolean
    externalId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    isDefault?: boolean
    isVisible?: boolean
    provider?: boolean
    externalId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    name?: boolean
    color?: boolean
    isDefault?: boolean
    isVisible?: boolean
    provider?: boolean
    externalId?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "name" | "color" | "isDefault" | "isVisible" | "provider" | "externalId" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["calendar"]>
  export type CalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Calendar$eventsArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CalendarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendar"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      name: string
      color: string
      isDefault: boolean
      isVisible: boolean
      provider: string | null
      externalId: string | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendar"]>
    composites: {}
  }

  type CalendarGetPayload<S extends boolean | null | undefined | CalendarDefaultArgs> = $Result.GetResult<Prisma.$CalendarPayload, S>

  type CalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface CalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendar'], meta: { name: 'Calendar' } }
    /**
     * Find zero or one Calendar that matches the filter.
     * @param {CalendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarFindUniqueArgs>(args: SelectSubset<T, CalendarFindUniqueArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarFindFirstArgs>(args?: SelectSubset<T, CalendarFindFirstArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarWithIdOnly = await prisma.calendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarFindManyArgs>(args?: SelectSubset<T, CalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendar.
     * @param {CalendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
     */
    create<T extends CalendarCreateArgs>(args: SelectSubset<T, CalendarCreateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendars.
     * @param {CalendarCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarCreateManyArgs>(args?: SelectSubset<T, CalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendars and returns the data saved in the database.
     * @param {CalendarCreateManyAndReturnArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendars and only return the `id`
     * const calendarWithIdOnly = await prisma.calendar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calendar.
     * @param {CalendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
     */
    delete<T extends CalendarDeleteArgs>(args: SelectSubset<T, CalendarDeleteArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendar.
     * @param {CalendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarUpdateArgs>(args: SelectSubset<T, CalendarUpdateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendars.
     * @param {CalendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarDeleteManyArgs>(args?: SelectSubset<T, CalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarUpdateManyArgs>(args: SelectSubset<T, CalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars and returns the data updated in the database.
     * @param {CalendarUpdateManyAndReturnArgs} args - Arguments to update many Calendars.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calendars and only return the `id`
     * const calendarWithIdOnly = await prisma.calendar.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalendarUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calendar.
     * @param {CalendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
     */
    upsert<T extends CalendarUpsertArgs>(args: SelectSubset<T, CalendarUpsertArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends CalendarCountArgs>(
      args?: Subset<T, CalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarGroupByArgs} args - Group by arguments.
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
      T extends CalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarGroupByArgs['orderBy'] }
        : { orderBy?: CalendarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendar model
   */
  readonly fields: CalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Calendar$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Calendar$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Calendar model
   */
  interface CalendarFieldRefs {
    readonly id: FieldRef<"Calendar", 'String'>
    readonly orgId: FieldRef<"Calendar", 'String'>
    readonly userId: FieldRef<"Calendar", 'String'>
    readonly name: FieldRef<"Calendar", 'String'>
    readonly color: FieldRef<"Calendar", 'String'>
    readonly isDefault: FieldRef<"Calendar", 'Boolean'>
    readonly isVisible: FieldRef<"Calendar", 'Boolean'>
    readonly provider: FieldRef<"Calendar", 'String'>
    readonly externalId: FieldRef<"Calendar", 'String'>
    readonly metadata: FieldRef<"Calendar", 'Json'>
    readonly createdAt: FieldRef<"Calendar", 'DateTime'>
    readonly updatedAt: FieldRef<"Calendar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Calendar findUnique
   */
  export type CalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findUniqueOrThrow
   */
  export type CalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findFirst
   */
  export type CalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findFirstOrThrow
   */
  export type CalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findMany
   */
  export type CalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendars to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar create
   */
  export type CalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a Calendar.
     */
    data: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
  }

  /**
   * Calendar createMany
   */
  export type CalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendar createManyAndReturn
   */
  export type CalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calendar update
   */
  export type CalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a Calendar.
     */
    data: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
    /**
     * Choose, which Calendar to update.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar updateMany
   */
  export type CalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to update.
     */
    limit?: number
  }

  /**
   * Calendar updateManyAndReturn
   */
  export type CalendarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to update.
     */
    limit?: number
  }

  /**
   * Calendar upsert
   */
  export type CalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the Calendar to update in case it exists.
     */
    where: CalendarWhereUniqueInput
    /**
     * In case the Calendar found by the `where` argument doesn't exist, create a new Calendar with this data.
     */
    create: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
    /**
     * In case the Calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
  }

  /**
   * Calendar delete
   */
  export type CalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter which Calendar to delete.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar deleteMany
   */
  export type CalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendars to delete
     */
    where?: CalendarWhereInput
    /**
     * Limit how many Calendars to delete.
     */
    limit?: number
  }

  /**
   * Calendar.events
   */
  export type Calendar$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Calendar without action
   */
  export type CalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
  }


  /**
   * Model CalendarSettings
   */

  export type AggregateCalendarSettings = {
    _count: CalendarSettingsCountAggregateOutputType | null
    _avg: CalendarSettingsAvgAggregateOutputType | null
    _sum: CalendarSettingsSumAggregateOutputType | null
    _min: CalendarSettingsMinAggregateOutputType | null
    _max: CalendarSettingsMaxAggregateOutputType | null
  }

  export type CalendarSettingsAvgAggregateOutputType = {
    weekStart: number | null
  }

  export type CalendarSettingsSumAggregateOutputType = {
    weekStart: number | null
  }

  export type CalendarSettingsMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    timezone: string | null
    weekStart: number | null
    timeFormat: string | null
    defaultView: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarSettingsMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    timezone: string | null
    weekStart: number | null
    timeFormat: string | null
    defaultView: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarSettingsCountAggregateOutputType = {
    id: number
    orgId: number
    timezone: number
    weekStart: number
    timeFormat: number
    defaultView: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarSettingsAvgAggregateInputType = {
    weekStart?: true
  }

  export type CalendarSettingsSumAggregateInputType = {
    weekStart?: true
  }

  export type CalendarSettingsMinAggregateInputType = {
    id?: true
    orgId?: true
    timezone?: true
    weekStart?: true
    timeFormat?: true
    defaultView?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarSettingsMaxAggregateInputType = {
    id?: true
    orgId?: true
    timezone?: true
    weekStart?: true
    timeFormat?: true
    defaultView?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarSettingsCountAggregateInputType = {
    id?: true
    orgId?: true
    timezone?: true
    weekStart?: true
    timeFormat?: true
    defaultView?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarSettings to aggregate.
     */
    where?: CalendarSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarSettings to fetch.
     */
    orderBy?: CalendarSettingsOrderByWithRelationInput | CalendarSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarSettings
    **/
    _count?: true | CalendarSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarSettingsMaxAggregateInputType
  }

  export type GetCalendarSettingsAggregateType<T extends CalendarSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarSettings[P]>
      : GetScalarType<T[P], AggregateCalendarSettings[P]>
  }




  export type CalendarSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarSettingsWhereInput
    orderBy?: CalendarSettingsOrderByWithAggregationInput | CalendarSettingsOrderByWithAggregationInput[]
    by: CalendarSettingsScalarFieldEnum[] | CalendarSettingsScalarFieldEnum
    having?: CalendarSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarSettingsCountAggregateInputType | true
    _avg?: CalendarSettingsAvgAggregateInputType
    _sum?: CalendarSettingsSumAggregateInputType
    _min?: CalendarSettingsMinAggregateInputType
    _max?: CalendarSettingsMaxAggregateInputType
  }

  export type CalendarSettingsGroupByOutputType = {
    id: string
    orgId: string
    timezone: string
    weekStart: number
    timeFormat: string
    defaultView: string
    theme: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CalendarSettingsCountAggregateOutputType | null
    _avg: CalendarSettingsAvgAggregateOutputType | null
    _sum: CalendarSettingsSumAggregateOutputType | null
    _min: CalendarSettingsMinAggregateOutputType | null
    _max: CalendarSettingsMaxAggregateOutputType | null
  }

  type GetCalendarSettingsGroupByPayload<T extends CalendarSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarSettingsGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    timezone?: boolean
    weekStart?: boolean
    timeFormat?: boolean
    defaultView?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calendarSettings"]>

  export type CalendarSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    timezone?: boolean
    weekStart?: boolean
    timeFormat?: boolean
    defaultView?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calendarSettings"]>

  export type CalendarSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    timezone?: boolean
    weekStart?: boolean
    timeFormat?: boolean
    defaultView?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["calendarSettings"]>

  export type CalendarSettingsSelectScalar = {
    id?: boolean
    orgId?: boolean
    timezone?: boolean
    weekStart?: boolean
    timeFormat?: boolean
    defaultView?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "timezone" | "weekStart" | "timeFormat" | "defaultView" | "theme" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarSettings"]>

  export type $CalendarSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      timezone: string
      weekStart: number
      timeFormat: string
      defaultView: string
      theme: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendarSettings"]>
    composites: {}
  }

  type CalendarSettingsGetPayload<S extends boolean | null | undefined | CalendarSettingsDefaultArgs> = $Result.GetResult<Prisma.$CalendarSettingsPayload, S>

  type CalendarSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarSettingsCountAggregateInputType | true
    }

  export interface CalendarSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarSettings'], meta: { name: 'CalendarSettings' } }
    /**
     * Find zero or one CalendarSettings that matches the filter.
     * @param {CalendarSettingsFindUniqueArgs} args - Arguments to find a CalendarSettings
     * @example
     * // Get one CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarSettingsFindUniqueArgs>(args: SelectSubset<T, CalendarSettingsFindUniqueArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarSettingsFindUniqueOrThrowArgs} args - Arguments to find a CalendarSettings
     * @example
     * // Get one CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsFindFirstArgs} args - Arguments to find a CalendarSettings
     * @example
     * // Get one CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarSettingsFindFirstArgs>(args?: SelectSubset<T, CalendarSettingsFindFirstArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsFindFirstOrThrowArgs} args - Arguments to find a CalendarSettings
     * @example
     * // Get one CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findMany()
     * 
     * // Get first 10 CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarSettingsWithIdOnly = await prisma.calendarSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarSettingsFindManyArgs>(args?: SelectSubset<T, CalendarSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarSettings.
     * @param {CalendarSettingsCreateArgs} args - Arguments to create a CalendarSettings.
     * @example
     * // Create one CalendarSettings
     * const CalendarSettings = await prisma.calendarSettings.create({
     *   data: {
     *     // ... data to create a CalendarSettings
     *   }
     * })
     * 
     */
    create<T extends CalendarSettingsCreateArgs>(args: SelectSubset<T, CalendarSettingsCreateArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarSettings.
     * @param {CalendarSettingsCreateManyArgs} args - Arguments to create many CalendarSettings.
     * @example
     * // Create many CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarSettingsCreateManyArgs>(args?: SelectSubset<T, CalendarSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarSettings and returns the data saved in the database.
     * @param {CalendarSettingsCreateManyAndReturnArgs} args - Arguments to create many CalendarSettings.
     * @example
     * // Create many CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarSettings and only return the `id`
     * const calendarSettingsWithIdOnly = await prisma.calendarSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarSettings.
     * @param {CalendarSettingsDeleteArgs} args - Arguments to delete one CalendarSettings.
     * @example
     * // Delete one CalendarSettings
     * const CalendarSettings = await prisma.calendarSettings.delete({
     *   where: {
     *     // ... filter to delete one CalendarSettings
     *   }
     * })
     * 
     */
    delete<T extends CalendarSettingsDeleteArgs>(args: SelectSubset<T, CalendarSettingsDeleteArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarSettings.
     * @param {CalendarSettingsUpdateArgs} args - Arguments to update one CalendarSettings.
     * @example
     * // Update one CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarSettingsUpdateArgs>(args: SelectSubset<T, CalendarSettingsUpdateArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarSettings.
     * @param {CalendarSettingsDeleteManyArgs} args - Arguments to filter CalendarSettings to delete.
     * @example
     * // Delete a few CalendarSettings
     * const { count } = await prisma.calendarSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarSettingsDeleteManyArgs>(args?: SelectSubset<T, CalendarSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarSettingsUpdateManyArgs>(args: SelectSubset<T, CalendarSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarSettings and returns the data updated in the database.
     * @param {CalendarSettingsUpdateManyAndReturnArgs} args - Arguments to update many CalendarSettings.
     * @example
     * // Update many CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarSettings and only return the `id`
     * const calendarSettingsWithIdOnly = await prisma.calendarSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalendarSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarSettings.
     * @param {CalendarSettingsUpsertArgs} args - Arguments to update or create a CalendarSettings.
     * @example
     * // Update or create a CalendarSettings
     * const calendarSettings = await prisma.calendarSettings.upsert({
     *   create: {
     *     // ... data to create a CalendarSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarSettings we want to update
     *   }
     * })
     */
    upsert<T extends CalendarSettingsUpsertArgs>(args: SelectSubset<T, CalendarSettingsUpsertArgs<ExtArgs>>): Prisma__CalendarSettingsClient<$Result.GetResult<Prisma.$CalendarSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsCountArgs} args - Arguments to filter CalendarSettings to count.
     * @example
     * // Count the number of CalendarSettings
     * const count = await prisma.calendarSettings.count({
     *   where: {
     *     // ... the filter for the CalendarSettings we want to count
     *   }
     * })
    **/
    count<T extends CalendarSettingsCountArgs>(
      args?: Subset<T, CalendarSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarSettingsAggregateArgs>(args: Subset<T, CalendarSettingsAggregateArgs>): Prisma.PrismaPromise<GetCalendarSettingsAggregateType<T>>

    /**
     * Group by CalendarSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarSettingsGroupByArgs} args - Group by arguments.
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
      T extends CalendarSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarSettingsGroupByArgs['orderBy'] }
        : { orderBy?: CalendarSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarSettings model
   */
  readonly fields: CalendarSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CalendarSettings model
   */
  interface CalendarSettingsFieldRefs {
    readonly id: FieldRef<"CalendarSettings", 'String'>
    readonly orgId: FieldRef<"CalendarSettings", 'String'>
    readonly timezone: FieldRef<"CalendarSettings", 'String'>
    readonly weekStart: FieldRef<"CalendarSettings", 'Int'>
    readonly timeFormat: FieldRef<"CalendarSettings", 'String'>
    readonly defaultView: FieldRef<"CalendarSettings", 'String'>
    readonly theme: FieldRef<"CalendarSettings", 'Json'>
    readonly createdAt: FieldRef<"CalendarSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"CalendarSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarSettings findUnique
   */
  export type CalendarSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CalendarSettings to fetch.
     */
    where: CalendarSettingsWhereUniqueInput
  }

  /**
   * CalendarSettings findUniqueOrThrow
   */
  export type CalendarSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CalendarSettings to fetch.
     */
    where: CalendarSettingsWhereUniqueInput
  }

  /**
   * CalendarSettings findFirst
   */
  export type CalendarSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CalendarSettings to fetch.
     */
    where?: CalendarSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarSettings to fetch.
     */
    orderBy?: CalendarSettingsOrderByWithRelationInput | CalendarSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarSettings.
     */
    cursor?: CalendarSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarSettings.
     */
    distinct?: CalendarSettingsScalarFieldEnum | CalendarSettingsScalarFieldEnum[]
  }

  /**
   * CalendarSettings findFirstOrThrow
   */
  export type CalendarSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CalendarSettings to fetch.
     */
    where?: CalendarSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarSettings to fetch.
     */
    orderBy?: CalendarSettingsOrderByWithRelationInput | CalendarSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarSettings.
     */
    cursor?: CalendarSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarSettings.
     */
    distinct?: CalendarSettingsScalarFieldEnum | CalendarSettingsScalarFieldEnum[]
  }

  /**
   * CalendarSettings findMany
   */
  export type CalendarSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter, which CalendarSettings to fetch.
     */
    where?: CalendarSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarSettings to fetch.
     */
    orderBy?: CalendarSettingsOrderByWithRelationInput | CalendarSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarSettings.
     */
    cursor?: CalendarSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarSettings.
     */
    skip?: number
    distinct?: CalendarSettingsScalarFieldEnum | CalendarSettingsScalarFieldEnum[]
  }

  /**
   * CalendarSettings create
   */
  export type CalendarSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a CalendarSettings.
     */
    data: XOR<CalendarSettingsCreateInput, CalendarSettingsUncheckedCreateInput>
  }

  /**
   * CalendarSettings createMany
   */
  export type CalendarSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarSettings.
     */
    data: CalendarSettingsCreateManyInput | CalendarSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarSettings createManyAndReturn
   */
  export type CalendarSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarSettings.
     */
    data: CalendarSettingsCreateManyInput | CalendarSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarSettings update
   */
  export type CalendarSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a CalendarSettings.
     */
    data: XOR<CalendarSettingsUpdateInput, CalendarSettingsUncheckedUpdateInput>
    /**
     * Choose, which CalendarSettings to update.
     */
    where: CalendarSettingsWhereUniqueInput
  }

  /**
   * CalendarSettings updateMany
   */
  export type CalendarSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarSettings.
     */
    data: XOR<CalendarSettingsUpdateManyMutationInput, CalendarSettingsUncheckedUpdateManyInput>
    /**
     * Filter which CalendarSettings to update
     */
    where?: CalendarSettingsWhereInput
    /**
     * Limit how many CalendarSettings to update.
     */
    limit?: number
  }

  /**
   * CalendarSettings updateManyAndReturn
   */
  export type CalendarSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * The data used to update CalendarSettings.
     */
    data: XOR<CalendarSettingsUpdateManyMutationInput, CalendarSettingsUncheckedUpdateManyInput>
    /**
     * Filter which CalendarSettings to update
     */
    where?: CalendarSettingsWhereInput
    /**
     * Limit how many CalendarSettings to update.
     */
    limit?: number
  }

  /**
   * CalendarSettings upsert
   */
  export type CalendarSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the CalendarSettings to update in case it exists.
     */
    where: CalendarSettingsWhereUniqueInput
    /**
     * In case the CalendarSettings found by the `where` argument doesn't exist, create a new CalendarSettings with this data.
     */
    create: XOR<CalendarSettingsCreateInput, CalendarSettingsUncheckedCreateInput>
    /**
     * In case the CalendarSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarSettingsUpdateInput, CalendarSettingsUncheckedUpdateInput>
  }

  /**
   * CalendarSettings delete
   */
  export type CalendarSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
    /**
     * Filter which CalendarSettings to delete.
     */
    where: CalendarSettingsWhereUniqueInput
  }

  /**
   * CalendarSettings deleteMany
   */
  export type CalendarSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarSettings to delete
     */
    where?: CalendarSettingsWhereInput
    /**
     * Limit how many CalendarSettings to delete.
     */
    limit?: number
  }

  /**
   * CalendarSettings without action
   */
  export type CalendarSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarSettings
     */
    select?: CalendarSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarSettings
     */
    omit?: CalendarSettingsOmit<ExtArgs> | null
  }


  /**
   * Model EventCategory
   */

  export type AggregateEventCategory = {
    _count: EventCategoryCountAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  export type EventCategoryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type EventCategoryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type EventCategoryCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    color: number
    icon: number
    createdAt: number
    _all: number
  }


  export type EventCategoryMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
  }

  export type EventCategoryMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
  }

  export type EventCategoryCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type EventCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCategory to aggregate.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventCategories
    **/
    _count?: true | EventCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventCategoryMaxAggregateInputType
  }

  export type GetEventCategoryAggregateType<T extends EventCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEventCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventCategory[P]>
      : GetScalarType<T[P], AggregateEventCategory[P]>
  }




  export type EventCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCategoryWhereInput
    orderBy?: EventCategoryOrderByWithAggregationInput | EventCategoryOrderByWithAggregationInput[]
    by: EventCategoryScalarFieldEnum[] | EventCategoryScalarFieldEnum
    having?: EventCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCategoryCountAggregateInputType | true
    _min?: EventCategoryMinAggregateInputType
    _max?: EventCategoryMaxAggregateInputType
  }

  export type EventCategoryGroupByOutputType = {
    id: string
    orgId: string
    name: string
    color: string
    icon: string | null
    createdAt: Date
    _count: EventCategoryCountAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  type GetEventCategoryGroupByPayload<T extends EventCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EventCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    events?: boolean | EventCategory$eventsArgs<ExtArgs>
    _count?: boolean | EventCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }

  export type EventCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "color" | "icon" | "createdAt", ExtArgs["result"]["eventCategory"]>
  export type EventCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventCategory$eventsArgs<ExtArgs>
    _count?: boolean | EventCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventCategory"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      color: string
      icon: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventCategory"]>
    composites: {}
  }

  type EventCategoryGetPayload<S extends boolean | null | undefined | EventCategoryDefaultArgs> = $Result.GetResult<Prisma.$EventCategoryPayload, S>

  type EventCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCategoryCountAggregateInputType | true
    }

  export interface EventCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventCategory'], meta: { name: 'EventCategory' } }
    /**
     * Find zero or one EventCategory that matches the filter.
     * @param {EventCategoryFindUniqueArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventCategoryFindUniqueArgs>(args: SelectSubset<T, EventCategoryFindUniqueArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventCategoryFindUniqueOrThrowArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EventCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindFirstArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventCategoryFindFirstArgs>(args?: SelectSubset<T, EventCategoryFindFirstArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindFirstOrThrowArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EventCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventCategories
     * const eventCategories = await prisma.eventCategory.findMany()
     * 
     * // Get first 10 EventCategories
     * const eventCategories = await prisma.eventCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventCategoryFindManyArgs>(args?: SelectSubset<T, EventCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventCategory.
     * @param {EventCategoryCreateArgs} args - Arguments to create a EventCategory.
     * @example
     * // Create one EventCategory
     * const EventCategory = await prisma.eventCategory.create({
     *   data: {
     *     // ... data to create a EventCategory
     *   }
     * })
     * 
     */
    create<T extends EventCategoryCreateArgs>(args: SelectSubset<T, EventCategoryCreateArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventCategories.
     * @param {EventCategoryCreateManyArgs} args - Arguments to create many EventCategories.
     * @example
     * // Create many EventCategories
     * const eventCategory = await prisma.eventCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCategoryCreateManyArgs>(args?: SelectSubset<T, EventCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventCategories and returns the data saved in the database.
     * @param {EventCategoryCreateManyAndReturnArgs} args - Arguments to create many EventCategories.
     * @example
     * // Create many EventCategories
     * const eventCategory = await prisma.eventCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventCategories and only return the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventCategory.
     * @param {EventCategoryDeleteArgs} args - Arguments to delete one EventCategory.
     * @example
     * // Delete one EventCategory
     * const EventCategory = await prisma.eventCategory.delete({
     *   where: {
     *     // ... filter to delete one EventCategory
     *   }
     * })
     * 
     */
    delete<T extends EventCategoryDeleteArgs>(args: SelectSubset<T, EventCategoryDeleteArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventCategory.
     * @param {EventCategoryUpdateArgs} args - Arguments to update one EventCategory.
     * @example
     * // Update one EventCategory
     * const eventCategory = await prisma.eventCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventCategoryUpdateArgs>(args: SelectSubset<T, EventCategoryUpdateArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventCategories.
     * @param {EventCategoryDeleteManyArgs} args - Arguments to filter EventCategories to delete.
     * @example
     * // Delete a few EventCategories
     * const { count } = await prisma.eventCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventCategoryDeleteManyArgs>(args?: SelectSubset<T, EventCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventCategories
     * const eventCategory = await prisma.eventCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventCategoryUpdateManyArgs>(args: SelectSubset<T, EventCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCategories and returns the data updated in the database.
     * @param {EventCategoryUpdateManyAndReturnArgs} args - Arguments to update many EventCategories.
     * @example
     * // Update many EventCategories
     * const eventCategory = await prisma.eventCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventCategories and only return the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EventCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventCategory.
     * @param {EventCategoryUpsertArgs} args - Arguments to update or create a EventCategory.
     * @example
     * // Update or create a EventCategory
     * const eventCategory = await prisma.eventCategory.upsert({
     *   create: {
     *     // ... data to create a EventCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventCategory we want to update
     *   }
     * })
     */
    upsert<T extends EventCategoryUpsertArgs>(args: SelectSubset<T, EventCategoryUpsertArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryCountArgs} args - Arguments to filter EventCategories to count.
     * @example
     * // Count the number of EventCategories
     * const count = await prisma.eventCategory.count({
     *   where: {
     *     // ... the filter for the EventCategories we want to count
     *   }
     * })
    **/
    count<T extends EventCategoryCountArgs>(
      args?: Subset<T, EventCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventCategoryAggregateArgs>(args: Subset<T, EventCategoryAggregateArgs>): Prisma.PrismaPromise<GetEventCategoryAggregateType<T>>

    /**
     * Group by EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryGroupByArgs} args - Group by arguments.
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
      T extends EventCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EventCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventCategory model
   */
  readonly fields: EventCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends EventCategory$eventsArgs<ExtArgs> = {}>(args?: Subset<T, EventCategory$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventCategory model
   */
  interface EventCategoryFieldRefs {
    readonly id: FieldRef<"EventCategory", 'String'>
    readonly orgId: FieldRef<"EventCategory", 'String'>
    readonly name: FieldRef<"EventCategory", 'String'>
    readonly color: FieldRef<"EventCategory", 'String'>
    readonly icon: FieldRef<"EventCategory", 'String'>
    readonly createdAt: FieldRef<"EventCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventCategory findUnique
   */
  export type EventCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory findUniqueOrThrow
   */
  export type EventCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory findFirst
   */
  export type EventCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCategories.
     */
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory findFirstOrThrow
   */
  export type EventCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCategories.
     */
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory findMany
   */
  export type EventCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategories to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory create
   */
  export type EventCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EventCategory.
     */
    data: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
  }

  /**
   * EventCategory createMany
   */
  export type EventCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventCategories.
     */
    data: EventCategoryCreateManyInput | EventCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventCategory createManyAndReturn
   */
  export type EventCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many EventCategories.
     */
    data: EventCategoryCreateManyInput | EventCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventCategory update
   */
  export type EventCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EventCategory.
     */
    data: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
    /**
     * Choose, which EventCategory to update.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory updateMany
   */
  export type EventCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventCategories.
     */
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EventCategories to update
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to update.
     */
    limit?: number
  }

  /**
   * EventCategory updateManyAndReturn
   */
  export type EventCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * The data used to update EventCategories.
     */
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EventCategories to update
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to update.
     */
    limit?: number
  }

  /**
   * EventCategory upsert
   */
  export type EventCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EventCategory to update in case it exists.
     */
    where: EventCategoryWhereUniqueInput
    /**
     * In case the EventCategory found by the `where` argument doesn't exist, create a new EventCategory with this data.
     */
    create: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
    /**
     * In case the EventCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
  }

  /**
   * EventCategory delete
   */
  export type EventCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter which EventCategory to delete.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory deleteMany
   */
  export type EventCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCategories to delete
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to delete.
     */
    limit?: number
  }

  /**
   * EventCategory.events
   */
  export type EventCategory$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * EventCategory without action
   */
  export type EventCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    calendarId: string | null
    categoryId: string | null
    createdBy: string | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    isRecurring: boolean | null
    color: string | null
    status: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    calendarId: string | null
    categoryId: string | null
    createdBy: string | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    isRecurring: boolean | null
    color: string | null
    status: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    orgId: number
    calendarId: number
    categoryId: number
    createdBy: number
    title: number
    description: number
    location: number
    startDate: number
    endDate: number
    allDay: number
    isRecurring: number
    recurrence: number
    color: number
    status: number
    attendees: number
    metadata: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    orgId?: true
    calendarId?: true
    categoryId?: true
    createdBy?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    allDay?: true
    isRecurring?: true
    color?: true
    status?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    orgId?: true
    calendarId?: true
    categoryId?: true
    createdBy?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    allDay?: true
    isRecurring?: true
    color?: true
    status?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    orgId?: true
    calendarId?: true
    categoryId?: true
    createdBy?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    allDay?: true
    isRecurring?: true
    recurrence?: true
    color?: true
    status?: true
    attendees?: true
    metadata?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    orgId: string
    calendarId: string | null
    categoryId: string | null
    createdBy: string
    title: string
    description: string | null
    location: string | null
    startDate: Date
    endDate: Date
    allDay: boolean
    isRecurring: boolean
    recurrence: JsonValue
    color: string | null
    status: string
    attendees: JsonValue
    metadata: JsonValue
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    calendarId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    color?: boolean
    status?: boolean
    attendees?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
    scheduleItems?: boolean | Event$scheduleItemsArgs<ExtArgs>
    activities?: boolean | Event$activitiesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    calendarId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    color?: boolean
    status?: boolean
    attendees?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    calendarId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    color?: boolean
    status?: boolean
    attendees?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    orgId?: boolean
    calendarId?: boolean
    categoryId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: boolean
    color?: boolean
    status?: boolean
    attendees?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "calendarId" | "categoryId" | "createdBy" | "title" | "description" | "location" | "startDate" | "endDate" | "allDay" | "isRecurring" | "recurrence" | "color" | "status" | "attendees" | "metadata" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
    scheduleItems?: boolean | Event$scheduleItemsArgs<ExtArgs>
    activities?: boolean | Event$activitiesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendar?: boolean | Event$calendarArgs<ExtArgs>
    category?: boolean | Event$categoryArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      calendar: Prisma.$CalendarPayload<ExtArgs> | null
      category: Prisma.$EventCategoryPayload<ExtArgs> | null
      scheduleItems: Prisma.$EventScheduleItemPayload<ExtArgs>[]
      activities: Prisma.$EventActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      calendarId: string | null
      categoryId: string | null
      createdBy: string
      title: string
      description: string | null
      location: string | null
      startDate: Date
      endDate: Date
      allDay: boolean
      isRecurring: boolean
      recurrence: Prisma.JsonValue
      color: string | null
      status: string
      attendees: Prisma.JsonValue
      metadata: Prisma.JsonValue
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendar<T extends Event$calendarArgs<ExtArgs> = {}>(args?: Subset<T, Event$calendarArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Event$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Event$categoryArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scheduleItems<T extends Event$scheduleItemsArgs<ExtArgs> = {}>(args?: Subset<T, Event$scheduleItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Event$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Event$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly orgId: FieldRef<"Event", 'String'>
    readonly calendarId: FieldRef<"Event", 'String'>
    readonly categoryId: FieldRef<"Event", 'String'>
    readonly createdBy: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly allDay: FieldRef<"Event", 'Boolean'>
    readonly isRecurring: FieldRef<"Event", 'Boolean'>
    readonly recurrence: FieldRef<"Event", 'Json'>
    readonly color: FieldRef<"Event", 'String'>
    readonly status: FieldRef<"Event", 'String'>
    readonly attendees: FieldRef<"Event", 'Json'>
    readonly metadata: FieldRef<"Event", 'Json'>
    readonly isDeleted: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.calendar
   */
  export type Event$calendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calendar
     */
    omit?: CalendarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    where?: CalendarWhereInput
  }

  /**
   * Event.category
   */
  export type Event$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    where?: EventCategoryWhereInput
  }

  /**
   * Event.scheduleItems
   */
  export type Event$scheduleItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    where?: EventScheduleItemWhereInput
    orderBy?: EventScheduleItemOrderByWithRelationInput | EventScheduleItemOrderByWithRelationInput[]
    cursor?: EventScheduleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScheduleItemScalarFieldEnum | EventScheduleItemScalarFieldEnum[]
  }

  /**
   * Event.activities
   */
  export type Event$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    where?: EventActivityWhereInput
    orderBy?: EventActivityOrderByWithRelationInput | EventActivityOrderByWithRelationInput[]
    cursor?: EventActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventActivityScalarFieldEnum | EventActivityScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventScheduleItem
   */

  export type AggregateEventScheduleItem = {
    _count: EventScheduleItemCountAggregateOutputType | null
    _min: EventScheduleItemMinAggregateOutputType | null
    _max: EventScheduleItemMaxAggregateOutputType | null
  }

  export type EventScheduleItemMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    orgId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    speaker: string | null
    location: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EventScheduleItemMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    orgId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    speaker: string | null
    location: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EventScheduleItemCountAggregateOutputType = {
    id: number
    eventId: number
    orgId: number
    title: number
    startTime: number
    endTime: number
    speaker: number
    location: number
    description: number
    createdAt: number
    _all: number
  }


  export type EventScheduleItemMinAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    title?: true
    startTime?: true
    endTime?: true
    speaker?: true
    location?: true
    description?: true
    createdAt?: true
  }

  export type EventScheduleItemMaxAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    title?: true
    startTime?: true
    endTime?: true
    speaker?: true
    location?: true
    description?: true
    createdAt?: true
  }

  export type EventScheduleItemCountAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    title?: true
    startTime?: true
    endTime?: true
    speaker?: true
    location?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type EventScheduleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScheduleItem to aggregate.
     */
    where?: EventScheduleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScheduleItems to fetch.
     */
    orderBy?: EventScheduleItemOrderByWithRelationInput | EventScheduleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventScheduleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScheduleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScheduleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventScheduleItems
    **/
    _count?: true | EventScheduleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventScheduleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventScheduleItemMaxAggregateInputType
  }

  export type GetEventScheduleItemAggregateType<T extends EventScheduleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateEventScheduleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventScheduleItem[P]>
      : GetScalarType<T[P], AggregateEventScheduleItem[P]>
  }




  export type EventScheduleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScheduleItemWhereInput
    orderBy?: EventScheduleItemOrderByWithAggregationInput | EventScheduleItemOrderByWithAggregationInput[]
    by: EventScheduleItemScalarFieldEnum[] | EventScheduleItemScalarFieldEnum
    having?: EventScheduleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventScheduleItemCountAggregateInputType | true
    _min?: EventScheduleItemMinAggregateInputType
    _max?: EventScheduleItemMaxAggregateInputType
  }

  export type EventScheduleItemGroupByOutputType = {
    id: string
    eventId: string
    orgId: string
    title: string
    startTime: Date
    endTime: Date
    speaker: string | null
    location: string | null
    description: string | null
    createdAt: Date
    _count: EventScheduleItemCountAggregateOutputType | null
    _min: EventScheduleItemMinAggregateOutputType | null
    _max: EventScheduleItemMaxAggregateOutputType | null
  }

  type GetEventScheduleItemGroupByPayload<T extends EventScheduleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventScheduleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventScheduleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventScheduleItemGroupByOutputType[P]>
            : GetScalarType<T[P], EventScheduleItemGroupByOutputType[P]>
        }
      >
    >


  export type EventScheduleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    speaker?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScheduleItem"]>

  export type EventScheduleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    speaker?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScheduleItem"]>

  export type EventScheduleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    speaker?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScheduleItem"]>

  export type EventScheduleItemSelectScalar = {
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    speaker?: boolean
    location?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type EventScheduleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "orgId" | "title" | "startTime" | "endTime" | "speaker" | "location" | "description" | "createdAt", ExtArgs["result"]["eventScheduleItem"]>
  export type EventScheduleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventScheduleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventScheduleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventScheduleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventScheduleItem"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      orgId: string
      title: string
      startTime: Date
      endTime: Date
      speaker: string | null
      location: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventScheduleItem"]>
    composites: {}
  }

  type EventScheduleItemGetPayload<S extends boolean | null | undefined | EventScheduleItemDefaultArgs> = $Result.GetResult<Prisma.$EventScheduleItemPayload, S>

  type EventScheduleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventScheduleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventScheduleItemCountAggregateInputType | true
    }

  export interface EventScheduleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventScheduleItem'], meta: { name: 'EventScheduleItem' } }
    /**
     * Find zero or one EventScheduleItem that matches the filter.
     * @param {EventScheduleItemFindUniqueArgs} args - Arguments to find a EventScheduleItem
     * @example
     * // Get one EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventScheduleItemFindUniqueArgs>(args: SelectSubset<T, EventScheduleItemFindUniqueArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventScheduleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventScheduleItemFindUniqueOrThrowArgs} args - Arguments to find a EventScheduleItem
     * @example
     * // Get one EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventScheduleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, EventScheduleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScheduleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemFindFirstArgs} args - Arguments to find a EventScheduleItem
     * @example
     * // Get one EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventScheduleItemFindFirstArgs>(args?: SelectSubset<T, EventScheduleItemFindFirstArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScheduleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemFindFirstOrThrowArgs} args - Arguments to find a EventScheduleItem
     * @example
     * // Get one EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventScheduleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, EventScheduleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventScheduleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventScheduleItems
     * const eventScheduleItems = await prisma.eventScheduleItem.findMany()
     * 
     * // Get first 10 EventScheduleItems
     * const eventScheduleItems = await prisma.eventScheduleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventScheduleItemWithIdOnly = await prisma.eventScheduleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventScheduleItemFindManyArgs>(args?: SelectSubset<T, EventScheduleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventScheduleItem.
     * @param {EventScheduleItemCreateArgs} args - Arguments to create a EventScheduleItem.
     * @example
     * // Create one EventScheduleItem
     * const EventScheduleItem = await prisma.eventScheduleItem.create({
     *   data: {
     *     // ... data to create a EventScheduleItem
     *   }
     * })
     * 
     */
    create<T extends EventScheduleItemCreateArgs>(args: SelectSubset<T, EventScheduleItemCreateArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventScheduleItems.
     * @param {EventScheduleItemCreateManyArgs} args - Arguments to create many EventScheduleItems.
     * @example
     * // Create many EventScheduleItems
     * const eventScheduleItem = await prisma.eventScheduleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventScheduleItemCreateManyArgs>(args?: SelectSubset<T, EventScheduleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventScheduleItems and returns the data saved in the database.
     * @param {EventScheduleItemCreateManyAndReturnArgs} args - Arguments to create many EventScheduleItems.
     * @example
     * // Create many EventScheduleItems
     * const eventScheduleItem = await prisma.eventScheduleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventScheduleItems and only return the `id`
     * const eventScheduleItemWithIdOnly = await prisma.eventScheduleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventScheduleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, EventScheduleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventScheduleItem.
     * @param {EventScheduleItemDeleteArgs} args - Arguments to delete one EventScheduleItem.
     * @example
     * // Delete one EventScheduleItem
     * const EventScheduleItem = await prisma.eventScheduleItem.delete({
     *   where: {
     *     // ... filter to delete one EventScheduleItem
     *   }
     * })
     * 
     */
    delete<T extends EventScheduleItemDeleteArgs>(args: SelectSubset<T, EventScheduleItemDeleteArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventScheduleItem.
     * @param {EventScheduleItemUpdateArgs} args - Arguments to update one EventScheduleItem.
     * @example
     * // Update one EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventScheduleItemUpdateArgs>(args: SelectSubset<T, EventScheduleItemUpdateArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventScheduleItems.
     * @param {EventScheduleItemDeleteManyArgs} args - Arguments to filter EventScheduleItems to delete.
     * @example
     * // Delete a few EventScheduleItems
     * const { count } = await prisma.eventScheduleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventScheduleItemDeleteManyArgs>(args?: SelectSubset<T, EventScheduleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventScheduleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventScheduleItems
     * const eventScheduleItem = await prisma.eventScheduleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventScheduleItemUpdateManyArgs>(args: SelectSubset<T, EventScheduleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventScheduleItems and returns the data updated in the database.
     * @param {EventScheduleItemUpdateManyAndReturnArgs} args - Arguments to update many EventScheduleItems.
     * @example
     * // Update many EventScheduleItems
     * const eventScheduleItem = await prisma.eventScheduleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventScheduleItems and only return the `id`
     * const eventScheduleItemWithIdOnly = await prisma.eventScheduleItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventScheduleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, EventScheduleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventScheduleItem.
     * @param {EventScheduleItemUpsertArgs} args - Arguments to update or create a EventScheduleItem.
     * @example
     * // Update or create a EventScheduleItem
     * const eventScheduleItem = await prisma.eventScheduleItem.upsert({
     *   create: {
     *     // ... data to create a EventScheduleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventScheduleItem we want to update
     *   }
     * })
     */
    upsert<T extends EventScheduleItemUpsertArgs>(args: SelectSubset<T, EventScheduleItemUpsertArgs<ExtArgs>>): Prisma__EventScheduleItemClient<$Result.GetResult<Prisma.$EventScheduleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventScheduleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemCountArgs} args - Arguments to filter EventScheduleItems to count.
     * @example
     * // Count the number of EventScheduleItems
     * const count = await prisma.eventScheduleItem.count({
     *   where: {
     *     // ... the filter for the EventScheduleItems we want to count
     *   }
     * })
    **/
    count<T extends EventScheduleItemCountArgs>(
      args?: Subset<T, EventScheduleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventScheduleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventScheduleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventScheduleItemAggregateArgs>(args: Subset<T, EventScheduleItemAggregateArgs>): Prisma.PrismaPromise<GetEventScheduleItemAggregateType<T>>

    /**
     * Group by EventScheduleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScheduleItemGroupByArgs} args - Group by arguments.
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
      T extends EventScheduleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventScheduleItemGroupByArgs['orderBy'] }
        : { orderBy?: EventScheduleItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventScheduleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventScheduleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventScheduleItem model
   */
  readonly fields: EventScheduleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventScheduleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventScheduleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventScheduleItem model
   */
  interface EventScheduleItemFieldRefs {
    readonly id: FieldRef<"EventScheduleItem", 'String'>
    readonly eventId: FieldRef<"EventScheduleItem", 'String'>
    readonly orgId: FieldRef<"EventScheduleItem", 'String'>
    readonly title: FieldRef<"EventScheduleItem", 'String'>
    readonly startTime: FieldRef<"EventScheduleItem", 'DateTime'>
    readonly endTime: FieldRef<"EventScheduleItem", 'DateTime'>
    readonly speaker: FieldRef<"EventScheduleItem", 'String'>
    readonly location: FieldRef<"EventScheduleItem", 'String'>
    readonly description: FieldRef<"EventScheduleItem", 'String'>
    readonly createdAt: FieldRef<"EventScheduleItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventScheduleItem findUnique
   */
  export type EventScheduleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter, which EventScheduleItem to fetch.
     */
    where: EventScheduleItemWhereUniqueInput
  }

  /**
   * EventScheduleItem findUniqueOrThrow
   */
  export type EventScheduleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter, which EventScheduleItem to fetch.
     */
    where: EventScheduleItemWhereUniqueInput
  }

  /**
   * EventScheduleItem findFirst
   */
  export type EventScheduleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter, which EventScheduleItem to fetch.
     */
    where?: EventScheduleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScheduleItems to fetch.
     */
    orderBy?: EventScheduleItemOrderByWithRelationInput | EventScheduleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScheduleItems.
     */
    cursor?: EventScheduleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScheduleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScheduleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScheduleItems.
     */
    distinct?: EventScheduleItemScalarFieldEnum | EventScheduleItemScalarFieldEnum[]
  }

  /**
   * EventScheduleItem findFirstOrThrow
   */
  export type EventScheduleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter, which EventScheduleItem to fetch.
     */
    where?: EventScheduleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScheduleItems to fetch.
     */
    orderBy?: EventScheduleItemOrderByWithRelationInput | EventScheduleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScheduleItems.
     */
    cursor?: EventScheduleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScheduleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScheduleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScheduleItems.
     */
    distinct?: EventScheduleItemScalarFieldEnum | EventScheduleItemScalarFieldEnum[]
  }

  /**
   * EventScheduleItem findMany
   */
  export type EventScheduleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter, which EventScheduleItems to fetch.
     */
    where?: EventScheduleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScheduleItems to fetch.
     */
    orderBy?: EventScheduleItemOrderByWithRelationInput | EventScheduleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventScheduleItems.
     */
    cursor?: EventScheduleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScheduleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScheduleItems.
     */
    skip?: number
    distinct?: EventScheduleItemScalarFieldEnum | EventScheduleItemScalarFieldEnum[]
  }

  /**
   * EventScheduleItem create
   */
  export type EventScheduleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a EventScheduleItem.
     */
    data: XOR<EventScheduleItemCreateInput, EventScheduleItemUncheckedCreateInput>
  }

  /**
   * EventScheduleItem createMany
   */
  export type EventScheduleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventScheduleItems.
     */
    data: EventScheduleItemCreateManyInput | EventScheduleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventScheduleItem createManyAndReturn
   */
  export type EventScheduleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * The data used to create many EventScheduleItems.
     */
    data: EventScheduleItemCreateManyInput | EventScheduleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventScheduleItem update
   */
  export type EventScheduleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a EventScheduleItem.
     */
    data: XOR<EventScheduleItemUpdateInput, EventScheduleItemUncheckedUpdateInput>
    /**
     * Choose, which EventScheduleItem to update.
     */
    where: EventScheduleItemWhereUniqueInput
  }

  /**
   * EventScheduleItem updateMany
   */
  export type EventScheduleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventScheduleItems.
     */
    data: XOR<EventScheduleItemUpdateManyMutationInput, EventScheduleItemUncheckedUpdateManyInput>
    /**
     * Filter which EventScheduleItems to update
     */
    where?: EventScheduleItemWhereInput
    /**
     * Limit how many EventScheduleItems to update.
     */
    limit?: number
  }

  /**
   * EventScheduleItem updateManyAndReturn
   */
  export type EventScheduleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * The data used to update EventScheduleItems.
     */
    data: XOR<EventScheduleItemUpdateManyMutationInput, EventScheduleItemUncheckedUpdateManyInput>
    /**
     * Filter which EventScheduleItems to update
     */
    where?: EventScheduleItemWhereInput
    /**
     * Limit how many EventScheduleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventScheduleItem upsert
   */
  export type EventScheduleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the EventScheduleItem to update in case it exists.
     */
    where: EventScheduleItemWhereUniqueInput
    /**
     * In case the EventScheduleItem found by the `where` argument doesn't exist, create a new EventScheduleItem with this data.
     */
    create: XOR<EventScheduleItemCreateInput, EventScheduleItemUncheckedCreateInput>
    /**
     * In case the EventScheduleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventScheduleItemUpdateInput, EventScheduleItemUncheckedUpdateInput>
  }

  /**
   * EventScheduleItem delete
   */
  export type EventScheduleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
    /**
     * Filter which EventScheduleItem to delete.
     */
    where: EventScheduleItemWhereUniqueInput
  }

  /**
   * EventScheduleItem deleteMany
   */
  export type EventScheduleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScheduleItems to delete
     */
    where?: EventScheduleItemWhereInput
    /**
     * Limit how many EventScheduleItems to delete.
     */
    limit?: number
  }

  /**
   * EventScheduleItem without action
   */
  export type EventScheduleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScheduleItem
     */
    select?: EventScheduleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScheduleItem
     */
    omit?: EventScheduleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScheduleItemInclude<ExtArgs> | null
  }


  /**
   * Model EventActivity
   */

  export type AggregateEventActivity = {
    _count: EventActivityCountAggregateOutputType | null
    _min: EventActivityMinAggregateOutputType | null
    _max: EventActivityMaxAggregateOutputType | null
  }

  export type EventActivityMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    orgId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EventActivityMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    orgId: string | null
    userId: string | null
    action: string | null
    description: string | null
    createdAt: Date | null
  }

  export type EventActivityCountAggregateOutputType = {
    id: number
    eventId: number
    orgId: number
    userId: number
    action: number
    description: number
    createdAt: number
    _all: number
  }


  export type EventActivityMinAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type EventActivityMaxAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
  }

  export type EventActivityCountAggregateInputType = {
    id?: true
    eventId?: true
    orgId?: true
    userId?: true
    action?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type EventActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventActivity to aggregate.
     */
    where?: EventActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventActivities to fetch.
     */
    orderBy?: EventActivityOrderByWithRelationInput | EventActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventActivities
    **/
    _count?: true | EventActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventActivityMaxAggregateInputType
  }

  export type GetEventActivityAggregateType<T extends EventActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateEventActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventActivity[P]>
      : GetScalarType<T[P], AggregateEventActivity[P]>
  }




  export type EventActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventActivityWhereInput
    orderBy?: EventActivityOrderByWithAggregationInput | EventActivityOrderByWithAggregationInput[]
    by: EventActivityScalarFieldEnum[] | EventActivityScalarFieldEnum
    having?: EventActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventActivityCountAggregateInputType | true
    _min?: EventActivityMinAggregateInputType
    _max?: EventActivityMaxAggregateInputType
  }

  export type EventActivityGroupByOutputType = {
    id: string
    eventId: string
    orgId: string
    userId: string
    action: string
    description: string | null
    createdAt: Date
    _count: EventActivityCountAggregateOutputType | null
    _min: EventActivityMinAggregateOutputType | null
    _max: EventActivityMaxAggregateOutputType | null
  }

  type GetEventActivityGroupByPayload<T extends EventActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventActivityGroupByOutputType[P]>
            : GetScalarType<T[P], EventActivityGroupByOutputType[P]>
        }
      >
    >


  export type EventActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventActivity"]>

  export type EventActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventActivity"]>

  export type EventActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventActivity"]>

  export type EventActivitySelectScalar = {
    id?: boolean
    eventId?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type EventActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "orgId" | "userId" | "action" | "description" | "createdAt", ExtArgs["result"]["eventActivity"]>
  export type EventActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventActivity"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      orgId: string
      userId: string
      action: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventActivity"]>
    composites: {}
  }

  type EventActivityGetPayload<S extends boolean | null | undefined | EventActivityDefaultArgs> = $Result.GetResult<Prisma.$EventActivityPayload, S>

  type EventActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventActivityCountAggregateInputType | true
    }

  export interface EventActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventActivity'], meta: { name: 'EventActivity' } }
    /**
     * Find zero or one EventActivity that matches the filter.
     * @param {EventActivityFindUniqueArgs} args - Arguments to find a EventActivity
     * @example
     * // Get one EventActivity
     * const eventActivity = await prisma.eventActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventActivityFindUniqueArgs>(args: SelectSubset<T, EventActivityFindUniqueArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventActivityFindUniqueOrThrowArgs} args - Arguments to find a EventActivity
     * @example
     * // Get one EventActivity
     * const eventActivity = await prisma.eventActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, EventActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityFindFirstArgs} args - Arguments to find a EventActivity
     * @example
     * // Get one EventActivity
     * const eventActivity = await prisma.eventActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventActivityFindFirstArgs>(args?: SelectSubset<T, EventActivityFindFirstArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityFindFirstOrThrowArgs} args - Arguments to find a EventActivity
     * @example
     * // Get one EventActivity
     * const eventActivity = await prisma.eventActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, EventActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventActivities
     * const eventActivities = await prisma.eventActivity.findMany()
     * 
     * // Get first 10 EventActivities
     * const eventActivities = await prisma.eventActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventActivityWithIdOnly = await prisma.eventActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventActivityFindManyArgs>(args?: SelectSubset<T, EventActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventActivity.
     * @param {EventActivityCreateArgs} args - Arguments to create a EventActivity.
     * @example
     * // Create one EventActivity
     * const EventActivity = await prisma.eventActivity.create({
     *   data: {
     *     // ... data to create a EventActivity
     *   }
     * })
     * 
     */
    create<T extends EventActivityCreateArgs>(args: SelectSubset<T, EventActivityCreateArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventActivities.
     * @param {EventActivityCreateManyArgs} args - Arguments to create many EventActivities.
     * @example
     * // Create many EventActivities
     * const eventActivity = await prisma.eventActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventActivityCreateManyArgs>(args?: SelectSubset<T, EventActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventActivities and returns the data saved in the database.
     * @param {EventActivityCreateManyAndReturnArgs} args - Arguments to create many EventActivities.
     * @example
     * // Create many EventActivities
     * const eventActivity = await prisma.eventActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventActivities and only return the `id`
     * const eventActivityWithIdOnly = await prisma.eventActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, EventActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventActivity.
     * @param {EventActivityDeleteArgs} args - Arguments to delete one EventActivity.
     * @example
     * // Delete one EventActivity
     * const EventActivity = await prisma.eventActivity.delete({
     *   where: {
     *     // ... filter to delete one EventActivity
     *   }
     * })
     * 
     */
    delete<T extends EventActivityDeleteArgs>(args: SelectSubset<T, EventActivityDeleteArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventActivity.
     * @param {EventActivityUpdateArgs} args - Arguments to update one EventActivity.
     * @example
     * // Update one EventActivity
     * const eventActivity = await prisma.eventActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventActivityUpdateArgs>(args: SelectSubset<T, EventActivityUpdateArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventActivities.
     * @param {EventActivityDeleteManyArgs} args - Arguments to filter EventActivities to delete.
     * @example
     * // Delete a few EventActivities
     * const { count } = await prisma.eventActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventActivityDeleteManyArgs>(args?: SelectSubset<T, EventActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventActivities
     * const eventActivity = await prisma.eventActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventActivityUpdateManyArgs>(args: SelectSubset<T, EventActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventActivities and returns the data updated in the database.
     * @param {EventActivityUpdateManyAndReturnArgs} args - Arguments to update many EventActivities.
     * @example
     * // Update many EventActivities
     * const eventActivity = await prisma.eventActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventActivities and only return the `id`
     * const eventActivityWithIdOnly = await prisma.eventActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, EventActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventActivity.
     * @param {EventActivityUpsertArgs} args - Arguments to update or create a EventActivity.
     * @example
     * // Update or create a EventActivity
     * const eventActivity = await prisma.eventActivity.upsert({
     *   create: {
     *     // ... data to create a EventActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventActivity we want to update
     *   }
     * })
     */
    upsert<T extends EventActivityUpsertArgs>(args: SelectSubset<T, EventActivityUpsertArgs<ExtArgs>>): Prisma__EventActivityClient<$Result.GetResult<Prisma.$EventActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityCountArgs} args - Arguments to filter EventActivities to count.
     * @example
     * // Count the number of EventActivities
     * const count = await prisma.eventActivity.count({
     *   where: {
     *     // ... the filter for the EventActivities we want to count
     *   }
     * })
    **/
    count<T extends EventActivityCountArgs>(
      args?: Subset<T, EventActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventActivityAggregateArgs>(args: Subset<T, EventActivityAggregateArgs>): Prisma.PrismaPromise<GetEventActivityAggregateType<T>>

    /**
     * Group by EventActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventActivityGroupByArgs} args - Group by arguments.
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
      T extends EventActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventActivityGroupByArgs['orderBy'] }
        : { orderBy?: EventActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventActivity model
   */
  readonly fields: EventActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventActivity model
   */
  interface EventActivityFieldRefs {
    readonly id: FieldRef<"EventActivity", 'String'>
    readonly eventId: FieldRef<"EventActivity", 'String'>
    readonly orgId: FieldRef<"EventActivity", 'String'>
    readonly userId: FieldRef<"EventActivity", 'String'>
    readonly action: FieldRef<"EventActivity", 'String'>
    readonly description: FieldRef<"EventActivity", 'String'>
    readonly createdAt: FieldRef<"EventActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventActivity findUnique
   */
  export type EventActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter, which EventActivity to fetch.
     */
    where: EventActivityWhereUniqueInput
  }

  /**
   * EventActivity findUniqueOrThrow
   */
  export type EventActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter, which EventActivity to fetch.
     */
    where: EventActivityWhereUniqueInput
  }

  /**
   * EventActivity findFirst
   */
  export type EventActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter, which EventActivity to fetch.
     */
    where?: EventActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventActivities to fetch.
     */
    orderBy?: EventActivityOrderByWithRelationInput | EventActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventActivities.
     */
    cursor?: EventActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventActivities.
     */
    distinct?: EventActivityScalarFieldEnum | EventActivityScalarFieldEnum[]
  }

  /**
   * EventActivity findFirstOrThrow
   */
  export type EventActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter, which EventActivity to fetch.
     */
    where?: EventActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventActivities to fetch.
     */
    orderBy?: EventActivityOrderByWithRelationInput | EventActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventActivities.
     */
    cursor?: EventActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventActivities.
     */
    distinct?: EventActivityScalarFieldEnum | EventActivityScalarFieldEnum[]
  }

  /**
   * EventActivity findMany
   */
  export type EventActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter, which EventActivities to fetch.
     */
    where?: EventActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventActivities to fetch.
     */
    orderBy?: EventActivityOrderByWithRelationInput | EventActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventActivities.
     */
    cursor?: EventActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventActivities.
     */
    skip?: number
    distinct?: EventActivityScalarFieldEnum | EventActivityScalarFieldEnum[]
  }

  /**
   * EventActivity create
   */
  export type EventActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a EventActivity.
     */
    data: XOR<EventActivityCreateInput, EventActivityUncheckedCreateInput>
  }

  /**
   * EventActivity createMany
   */
  export type EventActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventActivities.
     */
    data: EventActivityCreateManyInput | EventActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventActivity createManyAndReturn
   */
  export type EventActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * The data used to create many EventActivities.
     */
    data: EventActivityCreateManyInput | EventActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventActivity update
   */
  export type EventActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a EventActivity.
     */
    data: XOR<EventActivityUpdateInput, EventActivityUncheckedUpdateInput>
    /**
     * Choose, which EventActivity to update.
     */
    where: EventActivityWhereUniqueInput
  }

  /**
   * EventActivity updateMany
   */
  export type EventActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventActivities.
     */
    data: XOR<EventActivityUpdateManyMutationInput, EventActivityUncheckedUpdateManyInput>
    /**
     * Filter which EventActivities to update
     */
    where?: EventActivityWhereInput
    /**
     * Limit how many EventActivities to update.
     */
    limit?: number
  }

  /**
   * EventActivity updateManyAndReturn
   */
  export type EventActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * The data used to update EventActivities.
     */
    data: XOR<EventActivityUpdateManyMutationInput, EventActivityUncheckedUpdateManyInput>
    /**
     * Filter which EventActivities to update
     */
    where?: EventActivityWhereInput
    /**
     * Limit how many EventActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventActivity upsert
   */
  export type EventActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the EventActivity to update in case it exists.
     */
    where: EventActivityWhereUniqueInput
    /**
     * In case the EventActivity found by the `where` argument doesn't exist, create a new EventActivity with this data.
     */
    create: XOR<EventActivityCreateInput, EventActivityUncheckedCreateInput>
    /**
     * In case the EventActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventActivityUpdateInput, EventActivityUncheckedUpdateInput>
  }

  /**
   * EventActivity delete
   */
  export type EventActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
    /**
     * Filter which EventActivity to delete.
     */
    where: EventActivityWhereUniqueInput
  }

  /**
   * EventActivity deleteMany
   */
  export type EventActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventActivities to delete
     */
    where?: EventActivityWhereInput
    /**
     * Limit how many EventActivities to delete.
     */
    limit?: number
  }

  /**
   * EventActivity without action
   */
  export type EventActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventActivity
     */
    select?: EventActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventActivity
     */
    omit?: EventActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventActivityInclude<ExtArgs> | null
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


  export const CalendarScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    name: 'name',
    color: 'color',
    isDefault: 'isDefault',
    isVisible: 'isVisible',
    provider: 'provider',
    externalId: 'externalId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const CalendarSettingsScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    timezone: 'timezone',
    weekStart: 'weekStart',
    timeFormat: 'timeFormat',
    defaultView: 'defaultView',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarSettingsScalarFieldEnum = (typeof CalendarSettingsScalarFieldEnum)[keyof typeof CalendarSettingsScalarFieldEnum]


  export const EventCategoryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    color: 'color',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type EventCategoryScalarFieldEnum = (typeof EventCategoryScalarFieldEnum)[keyof typeof EventCategoryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    calendarId: 'calendarId',
    categoryId: 'categoryId',
    createdBy: 'createdBy',
    title: 'title',
    description: 'description',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    allDay: 'allDay',
    isRecurring: 'isRecurring',
    recurrence: 'recurrence',
    color: 'color',
    status: 'status',
    attendees: 'attendees',
    metadata: 'metadata',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventScheduleItemScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    orgId: 'orgId',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    speaker: 'speaker',
    location: 'location',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type EventScheduleItemScalarFieldEnum = (typeof EventScheduleItemScalarFieldEnum)[keyof typeof EventScheduleItemScalarFieldEnum]


  export const EventActivityScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    orgId: 'orgId',
    userId: 'userId',
    action: 'action',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type EventActivityScalarFieldEnum = (typeof EventActivityScalarFieldEnum)[keyof typeof EventActivityScalarFieldEnum]


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


  export type CalendarWhereInput = {
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    id?: UuidFilter<"Calendar"> | string
    orgId?: UuidFilter<"Calendar"> | string
    userId?: StringFilter<"Calendar"> | string
    name?: StringFilter<"Calendar"> | string
    color?: StringFilter<"Calendar"> | string
    isDefault?: BoolFilter<"Calendar"> | boolean
    isVisible?: BoolFilter<"Calendar"> | boolean
    provider?: StringNullableFilter<"Calendar"> | string | null
    externalId?: StringNullableFilter<"Calendar"> | string | null
    metadata?: JsonFilter<"Calendar">
    createdAt?: DateTimeFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeFilter<"Calendar"> | Date | string
    events?: EventListRelationFilter
  }

  export type CalendarOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isDefault?: SortOrder
    isVisible?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type CalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    orgId?: UuidFilter<"Calendar"> | string
    userId?: StringFilter<"Calendar"> | string
    name?: StringFilter<"Calendar"> | string
    color?: StringFilter<"Calendar"> | string
    isDefault?: BoolFilter<"Calendar"> | boolean
    isVisible?: BoolFilter<"Calendar"> | boolean
    provider?: StringNullableFilter<"Calendar"> | string | null
    externalId?: StringNullableFilter<"Calendar"> | string | null
    metadata?: JsonFilter<"Calendar">
    createdAt?: DateTimeFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeFilter<"Calendar"> | Date | string
    events?: EventListRelationFilter
  }, "id">

  export type CalendarOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isDefault?: SortOrder
    isVisible?: SortOrder
    provider?: SortOrderInput | SortOrder
    externalId?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarCountOrderByAggregateInput
    _max?: CalendarMaxOrderByAggregateInput
    _min?: CalendarMinOrderByAggregateInput
  }

  export type CalendarScalarWhereWithAggregatesInput = {
    AND?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    OR?: CalendarScalarWhereWithAggregatesInput[]
    NOT?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Calendar"> | string
    orgId?: UuidWithAggregatesFilter<"Calendar"> | string
    userId?: StringWithAggregatesFilter<"Calendar"> | string
    name?: StringWithAggregatesFilter<"Calendar"> | string
    color?: StringWithAggregatesFilter<"Calendar"> | string
    isDefault?: BoolWithAggregatesFilter<"Calendar"> | boolean
    isVisible?: BoolWithAggregatesFilter<"Calendar"> | boolean
    provider?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    externalId?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    metadata?: JsonWithAggregatesFilter<"Calendar">
    createdAt?: DateTimeWithAggregatesFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Calendar"> | Date | string
  }

  export type CalendarSettingsWhereInput = {
    AND?: CalendarSettingsWhereInput | CalendarSettingsWhereInput[]
    OR?: CalendarSettingsWhereInput[]
    NOT?: CalendarSettingsWhereInput | CalendarSettingsWhereInput[]
    id?: UuidFilter<"CalendarSettings"> | string
    orgId?: UuidFilter<"CalendarSettings"> | string
    timezone?: StringFilter<"CalendarSettings"> | string
    weekStart?: IntFilter<"CalendarSettings"> | number
    timeFormat?: StringFilter<"CalendarSettings"> | string
    defaultView?: StringFilter<"CalendarSettings"> | string
    theme?: JsonFilter<"CalendarSettings">
    createdAt?: DateTimeFilter<"CalendarSettings"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarSettings"> | Date | string
  }

  export type CalendarSettingsOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    timezone?: SortOrder
    weekStart?: SortOrder
    timeFormat?: SortOrder
    defaultView?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId?: string
    AND?: CalendarSettingsWhereInput | CalendarSettingsWhereInput[]
    OR?: CalendarSettingsWhereInput[]
    NOT?: CalendarSettingsWhereInput | CalendarSettingsWhereInput[]
    timezone?: StringFilter<"CalendarSettings"> | string
    weekStart?: IntFilter<"CalendarSettings"> | number
    timeFormat?: StringFilter<"CalendarSettings"> | string
    defaultView?: StringFilter<"CalendarSettings"> | string
    theme?: JsonFilter<"CalendarSettings">
    createdAt?: DateTimeFilter<"CalendarSettings"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarSettings"> | Date | string
  }, "id" | "orgId">

  export type CalendarSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    timezone?: SortOrder
    weekStart?: SortOrder
    timeFormat?: SortOrder
    defaultView?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarSettingsCountOrderByAggregateInput
    _avg?: CalendarSettingsAvgOrderByAggregateInput
    _max?: CalendarSettingsMaxOrderByAggregateInput
    _min?: CalendarSettingsMinOrderByAggregateInput
    _sum?: CalendarSettingsSumOrderByAggregateInput
  }

  export type CalendarSettingsScalarWhereWithAggregatesInput = {
    AND?: CalendarSettingsScalarWhereWithAggregatesInput | CalendarSettingsScalarWhereWithAggregatesInput[]
    OR?: CalendarSettingsScalarWhereWithAggregatesInput[]
    NOT?: CalendarSettingsScalarWhereWithAggregatesInput | CalendarSettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CalendarSettings"> | string
    orgId?: UuidWithAggregatesFilter<"CalendarSettings"> | string
    timezone?: StringWithAggregatesFilter<"CalendarSettings"> | string
    weekStart?: IntWithAggregatesFilter<"CalendarSettings"> | number
    timeFormat?: StringWithAggregatesFilter<"CalendarSettings"> | string
    defaultView?: StringWithAggregatesFilter<"CalendarSettings"> | string
    theme?: JsonWithAggregatesFilter<"CalendarSettings">
    createdAt?: DateTimeWithAggregatesFilter<"CalendarSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalendarSettings"> | Date | string
  }

  export type EventCategoryWhereInput = {
    AND?: EventCategoryWhereInput | EventCategoryWhereInput[]
    OR?: EventCategoryWhereInput[]
    NOT?: EventCategoryWhereInput | EventCategoryWhereInput[]
    id?: UuidFilter<"EventCategory"> | string
    orgId?: UuidFilter<"EventCategory"> | string
    name?: StringFilter<"EventCategory"> | string
    color?: StringFilter<"EventCategory"> | string
    icon?: StringNullableFilter<"EventCategory"> | string | null
    createdAt?: DateTimeFilter<"EventCategory"> | Date | string
    events?: EventListRelationFilter
  }

  export type EventCategoryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
  }

  export type EventCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventCategoryWhereInput | EventCategoryWhereInput[]
    OR?: EventCategoryWhereInput[]
    NOT?: EventCategoryWhereInput | EventCategoryWhereInput[]
    orgId?: UuidFilter<"EventCategory"> | string
    name?: StringFilter<"EventCategory"> | string
    color?: StringFilter<"EventCategory"> | string
    icon?: StringNullableFilter<"EventCategory"> | string | null
    createdAt?: DateTimeFilter<"EventCategory"> | Date | string
    events?: EventListRelationFilter
  }, "id">

  export type EventCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventCategoryCountOrderByAggregateInput
    _max?: EventCategoryMaxOrderByAggregateInput
    _min?: EventCategoryMinOrderByAggregateInput
  }

  export type EventCategoryScalarWhereWithAggregatesInput = {
    AND?: EventCategoryScalarWhereWithAggregatesInput | EventCategoryScalarWhereWithAggregatesInput[]
    OR?: EventCategoryScalarWhereWithAggregatesInput[]
    NOT?: EventCategoryScalarWhereWithAggregatesInput | EventCategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventCategory"> | string
    orgId?: UuidWithAggregatesFilter<"EventCategory"> | string
    name?: StringWithAggregatesFilter<"EventCategory"> | string
    color?: StringWithAggregatesFilter<"EventCategory"> | string
    icon?: StringNullableWithAggregatesFilter<"EventCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventCategory"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: UuidFilter<"Event"> | string
    orgId?: UuidFilter<"Event"> | string
    calendarId?: UuidNullableFilter<"Event"> | string | null
    categoryId?: UuidNullableFilter<"Event"> | string | null
    createdBy?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    allDay?: BoolFilter<"Event"> | boolean
    isRecurring?: BoolFilter<"Event"> | boolean
    recurrence?: JsonFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    attendees?: JsonFilter<"Event">
    metadata?: JsonFilter<"Event">
    isDeleted?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    calendar?: XOR<CalendarNullableScalarRelationFilter, CalendarWhereInput> | null
    category?: XOR<EventCategoryNullableScalarRelationFilter, EventCategoryWhereInput> | null
    scheduleItems?: EventScheduleItemListRelationFilter
    activities?: EventActivityListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrder
    color?: SortOrderInput | SortOrder
    status?: SortOrder
    attendees?: SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    calendar?: CalendarOrderByWithRelationInput
    category?: EventCategoryOrderByWithRelationInput
    scheduleItems?: EventScheduleItemOrderByRelationAggregateInput
    activities?: EventActivityOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    orgId?: UuidFilter<"Event"> | string
    calendarId?: UuidNullableFilter<"Event"> | string | null
    categoryId?: UuidNullableFilter<"Event"> | string | null
    createdBy?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    allDay?: BoolFilter<"Event"> | boolean
    isRecurring?: BoolFilter<"Event"> | boolean
    recurrence?: JsonFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    attendees?: JsonFilter<"Event">
    metadata?: JsonFilter<"Event">
    isDeleted?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    calendar?: XOR<CalendarNullableScalarRelationFilter, CalendarWhereInput> | null
    category?: XOR<EventCategoryNullableScalarRelationFilter, EventCategoryWhereInput> | null
    scheduleItems?: EventScheduleItemListRelationFilter
    activities?: EventActivityListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    calendarId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrder
    color?: SortOrderInput | SortOrder
    status?: SortOrder
    attendees?: SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Event"> | string
    orgId?: UuidWithAggregatesFilter<"Event"> | string
    calendarId?: UuidNullableWithAggregatesFilter<"Event"> | string | null
    categoryId?: UuidNullableWithAggregatesFilter<"Event"> | string | null
    createdBy?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    allDay?: BoolWithAggregatesFilter<"Event"> | boolean
    isRecurring?: BoolWithAggregatesFilter<"Event"> | boolean
    recurrence?: JsonWithAggregatesFilter<"Event">
    color?: StringNullableWithAggregatesFilter<"Event"> | string | null
    status?: StringWithAggregatesFilter<"Event"> | string
    attendees?: JsonWithAggregatesFilter<"Event">
    metadata?: JsonWithAggregatesFilter<"Event">
    isDeleted?: BoolWithAggregatesFilter<"Event"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventScheduleItemWhereInput = {
    AND?: EventScheduleItemWhereInput | EventScheduleItemWhereInput[]
    OR?: EventScheduleItemWhereInput[]
    NOT?: EventScheduleItemWhereInput | EventScheduleItemWhereInput[]
    id?: UuidFilter<"EventScheduleItem"> | string
    eventId?: UuidFilter<"EventScheduleItem"> | string
    orgId?: UuidFilter<"EventScheduleItem"> | string
    title?: StringFilter<"EventScheduleItem"> | string
    startTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    endTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    speaker?: StringNullableFilter<"EventScheduleItem"> | string | null
    location?: StringNullableFilter<"EventScheduleItem"> | string | null
    description?: StringNullableFilter<"EventScheduleItem"> | string | null
    createdAt?: DateTimeFilter<"EventScheduleItem"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventScheduleItemOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    speaker?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventScheduleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventScheduleItemWhereInput | EventScheduleItemWhereInput[]
    OR?: EventScheduleItemWhereInput[]
    NOT?: EventScheduleItemWhereInput | EventScheduleItemWhereInput[]
    eventId?: UuidFilter<"EventScheduleItem"> | string
    orgId?: UuidFilter<"EventScheduleItem"> | string
    title?: StringFilter<"EventScheduleItem"> | string
    startTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    endTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    speaker?: StringNullableFilter<"EventScheduleItem"> | string | null
    location?: StringNullableFilter<"EventScheduleItem"> | string | null
    description?: StringNullableFilter<"EventScheduleItem"> | string | null
    createdAt?: DateTimeFilter<"EventScheduleItem"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventScheduleItemOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    speaker?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventScheduleItemCountOrderByAggregateInput
    _max?: EventScheduleItemMaxOrderByAggregateInput
    _min?: EventScheduleItemMinOrderByAggregateInput
  }

  export type EventScheduleItemScalarWhereWithAggregatesInput = {
    AND?: EventScheduleItemScalarWhereWithAggregatesInput | EventScheduleItemScalarWhereWithAggregatesInput[]
    OR?: EventScheduleItemScalarWhereWithAggregatesInput[]
    NOT?: EventScheduleItemScalarWhereWithAggregatesInput | EventScheduleItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventScheduleItem"> | string
    eventId?: UuidWithAggregatesFilter<"EventScheduleItem"> | string
    orgId?: UuidWithAggregatesFilter<"EventScheduleItem"> | string
    title?: StringWithAggregatesFilter<"EventScheduleItem"> | string
    startTime?: DateTimeWithAggregatesFilter<"EventScheduleItem"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"EventScheduleItem"> | Date | string
    speaker?: StringNullableWithAggregatesFilter<"EventScheduleItem"> | string | null
    location?: StringNullableWithAggregatesFilter<"EventScheduleItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"EventScheduleItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventScheduleItem"> | Date | string
  }

  export type EventActivityWhereInput = {
    AND?: EventActivityWhereInput | EventActivityWhereInput[]
    OR?: EventActivityWhereInput[]
    NOT?: EventActivityWhereInput | EventActivityWhereInput[]
    id?: UuidFilter<"EventActivity"> | string
    eventId?: UuidFilter<"EventActivity"> | string
    orgId?: UuidFilter<"EventActivity"> | string
    userId?: StringFilter<"EventActivity"> | string
    action?: StringFilter<"EventActivity"> | string
    description?: StringNullableFilter<"EventActivity"> | string | null
    createdAt?: DateTimeFilter<"EventActivity"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventActivityOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventActivityWhereInput | EventActivityWhereInput[]
    OR?: EventActivityWhereInput[]
    NOT?: EventActivityWhereInput | EventActivityWhereInput[]
    eventId?: UuidFilter<"EventActivity"> | string
    orgId?: UuidFilter<"EventActivity"> | string
    userId?: StringFilter<"EventActivity"> | string
    action?: StringFilter<"EventActivity"> | string
    description?: StringNullableFilter<"EventActivity"> | string | null
    createdAt?: DateTimeFilter<"EventActivity"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventActivityOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventActivityCountOrderByAggregateInput
    _max?: EventActivityMaxOrderByAggregateInput
    _min?: EventActivityMinOrderByAggregateInput
  }

  export type EventActivityScalarWhereWithAggregatesInput = {
    AND?: EventActivityScalarWhereWithAggregatesInput | EventActivityScalarWhereWithAggregatesInput[]
    OR?: EventActivityScalarWhereWithAggregatesInput[]
    NOT?: EventActivityScalarWhereWithAggregatesInput | EventActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EventActivity"> | string
    eventId?: UuidWithAggregatesFilter<"EventActivity"> | string
    orgId?: UuidWithAggregatesFilter<"EventActivity"> | string
    userId?: StringWithAggregatesFilter<"EventActivity"> | string
    action?: StringWithAggregatesFilter<"EventActivity"> | string
    description?: StringNullableWithAggregatesFilter<"EventActivity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventActivity"> | Date | string
  }

  export type CalendarCreateInput = {
    id?: string
    orgId: string
    userId: string
    name: string
    color?: string
    isDefault?: boolean
    isVisible?: boolean
    provider?: string | null
    externalId?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    name: string
    color?: string
    isDefault?: boolean
    isVisible?: boolean
    provider?: string | null
    externalId?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    name: string
    color?: string
    isDefault?: boolean
    isVisible?: boolean
    provider?: string | null
    externalId?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarSettingsCreateInput = {
    id?: string
    orgId: string
    timezone?: string
    weekStart?: number
    timeFormat?: string
    defaultView?: string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarSettingsUncheckedCreateInput = {
    id?: string
    orgId: string
    timezone?: string
    weekStart?: number
    timeFormat?: string
    defaultView?: string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    weekStart?: IntFieldUpdateOperationsInput | number
    timeFormat?: StringFieldUpdateOperationsInput | string
    defaultView?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    weekStart?: IntFieldUpdateOperationsInput | number
    timeFormat?: StringFieldUpdateOperationsInput | string
    defaultView?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarSettingsCreateManyInput = {
    id?: string
    orgId: string
    timezone?: string
    weekStart?: number
    timeFormat?: string
    defaultView?: string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    weekStart?: IntFieldUpdateOperationsInput | number
    timeFormat?: StringFieldUpdateOperationsInput | string
    defaultView?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    weekStart?: IntFieldUpdateOperationsInput | number
    timeFormat?: StringFieldUpdateOperationsInput | string
    defaultView?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateInput = {
    id?: string
    orgId: string
    name: string
    color?: string
    icon?: string | null
    createdAt?: Date | string
    events?: EventCreateNestedManyWithoutCategoryInput
  }

  export type EventCategoryUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    color?: string
    icon?: string | null
    createdAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type EventCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutCategoryNestedInput
  }

  export type EventCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type EventCategoryCreateManyInput = {
    id?: string
    orgId: string
    name: string
    color?: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type EventCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendar?: CalendarCreateNestedOneWithoutEventsInput
    category?: EventCategoryCreateNestedOneWithoutEventsInput
    scheduleItems?: EventScheduleItemCreateNestedManyWithoutEventInput
    activities?: EventActivityCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleItems?: EventScheduleItemUncheckedCreateNestedManyWithoutEventInput
    activities?: EventActivityUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: CalendarUpdateOneWithoutEventsNestedInput
    category?: EventCategoryUpdateOneWithoutEventsNestedInput
    scheduleItems?: EventScheduleItemUpdateManyWithoutEventNestedInput
    activities?: EventActivityUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleItems?: EventScheduleItemUncheckedUpdateManyWithoutEventNestedInput
    activities?: EventActivityUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemCreateInput = {
    id?: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutScheduleItemsInput
  }

  export type EventScheduleItemUncheckedCreateInput = {
    id?: string
    eventId: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EventScheduleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutScheduleItemsNestedInput
  }

  export type EventScheduleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemCreateManyInput = {
    id?: string
    eventId: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EventScheduleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityCreateInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutActivitiesInput
  }

  export type EventActivityUncheckedCreateInput = {
    id?: string
    eventId: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type EventActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityCreateManyInput = {
    id?: string
    eventId: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isDefault?: SortOrder
    isVisible?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isDefault?: SortOrder
    isVisible?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    isDefault?: SortOrder
    isVisible?: SortOrder
    provider?: SortOrder
    externalId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CalendarSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    timezone?: SortOrder
    weekStart?: SortOrder
    timeFormat?: SortOrder
    defaultView?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarSettingsAvgOrderByAggregateInput = {
    weekStart?: SortOrder
  }

  export type CalendarSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    timezone?: SortOrder
    weekStart?: SortOrder
    timeFormat?: SortOrder
    defaultView?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    timezone?: SortOrder
    weekStart?: SortOrder
    timeFormat?: SortOrder
    defaultView?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarSettingsSumOrderByAggregateInput = {
    weekStart?: SortOrder
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

  export type EventCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
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

  export type CalendarNullableScalarRelationFilter = {
    is?: CalendarWhereInput | null
    isNot?: CalendarWhereInput | null
  }

  export type EventCategoryNullableScalarRelationFilter = {
    is?: EventCategoryWhereInput | null
    isNot?: EventCategoryWhereInput | null
  }

  export type EventScheduleItemListRelationFilter = {
    every?: EventScheduleItemWhereInput
    some?: EventScheduleItemWhereInput
    none?: EventScheduleItemWhereInput
  }

  export type EventActivityListRelationFilter = {
    every?: EventActivityWhereInput
    some?: EventActivityWhereInput
    none?: EventActivityWhereInput
  }

  export type EventScheduleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    calendarId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    isRecurring?: SortOrder
    recurrence?: SortOrder
    color?: SortOrder
    status?: SortOrder
    attendees?: SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    calendarId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    isRecurring?: SortOrder
    color?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    calendarId?: SortOrder
    categoryId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    isRecurring?: SortOrder
    color?: SortOrder
    status?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventScheduleItemCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    speaker?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventScheduleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    speaker?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventScheduleItemMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    speaker?: SortOrder
    location?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventActivityCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventActivityMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCreateNestedManyWithoutCalendarInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCalendarInput | EventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCalendarInput | EventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCalendarInput | EventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput> | EventCreateWithoutCalendarInput[] | EventUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCalendarInput | EventCreateOrConnectWithoutCalendarInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCalendarInput | EventUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: EventCreateManyCalendarInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCalendarInput | EventUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCalendarInput | EventUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoryInput | EventUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoryInput | EventUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoryInput | EventUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoryInput | EventUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoryInput | EventUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoryInput | EventUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CalendarCreateNestedOneWithoutEventsInput = {
    create?: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput
    connect?: CalendarWhereUniqueInput
  }

  export type EventCategoryCreateNestedOneWithoutEventsInput = {
    create?: XOR<EventCategoryCreateWithoutEventsInput, EventCategoryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventsInput
    connect?: EventCategoryWhereUniqueInput
  }

  export type EventScheduleItemCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput> | EventScheduleItemCreateWithoutEventInput[] | EventScheduleItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScheduleItemCreateOrConnectWithoutEventInput | EventScheduleItemCreateOrConnectWithoutEventInput[]
    createMany?: EventScheduleItemCreateManyEventInputEnvelope
    connect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
  }

  export type EventActivityCreateNestedManyWithoutEventInput = {
    create?: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput> | EventActivityCreateWithoutEventInput[] | EventActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventActivityCreateOrConnectWithoutEventInput | EventActivityCreateOrConnectWithoutEventInput[]
    createMany?: EventActivityCreateManyEventInputEnvelope
    connect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
  }

  export type EventScheduleItemUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput> | EventScheduleItemCreateWithoutEventInput[] | EventScheduleItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScheduleItemCreateOrConnectWithoutEventInput | EventScheduleItemCreateOrConnectWithoutEventInput[]
    createMany?: EventScheduleItemCreateManyEventInputEnvelope
    connect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
  }

  export type EventActivityUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput> | EventActivityCreateWithoutEventInput[] | EventActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventActivityCreateOrConnectWithoutEventInput | EventActivityCreateOrConnectWithoutEventInput[]
    createMany?: EventActivityCreateManyEventInputEnvelope
    connect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
  }

  export type CalendarUpdateOneWithoutEventsNestedInput = {
    create?: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput
    upsert?: CalendarUpsertWithoutEventsInput
    disconnect?: CalendarWhereInput | boolean
    delete?: CalendarWhereInput | boolean
    connect?: CalendarWhereUniqueInput
    update?: XOR<XOR<CalendarUpdateToOneWithWhereWithoutEventsInput, CalendarUpdateWithoutEventsInput>, CalendarUncheckedUpdateWithoutEventsInput>
  }

  export type EventCategoryUpdateOneWithoutEventsNestedInput = {
    create?: XOR<EventCategoryCreateWithoutEventsInput, EventCategoryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventsInput
    upsert?: EventCategoryUpsertWithoutEventsInput
    disconnect?: EventCategoryWhereInput | boolean
    delete?: EventCategoryWhereInput | boolean
    connect?: EventCategoryWhereUniqueInput
    update?: XOR<XOR<EventCategoryUpdateToOneWithWhereWithoutEventsInput, EventCategoryUpdateWithoutEventsInput>, EventCategoryUncheckedUpdateWithoutEventsInput>
  }

  export type EventScheduleItemUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput> | EventScheduleItemCreateWithoutEventInput[] | EventScheduleItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScheduleItemCreateOrConnectWithoutEventInput | EventScheduleItemCreateOrConnectWithoutEventInput[]
    upsert?: EventScheduleItemUpsertWithWhereUniqueWithoutEventInput | EventScheduleItemUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScheduleItemCreateManyEventInputEnvelope
    set?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    disconnect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    delete?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    connect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    update?: EventScheduleItemUpdateWithWhereUniqueWithoutEventInput | EventScheduleItemUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScheduleItemUpdateManyWithWhereWithoutEventInput | EventScheduleItemUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScheduleItemScalarWhereInput | EventScheduleItemScalarWhereInput[]
  }

  export type EventActivityUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput> | EventActivityCreateWithoutEventInput[] | EventActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventActivityCreateOrConnectWithoutEventInput | EventActivityCreateOrConnectWithoutEventInput[]
    upsert?: EventActivityUpsertWithWhereUniqueWithoutEventInput | EventActivityUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventActivityCreateManyEventInputEnvelope
    set?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    disconnect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    delete?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    connect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    update?: EventActivityUpdateWithWhereUniqueWithoutEventInput | EventActivityUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventActivityUpdateManyWithWhereWithoutEventInput | EventActivityUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventActivityScalarWhereInput | EventActivityScalarWhereInput[]
  }

  export type EventScheduleItemUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput> | EventScheduleItemCreateWithoutEventInput[] | EventScheduleItemUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScheduleItemCreateOrConnectWithoutEventInput | EventScheduleItemCreateOrConnectWithoutEventInput[]
    upsert?: EventScheduleItemUpsertWithWhereUniqueWithoutEventInput | EventScheduleItemUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScheduleItemCreateManyEventInputEnvelope
    set?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    disconnect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    delete?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    connect?: EventScheduleItemWhereUniqueInput | EventScheduleItemWhereUniqueInput[]
    update?: EventScheduleItemUpdateWithWhereUniqueWithoutEventInput | EventScheduleItemUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScheduleItemUpdateManyWithWhereWithoutEventInput | EventScheduleItemUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScheduleItemScalarWhereInput | EventScheduleItemScalarWhereInput[]
  }

  export type EventActivityUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput> | EventActivityCreateWithoutEventInput[] | EventActivityUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventActivityCreateOrConnectWithoutEventInput | EventActivityCreateOrConnectWithoutEventInput[]
    upsert?: EventActivityUpsertWithWhereUniqueWithoutEventInput | EventActivityUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventActivityCreateManyEventInputEnvelope
    set?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    disconnect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    delete?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    connect?: EventActivityWhereUniqueInput | EventActivityWhereUniqueInput[]
    update?: EventActivityUpdateWithWhereUniqueWithoutEventInput | EventActivityUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventActivityUpdateManyWithWhereWithoutEventInput | EventActivityUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventActivityScalarWhereInput | EventActivityScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutScheduleItemsInput = {
    create?: XOR<EventCreateWithoutScheduleItemsInput, EventUncheckedCreateWithoutScheduleItemsInput>
    connectOrCreate?: EventCreateOrConnectWithoutScheduleItemsInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutScheduleItemsNestedInput = {
    create?: XOR<EventCreateWithoutScheduleItemsInput, EventUncheckedCreateWithoutScheduleItemsInput>
    connectOrCreate?: EventCreateOrConnectWithoutScheduleItemsInput
    upsert?: EventUpsertWithoutScheduleItemsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutScheduleItemsInput, EventUpdateWithoutScheduleItemsInput>, EventUncheckedUpdateWithoutScheduleItemsInput>
  }

  export type EventCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventCreateOrConnectWithoutActivitiesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: EventCreateOrConnectWithoutActivitiesInput
    upsert?: EventUpsertWithoutActivitiesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutActivitiesInput, EventUpdateWithoutActivitiesInput>, EventUncheckedUpdateWithoutActivitiesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EventCreateWithoutCalendarInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: EventCategoryCreateNestedOneWithoutEventsInput
    scheduleItems?: EventScheduleItemCreateNestedManyWithoutEventInput
    activities?: EventActivityCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCalendarInput = {
    id?: string
    orgId: string
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleItems?: EventScheduleItemUncheckedCreateNestedManyWithoutEventInput
    activities?: EventActivityUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCalendarInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput>
  }

  export type EventCreateManyCalendarInputEnvelope = {
    data: EventCreateManyCalendarInput | EventCreateManyCalendarInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCalendarInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCalendarInput, EventUncheckedUpdateWithoutCalendarInput>
    create: XOR<EventCreateWithoutCalendarInput, EventUncheckedCreateWithoutCalendarInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCalendarInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCalendarInput, EventUncheckedUpdateWithoutCalendarInput>
  }

  export type EventUpdateManyWithWhereWithoutCalendarInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCalendarInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: UuidFilter<"Event"> | string
    orgId?: UuidFilter<"Event"> | string
    calendarId?: UuidNullableFilter<"Event"> | string | null
    categoryId?: UuidNullableFilter<"Event"> | string | null
    createdBy?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    allDay?: BoolFilter<"Event"> | boolean
    isRecurring?: BoolFilter<"Event"> | boolean
    recurrence?: JsonFilter<"Event">
    color?: StringNullableFilter<"Event"> | string | null
    status?: StringFilter<"Event"> | string
    attendees?: JsonFilter<"Event">
    metadata?: JsonFilter<"Event">
    isDeleted?: BoolFilter<"Event"> | boolean
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventCreateWithoutCategoryInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendar?: CalendarCreateNestedOneWithoutEventsInput
    scheduleItems?: EventScheduleItemCreateNestedManyWithoutEventInput
    activities?: EventActivityCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCategoryInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleItems?: EventScheduleItemUncheckedCreateNestedManyWithoutEventInput
    activities?: EventActivityUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCategoryInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput>
  }

  export type EventCreateManyCategoryInputEnvelope = {
    data: EventCreateManyCategoryInput | EventCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCategoryInput, EventUncheckedUpdateWithoutCategoryInput>
    create: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCategoryInput, EventUncheckedUpdateWithoutCategoryInput>
  }

  export type EventUpdateManyWithWhereWithoutCategoryInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CalendarCreateWithoutEventsInput = {
    id?: string
    orgId: string
    userId: string
    name: string
    color?: string
    isDefault?: boolean
    isVisible?: boolean
    provider?: string | null
    externalId?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarUncheckedCreateWithoutEventsInput = {
    id?: string
    orgId: string
    userId: string
    name: string
    color?: string
    isDefault?: boolean
    isVisible?: boolean
    provider?: string | null
    externalId?: string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarCreateOrConnectWithoutEventsInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
  }

  export type EventCategoryCreateWithoutEventsInput = {
    id?: string
    orgId: string
    name: string
    color?: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type EventCategoryUncheckedCreateWithoutEventsInput = {
    id?: string
    orgId: string
    name: string
    color?: string
    icon?: string | null
    createdAt?: Date | string
  }

  export type EventCategoryCreateOrConnectWithoutEventsInput = {
    where: EventCategoryWhereUniqueInput
    create: XOR<EventCategoryCreateWithoutEventsInput, EventCategoryUncheckedCreateWithoutEventsInput>
  }

  export type EventScheduleItemCreateWithoutEventInput = {
    id?: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EventScheduleItemUncheckedCreateWithoutEventInput = {
    id?: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EventScheduleItemCreateOrConnectWithoutEventInput = {
    where: EventScheduleItemWhereUniqueInput
    create: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput>
  }

  export type EventScheduleItemCreateManyEventInputEnvelope = {
    data: EventScheduleItemCreateManyEventInput | EventScheduleItemCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventActivityCreateWithoutEventInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventActivityUncheckedCreateWithoutEventInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventActivityCreateOrConnectWithoutEventInput = {
    where: EventActivityWhereUniqueInput
    create: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput>
  }

  export type EventActivityCreateManyEventInputEnvelope = {
    data: EventActivityCreateManyEventInput | EventActivityCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type CalendarUpsertWithoutEventsInput = {
    update: XOR<CalendarUpdateWithoutEventsInput, CalendarUncheckedUpdateWithoutEventsInput>
    create: XOR<CalendarCreateWithoutEventsInput, CalendarUncheckedCreateWithoutEventsInput>
    where?: CalendarWhereInput
  }

  export type CalendarUpdateToOneWithWhereWithoutEventsInput = {
    where?: CalendarWhereInput
    data: XOR<CalendarUpdateWithoutEventsInput, CalendarUncheckedUpdateWithoutEventsInput>
  }

  export type CalendarUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUpsertWithoutEventsInput = {
    update: XOR<EventCategoryUpdateWithoutEventsInput, EventCategoryUncheckedUpdateWithoutEventsInput>
    create: XOR<EventCategoryCreateWithoutEventsInput, EventCategoryUncheckedCreateWithoutEventsInput>
    where?: EventCategoryWhereInput
  }

  export type EventCategoryUpdateToOneWithWhereWithoutEventsInput = {
    where?: EventCategoryWhereInput
    data: XOR<EventCategoryUpdateWithoutEventsInput, EventCategoryUncheckedUpdateWithoutEventsInput>
  }

  export type EventCategoryUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemUpsertWithWhereUniqueWithoutEventInput = {
    where: EventScheduleItemWhereUniqueInput
    update: XOR<EventScheduleItemUpdateWithoutEventInput, EventScheduleItemUncheckedUpdateWithoutEventInput>
    create: XOR<EventScheduleItemCreateWithoutEventInput, EventScheduleItemUncheckedCreateWithoutEventInput>
  }

  export type EventScheduleItemUpdateWithWhereUniqueWithoutEventInput = {
    where: EventScheduleItemWhereUniqueInput
    data: XOR<EventScheduleItemUpdateWithoutEventInput, EventScheduleItemUncheckedUpdateWithoutEventInput>
  }

  export type EventScheduleItemUpdateManyWithWhereWithoutEventInput = {
    where: EventScheduleItemScalarWhereInput
    data: XOR<EventScheduleItemUpdateManyMutationInput, EventScheduleItemUncheckedUpdateManyWithoutEventInput>
  }

  export type EventScheduleItemScalarWhereInput = {
    AND?: EventScheduleItemScalarWhereInput | EventScheduleItemScalarWhereInput[]
    OR?: EventScheduleItemScalarWhereInput[]
    NOT?: EventScheduleItemScalarWhereInput | EventScheduleItemScalarWhereInput[]
    id?: UuidFilter<"EventScheduleItem"> | string
    eventId?: UuidFilter<"EventScheduleItem"> | string
    orgId?: UuidFilter<"EventScheduleItem"> | string
    title?: StringFilter<"EventScheduleItem"> | string
    startTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    endTime?: DateTimeFilter<"EventScheduleItem"> | Date | string
    speaker?: StringNullableFilter<"EventScheduleItem"> | string | null
    location?: StringNullableFilter<"EventScheduleItem"> | string | null
    description?: StringNullableFilter<"EventScheduleItem"> | string | null
    createdAt?: DateTimeFilter<"EventScheduleItem"> | Date | string
  }

  export type EventActivityUpsertWithWhereUniqueWithoutEventInput = {
    where: EventActivityWhereUniqueInput
    update: XOR<EventActivityUpdateWithoutEventInput, EventActivityUncheckedUpdateWithoutEventInput>
    create: XOR<EventActivityCreateWithoutEventInput, EventActivityUncheckedCreateWithoutEventInput>
  }

  export type EventActivityUpdateWithWhereUniqueWithoutEventInput = {
    where: EventActivityWhereUniqueInput
    data: XOR<EventActivityUpdateWithoutEventInput, EventActivityUncheckedUpdateWithoutEventInput>
  }

  export type EventActivityUpdateManyWithWhereWithoutEventInput = {
    where: EventActivityScalarWhereInput
    data: XOR<EventActivityUpdateManyMutationInput, EventActivityUncheckedUpdateManyWithoutEventInput>
  }

  export type EventActivityScalarWhereInput = {
    AND?: EventActivityScalarWhereInput | EventActivityScalarWhereInput[]
    OR?: EventActivityScalarWhereInput[]
    NOT?: EventActivityScalarWhereInput | EventActivityScalarWhereInput[]
    id?: UuidFilter<"EventActivity"> | string
    eventId?: UuidFilter<"EventActivity"> | string
    orgId?: UuidFilter<"EventActivity"> | string
    userId?: StringFilter<"EventActivity"> | string
    action?: StringFilter<"EventActivity"> | string
    description?: StringNullableFilter<"EventActivity"> | string | null
    createdAt?: DateTimeFilter<"EventActivity"> | Date | string
  }

  export type EventCreateWithoutScheduleItemsInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendar?: CalendarCreateNestedOneWithoutEventsInput
    category?: EventCategoryCreateNestedOneWithoutEventsInput
    activities?: EventActivityCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutScheduleItemsInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: EventActivityUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutScheduleItemsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutScheduleItemsInput, EventUncheckedCreateWithoutScheduleItemsInput>
  }

  export type EventUpsertWithoutScheduleItemsInput = {
    update: XOR<EventUpdateWithoutScheduleItemsInput, EventUncheckedUpdateWithoutScheduleItemsInput>
    create: XOR<EventCreateWithoutScheduleItemsInput, EventUncheckedCreateWithoutScheduleItemsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutScheduleItemsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutScheduleItemsInput, EventUncheckedUpdateWithoutScheduleItemsInput>
  }

  export type EventUpdateWithoutScheduleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: CalendarUpdateOneWithoutEventsNestedInput
    category?: EventCategoryUpdateOneWithoutEventsNestedInput
    activities?: EventActivityUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutScheduleItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: EventActivityUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutActivitiesInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    calendar?: CalendarCreateNestedOneWithoutEventsInput
    category?: EventCategoryCreateNestedOneWithoutEventsInput
    scheduleItems?: EventScheduleItemCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutActivitiesInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    scheduleItems?: EventScheduleItemUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutActivitiesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
  }

  export type EventUpsertWithoutActivitiesInput = {
    update: XOR<EventUpdateWithoutActivitiesInput, EventUncheckedUpdateWithoutActivitiesInput>
    create: XOR<EventCreateWithoutActivitiesInput, EventUncheckedCreateWithoutActivitiesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutActivitiesInput, EventUncheckedUpdateWithoutActivitiesInput>
  }

  export type EventUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: CalendarUpdateOneWithoutEventsNestedInput
    category?: EventCategoryUpdateOneWithoutEventsNestedInput
    scheduleItems?: EventScheduleItemUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleItems?: EventScheduleItemUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyCalendarInput = {
    id?: string
    orgId: string
    categoryId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: EventCategoryUpdateOneWithoutEventsNestedInput
    scheduleItems?: EventScheduleItemUpdateManyWithoutEventNestedInput
    activities?: EventActivityUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleItems?: EventScheduleItemUncheckedUpdateManyWithoutEventNestedInput
    activities?: EventActivityUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyCategoryInput = {
    id?: string
    orgId: string
    calendarId?: string | null
    createdBy: string
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    allDay?: boolean
    isRecurring?: boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: string | null
    status?: string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendar?: CalendarUpdateOneWithoutEventsNestedInput
    scheduleItems?: EventScheduleItemUpdateManyWithoutEventNestedInput
    activities?: EventActivityUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleItems?: EventScheduleItemUncheckedUpdateManyWithoutEventNestedInput
    activities?: EventActivityUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    allDay?: BoolFieldUpdateOperationsInput | boolean
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrence?: JsonNullValueInput | InputJsonValue
    color?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    attendees?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemCreateManyEventInput = {
    id?: string
    orgId: string
    title: string
    startTime: Date | string
    endTime: Date | string
    speaker?: string | null
    location?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EventActivityCreateManyEventInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    description?: string | null
    createdAt?: Date | string
  }

  export type EventScheduleItemUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScheduleItemUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    speaker?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventActivityUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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