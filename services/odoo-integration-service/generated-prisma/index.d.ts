
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
 * Model ContactMap
 * 
 */
export type ContactMap = $Result.DefaultSelection<Prisma.$ContactMapPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model ContactFile
 * 
 */
export type ContactFile = $Result.DefaultSelection<Prisma.$ContactFilePayload>
/**
 * Model ContactTask
 * 
 */
export type ContactTask = $Result.DefaultSelection<Prisma.$ContactTaskPayload>
/**
 * Model ContactActivity
 * 
 */
export type ContactActivity = $Result.DefaultSelection<Prisma.$ContactActivityPayload>
/**
 * Model ContactShift
 * 
 */
export type ContactShift = $Result.DefaultSelection<Prisma.$ContactShiftPayload>
/**
 * Model MarketingSuppressionEntry
 * 
 */
export type MarketingSuppressionEntry = $Result.DefaultSelection<Prisma.$MarketingSuppressionEntryPayload>
/**
 * Model MarketingContactConsent
 * 
 */
export type MarketingContactConsent = $Result.DefaultSelection<Prisma.$MarketingContactConsentPayload>
/**
 * Model MarketingCampaignTemplateUsage
 * 
 */
export type MarketingCampaignTemplateUsage = $Result.DefaultSelection<Prisma.$MarketingCampaignTemplateUsagePayload>
/**
 * Model MarketingDeliveryEvent
 * 
 */
export type MarketingDeliveryEvent = $Result.DefaultSelection<Prisma.$MarketingDeliveryEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ContactMaps
 * const contactMaps = await prisma.contactMap.findMany()
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
   * // Fetch zero or more ContactMaps
   * const contactMaps = await prisma.contactMap.findMany()
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
   * `prisma.contactMap`: Exposes CRUD operations for the **ContactMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactMaps
    * const contactMaps = await prisma.contactMap.findMany()
    * ```
    */
  get contactMap(): Prisma.ContactMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactFile`: Exposes CRUD operations for the **ContactFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactFiles
    * const contactFiles = await prisma.contactFile.findMany()
    * ```
    */
  get contactFile(): Prisma.ContactFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactTask`: Exposes CRUD operations for the **ContactTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactTasks
    * const contactTasks = await prisma.contactTask.findMany()
    * ```
    */
  get contactTask(): Prisma.ContactTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactActivity`: Exposes CRUD operations for the **ContactActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactActivities
    * const contactActivities = await prisma.contactActivity.findMany()
    * ```
    */
  get contactActivity(): Prisma.ContactActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactShift`: Exposes CRUD operations for the **ContactShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactShifts
    * const contactShifts = await prisma.contactShift.findMany()
    * ```
    */
  get contactShift(): Prisma.ContactShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingSuppressionEntry`: Exposes CRUD operations for the **MarketingSuppressionEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingSuppressionEntries
    * const marketingSuppressionEntries = await prisma.marketingSuppressionEntry.findMany()
    * ```
    */
  get marketingSuppressionEntry(): Prisma.MarketingSuppressionEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingContactConsent`: Exposes CRUD operations for the **MarketingContactConsent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingContactConsents
    * const marketingContactConsents = await prisma.marketingContactConsent.findMany()
    * ```
    */
  get marketingContactConsent(): Prisma.MarketingContactConsentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingCampaignTemplateUsage`: Exposes CRUD operations for the **MarketingCampaignTemplateUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingCampaignTemplateUsages
    * const marketingCampaignTemplateUsages = await prisma.marketingCampaignTemplateUsage.findMany()
    * ```
    */
  get marketingCampaignTemplateUsage(): Prisma.MarketingCampaignTemplateUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketingDeliveryEvent`: Exposes CRUD operations for the **MarketingDeliveryEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketingDeliveryEvents
    * const marketingDeliveryEvents = await prisma.marketingDeliveryEvent.findMany()
    * ```
    */
  get marketingDeliveryEvent(): Prisma.MarketingDeliveryEventDelegate<ExtArgs, ClientOptions>;
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
    ContactMap: 'ContactMap',
    Pet: 'Pet',
    ContactFile: 'ContactFile',
    ContactTask: 'ContactTask',
    ContactActivity: 'ContactActivity',
    ContactShift: 'ContactShift',
    MarketingSuppressionEntry: 'MarketingSuppressionEntry',
    MarketingContactConsent: 'MarketingContactConsent',
    MarketingCampaignTemplateUsage: 'MarketingCampaignTemplateUsage',
    MarketingDeliveryEvent: 'MarketingDeliveryEvent'
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
      modelProps: "contactMap" | "pet" | "contactFile" | "contactTask" | "contactActivity" | "contactShift" | "marketingSuppressionEntry" | "marketingContactConsent" | "marketingCampaignTemplateUsage" | "marketingDeliveryEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ContactMap: {
        payload: Prisma.$ContactMapPayload<ExtArgs>
        fields: Prisma.ContactMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          findFirst: {
            args: Prisma.ContactMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          findMany: {
            args: Prisma.ContactMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>[]
          }
          create: {
            args: Prisma.ContactMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          createMany: {
            args: Prisma.ContactMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>[]
          }
          delete: {
            args: Prisma.ContactMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          update: {
            args: Prisma.ContactMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          deleteMany: {
            args: Prisma.ContactMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>[]
          }
          upsert: {
            args: Prisma.ContactMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactMapPayload>
          }
          aggregate: {
            args: Prisma.ContactMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactMap>
          }
          groupBy: {
            args: Prisma.ContactMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactMapCountArgs<ExtArgs>
            result: $Utils.Optional<ContactMapCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      ContactFile: {
        payload: Prisma.$ContactFilePayload<ExtArgs>
        fields: Prisma.ContactFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          findFirst: {
            args: Prisma.ContactFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          findMany: {
            args: Prisma.ContactFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>[]
          }
          create: {
            args: Prisma.ContactFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          createMany: {
            args: Prisma.ContactFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>[]
          }
          delete: {
            args: Prisma.ContactFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          update: {
            args: Prisma.ContactFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          deleteMany: {
            args: Prisma.ContactFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>[]
          }
          upsert: {
            args: Prisma.ContactFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactFilePayload>
          }
          aggregate: {
            args: Prisma.ContactFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactFile>
          }
          groupBy: {
            args: Prisma.ContactFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactFileCountArgs<ExtArgs>
            result: $Utils.Optional<ContactFileCountAggregateOutputType> | number
          }
        }
      }
      ContactTask: {
        payload: Prisma.$ContactTaskPayload<ExtArgs>
        fields: Prisma.ContactTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          findFirst: {
            args: Prisma.ContactTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          findMany: {
            args: Prisma.ContactTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>[]
          }
          create: {
            args: Prisma.ContactTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          createMany: {
            args: Prisma.ContactTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>[]
          }
          delete: {
            args: Prisma.ContactTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          update: {
            args: Prisma.ContactTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          deleteMany: {
            args: Prisma.ContactTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>[]
          }
          upsert: {
            args: Prisma.ContactTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactTaskPayload>
          }
          aggregate: {
            args: Prisma.ContactTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactTask>
          }
          groupBy: {
            args: Prisma.ContactTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ContactTaskCountAggregateOutputType> | number
          }
        }
      }
      ContactActivity: {
        payload: Prisma.$ContactActivityPayload<ExtArgs>
        fields: Prisma.ContactActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          findFirst: {
            args: Prisma.ContactActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          findMany: {
            args: Prisma.ContactActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>[]
          }
          create: {
            args: Prisma.ContactActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          createMany: {
            args: Prisma.ContactActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>[]
          }
          delete: {
            args: Prisma.ContactActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          update: {
            args: Prisma.ContactActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          deleteMany: {
            args: Prisma.ContactActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>[]
          }
          upsert: {
            args: Prisma.ContactActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactActivityPayload>
          }
          aggregate: {
            args: Prisma.ContactActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactActivity>
          }
          groupBy: {
            args: Prisma.ContactActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ContactActivityCountAggregateOutputType> | number
          }
        }
      }
      ContactShift: {
        payload: Prisma.$ContactShiftPayload<ExtArgs>
        fields: Prisma.ContactShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          findFirst: {
            args: Prisma.ContactShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          findMany: {
            args: Prisma.ContactShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>[]
          }
          create: {
            args: Prisma.ContactShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          createMany: {
            args: Prisma.ContactShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>[]
          }
          delete: {
            args: Prisma.ContactShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          update: {
            args: Prisma.ContactShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          deleteMany: {
            args: Prisma.ContactShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>[]
          }
          upsert: {
            args: Prisma.ContactShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactShiftPayload>
          }
          aggregate: {
            args: Prisma.ContactShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactShift>
          }
          groupBy: {
            args: Prisma.ContactShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ContactShiftCountAggregateOutputType> | number
          }
        }
      }
      MarketingSuppressionEntry: {
        payload: Prisma.$MarketingSuppressionEntryPayload<ExtArgs>
        fields: Prisma.MarketingSuppressionEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingSuppressionEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingSuppressionEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          findFirst: {
            args: Prisma.MarketingSuppressionEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingSuppressionEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          findMany: {
            args: Prisma.MarketingSuppressionEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>[]
          }
          create: {
            args: Prisma.MarketingSuppressionEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          createMany: {
            args: Prisma.MarketingSuppressionEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingSuppressionEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>[]
          }
          delete: {
            args: Prisma.MarketingSuppressionEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          update: {
            args: Prisma.MarketingSuppressionEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          deleteMany: {
            args: Prisma.MarketingSuppressionEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingSuppressionEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingSuppressionEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>[]
          }
          upsert: {
            args: Prisma.MarketingSuppressionEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingSuppressionEntryPayload>
          }
          aggregate: {
            args: Prisma.MarketingSuppressionEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingSuppressionEntry>
          }
          groupBy: {
            args: Prisma.MarketingSuppressionEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingSuppressionEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingSuppressionEntryCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingSuppressionEntryCountAggregateOutputType> | number
          }
        }
      }
      MarketingContactConsent: {
        payload: Prisma.$MarketingContactConsentPayload<ExtArgs>
        fields: Prisma.MarketingContactConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingContactConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingContactConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          findFirst: {
            args: Prisma.MarketingContactConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingContactConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          findMany: {
            args: Prisma.MarketingContactConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>[]
          }
          create: {
            args: Prisma.MarketingContactConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          createMany: {
            args: Prisma.MarketingContactConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingContactConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>[]
          }
          delete: {
            args: Prisma.MarketingContactConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          update: {
            args: Prisma.MarketingContactConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          deleteMany: {
            args: Prisma.MarketingContactConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingContactConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingContactConsentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>[]
          }
          upsert: {
            args: Prisma.MarketingContactConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingContactConsentPayload>
          }
          aggregate: {
            args: Prisma.MarketingContactConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingContactConsent>
          }
          groupBy: {
            args: Prisma.MarketingContactConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingContactConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingContactConsentCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingContactConsentCountAggregateOutputType> | number
          }
        }
      }
      MarketingCampaignTemplateUsage: {
        payload: Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>
        fields: Prisma.MarketingCampaignTemplateUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingCampaignTemplateUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingCampaignTemplateUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          findFirst: {
            args: Prisma.MarketingCampaignTemplateUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingCampaignTemplateUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          findMany: {
            args: Prisma.MarketingCampaignTemplateUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>[]
          }
          create: {
            args: Prisma.MarketingCampaignTemplateUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          createMany: {
            args: Prisma.MarketingCampaignTemplateUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingCampaignTemplateUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>[]
          }
          delete: {
            args: Prisma.MarketingCampaignTemplateUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          update: {
            args: Prisma.MarketingCampaignTemplateUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          deleteMany: {
            args: Prisma.MarketingCampaignTemplateUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingCampaignTemplateUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingCampaignTemplateUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>[]
          }
          upsert: {
            args: Prisma.MarketingCampaignTemplateUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingCampaignTemplateUsagePayload>
          }
          aggregate: {
            args: Prisma.MarketingCampaignTemplateUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingCampaignTemplateUsage>
          }
          groupBy: {
            args: Prisma.MarketingCampaignTemplateUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingCampaignTemplateUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingCampaignTemplateUsageCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingCampaignTemplateUsageCountAggregateOutputType> | number
          }
        }
      }
      MarketingDeliveryEvent: {
        payload: Prisma.$MarketingDeliveryEventPayload<ExtArgs>
        fields: Prisma.MarketingDeliveryEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketingDeliveryEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketingDeliveryEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          findFirst: {
            args: Prisma.MarketingDeliveryEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketingDeliveryEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          findMany: {
            args: Prisma.MarketingDeliveryEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>[]
          }
          create: {
            args: Prisma.MarketingDeliveryEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          createMany: {
            args: Prisma.MarketingDeliveryEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketingDeliveryEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>[]
          }
          delete: {
            args: Prisma.MarketingDeliveryEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          update: {
            args: Prisma.MarketingDeliveryEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          deleteMany: {
            args: Prisma.MarketingDeliveryEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketingDeliveryEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketingDeliveryEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>[]
          }
          upsert: {
            args: Prisma.MarketingDeliveryEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketingDeliveryEventPayload>
          }
          aggregate: {
            args: Prisma.MarketingDeliveryEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketingDeliveryEvent>
          }
          groupBy: {
            args: Prisma.MarketingDeliveryEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketingDeliveryEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketingDeliveryEventCountArgs<ExtArgs>
            result: $Utils.Optional<MarketingDeliveryEventCountAggregateOutputType> | number
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
    contactMap?: ContactMapOmit
    pet?: PetOmit
    contactFile?: ContactFileOmit
    contactTask?: ContactTaskOmit
    contactActivity?: ContactActivityOmit
    contactShift?: ContactShiftOmit
    marketingSuppressionEntry?: MarketingSuppressionEntryOmit
    marketingContactConsent?: MarketingContactConsentOmit
    marketingCampaignTemplateUsage?: MarketingCampaignTemplateUsageOmit
    marketingDeliveryEvent?: MarketingDeliveryEventOmit
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
   * Model ContactMap
   */

  export type AggregateContactMap = {
    _count: ContactMapCountAggregateOutputType | null
    _avg: ContactMapAvgAggregateOutputType | null
    _sum: ContactMapSumAggregateOutputType | null
    _min: ContactMapMinAggregateOutputType | null
    _max: ContactMapMaxAggregateOutputType | null
  }

  export type ContactMapAvgAggregateOutputType = {
    odooId: number | null
  }

  export type ContactMapSumAggregateOutputType = {
    odooId: number | null
  }

  export type ContactMapMinAggregateOutputType = {
    uuid: string | null
    odooId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactMapMaxAggregateOutputType = {
    uuid: string | null
    odooId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactMapCountAggregateOutputType = {
    uuid: number
    odooId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactMapAvgAggregateInputType = {
    odooId?: true
  }

  export type ContactMapSumAggregateInputType = {
    odooId?: true
  }

  export type ContactMapMinAggregateInputType = {
    uuid?: true
    odooId?: true
    status?: true
    createdAt?: true
  }

  export type ContactMapMaxAggregateInputType = {
    uuid?: true
    odooId?: true
    status?: true
    createdAt?: true
  }

  export type ContactMapCountAggregateInputType = {
    uuid?: true
    odooId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMap to aggregate.
     */
    where?: ContactMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMaps to fetch.
     */
    orderBy?: ContactMapOrderByWithRelationInput | ContactMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactMaps
    **/
    _count?: true | ContactMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMapMaxAggregateInputType
  }

  export type GetContactMapAggregateType<T extends ContactMapAggregateArgs> = {
        [P in keyof T & keyof AggregateContactMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactMap[P]>
      : GetScalarType<T[P], AggregateContactMap[P]>
  }




  export type ContactMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactMapWhereInput
    orderBy?: ContactMapOrderByWithAggregationInput | ContactMapOrderByWithAggregationInput[]
    by: ContactMapScalarFieldEnum[] | ContactMapScalarFieldEnum
    having?: ContactMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactMapCountAggregateInputType | true
    _avg?: ContactMapAvgAggregateInputType
    _sum?: ContactMapSumAggregateInputType
    _min?: ContactMapMinAggregateInputType
    _max?: ContactMapMaxAggregateInputType
  }

  export type ContactMapGroupByOutputType = {
    uuid: string
    odooId: number
    status: string | null
    createdAt: Date
    _count: ContactMapCountAggregateOutputType | null
    _avg: ContactMapAvgAggregateOutputType | null
    _sum: ContactMapSumAggregateOutputType | null
    _min: ContactMapMinAggregateOutputType | null
    _max: ContactMapMaxAggregateOutputType | null
  }

  type GetContactMapGroupByPayload<T extends ContactMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactMapGroupByOutputType[P]>
            : GetScalarType<T[P], ContactMapGroupByOutputType[P]>
        }
      >
    >


  export type ContactMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    odooId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMap"]>

  export type ContactMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    odooId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMap"]>

  export type ContactMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    odooId?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactMap"]>

  export type ContactMapSelectScalar = {
    uuid?: boolean
    odooId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "odooId" | "status" | "createdAt", ExtArgs["result"]["contactMap"]>

  export type $ContactMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactMap"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      odooId: number
      status: string | null
      createdAt: Date
    }, ExtArgs["result"]["contactMap"]>
    composites: {}
  }

  type ContactMapGetPayload<S extends boolean | null | undefined | ContactMapDefaultArgs> = $Result.GetResult<Prisma.$ContactMapPayload, S>

  type ContactMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactMapCountAggregateInputType | true
    }

  export interface ContactMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactMap'], meta: { name: 'ContactMap' } }
    /**
     * Find zero or one ContactMap that matches the filter.
     * @param {ContactMapFindUniqueArgs} args - Arguments to find a ContactMap
     * @example
     * // Get one ContactMap
     * const contactMap = await prisma.contactMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactMapFindUniqueArgs>(args: SelectSubset<T, ContactMapFindUniqueArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactMapFindUniqueOrThrowArgs} args - Arguments to find a ContactMap
     * @example
     * // Get one ContactMap
     * const contactMap = await prisma.contactMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactMapFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapFindFirstArgs} args - Arguments to find a ContactMap
     * @example
     * // Get one ContactMap
     * const contactMap = await prisma.contactMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactMapFindFirstArgs>(args?: SelectSubset<T, ContactMapFindFirstArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapFindFirstOrThrowArgs} args - Arguments to find a ContactMap
     * @example
     * // Get one ContactMap
     * const contactMap = await prisma.contactMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactMapFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactMaps
     * const contactMaps = await prisma.contactMap.findMany()
     * 
     * // Get first 10 ContactMaps
     * const contactMaps = await prisma.contactMap.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const contactMapWithUuidOnly = await prisma.contactMap.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends ContactMapFindManyArgs>(args?: SelectSubset<T, ContactMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactMap.
     * @param {ContactMapCreateArgs} args - Arguments to create a ContactMap.
     * @example
     * // Create one ContactMap
     * const ContactMap = await prisma.contactMap.create({
     *   data: {
     *     // ... data to create a ContactMap
     *   }
     * })
     * 
     */
    create<T extends ContactMapCreateArgs>(args: SelectSubset<T, ContactMapCreateArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactMaps.
     * @param {ContactMapCreateManyArgs} args - Arguments to create many ContactMaps.
     * @example
     * // Create many ContactMaps
     * const contactMap = await prisma.contactMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactMapCreateManyArgs>(args?: SelectSubset<T, ContactMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactMaps and returns the data saved in the database.
     * @param {ContactMapCreateManyAndReturnArgs} args - Arguments to create many ContactMaps.
     * @example
     * // Create many ContactMaps
     * const contactMap = await prisma.contactMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactMaps and only return the `uuid`
     * const contactMapWithUuidOnly = await prisma.contactMap.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactMapCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactMap.
     * @param {ContactMapDeleteArgs} args - Arguments to delete one ContactMap.
     * @example
     * // Delete one ContactMap
     * const ContactMap = await prisma.contactMap.delete({
     *   where: {
     *     // ... filter to delete one ContactMap
     *   }
     * })
     * 
     */
    delete<T extends ContactMapDeleteArgs>(args: SelectSubset<T, ContactMapDeleteArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactMap.
     * @param {ContactMapUpdateArgs} args - Arguments to update one ContactMap.
     * @example
     * // Update one ContactMap
     * const contactMap = await prisma.contactMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactMapUpdateArgs>(args: SelectSubset<T, ContactMapUpdateArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactMaps.
     * @param {ContactMapDeleteManyArgs} args - Arguments to filter ContactMaps to delete.
     * @example
     * // Delete a few ContactMaps
     * const { count } = await prisma.contactMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactMapDeleteManyArgs>(args?: SelectSubset<T, ContactMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactMaps
     * const contactMap = await prisma.contactMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactMapUpdateManyArgs>(args: SelectSubset<T, ContactMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactMaps and returns the data updated in the database.
     * @param {ContactMapUpdateManyAndReturnArgs} args - Arguments to update many ContactMaps.
     * @example
     * // Update many ContactMaps
     * const contactMap = await prisma.contactMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactMaps and only return the `uuid`
     * const contactMapWithUuidOnly = await prisma.contactMap.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends ContactMapUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactMap.
     * @param {ContactMapUpsertArgs} args - Arguments to update or create a ContactMap.
     * @example
     * // Update or create a ContactMap
     * const contactMap = await prisma.contactMap.upsert({
     *   create: {
     *     // ... data to create a ContactMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactMap we want to update
     *   }
     * })
     */
    upsert<T extends ContactMapUpsertArgs>(args: SelectSubset<T, ContactMapUpsertArgs<ExtArgs>>): Prisma__ContactMapClient<$Result.GetResult<Prisma.$ContactMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapCountArgs} args - Arguments to filter ContactMaps to count.
     * @example
     * // Count the number of ContactMaps
     * const count = await prisma.contactMap.count({
     *   where: {
     *     // ... the filter for the ContactMaps we want to count
     *   }
     * })
    **/
    count<T extends ContactMapCountArgs>(
      args?: Subset<T, ContactMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactMapAggregateArgs>(args: Subset<T, ContactMapAggregateArgs>): Prisma.PrismaPromise<GetContactMapAggregateType<T>>

    /**
     * Group by ContactMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactMapGroupByArgs} args - Group by arguments.
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
      T extends ContactMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactMapGroupByArgs['orderBy'] }
        : { orderBy?: ContactMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactMap model
   */
  readonly fields: ContactMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactMap model
   */
  interface ContactMapFieldRefs {
    readonly uuid: FieldRef<"ContactMap", 'String'>
    readonly odooId: FieldRef<"ContactMap", 'Int'>
    readonly status: FieldRef<"ContactMap", 'String'>
    readonly createdAt: FieldRef<"ContactMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactMap findUnique
   */
  export type ContactMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter, which ContactMap to fetch.
     */
    where: ContactMapWhereUniqueInput
  }

  /**
   * ContactMap findUniqueOrThrow
   */
  export type ContactMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter, which ContactMap to fetch.
     */
    where: ContactMapWhereUniqueInput
  }

  /**
   * ContactMap findFirst
   */
  export type ContactMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter, which ContactMap to fetch.
     */
    where?: ContactMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMaps to fetch.
     */
    orderBy?: ContactMapOrderByWithRelationInput | ContactMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMaps.
     */
    cursor?: ContactMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMaps.
     */
    distinct?: ContactMapScalarFieldEnum | ContactMapScalarFieldEnum[]
  }

  /**
   * ContactMap findFirstOrThrow
   */
  export type ContactMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter, which ContactMap to fetch.
     */
    where?: ContactMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMaps to fetch.
     */
    orderBy?: ContactMapOrderByWithRelationInput | ContactMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactMaps.
     */
    cursor?: ContactMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactMaps.
     */
    distinct?: ContactMapScalarFieldEnum | ContactMapScalarFieldEnum[]
  }

  /**
   * ContactMap findMany
   */
  export type ContactMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter, which ContactMaps to fetch.
     */
    where?: ContactMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactMaps to fetch.
     */
    orderBy?: ContactMapOrderByWithRelationInput | ContactMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactMaps.
     */
    cursor?: ContactMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactMaps.
     */
    skip?: number
    distinct?: ContactMapScalarFieldEnum | ContactMapScalarFieldEnum[]
  }

  /**
   * ContactMap create
   */
  export type ContactMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactMap.
     */
    data: XOR<ContactMapCreateInput, ContactMapUncheckedCreateInput>
  }

  /**
   * ContactMap createMany
   */
  export type ContactMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactMaps.
     */
    data: ContactMapCreateManyInput | ContactMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMap createManyAndReturn
   */
  export type ContactMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * The data used to create many ContactMaps.
     */
    data: ContactMapCreateManyInput | ContactMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactMap update
   */
  export type ContactMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactMap.
     */
    data: XOR<ContactMapUpdateInput, ContactMapUncheckedUpdateInput>
    /**
     * Choose, which ContactMap to update.
     */
    where: ContactMapWhereUniqueInput
  }

  /**
   * ContactMap updateMany
   */
  export type ContactMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactMaps.
     */
    data: XOR<ContactMapUpdateManyMutationInput, ContactMapUncheckedUpdateManyInput>
    /**
     * Filter which ContactMaps to update
     */
    where?: ContactMapWhereInput
    /**
     * Limit how many ContactMaps to update.
     */
    limit?: number
  }

  /**
   * ContactMap updateManyAndReturn
   */
  export type ContactMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * The data used to update ContactMaps.
     */
    data: XOR<ContactMapUpdateManyMutationInput, ContactMapUncheckedUpdateManyInput>
    /**
     * Filter which ContactMaps to update
     */
    where?: ContactMapWhereInput
    /**
     * Limit how many ContactMaps to update.
     */
    limit?: number
  }

  /**
   * ContactMap upsert
   */
  export type ContactMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactMap to update in case it exists.
     */
    where: ContactMapWhereUniqueInput
    /**
     * In case the ContactMap found by the `where` argument doesn't exist, create a new ContactMap with this data.
     */
    create: XOR<ContactMapCreateInput, ContactMapUncheckedCreateInput>
    /**
     * In case the ContactMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactMapUpdateInput, ContactMapUncheckedUpdateInput>
  }

  /**
   * ContactMap delete
   */
  export type ContactMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
    /**
     * Filter which ContactMap to delete.
     */
    where: ContactMapWhereUniqueInput
  }

  /**
   * ContactMap deleteMany
   */
  export type ContactMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactMaps to delete
     */
    where?: ContactMapWhereInput
    /**
     * Limit how many ContactMaps to delete.
     */
    limit?: number
  }

  /**
   * ContactMap without action
   */
  export type ContactMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactMap
     */
    select?: ContactMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactMap
     */
    omit?: ContactMapOmit<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    contactId: number | null
  }

  export type PetSumAggregateOutputType = {
    contactId: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    contactId: number | null
    name: string | null
    breed: string | null
    age: string | null
    birthDate: Date | null
    photo: string | null
    createdAt: Date | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    contactId: number | null
    name: string | null
    breed: string | null
    age: string | null
    birthDate: Date | null
    photo: string | null
    createdAt: Date | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    contactId: number
    name: number
    breed: number
    age: number
    birthDate: number
    photo: number
    createdAt: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    contactId?: true
  }

  export type PetSumAggregateInputType = {
    contactId?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    breed?: true
    age?: true
    birthDate?: true
    photo?: true
    createdAt?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    breed?: true
    age?: true
    birthDate?: true
    photo?: true
    createdAt?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    breed?: true
    age?: true
    birthDate?: true
    photo?: true
    createdAt?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    contactId: number
    name: string
    breed: string | null
    age: string | null
    birthDate: Date | null
    photo: string | null
    createdAt: Date
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    breed?: boolean
    age?: boolean
    birthDate?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    breed?: boolean
    age?: boolean
    birthDate?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    breed?: boolean
    age?: boolean
    birthDate?: boolean
    photo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    contactId?: boolean
    name?: boolean
    breed?: boolean
    age?: boolean
    birthDate?: boolean
    photo?: boolean
    createdAt?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "name" | "breed" | "age" | "birthDate" | "photo" | "createdAt", ExtArgs["result"]["pet"]>

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: number
      name: string
      breed: string | null
      age: string | null
      birthDate: Date | null
      photo: string | null
      createdAt: Date
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly contactId: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly breed: FieldRef<"Pet", 'String'>
    readonly age: FieldRef<"Pet", 'String'>
    readonly birthDate: FieldRef<"Pet", 'DateTime'>
    readonly photo: FieldRef<"Pet", 'String'>
    readonly createdAt: FieldRef<"Pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
  }


  /**
   * Model ContactFile
   */

  export type AggregateContactFile = {
    _count: ContactFileCountAggregateOutputType | null
    _avg: ContactFileAvgAggregateOutputType | null
    _sum: ContactFileSumAggregateOutputType | null
    _min: ContactFileMinAggregateOutputType | null
    _max: ContactFileMaxAggregateOutputType | null
  }

  export type ContactFileAvgAggregateOutputType = {
    contactId: number | null
  }

  export type ContactFileSumAggregateOutputType = {
    contactId: number | null
  }

  export type ContactFileMinAggregateOutputType = {
    id: string | null
    contactId: number | null
    name: string | null
    size: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ContactFileMaxAggregateOutputType = {
    id: string | null
    contactId: number | null
    name: string | null
    size: string | null
    url: string | null
    type: string | null
    createdAt: Date | null
  }

  export type ContactFileCountAggregateOutputType = {
    id: number
    contactId: number
    name: number
    size: number
    url: number
    type: number
    createdAt: number
    _all: number
  }


  export type ContactFileAvgAggregateInputType = {
    contactId?: true
  }

  export type ContactFileSumAggregateInputType = {
    contactId?: true
  }

  export type ContactFileMinAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    size?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type ContactFileMaxAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    size?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type ContactFileCountAggregateInputType = {
    id?: true
    contactId?: true
    name?: true
    size?: true
    url?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type ContactFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactFile to aggregate.
     */
    where?: ContactFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFiles to fetch.
     */
    orderBy?: ContactFileOrderByWithRelationInput | ContactFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactFiles
    **/
    _count?: true | ContactFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactFileMaxAggregateInputType
  }

  export type GetContactFileAggregateType<T extends ContactFileAggregateArgs> = {
        [P in keyof T & keyof AggregateContactFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactFile[P]>
      : GetScalarType<T[P], AggregateContactFile[P]>
  }




  export type ContactFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactFileWhereInput
    orderBy?: ContactFileOrderByWithAggregationInput | ContactFileOrderByWithAggregationInput[]
    by: ContactFileScalarFieldEnum[] | ContactFileScalarFieldEnum
    having?: ContactFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactFileCountAggregateInputType | true
    _avg?: ContactFileAvgAggregateInputType
    _sum?: ContactFileSumAggregateInputType
    _min?: ContactFileMinAggregateInputType
    _max?: ContactFileMaxAggregateInputType
  }

  export type ContactFileGroupByOutputType = {
    id: string
    contactId: number
    name: string
    size: string
    url: string
    type: string | null
    createdAt: Date
    _count: ContactFileCountAggregateOutputType | null
    _avg: ContactFileAvgAggregateOutputType | null
    _sum: ContactFileSumAggregateOutputType | null
    _min: ContactFileMinAggregateOutputType | null
    _max: ContactFileMaxAggregateOutputType | null
  }

  type GetContactFileGroupByPayload<T extends ContactFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactFileGroupByOutputType[P]>
            : GetScalarType<T[P], ContactFileGroupByOutputType[P]>
        }
      >
    >


  export type ContactFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    size?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactFile"]>

  export type ContactFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    size?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactFile"]>

  export type ContactFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    name?: boolean
    size?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactFile"]>

  export type ContactFileSelectScalar = {
    id?: boolean
    contactId?: boolean
    name?: boolean
    size?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type ContactFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "name" | "size" | "url" | "type" | "createdAt", ExtArgs["result"]["contactFile"]>

  export type $ContactFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: number
      name: string
      size: string
      url: string
      type: string | null
      createdAt: Date
    }, ExtArgs["result"]["contactFile"]>
    composites: {}
  }

  type ContactFileGetPayload<S extends boolean | null | undefined | ContactFileDefaultArgs> = $Result.GetResult<Prisma.$ContactFilePayload, S>

  type ContactFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactFileCountAggregateInputType | true
    }

  export interface ContactFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactFile'], meta: { name: 'ContactFile' } }
    /**
     * Find zero or one ContactFile that matches the filter.
     * @param {ContactFileFindUniqueArgs} args - Arguments to find a ContactFile
     * @example
     * // Get one ContactFile
     * const contactFile = await prisma.contactFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFileFindUniqueArgs>(args: SelectSubset<T, ContactFileFindUniqueArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFileFindUniqueOrThrowArgs} args - Arguments to find a ContactFile
     * @example
     * // Get one ContactFile
     * const contactFile = await prisma.contactFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFileFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileFindFirstArgs} args - Arguments to find a ContactFile
     * @example
     * // Get one ContactFile
     * const contactFile = await prisma.contactFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFileFindFirstArgs>(args?: SelectSubset<T, ContactFileFindFirstArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileFindFirstOrThrowArgs} args - Arguments to find a ContactFile
     * @example
     * // Get one ContactFile
     * const contactFile = await prisma.contactFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFileFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactFiles
     * const contactFiles = await prisma.contactFile.findMany()
     * 
     * // Get first 10 ContactFiles
     * const contactFiles = await prisma.contactFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactFileWithIdOnly = await prisma.contactFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFileFindManyArgs>(args?: SelectSubset<T, ContactFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactFile.
     * @param {ContactFileCreateArgs} args - Arguments to create a ContactFile.
     * @example
     * // Create one ContactFile
     * const ContactFile = await prisma.contactFile.create({
     *   data: {
     *     // ... data to create a ContactFile
     *   }
     * })
     * 
     */
    create<T extends ContactFileCreateArgs>(args: SelectSubset<T, ContactFileCreateArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactFiles.
     * @param {ContactFileCreateManyArgs} args - Arguments to create many ContactFiles.
     * @example
     * // Create many ContactFiles
     * const contactFile = await prisma.contactFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactFileCreateManyArgs>(args?: SelectSubset<T, ContactFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactFiles and returns the data saved in the database.
     * @param {ContactFileCreateManyAndReturnArgs} args - Arguments to create many ContactFiles.
     * @example
     * // Create many ContactFiles
     * const contactFile = await prisma.contactFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactFiles and only return the `id`
     * const contactFileWithIdOnly = await prisma.contactFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactFileCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactFile.
     * @param {ContactFileDeleteArgs} args - Arguments to delete one ContactFile.
     * @example
     * // Delete one ContactFile
     * const ContactFile = await prisma.contactFile.delete({
     *   where: {
     *     // ... filter to delete one ContactFile
     *   }
     * })
     * 
     */
    delete<T extends ContactFileDeleteArgs>(args: SelectSubset<T, ContactFileDeleteArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactFile.
     * @param {ContactFileUpdateArgs} args - Arguments to update one ContactFile.
     * @example
     * // Update one ContactFile
     * const contactFile = await prisma.contactFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactFileUpdateArgs>(args: SelectSubset<T, ContactFileUpdateArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactFiles.
     * @param {ContactFileDeleteManyArgs} args - Arguments to filter ContactFiles to delete.
     * @example
     * // Delete a few ContactFiles
     * const { count } = await prisma.contactFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactFileDeleteManyArgs>(args?: SelectSubset<T, ContactFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactFiles
     * const contactFile = await prisma.contactFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactFileUpdateManyArgs>(args: SelectSubset<T, ContactFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactFiles and returns the data updated in the database.
     * @param {ContactFileUpdateManyAndReturnArgs} args - Arguments to update many ContactFiles.
     * @example
     * // Update many ContactFiles
     * const contactFile = await prisma.contactFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactFiles and only return the `id`
     * const contactFileWithIdOnly = await prisma.contactFile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactFileUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactFile.
     * @param {ContactFileUpsertArgs} args - Arguments to update or create a ContactFile.
     * @example
     * // Update or create a ContactFile
     * const contactFile = await prisma.contactFile.upsert({
     *   create: {
     *     // ... data to create a ContactFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactFile we want to update
     *   }
     * })
     */
    upsert<T extends ContactFileUpsertArgs>(args: SelectSubset<T, ContactFileUpsertArgs<ExtArgs>>): Prisma__ContactFileClient<$Result.GetResult<Prisma.$ContactFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileCountArgs} args - Arguments to filter ContactFiles to count.
     * @example
     * // Count the number of ContactFiles
     * const count = await prisma.contactFile.count({
     *   where: {
     *     // ... the filter for the ContactFiles we want to count
     *   }
     * })
    **/
    count<T extends ContactFileCountArgs>(
      args?: Subset<T, ContactFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactFileAggregateArgs>(args: Subset<T, ContactFileAggregateArgs>): Prisma.PrismaPromise<GetContactFileAggregateType<T>>

    /**
     * Group by ContactFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFileGroupByArgs} args - Group by arguments.
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
      T extends ContactFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactFileGroupByArgs['orderBy'] }
        : { orderBy?: ContactFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactFile model
   */
  readonly fields: ContactFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactFile model
   */
  interface ContactFileFieldRefs {
    readonly id: FieldRef<"ContactFile", 'String'>
    readonly contactId: FieldRef<"ContactFile", 'Int'>
    readonly name: FieldRef<"ContactFile", 'String'>
    readonly size: FieldRef<"ContactFile", 'String'>
    readonly url: FieldRef<"ContactFile", 'String'>
    readonly type: FieldRef<"ContactFile", 'String'>
    readonly createdAt: FieldRef<"ContactFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactFile findUnique
   */
  export type ContactFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter, which ContactFile to fetch.
     */
    where: ContactFileWhereUniqueInput
  }

  /**
   * ContactFile findUniqueOrThrow
   */
  export type ContactFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter, which ContactFile to fetch.
     */
    where: ContactFileWhereUniqueInput
  }

  /**
   * ContactFile findFirst
   */
  export type ContactFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter, which ContactFile to fetch.
     */
    where?: ContactFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFiles to fetch.
     */
    orderBy?: ContactFileOrderByWithRelationInput | ContactFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactFiles.
     */
    cursor?: ContactFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactFiles.
     */
    distinct?: ContactFileScalarFieldEnum | ContactFileScalarFieldEnum[]
  }

  /**
   * ContactFile findFirstOrThrow
   */
  export type ContactFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter, which ContactFile to fetch.
     */
    where?: ContactFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFiles to fetch.
     */
    orderBy?: ContactFileOrderByWithRelationInput | ContactFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactFiles.
     */
    cursor?: ContactFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactFiles.
     */
    distinct?: ContactFileScalarFieldEnum | ContactFileScalarFieldEnum[]
  }

  /**
   * ContactFile findMany
   */
  export type ContactFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter, which ContactFiles to fetch.
     */
    where?: ContactFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactFiles to fetch.
     */
    orderBy?: ContactFileOrderByWithRelationInput | ContactFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactFiles.
     */
    cursor?: ContactFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactFiles.
     */
    skip?: number
    distinct?: ContactFileScalarFieldEnum | ContactFileScalarFieldEnum[]
  }

  /**
   * ContactFile create
   */
  export type ContactFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactFile.
     */
    data: XOR<ContactFileCreateInput, ContactFileUncheckedCreateInput>
  }

  /**
   * ContactFile createMany
   */
  export type ContactFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactFiles.
     */
    data: ContactFileCreateManyInput | ContactFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactFile createManyAndReturn
   */
  export type ContactFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * The data used to create many ContactFiles.
     */
    data: ContactFileCreateManyInput | ContactFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactFile update
   */
  export type ContactFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactFile.
     */
    data: XOR<ContactFileUpdateInput, ContactFileUncheckedUpdateInput>
    /**
     * Choose, which ContactFile to update.
     */
    where: ContactFileWhereUniqueInput
  }

  /**
   * ContactFile updateMany
   */
  export type ContactFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactFiles.
     */
    data: XOR<ContactFileUpdateManyMutationInput, ContactFileUncheckedUpdateManyInput>
    /**
     * Filter which ContactFiles to update
     */
    where?: ContactFileWhereInput
    /**
     * Limit how many ContactFiles to update.
     */
    limit?: number
  }

  /**
   * ContactFile updateManyAndReturn
   */
  export type ContactFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * The data used to update ContactFiles.
     */
    data: XOR<ContactFileUpdateManyMutationInput, ContactFileUncheckedUpdateManyInput>
    /**
     * Filter which ContactFiles to update
     */
    where?: ContactFileWhereInput
    /**
     * Limit how many ContactFiles to update.
     */
    limit?: number
  }

  /**
   * ContactFile upsert
   */
  export type ContactFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactFile to update in case it exists.
     */
    where: ContactFileWhereUniqueInput
    /**
     * In case the ContactFile found by the `where` argument doesn't exist, create a new ContactFile with this data.
     */
    create: XOR<ContactFileCreateInput, ContactFileUncheckedCreateInput>
    /**
     * In case the ContactFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactFileUpdateInput, ContactFileUncheckedUpdateInput>
  }

  /**
   * ContactFile delete
   */
  export type ContactFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
    /**
     * Filter which ContactFile to delete.
     */
    where: ContactFileWhereUniqueInput
  }

  /**
   * ContactFile deleteMany
   */
  export type ContactFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactFiles to delete
     */
    where?: ContactFileWhereInput
    /**
     * Limit how many ContactFiles to delete.
     */
    limit?: number
  }

  /**
   * ContactFile without action
   */
  export type ContactFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFile
     */
    select?: ContactFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactFile
     */
    omit?: ContactFileOmit<ExtArgs> | null
  }


  /**
   * Model ContactTask
   */

  export type AggregateContactTask = {
    _count: ContactTaskCountAggregateOutputType | null
    _avg: ContactTaskAvgAggregateOutputType | null
    _sum: ContactTaskSumAggregateOutputType | null
    _min: ContactTaskMinAggregateOutputType | null
    _max: ContactTaskMaxAggregateOutputType | null
  }

  export type ContactTaskAvgAggregateOutputType = {
    contactId: number | null
  }

  export type ContactTaskSumAggregateOutputType = {
    contactId: number | null
  }

  export type ContactTaskMinAggregateOutputType = {
    id: string | null
    contactId: number | null
    title: string | null
    dueDate: string | null
    priority: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactTaskMaxAggregateOutputType = {
    id: string | null
    contactId: number | null
    title: string | null
    dueDate: string | null
    priority: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactTaskCountAggregateOutputType = {
    id: number
    contactId: number
    title: number
    dueDate: number
    priority: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactTaskAvgAggregateInputType = {
    contactId?: true
  }

  export type ContactTaskSumAggregateInputType = {
    contactId?: true
  }

  export type ContactTaskMinAggregateInputType = {
    id?: true
    contactId?: true
    title?: true
    dueDate?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type ContactTaskMaxAggregateInputType = {
    id?: true
    contactId?: true
    title?: true
    dueDate?: true
    priority?: true
    status?: true
    createdAt?: true
  }

  export type ContactTaskCountAggregateInputType = {
    id?: true
    contactId?: true
    title?: true
    dueDate?: true
    priority?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTask to aggregate.
     */
    where?: ContactTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTasks to fetch.
     */
    orderBy?: ContactTaskOrderByWithRelationInput | ContactTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactTasks
    **/
    _count?: true | ContactTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactTaskMaxAggregateInputType
  }

  export type GetContactTaskAggregateType<T extends ContactTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateContactTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactTask[P]>
      : GetScalarType<T[P], AggregateContactTask[P]>
  }




  export type ContactTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactTaskWhereInput
    orderBy?: ContactTaskOrderByWithAggregationInput | ContactTaskOrderByWithAggregationInput[]
    by: ContactTaskScalarFieldEnum[] | ContactTaskScalarFieldEnum
    having?: ContactTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactTaskCountAggregateInputType | true
    _avg?: ContactTaskAvgAggregateInputType
    _sum?: ContactTaskSumAggregateInputType
    _min?: ContactTaskMinAggregateInputType
    _max?: ContactTaskMaxAggregateInputType
  }

  export type ContactTaskGroupByOutputType = {
    id: string
    contactId: number
    title: string
    dueDate: string | null
    priority: string | null
    status: string
    createdAt: Date
    _count: ContactTaskCountAggregateOutputType | null
    _avg: ContactTaskAvgAggregateOutputType | null
    _sum: ContactTaskSumAggregateOutputType | null
    _min: ContactTaskMinAggregateOutputType | null
    _max: ContactTaskMaxAggregateOutputType | null
  }

  type GetContactTaskGroupByPayload<T extends ContactTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ContactTaskGroupByOutputType[P]>
        }
      >
    >


  export type ContactTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    title?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactTask"]>

  export type ContactTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    title?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactTask"]>

  export type ContactTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    title?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactTask"]>

  export type ContactTaskSelectScalar = {
    id?: boolean
    contactId?: boolean
    title?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "title" | "dueDate" | "priority" | "status" | "createdAt", ExtArgs["result"]["contactTask"]>

  export type $ContactTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactTask"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: number
      title: string
      dueDate: string | null
      priority: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactTask"]>
    composites: {}
  }

  type ContactTaskGetPayload<S extends boolean | null | undefined | ContactTaskDefaultArgs> = $Result.GetResult<Prisma.$ContactTaskPayload, S>

  type ContactTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactTaskCountAggregateInputType | true
    }

  export interface ContactTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactTask'], meta: { name: 'ContactTask' } }
    /**
     * Find zero or one ContactTask that matches the filter.
     * @param {ContactTaskFindUniqueArgs} args - Arguments to find a ContactTask
     * @example
     * // Get one ContactTask
     * const contactTask = await prisma.contactTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactTaskFindUniqueArgs>(args: SelectSubset<T, ContactTaskFindUniqueArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactTaskFindUniqueOrThrowArgs} args - Arguments to find a ContactTask
     * @example
     * // Get one ContactTask
     * const contactTask = await prisma.contactTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskFindFirstArgs} args - Arguments to find a ContactTask
     * @example
     * // Get one ContactTask
     * const contactTask = await prisma.contactTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactTaskFindFirstArgs>(args?: SelectSubset<T, ContactTaskFindFirstArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskFindFirstOrThrowArgs} args - Arguments to find a ContactTask
     * @example
     * // Get one ContactTask
     * const contactTask = await prisma.contactTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactTasks
     * const contactTasks = await prisma.contactTask.findMany()
     * 
     * // Get first 10 ContactTasks
     * const contactTasks = await prisma.contactTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactTaskWithIdOnly = await prisma.contactTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactTaskFindManyArgs>(args?: SelectSubset<T, ContactTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactTask.
     * @param {ContactTaskCreateArgs} args - Arguments to create a ContactTask.
     * @example
     * // Create one ContactTask
     * const ContactTask = await prisma.contactTask.create({
     *   data: {
     *     // ... data to create a ContactTask
     *   }
     * })
     * 
     */
    create<T extends ContactTaskCreateArgs>(args: SelectSubset<T, ContactTaskCreateArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactTasks.
     * @param {ContactTaskCreateManyArgs} args - Arguments to create many ContactTasks.
     * @example
     * // Create many ContactTasks
     * const contactTask = await prisma.contactTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactTaskCreateManyArgs>(args?: SelectSubset<T, ContactTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactTasks and returns the data saved in the database.
     * @param {ContactTaskCreateManyAndReturnArgs} args - Arguments to create many ContactTasks.
     * @example
     * // Create many ContactTasks
     * const contactTask = await prisma.contactTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactTasks and only return the `id`
     * const contactTaskWithIdOnly = await prisma.contactTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactTask.
     * @param {ContactTaskDeleteArgs} args - Arguments to delete one ContactTask.
     * @example
     * // Delete one ContactTask
     * const ContactTask = await prisma.contactTask.delete({
     *   where: {
     *     // ... filter to delete one ContactTask
     *   }
     * })
     * 
     */
    delete<T extends ContactTaskDeleteArgs>(args: SelectSubset<T, ContactTaskDeleteArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactTask.
     * @param {ContactTaskUpdateArgs} args - Arguments to update one ContactTask.
     * @example
     * // Update one ContactTask
     * const contactTask = await prisma.contactTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactTaskUpdateArgs>(args: SelectSubset<T, ContactTaskUpdateArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactTasks.
     * @param {ContactTaskDeleteManyArgs} args - Arguments to filter ContactTasks to delete.
     * @example
     * // Delete a few ContactTasks
     * const { count } = await prisma.contactTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactTaskDeleteManyArgs>(args?: SelectSubset<T, ContactTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactTasks
     * const contactTask = await prisma.contactTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactTaskUpdateManyArgs>(args: SelectSubset<T, ContactTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactTasks and returns the data updated in the database.
     * @param {ContactTaskUpdateManyAndReturnArgs} args - Arguments to update many ContactTasks.
     * @example
     * // Update many ContactTasks
     * const contactTask = await prisma.contactTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactTasks and only return the `id`
     * const contactTaskWithIdOnly = await prisma.contactTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactTask.
     * @param {ContactTaskUpsertArgs} args - Arguments to update or create a ContactTask.
     * @example
     * // Update or create a ContactTask
     * const contactTask = await prisma.contactTask.upsert({
     *   create: {
     *     // ... data to create a ContactTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactTask we want to update
     *   }
     * })
     */
    upsert<T extends ContactTaskUpsertArgs>(args: SelectSubset<T, ContactTaskUpsertArgs<ExtArgs>>): Prisma__ContactTaskClient<$Result.GetResult<Prisma.$ContactTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskCountArgs} args - Arguments to filter ContactTasks to count.
     * @example
     * // Count the number of ContactTasks
     * const count = await prisma.contactTask.count({
     *   where: {
     *     // ... the filter for the ContactTasks we want to count
     *   }
     * })
    **/
    count<T extends ContactTaskCountArgs>(
      args?: Subset<T, ContactTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactTaskAggregateArgs>(args: Subset<T, ContactTaskAggregateArgs>): Prisma.PrismaPromise<GetContactTaskAggregateType<T>>

    /**
     * Group by ContactTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactTaskGroupByArgs} args - Group by arguments.
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
      T extends ContactTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactTaskGroupByArgs['orderBy'] }
        : { orderBy?: ContactTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactTask model
   */
  readonly fields: ContactTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactTask model
   */
  interface ContactTaskFieldRefs {
    readonly id: FieldRef<"ContactTask", 'String'>
    readonly contactId: FieldRef<"ContactTask", 'Int'>
    readonly title: FieldRef<"ContactTask", 'String'>
    readonly dueDate: FieldRef<"ContactTask", 'String'>
    readonly priority: FieldRef<"ContactTask", 'String'>
    readonly status: FieldRef<"ContactTask", 'String'>
    readonly createdAt: FieldRef<"ContactTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactTask findUnique
   */
  export type ContactTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter, which ContactTask to fetch.
     */
    where: ContactTaskWhereUniqueInput
  }

  /**
   * ContactTask findUniqueOrThrow
   */
  export type ContactTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter, which ContactTask to fetch.
     */
    where: ContactTaskWhereUniqueInput
  }

  /**
   * ContactTask findFirst
   */
  export type ContactTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter, which ContactTask to fetch.
     */
    where?: ContactTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTasks to fetch.
     */
    orderBy?: ContactTaskOrderByWithRelationInput | ContactTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTasks.
     */
    cursor?: ContactTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTasks.
     */
    distinct?: ContactTaskScalarFieldEnum | ContactTaskScalarFieldEnum[]
  }

  /**
   * ContactTask findFirstOrThrow
   */
  export type ContactTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter, which ContactTask to fetch.
     */
    where?: ContactTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTasks to fetch.
     */
    orderBy?: ContactTaskOrderByWithRelationInput | ContactTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactTasks.
     */
    cursor?: ContactTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactTasks.
     */
    distinct?: ContactTaskScalarFieldEnum | ContactTaskScalarFieldEnum[]
  }

  /**
   * ContactTask findMany
   */
  export type ContactTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter, which ContactTasks to fetch.
     */
    where?: ContactTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactTasks to fetch.
     */
    orderBy?: ContactTaskOrderByWithRelationInput | ContactTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactTasks.
     */
    cursor?: ContactTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactTasks.
     */
    skip?: number
    distinct?: ContactTaskScalarFieldEnum | ContactTaskScalarFieldEnum[]
  }

  /**
   * ContactTask create
   */
  export type ContactTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactTask.
     */
    data: XOR<ContactTaskCreateInput, ContactTaskUncheckedCreateInput>
  }

  /**
   * ContactTask createMany
   */
  export type ContactTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactTasks.
     */
    data: ContactTaskCreateManyInput | ContactTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactTask createManyAndReturn
   */
  export type ContactTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ContactTasks.
     */
    data: ContactTaskCreateManyInput | ContactTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactTask update
   */
  export type ContactTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactTask.
     */
    data: XOR<ContactTaskUpdateInput, ContactTaskUncheckedUpdateInput>
    /**
     * Choose, which ContactTask to update.
     */
    where: ContactTaskWhereUniqueInput
  }

  /**
   * ContactTask updateMany
   */
  export type ContactTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactTasks.
     */
    data: XOR<ContactTaskUpdateManyMutationInput, ContactTaskUncheckedUpdateManyInput>
    /**
     * Filter which ContactTasks to update
     */
    where?: ContactTaskWhereInput
    /**
     * Limit how many ContactTasks to update.
     */
    limit?: number
  }

  /**
   * ContactTask updateManyAndReturn
   */
  export type ContactTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * The data used to update ContactTasks.
     */
    data: XOR<ContactTaskUpdateManyMutationInput, ContactTaskUncheckedUpdateManyInput>
    /**
     * Filter which ContactTasks to update
     */
    where?: ContactTaskWhereInput
    /**
     * Limit how many ContactTasks to update.
     */
    limit?: number
  }

  /**
   * ContactTask upsert
   */
  export type ContactTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactTask to update in case it exists.
     */
    where: ContactTaskWhereUniqueInput
    /**
     * In case the ContactTask found by the `where` argument doesn't exist, create a new ContactTask with this data.
     */
    create: XOR<ContactTaskCreateInput, ContactTaskUncheckedCreateInput>
    /**
     * In case the ContactTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactTaskUpdateInput, ContactTaskUncheckedUpdateInput>
  }

  /**
   * ContactTask delete
   */
  export type ContactTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
    /**
     * Filter which ContactTask to delete.
     */
    where: ContactTaskWhereUniqueInput
  }

  /**
   * ContactTask deleteMany
   */
  export type ContactTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactTasks to delete
     */
    where?: ContactTaskWhereInput
    /**
     * Limit how many ContactTasks to delete.
     */
    limit?: number
  }

  /**
   * ContactTask without action
   */
  export type ContactTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactTask
     */
    select?: ContactTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactTask
     */
    omit?: ContactTaskOmit<ExtArgs> | null
  }


  /**
   * Model ContactActivity
   */

  export type AggregateContactActivity = {
    _count: ContactActivityCountAggregateOutputType | null
    _avg: ContactActivityAvgAggregateOutputType | null
    _sum: ContactActivitySumAggregateOutputType | null
    _min: ContactActivityMinAggregateOutputType | null
    _max: ContactActivityMaxAggregateOutputType | null
  }

  export type ContactActivityAvgAggregateOutputType = {
    contactId: number | null
  }

  export type ContactActivitySumAggregateOutputType = {
    contactId: number | null
  }

  export type ContactActivityMinAggregateOutputType = {
    id: string | null
    contactId: number | null
    type: string | null
    title: string | null
    content: string | null
    author: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type ContactActivityMaxAggregateOutputType = {
    id: string | null
    contactId: number | null
    type: string | null
    title: string | null
    content: string | null
    author: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type ContactActivityCountAggregateOutputType = {
    id: number
    contactId: number
    type: number
    title: number
    content: number
    author: number
    color: number
    icon: number
    createdAt: number
    _all: number
  }


  export type ContactActivityAvgAggregateInputType = {
    contactId?: true
  }

  export type ContactActivitySumAggregateInputType = {
    contactId?: true
  }

  export type ContactActivityMinAggregateInputType = {
    id?: true
    contactId?: true
    type?: true
    title?: true
    content?: true
    author?: true
    color?: true
    icon?: true
    createdAt?: true
  }

  export type ContactActivityMaxAggregateInputType = {
    id?: true
    contactId?: true
    type?: true
    title?: true
    content?: true
    author?: true
    color?: true
    icon?: true
    createdAt?: true
  }

  export type ContactActivityCountAggregateInputType = {
    id?: true
    contactId?: true
    type?: true
    title?: true
    content?: true
    author?: true
    color?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type ContactActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactActivity to aggregate.
     */
    where?: ContactActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactActivities to fetch.
     */
    orderBy?: ContactActivityOrderByWithRelationInput | ContactActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactActivities
    **/
    _count?: true | ContactActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactActivityMaxAggregateInputType
  }

  export type GetContactActivityAggregateType<T extends ContactActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateContactActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactActivity[P]>
      : GetScalarType<T[P], AggregateContactActivity[P]>
  }




  export type ContactActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactActivityWhereInput
    orderBy?: ContactActivityOrderByWithAggregationInput | ContactActivityOrderByWithAggregationInput[]
    by: ContactActivityScalarFieldEnum[] | ContactActivityScalarFieldEnum
    having?: ContactActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactActivityCountAggregateInputType | true
    _avg?: ContactActivityAvgAggregateInputType
    _sum?: ContactActivitySumAggregateInputType
    _min?: ContactActivityMinAggregateInputType
    _max?: ContactActivityMaxAggregateInputType
  }

  export type ContactActivityGroupByOutputType = {
    id: string
    contactId: number
    type: string
    title: string
    content: string | null
    author: string
    color: string | null
    icon: string | null
    createdAt: Date
    _count: ContactActivityCountAggregateOutputType | null
    _avg: ContactActivityAvgAggregateOutputType | null
    _sum: ContactActivitySumAggregateOutputType | null
    _min: ContactActivityMinAggregateOutputType | null
    _max: ContactActivityMaxAggregateOutputType | null
  }

  type GetContactActivityGroupByPayload<T extends ContactActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ContactActivityGroupByOutputType[P]>
        }
      >
    >


  export type ContactActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactActivity"]>

  export type ContactActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactActivity"]>

  export type ContactActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactActivity"]>

  export type ContactActivitySelectScalar = {
    id?: boolean
    contactId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
  }

  export type ContactActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "type" | "title" | "content" | "author" | "color" | "icon" | "createdAt", ExtArgs["result"]["contactActivity"]>

  export type $ContactActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: number
      type: string
      title: string
      content: string | null
      author: string
      color: string | null
      icon: string | null
      createdAt: Date
    }, ExtArgs["result"]["contactActivity"]>
    composites: {}
  }

  type ContactActivityGetPayload<S extends boolean | null | undefined | ContactActivityDefaultArgs> = $Result.GetResult<Prisma.$ContactActivityPayload, S>

  type ContactActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactActivityCountAggregateInputType | true
    }

  export interface ContactActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactActivity'], meta: { name: 'ContactActivity' } }
    /**
     * Find zero or one ContactActivity that matches the filter.
     * @param {ContactActivityFindUniqueArgs} args - Arguments to find a ContactActivity
     * @example
     * // Get one ContactActivity
     * const contactActivity = await prisma.contactActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactActivityFindUniqueArgs>(args: SelectSubset<T, ContactActivityFindUniqueArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactActivityFindUniqueOrThrowArgs} args - Arguments to find a ContactActivity
     * @example
     * // Get one ContactActivity
     * const contactActivity = await prisma.contactActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityFindFirstArgs} args - Arguments to find a ContactActivity
     * @example
     * // Get one ContactActivity
     * const contactActivity = await prisma.contactActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactActivityFindFirstArgs>(args?: SelectSubset<T, ContactActivityFindFirstArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityFindFirstOrThrowArgs} args - Arguments to find a ContactActivity
     * @example
     * // Get one ContactActivity
     * const contactActivity = await prisma.contactActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactActivities
     * const contactActivities = await prisma.contactActivity.findMany()
     * 
     * // Get first 10 ContactActivities
     * const contactActivities = await prisma.contactActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactActivityWithIdOnly = await prisma.contactActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactActivityFindManyArgs>(args?: SelectSubset<T, ContactActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactActivity.
     * @param {ContactActivityCreateArgs} args - Arguments to create a ContactActivity.
     * @example
     * // Create one ContactActivity
     * const ContactActivity = await prisma.contactActivity.create({
     *   data: {
     *     // ... data to create a ContactActivity
     *   }
     * })
     * 
     */
    create<T extends ContactActivityCreateArgs>(args: SelectSubset<T, ContactActivityCreateArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactActivities.
     * @param {ContactActivityCreateManyArgs} args - Arguments to create many ContactActivities.
     * @example
     * // Create many ContactActivities
     * const contactActivity = await prisma.contactActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactActivityCreateManyArgs>(args?: SelectSubset<T, ContactActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactActivities and returns the data saved in the database.
     * @param {ContactActivityCreateManyAndReturnArgs} args - Arguments to create many ContactActivities.
     * @example
     * // Create many ContactActivities
     * const contactActivity = await prisma.contactActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactActivities and only return the `id`
     * const contactActivityWithIdOnly = await prisma.contactActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactActivity.
     * @param {ContactActivityDeleteArgs} args - Arguments to delete one ContactActivity.
     * @example
     * // Delete one ContactActivity
     * const ContactActivity = await prisma.contactActivity.delete({
     *   where: {
     *     // ... filter to delete one ContactActivity
     *   }
     * })
     * 
     */
    delete<T extends ContactActivityDeleteArgs>(args: SelectSubset<T, ContactActivityDeleteArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactActivity.
     * @param {ContactActivityUpdateArgs} args - Arguments to update one ContactActivity.
     * @example
     * // Update one ContactActivity
     * const contactActivity = await prisma.contactActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactActivityUpdateArgs>(args: SelectSubset<T, ContactActivityUpdateArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactActivities.
     * @param {ContactActivityDeleteManyArgs} args - Arguments to filter ContactActivities to delete.
     * @example
     * // Delete a few ContactActivities
     * const { count } = await prisma.contactActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactActivityDeleteManyArgs>(args?: SelectSubset<T, ContactActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactActivities
     * const contactActivity = await prisma.contactActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactActivityUpdateManyArgs>(args: SelectSubset<T, ContactActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactActivities and returns the data updated in the database.
     * @param {ContactActivityUpdateManyAndReturnArgs} args - Arguments to update many ContactActivities.
     * @example
     * // Update many ContactActivities
     * const contactActivity = await prisma.contactActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactActivities and only return the `id`
     * const contactActivityWithIdOnly = await prisma.contactActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactActivity.
     * @param {ContactActivityUpsertArgs} args - Arguments to update or create a ContactActivity.
     * @example
     * // Update or create a ContactActivity
     * const contactActivity = await prisma.contactActivity.upsert({
     *   create: {
     *     // ... data to create a ContactActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactActivity we want to update
     *   }
     * })
     */
    upsert<T extends ContactActivityUpsertArgs>(args: SelectSubset<T, ContactActivityUpsertArgs<ExtArgs>>): Prisma__ContactActivityClient<$Result.GetResult<Prisma.$ContactActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityCountArgs} args - Arguments to filter ContactActivities to count.
     * @example
     * // Count the number of ContactActivities
     * const count = await prisma.contactActivity.count({
     *   where: {
     *     // ... the filter for the ContactActivities we want to count
     *   }
     * })
    **/
    count<T extends ContactActivityCountArgs>(
      args?: Subset<T, ContactActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactActivityAggregateArgs>(args: Subset<T, ContactActivityAggregateArgs>): Prisma.PrismaPromise<GetContactActivityAggregateType<T>>

    /**
     * Group by ContactActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactActivityGroupByArgs} args - Group by arguments.
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
      T extends ContactActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactActivityGroupByArgs['orderBy'] }
        : { orderBy?: ContactActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactActivity model
   */
  readonly fields: ContactActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactActivity model
   */
  interface ContactActivityFieldRefs {
    readonly id: FieldRef<"ContactActivity", 'String'>
    readonly contactId: FieldRef<"ContactActivity", 'Int'>
    readonly type: FieldRef<"ContactActivity", 'String'>
    readonly title: FieldRef<"ContactActivity", 'String'>
    readonly content: FieldRef<"ContactActivity", 'String'>
    readonly author: FieldRef<"ContactActivity", 'String'>
    readonly color: FieldRef<"ContactActivity", 'String'>
    readonly icon: FieldRef<"ContactActivity", 'String'>
    readonly createdAt: FieldRef<"ContactActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactActivity findUnique
   */
  export type ContactActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter, which ContactActivity to fetch.
     */
    where: ContactActivityWhereUniqueInput
  }

  /**
   * ContactActivity findUniqueOrThrow
   */
  export type ContactActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter, which ContactActivity to fetch.
     */
    where: ContactActivityWhereUniqueInput
  }

  /**
   * ContactActivity findFirst
   */
  export type ContactActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter, which ContactActivity to fetch.
     */
    where?: ContactActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactActivities to fetch.
     */
    orderBy?: ContactActivityOrderByWithRelationInput | ContactActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactActivities.
     */
    cursor?: ContactActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactActivities.
     */
    distinct?: ContactActivityScalarFieldEnum | ContactActivityScalarFieldEnum[]
  }

  /**
   * ContactActivity findFirstOrThrow
   */
  export type ContactActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter, which ContactActivity to fetch.
     */
    where?: ContactActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactActivities to fetch.
     */
    orderBy?: ContactActivityOrderByWithRelationInput | ContactActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactActivities.
     */
    cursor?: ContactActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactActivities.
     */
    distinct?: ContactActivityScalarFieldEnum | ContactActivityScalarFieldEnum[]
  }

  /**
   * ContactActivity findMany
   */
  export type ContactActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter, which ContactActivities to fetch.
     */
    where?: ContactActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactActivities to fetch.
     */
    orderBy?: ContactActivityOrderByWithRelationInput | ContactActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactActivities.
     */
    cursor?: ContactActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactActivities.
     */
    skip?: number
    distinct?: ContactActivityScalarFieldEnum | ContactActivityScalarFieldEnum[]
  }

  /**
   * ContactActivity create
   */
  export type ContactActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactActivity.
     */
    data: XOR<ContactActivityCreateInput, ContactActivityUncheckedCreateInput>
  }

  /**
   * ContactActivity createMany
   */
  export type ContactActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactActivities.
     */
    data: ContactActivityCreateManyInput | ContactActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactActivity createManyAndReturn
   */
  export type ContactActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * The data used to create many ContactActivities.
     */
    data: ContactActivityCreateManyInput | ContactActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactActivity update
   */
  export type ContactActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactActivity.
     */
    data: XOR<ContactActivityUpdateInput, ContactActivityUncheckedUpdateInput>
    /**
     * Choose, which ContactActivity to update.
     */
    where: ContactActivityWhereUniqueInput
  }

  /**
   * ContactActivity updateMany
   */
  export type ContactActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactActivities.
     */
    data: XOR<ContactActivityUpdateManyMutationInput, ContactActivityUncheckedUpdateManyInput>
    /**
     * Filter which ContactActivities to update
     */
    where?: ContactActivityWhereInput
    /**
     * Limit how many ContactActivities to update.
     */
    limit?: number
  }

  /**
   * ContactActivity updateManyAndReturn
   */
  export type ContactActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * The data used to update ContactActivities.
     */
    data: XOR<ContactActivityUpdateManyMutationInput, ContactActivityUncheckedUpdateManyInput>
    /**
     * Filter which ContactActivities to update
     */
    where?: ContactActivityWhereInput
    /**
     * Limit how many ContactActivities to update.
     */
    limit?: number
  }

  /**
   * ContactActivity upsert
   */
  export type ContactActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactActivity to update in case it exists.
     */
    where: ContactActivityWhereUniqueInput
    /**
     * In case the ContactActivity found by the `where` argument doesn't exist, create a new ContactActivity with this data.
     */
    create: XOR<ContactActivityCreateInput, ContactActivityUncheckedCreateInput>
    /**
     * In case the ContactActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactActivityUpdateInput, ContactActivityUncheckedUpdateInput>
  }

  /**
   * ContactActivity delete
   */
  export type ContactActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
    /**
     * Filter which ContactActivity to delete.
     */
    where: ContactActivityWhereUniqueInput
  }

  /**
   * ContactActivity deleteMany
   */
  export type ContactActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactActivities to delete
     */
    where?: ContactActivityWhereInput
    /**
     * Limit how many ContactActivities to delete.
     */
    limit?: number
  }

  /**
   * ContactActivity without action
   */
  export type ContactActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactActivity
     */
    select?: ContactActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactActivity
     */
    omit?: ContactActivityOmit<ExtArgs> | null
  }


  /**
   * Model ContactShift
   */

  export type AggregateContactShift = {
    _count: ContactShiftCountAggregateOutputType | null
    _avg: ContactShiftAvgAggregateOutputType | null
    _sum: ContactShiftSumAggregateOutputType | null
    _min: ContactShiftMinAggregateOutputType | null
    _max: ContactShiftMaxAggregateOutputType | null
  }

  export type ContactShiftAvgAggregateOutputType = {
    contactId: number | null
  }

  export type ContactShiftSumAggregateOutputType = {
    contactId: number | null
  }

  export type ContactShiftMinAggregateOutputType = {
    id: string | null
    contactId: number | null
    clockIn: Date | null
    clockOut: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactShiftMaxAggregateOutputType = {
    id: string | null
    contactId: number | null
    clockIn: Date | null
    clockOut: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type ContactShiftCountAggregateOutputType = {
    id: number
    contactId: number
    clockIn: number
    clockOut: number
    status: number
    createdAt: number
    _all: number
  }


  export type ContactShiftAvgAggregateInputType = {
    contactId?: true
  }

  export type ContactShiftSumAggregateInputType = {
    contactId?: true
  }

  export type ContactShiftMinAggregateInputType = {
    id?: true
    contactId?: true
    clockIn?: true
    clockOut?: true
    status?: true
    createdAt?: true
  }

  export type ContactShiftMaxAggregateInputType = {
    id?: true
    contactId?: true
    clockIn?: true
    clockOut?: true
    status?: true
    createdAt?: true
  }

  export type ContactShiftCountAggregateInputType = {
    id?: true
    contactId?: true
    clockIn?: true
    clockOut?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ContactShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactShift to aggregate.
     */
    where?: ContactShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactShifts to fetch.
     */
    orderBy?: ContactShiftOrderByWithRelationInput | ContactShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactShifts
    **/
    _count?: true | ContactShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactShiftMaxAggregateInputType
  }

  export type GetContactShiftAggregateType<T extends ContactShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateContactShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactShift[P]>
      : GetScalarType<T[P], AggregateContactShift[P]>
  }




  export type ContactShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactShiftWhereInput
    orderBy?: ContactShiftOrderByWithAggregationInput | ContactShiftOrderByWithAggregationInput[]
    by: ContactShiftScalarFieldEnum[] | ContactShiftScalarFieldEnum
    having?: ContactShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactShiftCountAggregateInputType | true
    _avg?: ContactShiftAvgAggregateInputType
    _sum?: ContactShiftSumAggregateInputType
    _min?: ContactShiftMinAggregateInputType
    _max?: ContactShiftMaxAggregateInputType
  }

  export type ContactShiftGroupByOutputType = {
    id: string
    contactId: number
    clockIn: Date
    clockOut: Date | null
    status: string
    createdAt: Date
    _count: ContactShiftCountAggregateOutputType | null
    _avg: ContactShiftAvgAggregateOutputType | null
    _sum: ContactShiftSumAggregateOutputType | null
    _min: ContactShiftMinAggregateOutputType | null
    _max: ContactShiftMaxAggregateOutputType | null
  }

  type GetContactShiftGroupByPayload<T extends ContactShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ContactShiftGroupByOutputType[P]>
        }
      >
    >


  export type ContactShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactShift"]>

  export type ContactShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactShift"]>

  export type ContactShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactShift"]>

  export type ContactShiftSelectScalar = {
    id?: boolean
    contactId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ContactShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactId" | "clockIn" | "clockOut" | "status" | "createdAt", ExtArgs["result"]["contactShift"]>

  export type $ContactShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactShift"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactId: number
      clockIn: Date
      clockOut: Date | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["contactShift"]>
    composites: {}
  }

  type ContactShiftGetPayload<S extends boolean | null | undefined | ContactShiftDefaultArgs> = $Result.GetResult<Prisma.$ContactShiftPayload, S>

  type ContactShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactShiftCountAggregateInputType | true
    }

  export interface ContactShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactShift'], meta: { name: 'ContactShift' } }
    /**
     * Find zero or one ContactShift that matches the filter.
     * @param {ContactShiftFindUniqueArgs} args - Arguments to find a ContactShift
     * @example
     * // Get one ContactShift
     * const contactShift = await prisma.contactShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactShiftFindUniqueArgs>(args: SelectSubset<T, ContactShiftFindUniqueArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactShift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactShiftFindUniqueOrThrowArgs} args - Arguments to find a ContactShift
     * @example
     * // Get one ContactShift
     * const contactShift = await prisma.contactShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftFindFirstArgs} args - Arguments to find a ContactShift
     * @example
     * // Get one ContactShift
     * const contactShift = await prisma.contactShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactShiftFindFirstArgs>(args?: SelectSubset<T, ContactShiftFindFirstArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftFindFirstOrThrowArgs} args - Arguments to find a ContactShift
     * @example
     * // Get one ContactShift
     * const contactShift = await prisma.contactShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactShifts
     * const contactShifts = await prisma.contactShift.findMany()
     * 
     * // Get first 10 ContactShifts
     * const contactShifts = await prisma.contactShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactShiftWithIdOnly = await prisma.contactShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactShiftFindManyArgs>(args?: SelectSubset<T, ContactShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactShift.
     * @param {ContactShiftCreateArgs} args - Arguments to create a ContactShift.
     * @example
     * // Create one ContactShift
     * const ContactShift = await prisma.contactShift.create({
     *   data: {
     *     // ... data to create a ContactShift
     *   }
     * })
     * 
     */
    create<T extends ContactShiftCreateArgs>(args: SelectSubset<T, ContactShiftCreateArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactShifts.
     * @param {ContactShiftCreateManyArgs} args - Arguments to create many ContactShifts.
     * @example
     * // Create many ContactShifts
     * const contactShift = await prisma.contactShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactShiftCreateManyArgs>(args?: SelectSubset<T, ContactShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactShifts and returns the data saved in the database.
     * @param {ContactShiftCreateManyAndReturnArgs} args - Arguments to create many ContactShifts.
     * @example
     * // Create many ContactShifts
     * const contactShift = await prisma.contactShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactShifts and only return the `id`
     * const contactShiftWithIdOnly = await prisma.contactShift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactShift.
     * @param {ContactShiftDeleteArgs} args - Arguments to delete one ContactShift.
     * @example
     * // Delete one ContactShift
     * const ContactShift = await prisma.contactShift.delete({
     *   where: {
     *     // ... filter to delete one ContactShift
     *   }
     * })
     * 
     */
    delete<T extends ContactShiftDeleteArgs>(args: SelectSubset<T, ContactShiftDeleteArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactShift.
     * @param {ContactShiftUpdateArgs} args - Arguments to update one ContactShift.
     * @example
     * // Update one ContactShift
     * const contactShift = await prisma.contactShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactShiftUpdateArgs>(args: SelectSubset<T, ContactShiftUpdateArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactShifts.
     * @param {ContactShiftDeleteManyArgs} args - Arguments to filter ContactShifts to delete.
     * @example
     * // Delete a few ContactShifts
     * const { count } = await prisma.contactShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactShiftDeleteManyArgs>(args?: SelectSubset<T, ContactShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactShifts
     * const contactShift = await prisma.contactShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactShiftUpdateManyArgs>(args: SelectSubset<T, ContactShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactShifts and returns the data updated in the database.
     * @param {ContactShiftUpdateManyAndReturnArgs} args - Arguments to update many ContactShifts.
     * @example
     * // Update many ContactShifts
     * const contactShift = await prisma.contactShift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactShifts and only return the `id`
     * const contactShiftWithIdOnly = await prisma.contactShift.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactShift.
     * @param {ContactShiftUpsertArgs} args - Arguments to update or create a ContactShift.
     * @example
     * // Update or create a ContactShift
     * const contactShift = await prisma.contactShift.upsert({
     *   create: {
     *     // ... data to create a ContactShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactShift we want to update
     *   }
     * })
     */
    upsert<T extends ContactShiftUpsertArgs>(args: SelectSubset<T, ContactShiftUpsertArgs<ExtArgs>>): Prisma__ContactShiftClient<$Result.GetResult<Prisma.$ContactShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftCountArgs} args - Arguments to filter ContactShifts to count.
     * @example
     * // Count the number of ContactShifts
     * const count = await prisma.contactShift.count({
     *   where: {
     *     // ... the filter for the ContactShifts we want to count
     *   }
     * })
    **/
    count<T extends ContactShiftCountArgs>(
      args?: Subset<T, ContactShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactShiftAggregateArgs>(args: Subset<T, ContactShiftAggregateArgs>): Prisma.PrismaPromise<GetContactShiftAggregateType<T>>

    /**
     * Group by ContactShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactShiftGroupByArgs} args - Group by arguments.
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
      T extends ContactShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactShiftGroupByArgs['orderBy'] }
        : { orderBy?: ContactShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactShift model
   */
  readonly fields: ContactShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactShift model
   */
  interface ContactShiftFieldRefs {
    readonly id: FieldRef<"ContactShift", 'String'>
    readonly contactId: FieldRef<"ContactShift", 'Int'>
    readonly clockIn: FieldRef<"ContactShift", 'DateTime'>
    readonly clockOut: FieldRef<"ContactShift", 'DateTime'>
    readonly status: FieldRef<"ContactShift", 'String'>
    readonly createdAt: FieldRef<"ContactShift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactShift findUnique
   */
  export type ContactShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter, which ContactShift to fetch.
     */
    where: ContactShiftWhereUniqueInput
  }

  /**
   * ContactShift findUniqueOrThrow
   */
  export type ContactShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter, which ContactShift to fetch.
     */
    where: ContactShiftWhereUniqueInput
  }

  /**
   * ContactShift findFirst
   */
  export type ContactShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter, which ContactShift to fetch.
     */
    where?: ContactShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactShifts to fetch.
     */
    orderBy?: ContactShiftOrderByWithRelationInput | ContactShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactShifts.
     */
    cursor?: ContactShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactShifts.
     */
    distinct?: ContactShiftScalarFieldEnum | ContactShiftScalarFieldEnum[]
  }

  /**
   * ContactShift findFirstOrThrow
   */
  export type ContactShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter, which ContactShift to fetch.
     */
    where?: ContactShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactShifts to fetch.
     */
    orderBy?: ContactShiftOrderByWithRelationInput | ContactShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactShifts.
     */
    cursor?: ContactShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactShifts.
     */
    distinct?: ContactShiftScalarFieldEnum | ContactShiftScalarFieldEnum[]
  }

  /**
   * ContactShift findMany
   */
  export type ContactShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter, which ContactShifts to fetch.
     */
    where?: ContactShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactShifts to fetch.
     */
    orderBy?: ContactShiftOrderByWithRelationInput | ContactShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactShifts.
     */
    cursor?: ContactShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactShifts.
     */
    skip?: number
    distinct?: ContactShiftScalarFieldEnum | ContactShiftScalarFieldEnum[]
  }

  /**
   * ContactShift create
   */
  export type ContactShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactShift.
     */
    data: XOR<ContactShiftCreateInput, ContactShiftUncheckedCreateInput>
  }

  /**
   * ContactShift createMany
   */
  export type ContactShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactShifts.
     */
    data: ContactShiftCreateManyInput | ContactShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactShift createManyAndReturn
   */
  export type ContactShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * The data used to create many ContactShifts.
     */
    data: ContactShiftCreateManyInput | ContactShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactShift update
   */
  export type ContactShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactShift.
     */
    data: XOR<ContactShiftUpdateInput, ContactShiftUncheckedUpdateInput>
    /**
     * Choose, which ContactShift to update.
     */
    where: ContactShiftWhereUniqueInput
  }

  /**
   * ContactShift updateMany
   */
  export type ContactShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactShifts.
     */
    data: XOR<ContactShiftUpdateManyMutationInput, ContactShiftUncheckedUpdateManyInput>
    /**
     * Filter which ContactShifts to update
     */
    where?: ContactShiftWhereInput
    /**
     * Limit how many ContactShifts to update.
     */
    limit?: number
  }

  /**
   * ContactShift updateManyAndReturn
   */
  export type ContactShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * The data used to update ContactShifts.
     */
    data: XOR<ContactShiftUpdateManyMutationInput, ContactShiftUncheckedUpdateManyInput>
    /**
     * Filter which ContactShifts to update
     */
    where?: ContactShiftWhereInput
    /**
     * Limit how many ContactShifts to update.
     */
    limit?: number
  }

  /**
   * ContactShift upsert
   */
  export type ContactShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactShift to update in case it exists.
     */
    where: ContactShiftWhereUniqueInput
    /**
     * In case the ContactShift found by the `where` argument doesn't exist, create a new ContactShift with this data.
     */
    create: XOR<ContactShiftCreateInput, ContactShiftUncheckedCreateInput>
    /**
     * In case the ContactShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactShiftUpdateInput, ContactShiftUncheckedUpdateInput>
  }

  /**
   * ContactShift delete
   */
  export type ContactShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
    /**
     * Filter which ContactShift to delete.
     */
    where: ContactShiftWhereUniqueInput
  }

  /**
   * ContactShift deleteMany
   */
  export type ContactShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactShifts to delete
     */
    where?: ContactShiftWhereInput
    /**
     * Limit how many ContactShifts to delete.
     */
    limit?: number
  }

  /**
   * ContactShift without action
   */
  export type ContactShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactShift
     */
    select?: ContactShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactShift
     */
    omit?: ContactShiftOmit<ExtArgs> | null
  }


  /**
   * Model MarketingSuppressionEntry
   */

  export type AggregateMarketingSuppressionEntry = {
    _count: MarketingSuppressionEntryCountAggregateOutputType | null
    _min: MarketingSuppressionEntryMinAggregateOutputType | null
    _max: MarketingSuppressionEntryMaxAggregateOutputType | null
  }

  export type MarketingSuppressionEntryMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    channel: string | null
    value: string | null
    reason: string | null
    source: string | null
    createdAt: Date | null
  }

  export type MarketingSuppressionEntryMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    channel: string | null
    value: string | null
    reason: string | null
    source: string | null
    createdAt: Date | null
  }

  export type MarketingSuppressionEntryCountAggregateOutputType = {
    id: number
    orgId: number
    channel: number
    value: number
    reason: number
    source: number
    createdAt: number
    _all: number
  }


  export type MarketingSuppressionEntryMinAggregateInputType = {
    id?: true
    orgId?: true
    channel?: true
    value?: true
    reason?: true
    source?: true
    createdAt?: true
  }

  export type MarketingSuppressionEntryMaxAggregateInputType = {
    id?: true
    orgId?: true
    channel?: true
    value?: true
    reason?: true
    source?: true
    createdAt?: true
  }

  export type MarketingSuppressionEntryCountAggregateInputType = {
    id?: true
    orgId?: true
    channel?: true
    value?: true
    reason?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type MarketingSuppressionEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingSuppressionEntry to aggregate.
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingSuppressionEntries to fetch.
     */
    orderBy?: MarketingSuppressionEntryOrderByWithRelationInput | MarketingSuppressionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingSuppressionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingSuppressionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingSuppressionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingSuppressionEntries
    **/
    _count?: true | MarketingSuppressionEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingSuppressionEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingSuppressionEntryMaxAggregateInputType
  }

  export type GetMarketingSuppressionEntryAggregateType<T extends MarketingSuppressionEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingSuppressionEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingSuppressionEntry[P]>
      : GetScalarType<T[P], AggregateMarketingSuppressionEntry[P]>
  }




  export type MarketingSuppressionEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingSuppressionEntryWhereInput
    orderBy?: MarketingSuppressionEntryOrderByWithAggregationInput | MarketingSuppressionEntryOrderByWithAggregationInput[]
    by: MarketingSuppressionEntryScalarFieldEnum[] | MarketingSuppressionEntryScalarFieldEnum
    having?: MarketingSuppressionEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingSuppressionEntryCountAggregateInputType | true
    _min?: MarketingSuppressionEntryMinAggregateInputType
    _max?: MarketingSuppressionEntryMaxAggregateInputType
  }

  export type MarketingSuppressionEntryGroupByOutputType = {
    id: string
    orgId: string
    channel: string
    value: string
    reason: string
    source: string | null
    createdAt: Date
    _count: MarketingSuppressionEntryCountAggregateOutputType | null
    _min: MarketingSuppressionEntryMinAggregateOutputType | null
    _max: MarketingSuppressionEntryMaxAggregateOutputType | null
  }

  type GetMarketingSuppressionEntryGroupByPayload<T extends MarketingSuppressionEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingSuppressionEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingSuppressionEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingSuppressionEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingSuppressionEntryGroupByOutputType[P]>
        }
      >
    >


  export type MarketingSuppressionEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    channel?: boolean
    value?: boolean
    reason?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingSuppressionEntry"]>

  export type MarketingSuppressionEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    channel?: boolean
    value?: boolean
    reason?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingSuppressionEntry"]>

  export type MarketingSuppressionEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    channel?: boolean
    value?: boolean
    reason?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingSuppressionEntry"]>

  export type MarketingSuppressionEntrySelectScalar = {
    id?: boolean
    orgId?: boolean
    channel?: boolean
    value?: boolean
    reason?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type MarketingSuppressionEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "channel" | "value" | "reason" | "source" | "createdAt", ExtArgs["result"]["marketingSuppressionEntry"]>

  export type $MarketingSuppressionEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingSuppressionEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      channel: string
      value: string
      reason: string
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["marketingSuppressionEntry"]>
    composites: {}
  }

  type MarketingSuppressionEntryGetPayload<S extends boolean | null | undefined | MarketingSuppressionEntryDefaultArgs> = $Result.GetResult<Prisma.$MarketingSuppressionEntryPayload, S>

  type MarketingSuppressionEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingSuppressionEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingSuppressionEntryCountAggregateInputType | true
    }

  export interface MarketingSuppressionEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingSuppressionEntry'], meta: { name: 'MarketingSuppressionEntry' } }
    /**
     * Find zero or one MarketingSuppressionEntry that matches the filter.
     * @param {MarketingSuppressionEntryFindUniqueArgs} args - Arguments to find a MarketingSuppressionEntry
     * @example
     * // Get one MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingSuppressionEntryFindUniqueArgs>(args: SelectSubset<T, MarketingSuppressionEntryFindUniqueArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingSuppressionEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingSuppressionEntryFindUniqueOrThrowArgs} args - Arguments to find a MarketingSuppressionEntry
     * @example
     * // Get one MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingSuppressionEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingSuppressionEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingSuppressionEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryFindFirstArgs} args - Arguments to find a MarketingSuppressionEntry
     * @example
     * // Get one MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingSuppressionEntryFindFirstArgs>(args?: SelectSubset<T, MarketingSuppressionEntryFindFirstArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingSuppressionEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryFindFirstOrThrowArgs} args - Arguments to find a MarketingSuppressionEntry
     * @example
     * // Get one MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingSuppressionEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingSuppressionEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingSuppressionEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingSuppressionEntries
     * const marketingSuppressionEntries = await prisma.marketingSuppressionEntry.findMany()
     * 
     * // Get first 10 MarketingSuppressionEntries
     * const marketingSuppressionEntries = await prisma.marketingSuppressionEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingSuppressionEntryWithIdOnly = await prisma.marketingSuppressionEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingSuppressionEntryFindManyArgs>(args?: SelectSubset<T, MarketingSuppressionEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingSuppressionEntry.
     * @param {MarketingSuppressionEntryCreateArgs} args - Arguments to create a MarketingSuppressionEntry.
     * @example
     * // Create one MarketingSuppressionEntry
     * const MarketingSuppressionEntry = await prisma.marketingSuppressionEntry.create({
     *   data: {
     *     // ... data to create a MarketingSuppressionEntry
     *   }
     * })
     * 
     */
    create<T extends MarketingSuppressionEntryCreateArgs>(args: SelectSubset<T, MarketingSuppressionEntryCreateArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingSuppressionEntries.
     * @param {MarketingSuppressionEntryCreateManyArgs} args - Arguments to create many MarketingSuppressionEntries.
     * @example
     * // Create many MarketingSuppressionEntries
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingSuppressionEntryCreateManyArgs>(args?: SelectSubset<T, MarketingSuppressionEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingSuppressionEntries and returns the data saved in the database.
     * @param {MarketingSuppressionEntryCreateManyAndReturnArgs} args - Arguments to create many MarketingSuppressionEntries.
     * @example
     * // Create many MarketingSuppressionEntries
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingSuppressionEntries and only return the `id`
     * const marketingSuppressionEntryWithIdOnly = await prisma.marketingSuppressionEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingSuppressionEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingSuppressionEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingSuppressionEntry.
     * @param {MarketingSuppressionEntryDeleteArgs} args - Arguments to delete one MarketingSuppressionEntry.
     * @example
     * // Delete one MarketingSuppressionEntry
     * const MarketingSuppressionEntry = await prisma.marketingSuppressionEntry.delete({
     *   where: {
     *     // ... filter to delete one MarketingSuppressionEntry
     *   }
     * })
     * 
     */
    delete<T extends MarketingSuppressionEntryDeleteArgs>(args: SelectSubset<T, MarketingSuppressionEntryDeleteArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingSuppressionEntry.
     * @param {MarketingSuppressionEntryUpdateArgs} args - Arguments to update one MarketingSuppressionEntry.
     * @example
     * // Update one MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingSuppressionEntryUpdateArgs>(args: SelectSubset<T, MarketingSuppressionEntryUpdateArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingSuppressionEntries.
     * @param {MarketingSuppressionEntryDeleteManyArgs} args - Arguments to filter MarketingSuppressionEntries to delete.
     * @example
     * // Delete a few MarketingSuppressionEntries
     * const { count } = await prisma.marketingSuppressionEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingSuppressionEntryDeleteManyArgs>(args?: SelectSubset<T, MarketingSuppressionEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingSuppressionEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingSuppressionEntries
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingSuppressionEntryUpdateManyArgs>(args: SelectSubset<T, MarketingSuppressionEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingSuppressionEntries and returns the data updated in the database.
     * @param {MarketingSuppressionEntryUpdateManyAndReturnArgs} args - Arguments to update many MarketingSuppressionEntries.
     * @example
     * // Update many MarketingSuppressionEntries
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingSuppressionEntries and only return the `id`
     * const marketingSuppressionEntryWithIdOnly = await prisma.marketingSuppressionEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketingSuppressionEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingSuppressionEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingSuppressionEntry.
     * @param {MarketingSuppressionEntryUpsertArgs} args - Arguments to update or create a MarketingSuppressionEntry.
     * @example
     * // Update or create a MarketingSuppressionEntry
     * const marketingSuppressionEntry = await prisma.marketingSuppressionEntry.upsert({
     *   create: {
     *     // ... data to create a MarketingSuppressionEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingSuppressionEntry we want to update
     *   }
     * })
     */
    upsert<T extends MarketingSuppressionEntryUpsertArgs>(args: SelectSubset<T, MarketingSuppressionEntryUpsertArgs<ExtArgs>>): Prisma__MarketingSuppressionEntryClient<$Result.GetResult<Prisma.$MarketingSuppressionEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingSuppressionEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryCountArgs} args - Arguments to filter MarketingSuppressionEntries to count.
     * @example
     * // Count the number of MarketingSuppressionEntries
     * const count = await prisma.marketingSuppressionEntry.count({
     *   where: {
     *     // ... the filter for the MarketingSuppressionEntries we want to count
     *   }
     * })
    **/
    count<T extends MarketingSuppressionEntryCountArgs>(
      args?: Subset<T, MarketingSuppressionEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingSuppressionEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingSuppressionEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketingSuppressionEntryAggregateArgs>(args: Subset<T, MarketingSuppressionEntryAggregateArgs>): Prisma.PrismaPromise<GetMarketingSuppressionEntryAggregateType<T>>

    /**
     * Group by MarketingSuppressionEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingSuppressionEntryGroupByArgs} args - Group by arguments.
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
      T extends MarketingSuppressionEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingSuppressionEntryGroupByArgs['orderBy'] }
        : { orderBy?: MarketingSuppressionEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketingSuppressionEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingSuppressionEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingSuppressionEntry model
   */
  readonly fields: MarketingSuppressionEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingSuppressionEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingSuppressionEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketingSuppressionEntry model
   */
  interface MarketingSuppressionEntryFieldRefs {
    readonly id: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly orgId: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly channel: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly value: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly reason: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly source: FieldRef<"MarketingSuppressionEntry", 'String'>
    readonly createdAt: FieldRef<"MarketingSuppressionEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingSuppressionEntry findUnique
   */
  export type MarketingSuppressionEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter, which MarketingSuppressionEntry to fetch.
     */
    where: MarketingSuppressionEntryWhereUniqueInput
  }

  /**
   * MarketingSuppressionEntry findUniqueOrThrow
   */
  export type MarketingSuppressionEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter, which MarketingSuppressionEntry to fetch.
     */
    where: MarketingSuppressionEntryWhereUniqueInput
  }

  /**
   * MarketingSuppressionEntry findFirst
   */
  export type MarketingSuppressionEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter, which MarketingSuppressionEntry to fetch.
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingSuppressionEntries to fetch.
     */
    orderBy?: MarketingSuppressionEntryOrderByWithRelationInput | MarketingSuppressionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingSuppressionEntries.
     */
    cursor?: MarketingSuppressionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingSuppressionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingSuppressionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingSuppressionEntries.
     */
    distinct?: MarketingSuppressionEntryScalarFieldEnum | MarketingSuppressionEntryScalarFieldEnum[]
  }

  /**
   * MarketingSuppressionEntry findFirstOrThrow
   */
  export type MarketingSuppressionEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter, which MarketingSuppressionEntry to fetch.
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingSuppressionEntries to fetch.
     */
    orderBy?: MarketingSuppressionEntryOrderByWithRelationInput | MarketingSuppressionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingSuppressionEntries.
     */
    cursor?: MarketingSuppressionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingSuppressionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingSuppressionEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingSuppressionEntries.
     */
    distinct?: MarketingSuppressionEntryScalarFieldEnum | MarketingSuppressionEntryScalarFieldEnum[]
  }

  /**
   * MarketingSuppressionEntry findMany
   */
  export type MarketingSuppressionEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter, which MarketingSuppressionEntries to fetch.
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingSuppressionEntries to fetch.
     */
    orderBy?: MarketingSuppressionEntryOrderByWithRelationInput | MarketingSuppressionEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingSuppressionEntries.
     */
    cursor?: MarketingSuppressionEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingSuppressionEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingSuppressionEntries.
     */
    skip?: number
    distinct?: MarketingSuppressionEntryScalarFieldEnum | MarketingSuppressionEntryScalarFieldEnum[]
  }

  /**
   * MarketingSuppressionEntry create
   */
  export type MarketingSuppressionEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketingSuppressionEntry.
     */
    data: XOR<MarketingSuppressionEntryCreateInput, MarketingSuppressionEntryUncheckedCreateInput>
  }

  /**
   * MarketingSuppressionEntry createMany
   */
  export type MarketingSuppressionEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingSuppressionEntries.
     */
    data: MarketingSuppressionEntryCreateManyInput | MarketingSuppressionEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingSuppressionEntry createManyAndReturn
   */
  export type MarketingSuppressionEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingSuppressionEntries.
     */
    data: MarketingSuppressionEntryCreateManyInput | MarketingSuppressionEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingSuppressionEntry update
   */
  export type MarketingSuppressionEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketingSuppressionEntry.
     */
    data: XOR<MarketingSuppressionEntryUpdateInput, MarketingSuppressionEntryUncheckedUpdateInput>
    /**
     * Choose, which MarketingSuppressionEntry to update.
     */
    where: MarketingSuppressionEntryWhereUniqueInput
  }

  /**
   * MarketingSuppressionEntry updateMany
   */
  export type MarketingSuppressionEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingSuppressionEntries.
     */
    data: XOR<MarketingSuppressionEntryUpdateManyMutationInput, MarketingSuppressionEntryUncheckedUpdateManyInput>
    /**
     * Filter which MarketingSuppressionEntries to update
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * Limit how many MarketingSuppressionEntries to update.
     */
    limit?: number
  }

  /**
   * MarketingSuppressionEntry updateManyAndReturn
   */
  export type MarketingSuppressionEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * The data used to update MarketingSuppressionEntries.
     */
    data: XOR<MarketingSuppressionEntryUpdateManyMutationInput, MarketingSuppressionEntryUncheckedUpdateManyInput>
    /**
     * Filter which MarketingSuppressionEntries to update
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * Limit how many MarketingSuppressionEntries to update.
     */
    limit?: number
  }

  /**
   * MarketingSuppressionEntry upsert
   */
  export type MarketingSuppressionEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketingSuppressionEntry to update in case it exists.
     */
    where: MarketingSuppressionEntryWhereUniqueInput
    /**
     * In case the MarketingSuppressionEntry found by the `where` argument doesn't exist, create a new MarketingSuppressionEntry with this data.
     */
    create: XOR<MarketingSuppressionEntryCreateInput, MarketingSuppressionEntryUncheckedCreateInput>
    /**
     * In case the MarketingSuppressionEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingSuppressionEntryUpdateInput, MarketingSuppressionEntryUncheckedUpdateInput>
  }

  /**
   * MarketingSuppressionEntry delete
   */
  export type MarketingSuppressionEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
    /**
     * Filter which MarketingSuppressionEntry to delete.
     */
    where: MarketingSuppressionEntryWhereUniqueInput
  }

  /**
   * MarketingSuppressionEntry deleteMany
   */
  export type MarketingSuppressionEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingSuppressionEntries to delete
     */
    where?: MarketingSuppressionEntryWhereInput
    /**
     * Limit how many MarketingSuppressionEntries to delete.
     */
    limit?: number
  }

  /**
   * MarketingSuppressionEntry without action
   */
  export type MarketingSuppressionEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingSuppressionEntry
     */
    select?: MarketingSuppressionEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingSuppressionEntry
     */
    omit?: MarketingSuppressionEntryOmit<ExtArgs> | null
  }


  /**
   * Model MarketingContactConsent
   */

  export type AggregateMarketingContactConsent = {
    _count: MarketingContactConsentCountAggregateOutputType | null
    _min: MarketingContactConsentMinAggregateOutputType | null
    _max: MarketingContactConsentMaxAggregateOutputType | null
  }

  export type MarketingContactConsentMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    contactId: string | null
    emailOptIn: boolean | null
    smsOptIn: boolean | null
    unsubscribed: boolean | null
    updatedByUser: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingContactConsentMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    contactId: string | null
    emailOptIn: boolean | null
    smsOptIn: boolean | null
    unsubscribed: boolean | null
    updatedByUser: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingContactConsentCountAggregateOutputType = {
    id: number
    orgId: number
    contactId: number
    emailOptIn: number
    smsOptIn: number
    unsubscribed: number
    updatedByUser: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type MarketingContactConsentMinAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    emailOptIn?: true
    smsOptIn?: true
    unsubscribed?: true
    updatedByUser?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketingContactConsentMaxAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    emailOptIn?: true
    smsOptIn?: true
    unsubscribed?: true
    updatedByUser?: true
    updatedAt?: true
    createdAt?: true
  }

  export type MarketingContactConsentCountAggregateInputType = {
    id?: true
    orgId?: true
    contactId?: true
    emailOptIn?: true
    smsOptIn?: true
    unsubscribed?: true
    updatedByUser?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MarketingContactConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingContactConsent to aggregate.
     */
    where?: MarketingContactConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContactConsents to fetch.
     */
    orderBy?: MarketingContactConsentOrderByWithRelationInput | MarketingContactConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingContactConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContactConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContactConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingContactConsents
    **/
    _count?: true | MarketingContactConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingContactConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingContactConsentMaxAggregateInputType
  }

  export type GetMarketingContactConsentAggregateType<T extends MarketingContactConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingContactConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingContactConsent[P]>
      : GetScalarType<T[P], AggregateMarketingContactConsent[P]>
  }




  export type MarketingContactConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingContactConsentWhereInput
    orderBy?: MarketingContactConsentOrderByWithAggregationInput | MarketingContactConsentOrderByWithAggregationInput[]
    by: MarketingContactConsentScalarFieldEnum[] | MarketingContactConsentScalarFieldEnum
    having?: MarketingContactConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingContactConsentCountAggregateInputType | true
    _min?: MarketingContactConsentMinAggregateInputType
    _max?: MarketingContactConsentMaxAggregateInputType
  }

  export type MarketingContactConsentGroupByOutputType = {
    id: string
    orgId: string
    contactId: string
    emailOptIn: boolean | null
    smsOptIn: boolean | null
    unsubscribed: boolean
    updatedByUser: string | null
    updatedAt: Date
    createdAt: Date
    _count: MarketingContactConsentCountAggregateOutputType | null
    _min: MarketingContactConsentMinAggregateOutputType | null
    _max: MarketingContactConsentMaxAggregateOutputType | null
  }

  type GetMarketingContactConsentGroupByPayload<T extends MarketingContactConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingContactConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingContactConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingContactConsentGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingContactConsentGroupByOutputType[P]>
        }
      >
    >


  export type MarketingContactConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    emailOptIn?: boolean
    smsOptIn?: boolean
    unsubscribed?: boolean
    updatedByUser?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingContactConsent"]>

  export type MarketingContactConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    emailOptIn?: boolean
    smsOptIn?: boolean
    unsubscribed?: boolean
    updatedByUser?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingContactConsent"]>

  export type MarketingContactConsentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    emailOptIn?: boolean
    smsOptIn?: boolean
    unsubscribed?: boolean
    updatedByUser?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingContactConsent"]>

  export type MarketingContactConsentSelectScalar = {
    id?: boolean
    orgId?: boolean
    contactId?: boolean
    emailOptIn?: boolean
    smsOptIn?: boolean
    unsubscribed?: boolean
    updatedByUser?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type MarketingContactConsentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "contactId" | "emailOptIn" | "smsOptIn" | "unsubscribed" | "updatedByUser" | "updatedAt" | "createdAt", ExtArgs["result"]["marketingContactConsent"]>

  export type $MarketingContactConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingContactConsent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      contactId: string
      emailOptIn: boolean | null
      smsOptIn: boolean | null
      unsubscribed: boolean
      updatedByUser: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["marketingContactConsent"]>
    composites: {}
  }

  type MarketingContactConsentGetPayload<S extends boolean | null | undefined | MarketingContactConsentDefaultArgs> = $Result.GetResult<Prisma.$MarketingContactConsentPayload, S>

  type MarketingContactConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingContactConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingContactConsentCountAggregateInputType | true
    }

  export interface MarketingContactConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingContactConsent'], meta: { name: 'MarketingContactConsent' } }
    /**
     * Find zero or one MarketingContactConsent that matches the filter.
     * @param {MarketingContactConsentFindUniqueArgs} args - Arguments to find a MarketingContactConsent
     * @example
     * // Get one MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingContactConsentFindUniqueArgs>(args: SelectSubset<T, MarketingContactConsentFindUniqueArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingContactConsent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingContactConsentFindUniqueOrThrowArgs} args - Arguments to find a MarketingContactConsent
     * @example
     * // Get one MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingContactConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingContactConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingContactConsent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentFindFirstArgs} args - Arguments to find a MarketingContactConsent
     * @example
     * // Get one MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingContactConsentFindFirstArgs>(args?: SelectSubset<T, MarketingContactConsentFindFirstArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingContactConsent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentFindFirstOrThrowArgs} args - Arguments to find a MarketingContactConsent
     * @example
     * // Get one MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingContactConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingContactConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingContactConsents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingContactConsents
     * const marketingContactConsents = await prisma.marketingContactConsent.findMany()
     * 
     * // Get first 10 MarketingContactConsents
     * const marketingContactConsents = await prisma.marketingContactConsent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingContactConsentWithIdOnly = await prisma.marketingContactConsent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingContactConsentFindManyArgs>(args?: SelectSubset<T, MarketingContactConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingContactConsent.
     * @param {MarketingContactConsentCreateArgs} args - Arguments to create a MarketingContactConsent.
     * @example
     * // Create one MarketingContactConsent
     * const MarketingContactConsent = await prisma.marketingContactConsent.create({
     *   data: {
     *     // ... data to create a MarketingContactConsent
     *   }
     * })
     * 
     */
    create<T extends MarketingContactConsentCreateArgs>(args: SelectSubset<T, MarketingContactConsentCreateArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingContactConsents.
     * @param {MarketingContactConsentCreateManyArgs} args - Arguments to create many MarketingContactConsents.
     * @example
     * // Create many MarketingContactConsents
     * const marketingContactConsent = await prisma.marketingContactConsent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingContactConsentCreateManyArgs>(args?: SelectSubset<T, MarketingContactConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingContactConsents and returns the data saved in the database.
     * @param {MarketingContactConsentCreateManyAndReturnArgs} args - Arguments to create many MarketingContactConsents.
     * @example
     * // Create many MarketingContactConsents
     * const marketingContactConsent = await prisma.marketingContactConsent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingContactConsents and only return the `id`
     * const marketingContactConsentWithIdOnly = await prisma.marketingContactConsent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingContactConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingContactConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingContactConsent.
     * @param {MarketingContactConsentDeleteArgs} args - Arguments to delete one MarketingContactConsent.
     * @example
     * // Delete one MarketingContactConsent
     * const MarketingContactConsent = await prisma.marketingContactConsent.delete({
     *   where: {
     *     // ... filter to delete one MarketingContactConsent
     *   }
     * })
     * 
     */
    delete<T extends MarketingContactConsentDeleteArgs>(args: SelectSubset<T, MarketingContactConsentDeleteArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingContactConsent.
     * @param {MarketingContactConsentUpdateArgs} args - Arguments to update one MarketingContactConsent.
     * @example
     * // Update one MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingContactConsentUpdateArgs>(args: SelectSubset<T, MarketingContactConsentUpdateArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingContactConsents.
     * @param {MarketingContactConsentDeleteManyArgs} args - Arguments to filter MarketingContactConsents to delete.
     * @example
     * // Delete a few MarketingContactConsents
     * const { count } = await prisma.marketingContactConsent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingContactConsentDeleteManyArgs>(args?: SelectSubset<T, MarketingContactConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingContactConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingContactConsents
     * const marketingContactConsent = await prisma.marketingContactConsent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingContactConsentUpdateManyArgs>(args: SelectSubset<T, MarketingContactConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingContactConsents and returns the data updated in the database.
     * @param {MarketingContactConsentUpdateManyAndReturnArgs} args - Arguments to update many MarketingContactConsents.
     * @example
     * // Update many MarketingContactConsents
     * const marketingContactConsent = await prisma.marketingContactConsent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingContactConsents and only return the `id`
     * const marketingContactConsentWithIdOnly = await prisma.marketingContactConsent.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketingContactConsentUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingContactConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingContactConsent.
     * @param {MarketingContactConsentUpsertArgs} args - Arguments to update or create a MarketingContactConsent.
     * @example
     * // Update or create a MarketingContactConsent
     * const marketingContactConsent = await prisma.marketingContactConsent.upsert({
     *   create: {
     *     // ... data to create a MarketingContactConsent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingContactConsent we want to update
     *   }
     * })
     */
    upsert<T extends MarketingContactConsentUpsertArgs>(args: SelectSubset<T, MarketingContactConsentUpsertArgs<ExtArgs>>): Prisma__MarketingContactConsentClient<$Result.GetResult<Prisma.$MarketingContactConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingContactConsents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentCountArgs} args - Arguments to filter MarketingContactConsents to count.
     * @example
     * // Count the number of MarketingContactConsents
     * const count = await prisma.marketingContactConsent.count({
     *   where: {
     *     // ... the filter for the MarketingContactConsents we want to count
     *   }
     * })
    **/
    count<T extends MarketingContactConsentCountArgs>(
      args?: Subset<T, MarketingContactConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingContactConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingContactConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketingContactConsentAggregateArgs>(args: Subset<T, MarketingContactConsentAggregateArgs>): Prisma.PrismaPromise<GetMarketingContactConsentAggregateType<T>>

    /**
     * Group by MarketingContactConsent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingContactConsentGroupByArgs} args - Group by arguments.
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
      T extends MarketingContactConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingContactConsentGroupByArgs['orderBy'] }
        : { orderBy?: MarketingContactConsentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketingContactConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingContactConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingContactConsent model
   */
  readonly fields: MarketingContactConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingContactConsent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingContactConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketingContactConsent model
   */
  interface MarketingContactConsentFieldRefs {
    readonly id: FieldRef<"MarketingContactConsent", 'String'>
    readonly orgId: FieldRef<"MarketingContactConsent", 'String'>
    readonly contactId: FieldRef<"MarketingContactConsent", 'String'>
    readonly emailOptIn: FieldRef<"MarketingContactConsent", 'Boolean'>
    readonly smsOptIn: FieldRef<"MarketingContactConsent", 'Boolean'>
    readonly unsubscribed: FieldRef<"MarketingContactConsent", 'Boolean'>
    readonly updatedByUser: FieldRef<"MarketingContactConsent", 'String'>
    readonly updatedAt: FieldRef<"MarketingContactConsent", 'DateTime'>
    readonly createdAt: FieldRef<"MarketingContactConsent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingContactConsent findUnique
   */
  export type MarketingContactConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContactConsent to fetch.
     */
    where: MarketingContactConsentWhereUniqueInput
  }

  /**
   * MarketingContactConsent findUniqueOrThrow
   */
  export type MarketingContactConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContactConsent to fetch.
     */
    where: MarketingContactConsentWhereUniqueInput
  }

  /**
   * MarketingContactConsent findFirst
   */
  export type MarketingContactConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContactConsent to fetch.
     */
    where?: MarketingContactConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContactConsents to fetch.
     */
    orderBy?: MarketingContactConsentOrderByWithRelationInput | MarketingContactConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingContactConsents.
     */
    cursor?: MarketingContactConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContactConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContactConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingContactConsents.
     */
    distinct?: MarketingContactConsentScalarFieldEnum | MarketingContactConsentScalarFieldEnum[]
  }

  /**
   * MarketingContactConsent findFirstOrThrow
   */
  export type MarketingContactConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContactConsent to fetch.
     */
    where?: MarketingContactConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContactConsents to fetch.
     */
    orderBy?: MarketingContactConsentOrderByWithRelationInput | MarketingContactConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingContactConsents.
     */
    cursor?: MarketingContactConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContactConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContactConsents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingContactConsents.
     */
    distinct?: MarketingContactConsentScalarFieldEnum | MarketingContactConsentScalarFieldEnum[]
  }

  /**
   * MarketingContactConsent findMany
   */
  export type MarketingContactConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter, which MarketingContactConsents to fetch.
     */
    where?: MarketingContactConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingContactConsents to fetch.
     */
    orderBy?: MarketingContactConsentOrderByWithRelationInput | MarketingContactConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingContactConsents.
     */
    cursor?: MarketingContactConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingContactConsents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingContactConsents.
     */
    skip?: number
    distinct?: MarketingContactConsentScalarFieldEnum | MarketingContactConsentScalarFieldEnum[]
  }

  /**
   * MarketingContactConsent create
   */
  export type MarketingContactConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketingContactConsent.
     */
    data: XOR<MarketingContactConsentCreateInput, MarketingContactConsentUncheckedCreateInput>
  }

  /**
   * MarketingContactConsent createMany
   */
  export type MarketingContactConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingContactConsents.
     */
    data: MarketingContactConsentCreateManyInput | MarketingContactConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingContactConsent createManyAndReturn
   */
  export type MarketingContactConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingContactConsents.
     */
    data: MarketingContactConsentCreateManyInput | MarketingContactConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingContactConsent update
   */
  export type MarketingContactConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketingContactConsent.
     */
    data: XOR<MarketingContactConsentUpdateInput, MarketingContactConsentUncheckedUpdateInput>
    /**
     * Choose, which MarketingContactConsent to update.
     */
    where: MarketingContactConsentWhereUniqueInput
  }

  /**
   * MarketingContactConsent updateMany
   */
  export type MarketingContactConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingContactConsents.
     */
    data: XOR<MarketingContactConsentUpdateManyMutationInput, MarketingContactConsentUncheckedUpdateManyInput>
    /**
     * Filter which MarketingContactConsents to update
     */
    where?: MarketingContactConsentWhereInput
    /**
     * Limit how many MarketingContactConsents to update.
     */
    limit?: number
  }

  /**
   * MarketingContactConsent updateManyAndReturn
   */
  export type MarketingContactConsentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * The data used to update MarketingContactConsents.
     */
    data: XOR<MarketingContactConsentUpdateManyMutationInput, MarketingContactConsentUncheckedUpdateManyInput>
    /**
     * Filter which MarketingContactConsents to update
     */
    where?: MarketingContactConsentWhereInput
    /**
     * Limit how many MarketingContactConsents to update.
     */
    limit?: number
  }

  /**
   * MarketingContactConsent upsert
   */
  export type MarketingContactConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketingContactConsent to update in case it exists.
     */
    where: MarketingContactConsentWhereUniqueInput
    /**
     * In case the MarketingContactConsent found by the `where` argument doesn't exist, create a new MarketingContactConsent with this data.
     */
    create: XOR<MarketingContactConsentCreateInput, MarketingContactConsentUncheckedCreateInput>
    /**
     * In case the MarketingContactConsent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingContactConsentUpdateInput, MarketingContactConsentUncheckedUpdateInput>
  }

  /**
   * MarketingContactConsent delete
   */
  export type MarketingContactConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
    /**
     * Filter which MarketingContactConsent to delete.
     */
    where: MarketingContactConsentWhereUniqueInput
  }

  /**
   * MarketingContactConsent deleteMany
   */
  export type MarketingContactConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingContactConsents to delete
     */
    where?: MarketingContactConsentWhereInput
    /**
     * Limit how many MarketingContactConsents to delete.
     */
    limit?: number
  }

  /**
   * MarketingContactConsent without action
   */
  export type MarketingContactConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingContactConsent
     */
    select?: MarketingContactConsentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingContactConsent
     */
    omit?: MarketingContactConsentOmit<ExtArgs> | null
  }


  /**
   * Model MarketingCampaignTemplateUsage
   */

  export type AggregateMarketingCampaignTemplateUsage = {
    _count: MarketingCampaignTemplateUsageCountAggregateOutputType | null
    _min: MarketingCampaignTemplateUsageMinAggregateOutputType | null
    _max: MarketingCampaignTemplateUsageMaxAggregateOutputType | null
  }

  export type MarketingCampaignTemplateUsageMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    campaignId: string | null
    templateId: string | null
    templateVersionId: string | null
    templateNameSnapshot: string | null
    subjectSnapshot: string | null
    previewTextSnapshot: string | null
    contentSnapshot: string | null
    appliedByUserId: string | null
    appliedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingCampaignTemplateUsageMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    campaignId: string | null
    templateId: string | null
    templateVersionId: string | null
    templateNameSnapshot: string | null
    subjectSnapshot: string | null
    previewTextSnapshot: string | null
    contentSnapshot: string | null
    appliedByUserId: string | null
    appliedAt: Date | null
    createdAt: Date | null
  }

  export type MarketingCampaignTemplateUsageCountAggregateOutputType = {
    id: number
    orgId: number
    campaignId: number
    templateId: number
    templateVersionId: number
    templateNameSnapshot: number
    subjectSnapshot: number
    previewTextSnapshot: number
    contentSnapshot: number
    appliedByUserId: number
    appliedAt: number
    createdAt: number
    _all: number
  }


  export type MarketingCampaignTemplateUsageMinAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    templateId?: true
    templateVersionId?: true
    templateNameSnapshot?: true
    subjectSnapshot?: true
    previewTextSnapshot?: true
    contentSnapshot?: true
    appliedByUserId?: true
    appliedAt?: true
    createdAt?: true
  }

  export type MarketingCampaignTemplateUsageMaxAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    templateId?: true
    templateVersionId?: true
    templateNameSnapshot?: true
    subjectSnapshot?: true
    previewTextSnapshot?: true
    contentSnapshot?: true
    appliedByUserId?: true
    appliedAt?: true
    createdAt?: true
  }

  export type MarketingCampaignTemplateUsageCountAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    templateId?: true
    templateVersionId?: true
    templateNameSnapshot?: true
    subjectSnapshot?: true
    previewTextSnapshot?: true
    contentSnapshot?: true
    appliedByUserId?: true
    appliedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MarketingCampaignTemplateUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingCampaignTemplateUsage to aggregate.
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingCampaignTemplateUsages to fetch.
     */
    orderBy?: MarketingCampaignTemplateUsageOrderByWithRelationInput | MarketingCampaignTemplateUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingCampaignTemplateUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingCampaignTemplateUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingCampaignTemplateUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingCampaignTemplateUsages
    **/
    _count?: true | MarketingCampaignTemplateUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingCampaignTemplateUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingCampaignTemplateUsageMaxAggregateInputType
  }

  export type GetMarketingCampaignTemplateUsageAggregateType<T extends MarketingCampaignTemplateUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingCampaignTemplateUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingCampaignTemplateUsage[P]>
      : GetScalarType<T[P], AggregateMarketingCampaignTemplateUsage[P]>
  }




  export type MarketingCampaignTemplateUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingCampaignTemplateUsageWhereInput
    orderBy?: MarketingCampaignTemplateUsageOrderByWithAggregationInput | MarketingCampaignTemplateUsageOrderByWithAggregationInput[]
    by: MarketingCampaignTemplateUsageScalarFieldEnum[] | MarketingCampaignTemplateUsageScalarFieldEnum
    having?: MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingCampaignTemplateUsageCountAggregateInputType | true
    _min?: MarketingCampaignTemplateUsageMinAggregateInputType
    _max?: MarketingCampaignTemplateUsageMaxAggregateInputType
  }

  export type MarketingCampaignTemplateUsageGroupByOutputType = {
    id: string
    orgId: string
    campaignId: string
    templateId: string
    templateVersionId: string | null
    templateNameSnapshot: string
    subjectSnapshot: string | null
    previewTextSnapshot: string | null
    contentSnapshot: string | null
    appliedByUserId: string | null
    appliedAt: Date
    createdAt: Date
    _count: MarketingCampaignTemplateUsageCountAggregateOutputType | null
    _min: MarketingCampaignTemplateUsageMinAggregateOutputType | null
    _max: MarketingCampaignTemplateUsageMaxAggregateOutputType | null
  }

  type GetMarketingCampaignTemplateUsageGroupByPayload<T extends MarketingCampaignTemplateUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingCampaignTemplateUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingCampaignTemplateUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingCampaignTemplateUsageGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingCampaignTemplateUsageGroupByOutputType[P]>
        }
      >
    >


  export type MarketingCampaignTemplateUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    templateId?: boolean
    templateVersionId?: boolean
    templateNameSnapshot?: boolean
    subjectSnapshot?: boolean
    previewTextSnapshot?: boolean
    contentSnapshot?: boolean
    appliedByUserId?: boolean
    appliedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingCampaignTemplateUsage"]>

  export type MarketingCampaignTemplateUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    templateId?: boolean
    templateVersionId?: boolean
    templateNameSnapshot?: boolean
    subjectSnapshot?: boolean
    previewTextSnapshot?: boolean
    contentSnapshot?: boolean
    appliedByUserId?: boolean
    appliedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingCampaignTemplateUsage"]>

  export type MarketingCampaignTemplateUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    templateId?: boolean
    templateVersionId?: boolean
    templateNameSnapshot?: boolean
    subjectSnapshot?: boolean
    previewTextSnapshot?: boolean
    contentSnapshot?: boolean
    appliedByUserId?: boolean
    appliedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingCampaignTemplateUsage"]>

  export type MarketingCampaignTemplateUsageSelectScalar = {
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    templateId?: boolean
    templateVersionId?: boolean
    templateNameSnapshot?: boolean
    subjectSnapshot?: boolean
    previewTextSnapshot?: boolean
    contentSnapshot?: boolean
    appliedByUserId?: boolean
    appliedAt?: boolean
    createdAt?: boolean
  }

  export type MarketingCampaignTemplateUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "campaignId" | "templateId" | "templateVersionId" | "templateNameSnapshot" | "subjectSnapshot" | "previewTextSnapshot" | "contentSnapshot" | "appliedByUserId" | "appliedAt" | "createdAt", ExtArgs["result"]["marketingCampaignTemplateUsage"]>

  export type $MarketingCampaignTemplateUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingCampaignTemplateUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      campaignId: string
      templateId: string
      templateVersionId: string | null
      templateNameSnapshot: string
      subjectSnapshot: string | null
      previewTextSnapshot: string | null
      contentSnapshot: string | null
      appliedByUserId: string | null
      appliedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["marketingCampaignTemplateUsage"]>
    composites: {}
  }

  type MarketingCampaignTemplateUsageGetPayload<S extends boolean | null | undefined | MarketingCampaignTemplateUsageDefaultArgs> = $Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload, S>

  type MarketingCampaignTemplateUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingCampaignTemplateUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingCampaignTemplateUsageCountAggregateInputType | true
    }

  export interface MarketingCampaignTemplateUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingCampaignTemplateUsage'], meta: { name: 'MarketingCampaignTemplateUsage' } }
    /**
     * Find zero or one MarketingCampaignTemplateUsage that matches the filter.
     * @param {MarketingCampaignTemplateUsageFindUniqueArgs} args - Arguments to find a MarketingCampaignTemplateUsage
     * @example
     * // Get one MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingCampaignTemplateUsageFindUniqueArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageFindUniqueArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingCampaignTemplateUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingCampaignTemplateUsageFindUniqueOrThrowArgs} args - Arguments to find a MarketingCampaignTemplateUsage
     * @example
     * // Get one MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingCampaignTemplateUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingCampaignTemplateUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageFindFirstArgs} args - Arguments to find a MarketingCampaignTemplateUsage
     * @example
     * // Get one MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingCampaignTemplateUsageFindFirstArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageFindFirstArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingCampaignTemplateUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageFindFirstOrThrowArgs} args - Arguments to find a MarketingCampaignTemplateUsage
     * @example
     * // Get one MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingCampaignTemplateUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingCampaignTemplateUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsages = await prisma.marketingCampaignTemplateUsage.findMany()
     * 
     * // Get first 10 MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsages = await prisma.marketingCampaignTemplateUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingCampaignTemplateUsageWithIdOnly = await prisma.marketingCampaignTemplateUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingCampaignTemplateUsageFindManyArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingCampaignTemplateUsage.
     * @param {MarketingCampaignTemplateUsageCreateArgs} args - Arguments to create a MarketingCampaignTemplateUsage.
     * @example
     * // Create one MarketingCampaignTemplateUsage
     * const MarketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.create({
     *   data: {
     *     // ... data to create a MarketingCampaignTemplateUsage
     *   }
     * })
     * 
     */
    create<T extends MarketingCampaignTemplateUsageCreateArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageCreateArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingCampaignTemplateUsages.
     * @param {MarketingCampaignTemplateUsageCreateManyArgs} args - Arguments to create many MarketingCampaignTemplateUsages.
     * @example
     * // Create many MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingCampaignTemplateUsageCreateManyArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingCampaignTemplateUsages and returns the data saved in the database.
     * @param {MarketingCampaignTemplateUsageCreateManyAndReturnArgs} args - Arguments to create many MarketingCampaignTemplateUsages.
     * @example
     * // Create many MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingCampaignTemplateUsages and only return the `id`
     * const marketingCampaignTemplateUsageWithIdOnly = await prisma.marketingCampaignTemplateUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingCampaignTemplateUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingCampaignTemplateUsage.
     * @param {MarketingCampaignTemplateUsageDeleteArgs} args - Arguments to delete one MarketingCampaignTemplateUsage.
     * @example
     * // Delete one MarketingCampaignTemplateUsage
     * const MarketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.delete({
     *   where: {
     *     // ... filter to delete one MarketingCampaignTemplateUsage
     *   }
     * })
     * 
     */
    delete<T extends MarketingCampaignTemplateUsageDeleteArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageDeleteArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingCampaignTemplateUsage.
     * @param {MarketingCampaignTemplateUsageUpdateArgs} args - Arguments to update one MarketingCampaignTemplateUsage.
     * @example
     * // Update one MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingCampaignTemplateUsageUpdateArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageUpdateArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingCampaignTemplateUsages.
     * @param {MarketingCampaignTemplateUsageDeleteManyArgs} args - Arguments to filter MarketingCampaignTemplateUsages to delete.
     * @example
     * // Delete a few MarketingCampaignTemplateUsages
     * const { count } = await prisma.marketingCampaignTemplateUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingCampaignTemplateUsageDeleteManyArgs>(args?: SelectSubset<T, MarketingCampaignTemplateUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingCampaignTemplateUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingCampaignTemplateUsageUpdateManyArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingCampaignTemplateUsages and returns the data updated in the database.
     * @param {MarketingCampaignTemplateUsageUpdateManyAndReturnArgs} args - Arguments to update many MarketingCampaignTemplateUsages.
     * @example
     * // Update many MarketingCampaignTemplateUsages
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingCampaignTemplateUsages and only return the `id`
     * const marketingCampaignTemplateUsageWithIdOnly = await prisma.marketingCampaignTemplateUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketingCampaignTemplateUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingCampaignTemplateUsage.
     * @param {MarketingCampaignTemplateUsageUpsertArgs} args - Arguments to update or create a MarketingCampaignTemplateUsage.
     * @example
     * // Update or create a MarketingCampaignTemplateUsage
     * const marketingCampaignTemplateUsage = await prisma.marketingCampaignTemplateUsage.upsert({
     *   create: {
     *     // ... data to create a MarketingCampaignTemplateUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingCampaignTemplateUsage we want to update
     *   }
     * })
     */
    upsert<T extends MarketingCampaignTemplateUsageUpsertArgs>(args: SelectSubset<T, MarketingCampaignTemplateUsageUpsertArgs<ExtArgs>>): Prisma__MarketingCampaignTemplateUsageClient<$Result.GetResult<Prisma.$MarketingCampaignTemplateUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingCampaignTemplateUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageCountArgs} args - Arguments to filter MarketingCampaignTemplateUsages to count.
     * @example
     * // Count the number of MarketingCampaignTemplateUsages
     * const count = await prisma.marketingCampaignTemplateUsage.count({
     *   where: {
     *     // ... the filter for the MarketingCampaignTemplateUsages we want to count
     *   }
     * })
    **/
    count<T extends MarketingCampaignTemplateUsageCountArgs>(
      args?: Subset<T, MarketingCampaignTemplateUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingCampaignTemplateUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingCampaignTemplateUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketingCampaignTemplateUsageAggregateArgs>(args: Subset<T, MarketingCampaignTemplateUsageAggregateArgs>): Prisma.PrismaPromise<GetMarketingCampaignTemplateUsageAggregateType<T>>

    /**
     * Group by MarketingCampaignTemplateUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingCampaignTemplateUsageGroupByArgs} args - Group by arguments.
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
      T extends MarketingCampaignTemplateUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingCampaignTemplateUsageGroupByArgs['orderBy'] }
        : { orderBy?: MarketingCampaignTemplateUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketingCampaignTemplateUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingCampaignTemplateUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingCampaignTemplateUsage model
   */
  readonly fields: MarketingCampaignTemplateUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingCampaignTemplateUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingCampaignTemplateUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketingCampaignTemplateUsage model
   */
  interface MarketingCampaignTemplateUsageFieldRefs {
    readonly id: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly orgId: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly campaignId: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly templateId: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly templateVersionId: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly templateNameSnapshot: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly subjectSnapshot: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly previewTextSnapshot: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly contentSnapshot: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly appliedByUserId: FieldRef<"MarketingCampaignTemplateUsage", 'String'>
    readonly appliedAt: FieldRef<"MarketingCampaignTemplateUsage", 'DateTime'>
    readonly createdAt: FieldRef<"MarketingCampaignTemplateUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingCampaignTemplateUsage findUnique
   */
  export type MarketingCampaignTemplateUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter, which MarketingCampaignTemplateUsage to fetch.
     */
    where: MarketingCampaignTemplateUsageWhereUniqueInput
  }

  /**
   * MarketingCampaignTemplateUsage findUniqueOrThrow
   */
  export type MarketingCampaignTemplateUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter, which MarketingCampaignTemplateUsage to fetch.
     */
    where: MarketingCampaignTemplateUsageWhereUniqueInput
  }

  /**
   * MarketingCampaignTemplateUsage findFirst
   */
  export type MarketingCampaignTemplateUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter, which MarketingCampaignTemplateUsage to fetch.
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingCampaignTemplateUsages to fetch.
     */
    orderBy?: MarketingCampaignTemplateUsageOrderByWithRelationInput | MarketingCampaignTemplateUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingCampaignTemplateUsages.
     */
    cursor?: MarketingCampaignTemplateUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingCampaignTemplateUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingCampaignTemplateUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingCampaignTemplateUsages.
     */
    distinct?: MarketingCampaignTemplateUsageScalarFieldEnum | MarketingCampaignTemplateUsageScalarFieldEnum[]
  }

  /**
   * MarketingCampaignTemplateUsage findFirstOrThrow
   */
  export type MarketingCampaignTemplateUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter, which MarketingCampaignTemplateUsage to fetch.
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingCampaignTemplateUsages to fetch.
     */
    orderBy?: MarketingCampaignTemplateUsageOrderByWithRelationInput | MarketingCampaignTemplateUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingCampaignTemplateUsages.
     */
    cursor?: MarketingCampaignTemplateUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingCampaignTemplateUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingCampaignTemplateUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingCampaignTemplateUsages.
     */
    distinct?: MarketingCampaignTemplateUsageScalarFieldEnum | MarketingCampaignTemplateUsageScalarFieldEnum[]
  }

  /**
   * MarketingCampaignTemplateUsage findMany
   */
  export type MarketingCampaignTemplateUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter, which MarketingCampaignTemplateUsages to fetch.
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingCampaignTemplateUsages to fetch.
     */
    orderBy?: MarketingCampaignTemplateUsageOrderByWithRelationInput | MarketingCampaignTemplateUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingCampaignTemplateUsages.
     */
    cursor?: MarketingCampaignTemplateUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingCampaignTemplateUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingCampaignTemplateUsages.
     */
    skip?: number
    distinct?: MarketingCampaignTemplateUsageScalarFieldEnum | MarketingCampaignTemplateUsageScalarFieldEnum[]
  }

  /**
   * MarketingCampaignTemplateUsage create
   */
  export type MarketingCampaignTemplateUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketingCampaignTemplateUsage.
     */
    data: XOR<MarketingCampaignTemplateUsageCreateInput, MarketingCampaignTemplateUsageUncheckedCreateInput>
  }

  /**
   * MarketingCampaignTemplateUsage createMany
   */
  export type MarketingCampaignTemplateUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingCampaignTemplateUsages.
     */
    data: MarketingCampaignTemplateUsageCreateManyInput | MarketingCampaignTemplateUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingCampaignTemplateUsage createManyAndReturn
   */
  export type MarketingCampaignTemplateUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingCampaignTemplateUsages.
     */
    data: MarketingCampaignTemplateUsageCreateManyInput | MarketingCampaignTemplateUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingCampaignTemplateUsage update
   */
  export type MarketingCampaignTemplateUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketingCampaignTemplateUsage.
     */
    data: XOR<MarketingCampaignTemplateUsageUpdateInput, MarketingCampaignTemplateUsageUncheckedUpdateInput>
    /**
     * Choose, which MarketingCampaignTemplateUsage to update.
     */
    where: MarketingCampaignTemplateUsageWhereUniqueInput
  }

  /**
   * MarketingCampaignTemplateUsage updateMany
   */
  export type MarketingCampaignTemplateUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingCampaignTemplateUsages.
     */
    data: XOR<MarketingCampaignTemplateUsageUpdateManyMutationInput, MarketingCampaignTemplateUsageUncheckedUpdateManyInput>
    /**
     * Filter which MarketingCampaignTemplateUsages to update
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * Limit how many MarketingCampaignTemplateUsages to update.
     */
    limit?: number
  }

  /**
   * MarketingCampaignTemplateUsage updateManyAndReturn
   */
  export type MarketingCampaignTemplateUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * The data used to update MarketingCampaignTemplateUsages.
     */
    data: XOR<MarketingCampaignTemplateUsageUpdateManyMutationInput, MarketingCampaignTemplateUsageUncheckedUpdateManyInput>
    /**
     * Filter which MarketingCampaignTemplateUsages to update
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * Limit how many MarketingCampaignTemplateUsages to update.
     */
    limit?: number
  }

  /**
   * MarketingCampaignTemplateUsage upsert
   */
  export type MarketingCampaignTemplateUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketingCampaignTemplateUsage to update in case it exists.
     */
    where: MarketingCampaignTemplateUsageWhereUniqueInput
    /**
     * In case the MarketingCampaignTemplateUsage found by the `where` argument doesn't exist, create a new MarketingCampaignTemplateUsage with this data.
     */
    create: XOR<MarketingCampaignTemplateUsageCreateInput, MarketingCampaignTemplateUsageUncheckedCreateInput>
    /**
     * In case the MarketingCampaignTemplateUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingCampaignTemplateUsageUpdateInput, MarketingCampaignTemplateUsageUncheckedUpdateInput>
  }

  /**
   * MarketingCampaignTemplateUsage delete
   */
  export type MarketingCampaignTemplateUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
    /**
     * Filter which MarketingCampaignTemplateUsage to delete.
     */
    where: MarketingCampaignTemplateUsageWhereUniqueInput
  }

  /**
   * MarketingCampaignTemplateUsage deleteMany
   */
  export type MarketingCampaignTemplateUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingCampaignTemplateUsages to delete
     */
    where?: MarketingCampaignTemplateUsageWhereInput
    /**
     * Limit how many MarketingCampaignTemplateUsages to delete.
     */
    limit?: number
  }

  /**
   * MarketingCampaignTemplateUsage without action
   */
  export type MarketingCampaignTemplateUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingCampaignTemplateUsage
     */
    select?: MarketingCampaignTemplateUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingCampaignTemplateUsage
     */
    omit?: MarketingCampaignTemplateUsageOmit<ExtArgs> | null
  }


  /**
   * Model MarketingDeliveryEvent
   */

  export type AggregateMarketingDeliveryEvent = {
    _count: MarketingDeliveryEventCountAggregateOutputType | null
    _min: MarketingDeliveryEventMinAggregateOutputType | null
    _max: MarketingDeliveryEventMaxAggregateOutputType | null
  }

  export type MarketingDeliveryEventMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    campaignId: string | null
    recipientId: string | null
    recipientEmail: string | null
    recipientPhone: string | null
    provider: string | null
    providerEventId: string | null
    providerMessageId: string | null
    eventType: string | null
    url: string | null
    reason: string | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type MarketingDeliveryEventMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    campaignId: string | null
    recipientId: string | null
    recipientEmail: string | null
    recipientPhone: string | null
    provider: string | null
    providerEventId: string | null
    providerMessageId: string | null
    eventType: string | null
    url: string | null
    reason: string | null
    occurredAt: Date | null
    createdAt: Date | null
  }

  export type MarketingDeliveryEventCountAggregateOutputType = {
    id: number
    orgId: number
    campaignId: number
    recipientId: number
    recipientEmail: number
    recipientPhone: number
    provider: number
    providerEventId: number
    providerMessageId: number
    eventType: number
    url: number
    reason: number
    rawPayload: number
    occurredAt: number
    createdAt: number
    _all: number
  }


  export type MarketingDeliveryEventMinAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    recipientId?: true
    recipientEmail?: true
    recipientPhone?: true
    provider?: true
    providerEventId?: true
    providerMessageId?: true
    eventType?: true
    url?: true
    reason?: true
    occurredAt?: true
    createdAt?: true
  }

  export type MarketingDeliveryEventMaxAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    recipientId?: true
    recipientEmail?: true
    recipientPhone?: true
    provider?: true
    providerEventId?: true
    providerMessageId?: true
    eventType?: true
    url?: true
    reason?: true
    occurredAt?: true
    createdAt?: true
  }

  export type MarketingDeliveryEventCountAggregateInputType = {
    id?: true
    orgId?: true
    campaignId?: true
    recipientId?: true
    recipientEmail?: true
    recipientPhone?: true
    provider?: true
    providerEventId?: true
    providerMessageId?: true
    eventType?: true
    url?: true
    reason?: true
    rawPayload?: true
    occurredAt?: true
    createdAt?: true
    _all?: true
  }

  export type MarketingDeliveryEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingDeliveryEvent to aggregate.
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingDeliveryEvents to fetch.
     */
    orderBy?: MarketingDeliveryEventOrderByWithRelationInput | MarketingDeliveryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketingDeliveryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingDeliveryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingDeliveryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketingDeliveryEvents
    **/
    _count?: true | MarketingDeliveryEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketingDeliveryEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketingDeliveryEventMaxAggregateInputType
  }

  export type GetMarketingDeliveryEventAggregateType<T extends MarketingDeliveryEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketingDeliveryEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketingDeliveryEvent[P]>
      : GetScalarType<T[P], AggregateMarketingDeliveryEvent[P]>
  }




  export type MarketingDeliveryEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketingDeliveryEventWhereInput
    orderBy?: MarketingDeliveryEventOrderByWithAggregationInput | MarketingDeliveryEventOrderByWithAggregationInput[]
    by: MarketingDeliveryEventScalarFieldEnum[] | MarketingDeliveryEventScalarFieldEnum
    having?: MarketingDeliveryEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketingDeliveryEventCountAggregateInputType | true
    _min?: MarketingDeliveryEventMinAggregateInputType
    _max?: MarketingDeliveryEventMaxAggregateInputType
  }

  export type MarketingDeliveryEventGroupByOutputType = {
    id: string
    orgId: string
    campaignId: string
    recipientId: string | null
    recipientEmail: string | null
    recipientPhone: string | null
    provider: string | null
    providerEventId: string | null
    providerMessageId: string | null
    eventType: string
    url: string | null
    reason: string | null
    rawPayload: JsonValue | null
    occurredAt: Date
    createdAt: Date
    _count: MarketingDeliveryEventCountAggregateOutputType | null
    _min: MarketingDeliveryEventMinAggregateOutputType | null
    _max: MarketingDeliveryEventMaxAggregateOutputType | null
  }

  type GetMarketingDeliveryEventGroupByPayload<T extends MarketingDeliveryEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketingDeliveryEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketingDeliveryEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketingDeliveryEventGroupByOutputType[P]>
            : GetScalarType<T[P], MarketingDeliveryEventGroupByOutputType[P]>
        }
      >
    >


  export type MarketingDeliveryEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    recipientId?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    provider?: boolean
    providerEventId?: boolean
    providerMessageId?: boolean
    eventType?: boolean
    url?: boolean
    reason?: boolean
    rawPayload?: boolean
    occurredAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingDeliveryEvent"]>

  export type MarketingDeliveryEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    recipientId?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    provider?: boolean
    providerEventId?: boolean
    providerMessageId?: boolean
    eventType?: boolean
    url?: boolean
    reason?: boolean
    rawPayload?: boolean
    occurredAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingDeliveryEvent"]>

  export type MarketingDeliveryEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    recipientId?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    provider?: boolean
    providerEventId?: boolean
    providerMessageId?: boolean
    eventType?: boolean
    url?: boolean
    reason?: boolean
    rawPayload?: boolean
    occurredAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketingDeliveryEvent"]>

  export type MarketingDeliveryEventSelectScalar = {
    id?: boolean
    orgId?: boolean
    campaignId?: boolean
    recipientId?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    provider?: boolean
    providerEventId?: boolean
    providerMessageId?: boolean
    eventType?: boolean
    url?: boolean
    reason?: boolean
    rawPayload?: boolean
    occurredAt?: boolean
    createdAt?: boolean
  }

  export type MarketingDeliveryEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "campaignId" | "recipientId" | "recipientEmail" | "recipientPhone" | "provider" | "providerEventId" | "providerMessageId" | "eventType" | "url" | "reason" | "rawPayload" | "occurredAt" | "createdAt", ExtArgs["result"]["marketingDeliveryEvent"]>

  export type $MarketingDeliveryEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketingDeliveryEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      campaignId: string
      recipientId: string | null
      recipientEmail: string | null
      recipientPhone: string | null
      provider: string | null
      providerEventId: string | null
      providerMessageId: string | null
      eventType: string
      url: string | null
      reason: string | null
      rawPayload: Prisma.JsonValue | null
      occurredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["marketingDeliveryEvent"]>
    composites: {}
  }

  type MarketingDeliveryEventGetPayload<S extends boolean | null | undefined | MarketingDeliveryEventDefaultArgs> = $Result.GetResult<Prisma.$MarketingDeliveryEventPayload, S>

  type MarketingDeliveryEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketingDeliveryEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketingDeliveryEventCountAggregateInputType | true
    }

  export interface MarketingDeliveryEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketingDeliveryEvent'], meta: { name: 'MarketingDeliveryEvent' } }
    /**
     * Find zero or one MarketingDeliveryEvent that matches the filter.
     * @param {MarketingDeliveryEventFindUniqueArgs} args - Arguments to find a MarketingDeliveryEvent
     * @example
     * // Get one MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketingDeliveryEventFindUniqueArgs>(args: SelectSubset<T, MarketingDeliveryEventFindUniqueArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketingDeliveryEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketingDeliveryEventFindUniqueOrThrowArgs} args - Arguments to find a MarketingDeliveryEvent
     * @example
     * // Get one MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketingDeliveryEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketingDeliveryEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingDeliveryEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventFindFirstArgs} args - Arguments to find a MarketingDeliveryEvent
     * @example
     * // Get one MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketingDeliveryEventFindFirstArgs>(args?: SelectSubset<T, MarketingDeliveryEventFindFirstArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketingDeliveryEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventFindFirstOrThrowArgs} args - Arguments to find a MarketingDeliveryEvent
     * @example
     * // Get one MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketingDeliveryEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketingDeliveryEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketingDeliveryEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketingDeliveryEvents
     * const marketingDeliveryEvents = await prisma.marketingDeliveryEvent.findMany()
     * 
     * // Get first 10 MarketingDeliveryEvents
     * const marketingDeliveryEvents = await prisma.marketingDeliveryEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketingDeliveryEventWithIdOnly = await prisma.marketingDeliveryEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketingDeliveryEventFindManyArgs>(args?: SelectSubset<T, MarketingDeliveryEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketingDeliveryEvent.
     * @param {MarketingDeliveryEventCreateArgs} args - Arguments to create a MarketingDeliveryEvent.
     * @example
     * // Create one MarketingDeliveryEvent
     * const MarketingDeliveryEvent = await prisma.marketingDeliveryEvent.create({
     *   data: {
     *     // ... data to create a MarketingDeliveryEvent
     *   }
     * })
     * 
     */
    create<T extends MarketingDeliveryEventCreateArgs>(args: SelectSubset<T, MarketingDeliveryEventCreateArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketingDeliveryEvents.
     * @param {MarketingDeliveryEventCreateManyArgs} args - Arguments to create many MarketingDeliveryEvents.
     * @example
     * // Create many MarketingDeliveryEvents
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketingDeliveryEventCreateManyArgs>(args?: SelectSubset<T, MarketingDeliveryEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketingDeliveryEvents and returns the data saved in the database.
     * @param {MarketingDeliveryEventCreateManyAndReturnArgs} args - Arguments to create many MarketingDeliveryEvents.
     * @example
     * // Create many MarketingDeliveryEvents
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketingDeliveryEvents and only return the `id`
     * const marketingDeliveryEventWithIdOnly = await prisma.marketingDeliveryEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketingDeliveryEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketingDeliveryEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketingDeliveryEvent.
     * @param {MarketingDeliveryEventDeleteArgs} args - Arguments to delete one MarketingDeliveryEvent.
     * @example
     * // Delete one MarketingDeliveryEvent
     * const MarketingDeliveryEvent = await prisma.marketingDeliveryEvent.delete({
     *   where: {
     *     // ... filter to delete one MarketingDeliveryEvent
     *   }
     * })
     * 
     */
    delete<T extends MarketingDeliveryEventDeleteArgs>(args: SelectSubset<T, MarketingDeliveryEventDeleteArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketingDeliveryEvent.
     * @param {MarketingDeliveryEventUpdateArgs} args - Arguments to update one MarketingDeliveryEvent.
     * @example
     * // Update one MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketingDeliveryEventUpdateArgs>(args: SelectSubset<T, MarketingDeliveryEventUpdateArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketingDeliveryEvents.
     * @param {MarketingDeliveryEventDeleteManyArgs} args - Arguments to filter MarketingDeliveryEvents to delete.
     * @example
     * // Delete a few MarketingDeliveryEvents
     * const { count } = await prisma.marketingDeliveryEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketingDeliveryEventDeleteManyArgs>(args?: SelectSubset<T, MarketingDeliveryEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingDeliveryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketingDeliveryEvents
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketingDeliveryEventUpdateManyArgs>(args: SelectSubset<T, MarketingDeliveryEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketingDeliveryEvents and returns the data updated in the database.
     * @param {MarketingDeliveryEventUpdateManyAndReturnArgs} args - Arguments to update many MarketingDeliveryEvents.
     * @example
     * // Update many MarketingDeliveryEvents
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketingDeliveryEvents and only return the `id`
     * const marketingDeliveryEventWithIdOnly = await prisma.marketingDeliveryEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketingDeliveryEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketingDeliveryEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketingDeliveryEvent.
     * @param {MarketingDeliveryEventUpsertArgs} args - Arguments to update or create a MarketingDeliveryEvent.
     * @example
     * // Update or create a MarketingDeliveryEvent
     * const marketingDeliveryEvent = await prisma.marketingDeliveryEvent.upsert({
     *   create: {
     *     // ... data to create a MarketingDeliveryEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketingDeliveryEvent we want to update
     *   }
     * })
     */
    upsert<T extends MarketingDeliveryEventUpsertArgs>(args: SelectSubset<T, MarketingDeliveryEventUpsertArgs<ExtArgs>>): Prisma__MarketingDeliveryEventClient<$Result.GetResult<Prisma.$MarketingDeliveryEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketingDeliveryEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventCountArgs} args - Arguments to filter MarketingDeliveryEvents to count.
     * @example
     * // Count the number of MarketingDeliveryEvents
     * const count = await prisma.marketingDeliveryEvent.count({
     *   where: {
     *     // ... the filter for the MarketingDeliveryEvents we want to count
     *   }
     * })
    **/
    count<T extends MarketingDeliveryEventCountArgs>(
      args?: Subset<T, MarketingDeliveryEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketingDeliveryEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketingDeliveryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketingDeliveryEventAggregateArgs>(args: Subset<T, MarketingDeliveryEventAggregateArgs>): Prisma.PrismaPromise<GetMarketingDeliveryEventAggregateType<T>>

    /**
     * Group by MarketingDeliveryEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketingDeliveryEventGroupByArgs} args - Group by arguments.
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
      T extends MarketingDeliveryEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketingDeliveryEventGroupByArgs['orderBy'] }
        : { orderBy?: MarketingDeliveryEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketingDeliveryEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingDeliveryEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketingDeliveryEvent model
   */
  readonly fields: MarketingDeliveryEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketingDeliveryEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketingDeliveryEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarketingDeliveryEvent model
   */
  interface MarketingDeliveryEventFieldRefs {
    readonly id: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly orgId: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly campaignId: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly recipientId: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly recipientEmail: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly recipientPhone: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly provider: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly providerEventId: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly providerMessageId: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly eventType: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly url: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly reason: FieldRef<"MarketingDeliveryEvent", 'String'>
    readonly rawPayload: FieldRef<"MarketingDeliveryEvent", 'Json'>
    readonly occurredAt: FieldRef<"MarketingDeliveryEvent", 'DateTime'>
    readonly createdAt: FieldRef<"MarketingDeliveryEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketingDeliveryEvent findUnique
   */
  export type MarketingDeliveryEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter, which MarketingDeliveryEvent to fetch.
     */
    where: MarketingDeliveryEventWhereUniqueInput
  }

  /**
   * MarketingDeliveryEvent findUniqueOrThrow
   */
  export type MarketingDeliveryEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter, which MarketingDeliveryEvent to fetch.
     */
    where: MarketingDeliveryEventWhereUniqueInput
  }

  /**
   * MarketingDeliveryEvent findFirst
   */
  export type MarketingDeliveryEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter, which MarketingDeliveryEvent to fetch.
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingDeliveryEvents to fetch.
     */
    orderBy?: MarketingDeliveryEventOrderByWithRelationInput | MarketingDeliveryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingDeliveryEvents.
     */
    cursor?: MarketingDeliveryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingDeliveryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingDeliveryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingDeliveryEvents.
     */
    distinct?: MarketingDeliveryEventScalarFieldEnum | MarketingDeliveryEventScalarFieldEnum[]
  }

  /**
   * MarketingDeliveryEvent findFirstOrThrow
   */
  export type MarketingDeliveryEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter, which MarketingDeliveryEvent to fetch.
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingDeliveryEvents to fetch.
     */
    orderBy?: MarketingDeliveryEventOrderByWithRelationInput | MarketingDeliveryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketingDeliveryEvents.
     */
    cursor?: MarketingDeliveryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingDeliveryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingDeliveryEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketingDeliveryEvents.
     */
    distinct?: MarketingDeliveryEventScalarFieldEnum | MarketingDeliveryEventScalarFieldEnum[]
  }

  /**
   * MarketingDeliveryEvent findMany
   */
  export type MarketingDeliveryEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter, which MarketingDeliveryEvents to fetch.
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketingDeliveryEvents to fetch.
     */
    orderBy?: MarketingDeliveryEventOrderByWithRelationInput | MarketingDeliveryEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketingDeliveryEvents.
     */
    cursor?: MarketingDeliveryEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketingDeliveryEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketingDeliveryEvents.
     */
    skip?: number
    distinct?: MarketingDeliveryEventScalarFieldEnum | MarketingDeliveryEventScalarFieldEnum[]
  }

  /**
   * MarketingDeliveryEvent create
   */
  export type MarketingDeliveryEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * The data needed to create a MarketingDeliveryEvent.
     */
    data: XOR<MarketingDeliveryEventCreateInput, MarketingDeliveryEventUncheckedCreateInput>
  }

  /**
   * MarketingDeliveryEvent createMany
   */
  export type MarketingDeliveryEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketingDeliveryEvents.
     */
    data: MarketingDeliveryEventCreateManyInput | MarketingDeliveryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingDeliveryEvent createManyAndReturn
   */
  export type MarketingDeliveryEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * The data used to create many MarketingDeliveryEvents.
     */
    data: MarketingDeliveryEventCreateManyInput | MarketingDeliveryEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketingDeliveryEvent update
   */
  export type MarketingDeliveryEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * The data needed to update a MarketingDeliveryEvent.
     */
    data: XOR<MarketingDeliveryEventUpdateInput, MarketingDeliveryEventUncheckedUpdateInput>
    /**
     * Choose, which MarketingDeliveryEvent to update.
     */
    where: MarketingDeliveryEventWhereUniqueInput
  }

  /**
   * MarketingDeliveryEvent updateMany
   */
  export type MarketingDeliveryEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketingDeliveryEvents.
     */
    data: XOR<MarketingDeliveryEventUpdateManyMutationInput, MarketingDeliveryEventUncheckedUpdateManyInput>
    /**
     * Filter which MarketingDeliveryEvents to update
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * Limit how many MarketingDeliveryEvents to update.
     */
    limit?: number
  }

  /**
   * MarketingDeliveryEvent updateManyAndReturn
   */
  export type MarketingDeliveryEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * The data used to update MarketingDeliveryEvents.
     */
    data: XOR<MarketingDeliveryEventUpdateManyMutationInput, MarketingDeliveryEventUncheckedUpdateManyInput>
    /**
     * Filter which MarketingDeliveryEvents to update
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * Limit how many MarketingDeliveryEvents to update.
     */
    limit?: number
  }

  /**
   * MarketingDeliveryEvent upsert
   */
  export type MarketingDeliveryEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * The filter to search for the MarketingDeliveryEvent to update in case it exists.
     */
    where: MarketingDeliveryEventWhereUniqueInput
    /**
     * In case the MarketingDeliveryEvent found by the `where` argument doesn't exist, create a new MarketingDeliveryEvent with this data.
     */
    create: XOR<MarketingDeliveryEventCreateInput, MarketingDeliveryEventUncheckedCreateInput>
    /**
     * In case the MarketingDeliveryEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketingDeliveryEventUpdateInput, MarketingDeliveryEventUncheckedUpdateInput>
  }

  /**
   * MarketingDeliveryEvent delete
   */
  export type MarketingDeliveryEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
    /**
     * Filter which MarketingDeliveryEvent to delete.
     */
    where: MarketingDeliveryEventWhereUniqueInput
  }

  /**
   * MarketingDeliveryEvent deleteMany
   */
  export type MarketingDeliveryEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketingDeliveryEvents to delete
     */
    where?: MarketingDeliveryEventWhereInput
    /**
     * Limit how many MarketingDeliveryEvents to delete.
     */
    limit?: number
  }

  /**
   * MarketingDeliveryEvent without action
   */
  export type MarketingDeliveryEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketingDeliveryEvent
     */
    select?: MarketingDeliveryEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketingDeliveryEvent
     */
    omit?: MarketingDeliveryEventOmit<ExtArgs> | null
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


  export const ContactMapScalarFieldEnum: {
    uuid: 'uuid',
    odooId: 'odooId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactMapScalarFieldEnum = (typeof ContactMapScalarFieldEnum)[keyof typeof ContactMapScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    name: 'name',
    breed: 'breed',
    age: 'age',
    birthDate: 'birthDate',
    photo: 'photo',
    createdAt: 'createdAt'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const ContactFileScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    name: 'name',
    size: 'size',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type ContactFileScalarFieldEnum = (typeof ContactFileScalarFieldEnum)[keyof typeof ContactFileScalarFieldEnum]


  export const ContactTaskScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    title: 'title',
    dueDate: 'dueDate',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactTaskScalarFieldEnum = (typeof ContactTaskScalarFieldEnum)[keyof typeof ContactTaskScalarFieldEnum]


  export const ContactActivityScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    type: 'type',
    title: 'title',
    content: 'content',
    author: 'author',
    color: 'color',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type ContactActivityScalarFieldEnum = (typeof ContactActivityScalarFieldEnum)[keyof typeof ContactActivityScalarFieldEnum]


  export const ContactShiftScalarFieldEnum: {
    id: 'id',
    contactId: 'contactId',
    clockIn: 'clockIn',
    clockOut: 'clockOut',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ContactShiftScalarFieldEnum = (typeof ContactShiftScalarFieldEnum)[keyof typeof ContactShiftScalarFieldEnum]


  export const MarketingSuppressionEntryScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    channel: 'channel',
    value: 'value',
    reason: 'reason',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type MarketingSuppressionEntryScalarFieldEnum = (typeof MarketingSuppressionEntryScalarFieldEnum)[keyof typeof MarketingSuppressionEntryScalarFieldEnum]


  export const MarketingContactConsentScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    contactId: 'contactId',
    emailOptIn: 'emailOptIn',
    smsOptIn: 'smsOptIn',
    unsubscribed: 'unsubscribed',
    updatedByUser: 'updatedByUser',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type MarketingContactConsentScalarFieldEnum = (typeof MarketingContactConsentScalarFieldEnum)[keyof typeof MarketingContactConsentScalarFieldEnum]


  export const MarketingCampaignTemplateUsageScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    campaignId: 'campaignId',
    templateId: 'templateId',
    templateVersionId: 'templateVersionId',
    templateNameSnapshot: 'templateNameSnapshot',
    subjectSnapshot: 'subjectSnapshot',
    previewTextSnapshot: 'previewTextSnapshot',
    contentSnapshot: 'contentSnapshot',
    appliedByUserId: 'appliedByUserId',
    appliedAt: 'appliedAt',
    createdAt: 'createdAt'
  };

  export type MarketingCampaignTemplateUsageScalarFieldEnum = (typeof MarketingCampaignTemplateUsageScalarFieldEnum)[keyof typeof MarketingCampaignTemplateUsageScalarFieldEnum]


  export const MarketingDeliveryEventScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    campaignId: 'campaignId',
    recipientId: 'recipientId',
    recipientEmail: 'recipientEmail',
    recipientPhone: 'recipientPhone',
    provider: 'provider',
    providerEventId: 'providerEventId',
    providerMessageId: 'providerMessageId',
    eventType: 'eventType',
    url: 'url',
    reason: 'reason',
    rawPayload: 'rawPayload',
    occurredAt: 'occurredAt',
    createdAt: 'createdAt'
  };

  export type MarketingDeliveryEventScalarFieldEnum = (typeof MarketingDeliveryEventScalarFieldEnum)[keyof typeof MarketingDeliveryEventScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type ContactMapWhereInput = {
    AND?: ContactMapWhereInput | ContactMapWhereInput[]
    OR?: ContactMapWhereInput[]
    NOT?: ContactMapWhereInput | ContactMapWhereInput[]
    uuid?: StringFilter<"ContactMap"> | string
    odooId?: IntFilter<"ContactMap"> | number
    status?: StringNullableFilter<"ContactMap"> | string | null
    createdAt?: DateTimeFilter<"ContactMap"> | Date | string
  }

  export type ContactMapOrderByWithRelationInput = {
    uuid?: SortOrder
    odooId?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ContactMapWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    odooId?: number
    AND?: ContactMapWhereInput | ContactMapWhereInput[]
    OR?: ContactMapWhereInput[]
    NOT?: ContactMapWhereInput | ContactMapWhereInput[]
    status?: StringNullableFilter<"ContactMap"> | string | null
    createdAt?: DateTimeFilter<"ContactMap"> | Date | string
  }, "uuid" | "odooId">

  export type ContactMapOrderByWithAggregationInput = {
    uuid?: SortOrder
    odooId?: SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactMapCountOrderByAggregateInput
    _avg?: ContactMapAvgOrderByAggregateInput
    _max?: ContactMapMaxOrderByAggregateInput
    _min?: ContactMapMinOrderByAggregateInput
    _sum?: ContactMapSumOrderByAggregateInput
  }

  export type ContactMapScalarWhereWithAggregatesInput = {
    AND?: ContactMapScalarWhereWithAggregatesInput | ContactMapScalarWhereWithAggregatesInput[]
    OR?: ContactMapScalarWhereWithAggregatesInput[]
    NOT?: ContactMapScalarWhereWithAggregatesInput | ContactMapScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"ContactMap"> | string
    odooId?: IntWithAggregatesFilter<"ContactMap"> | number
    status?: StringNullableWithAggregatesFilter<"ContactMap"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactMap"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    contactId?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    age?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    photo?: StringNullableFilter<"Pet"> | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    breed?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    contactId?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    breed?: StringNullableFilter<"Pet"> | string | null
    age?: StringNullableFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableFilter<"Pet"> | Date | string | null
    photo?: StringNullableFilter<"Pet"> | string | null
    createdAt?: DateTimeFilter<"Pet"> | Date | string
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    breed?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    contactId?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    breed?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    age?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Pet"> | Date | string | null
    photo?: StringNullableWithAggregatesFilter<"Pet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
  }

  export type ContactFileWhereInput = {
    AND?: ContactFileWhereInput | ContactFileWhereInput[]
    OR?: ContactFileWhereInput[]
    NOT?: ContactFileWhereInput | ContactFileWhereInput[]
    id?: StringFilter<"ContactFile"> | string
    contactId?: IntFilter<"ContactFile"> | number
    name?: StringFilter<"ContactFile"> | string
    size?: StringFilter<"ContactFile"> | string
    url?: StringFilter<"ContactFile"> | string
    type?: StringNullableFilter<"ContactFile"> | string | null
    createdAt?: DateTimeFilter<"ContactFile"> | Date | string
  }

  export type ContactFileOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ContactFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactFileWhereInput | ContactFileWhereInput[]
    OR?: ContactFileWhereInput[]
    NOT?: ContactFileWhereInput | ContactFileWhereInput[]
    contactId?: IntFilter<"ContactFile"> | number
    name?: StringFilter<"ContactFile"> | string
    size?: StringFilter<"ContactFile"> | string
    url?: StringFilter<"ContactFile"> | string
    type?: StringNullableFilter<"ContactFile"> | string | null
    createdAt?: DateTimeFilter<"ContactFile"> | Date | string
  }, "id">

  export type ContactFileOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    url?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactFileCountOrderByAggregateInput
    _avg?: ContactFileAvgOrderByAggregateInput
    _max?: ContactFileMaxOrderByAggregateInput
    _min?: ContactFileMinOrderByAggregateInput
    _sum?: ContactFileSumOrderByAggregateInput
  }

  export type ContactFileScalarWhereWithAggregatesInput = {
    AND?: ContactFileScalarWhereWithAggregatesInput | ContactFileScalarWhereWithAggregatesInput[]
    OR?: ContactFileScalarWhereWithAggregatesInput[]
    NOT?: ContactFileScalarWhereWithAggregatesInput | ContactFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactFile"> | string
    contactId?: IntWithAggregatesFilter<"ContactFile"> | number
    name?: StringWithAggregatesFilter<"ContactFile"> | string
    size?: StringWithAggregatesFilter<"ContactFile"> | string
    url?: StringWithAggregatesFilter<"ContactFile"> | string
    type?: StringNullableWithAggregatesFilter<"ContactFile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactFile"> | Date | string
  }

  export type ContactTaskWhereInput = {
    AND?: ContactTaskWhereInput | ContactTaskWhereInput[]
    OR?: ContactTaskWhereInput[]
    NOT?: ContactTaskWhereInput | ContactTaskWhereInput[]
    id?: StringFilter<"ContactTask"> | string
    contactId?: IntFilter<"ContactTask"> | number
    title?: StringFilter<"ContactTask"> | string
    dueDate?: StringNullableFilter<"ContactTask"> | string | null
    priority?: StringNullableFilter<"ContactTask"> | string | null
    status?: StringFilter<"ContactTask"> | string
    createdAt?: DateTimeFilter<"ContactTask"> | Date | string
  }

  export type ContactTaskOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactTaskWhereInput | ContactTaskWhereInput[]
    OR?: ContactTaskWhereInput[]
    NOT?: ContactTaskWhereInput | ContactTaskWhereInput[]
    contactId?: IntFilter<"ContactTask"> | number
    title?: StringFilter<"ContactTask"> | string
    dueDate?: StringNullableFilter<"ContactTask"> | string | null
    priority?: StringNullableFilter<"ContactTask"> | string | null
    status?: StringFilter<"ContactTask"> | string
    createdAt?: DateTimeFilter<"ContactTask"> | Date | string
  }, "id">

  export type ContactTaskOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactTaskCountOrderByAggregateInput
    _avg?: ContactTaskAvgOrderByAggregateInput
    _max?: ContactTaskMaxOrderByAggregateInput
    _min?: ContactTaskMinOrderByAggregateInput
    _sum?: ContactTaskSumOrderByAggregateInput
  }

  export type ContactTaskScalarWhereWithAggregatesInput = {
    AND?: ContactTaskScalarWhereWithAggregatesInput | ContactTaskScalarWhereWithAggregatesInput[]
    OR?: ContactTaskScalarWhereWithAggregatesInput[]
    NOT?: ContactTaskScalarWhereWithAggregatesInput | ContactTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactTask"> | string
    contactId?: IntWithAggregatesFilter<"ContactTask"> | number
    title?: StringWithAggregatesFilter<"ContactTask"> | string
    dueDate?: StringNullableWithAggregatesFilter<"ContactTask"> | string | null
    priority?: StringNullableWithAggregatesFilter<"ContactTask"> | string | null
    status?: StringWithAggregatesFilter<"ContactTask"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactTask"> | Date | string
  }

  export type ContactActivityWhereInput = {
    AND?: ContactActivityWhereInput | ContactActivityWhereInput[]
    OR?: ContactActivityWhereInput[]
    NOT?: ContactActivityWhereInput | ContactActivityWhereInput[]
    id?: StringFilter<"ContactActivity"> | string
    contactId?: IntFilter<"ContactActivity"> | number
    type?: StringFilter<"ContactActivity"> | string
    title?: StringFilter<"ContactActivity"> | string
    content?: StringNullableFilter<"ContactActivity"> | string | null
    author?: StringFilter<"ContactActivity"> | string
    color?: StringNullableFilter<"ContactActivity"> | string | null
    icon?: StringNullableFilter<"ContactActivity"> | string | null
    createdAt?: DateTimeFilter<"ContactActivity"> | Date | string
  }

  export type ContactActivityOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    author?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ContactActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactActivityWhereInput | ContactActivityWhereInput[]
    OR?: ContactActivityWhereInput[]
    NOT?: ContactActivityWhereInput | ContactActivityWhereInput[]
    contactId?: IntFilter<"ContactActivity"> | number
    type?: StringFilter<"ContactActivity"> | string
    title?: StringFilter<"ContactActivity"> | string
    content?: StringNullableFilter<"ContactActivity"> | string | null
    author?: StringFilter<"ContactActivity"> | string
    color?: StringNullableFilter<"ContactActivity"> | string | null
    icon?: StringNullableFilter<"ContactActivity"> | string | null
    createdAt?: DateTimeFilter<"ContactActivity"> | Date | string
  }, "id">

  export type ContactActivityOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    author?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactActivityCountOrderByAggregateInput
    _avg?: ContactActivityAvgOrderByAggregateInput
    _max?: ContactActivityMaxOrderByAggregateInput
    _min?: ContactActivityMinOrderByAggregateInput
    _sum?: ContactActivitySumOrderByAggregateInput
  }

  export type ContactActivityScalarWhereWithAggregatesInput = {
    AND?: ContactActivityScalarWhereWithAggregatesInput | ContactActivityScalarWhereWithAggregatesInput[]
    OR?: ContactActivityScalarWhereWithAggregatesInput[]
    NOT?: ContactActivityScalarWhereWithAggregatesInput | ContactActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactActivity"> | string
    contactId?: IntWithAggregatesFilter<"ContactActivity"> | number
    type?: StringWithAggregatesFilter<"ContactActivity"> | string
    title?: StringWithAggregatesFilter<"ContactActivity"> | string
    content?: StringNullableWithAggregatesFilter<"ContactActivity"> | string | null
    author?: StringWithAggregatesFilter<"ContactActivity"> | string
    color?: StringNullableWithAggregatesFilter<"ContactActivity"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ContactActivity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactActivity"> | Date | string
  }

  export type ContactShiftWhereInput = {
    AND?: ContactShiftWhereInput | ContactShiftWhereInput[]
    OR?: ContactShiftWhereInput[]
    NOT?: ContactShiftWhereInput | ContactShiftWhereInput[]
    id?: StringFilter<"ContactShift"> | string
    contactId?: IntFilter<"ContactShift"> | number
    clockIn?: DateTimeFilter<"ContactShift"> | Date | string
    clockOut?: DateTimeNullableFilter<"ContactShift"> | Date | string | null
    status?: StringFilter<"ContactShift"> | string
    createdAt?: DateTimeFilter<"ContactShift"> | Date | string
  }

  export type ContactShiftOrderByWithRelationInput = {
    id?: SortOrder
    contactId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactShiftWhereInput | ContactShiftWhereInput[]
    OR?: ContactShiftWhereInput[]
    NOT?: ContactShiftWhereInput | ContactShiftWhereInput[]
    contactId?: IntFilter<"ContactShift"> | number
    clockIn?: DateTimeFilter<"ContactShift"> | Date | string
    clockOut?: DateTimeNullableFilter<"ContactShift"> | Date | string | null
    status?: StringFilter<"ContactShift"> | string
    createdAt?: DateTimeFilter<"ContactShift"> | Date | string
  }, "id">

  export type ContactShiftOrderByWithAggregationInput = {
    id?: SortOrder
    contactId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ContactShiftCountOrderByAggregateInput
    _avg?: ContactShiftAvgOrderByAggregateInput
    _max?: ContactShiftMaxOrderByAggregateInput
    _min?: ContactShiftMinOrderByAggregateInput
    _sum?: ContactShiftSumOrderByAggregateInput
  }

  export type ContactShiftScalarWhereWithAggregatesInput = {
    AND?: ContactShiftScalarWhereWithAggregatesInput | ContactShiftScalarWhereWithAggregatesInput[]
    OR?: ContactShiftScalarWhereWithAggregatesInput[]
    NOT?: ContactShiftScalarWhereWithAggregatesInput | ContactShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactShift"> | string
    contactId?: IntWithAggregatesFilter<"ContactShift"> | number
    clockIn?: DateTimeWithAggregatesFilter<"ContactShift"> | Date | string
    clockOut?: DateTimeNullableWithAggregatesFilter<"ContactShift"> | Date | string | null
    status?: StringWithAggregatesFilter<"ContactShift"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactShift"> | Date | string
  }

  export type MarketingSuppressionEntryWhereInput = {
    AND?: MarketingSuppressionEntryWhereInput | MarketingSuppressionEntryWhereInput[]
    OR?: MarketingSuppressionEntryWhereInput[]
    NOT?: MarketingSuppressionEntryWhereInput | MarketingSuppressionEntryWhereInput[]
    id?: StringFilter<"MarketingSuppressionEntry"> | string
    orgId?: StringFilter<"MarketingSuppressionEntry"> | string
    channel?: StringFilter<"MarketingSuppressionEntry"> | string
    value?: StringFilter<"MarketingSuppressionEntry"> | string
    reason?: StringFilter<"MarketingSuppressionEntry"> | string
    source?: StringNullableFilter<"MarketingSuppressionEntry"> | string | null
    createdAt?: DateTimeFilter<"MarketingSuppressionEntry"> | Date | string
  }

  export type MarketingSuppressionEntryOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    channel?: SortOrder
    value?: SortOrder
    reason?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MarketingSuppressionEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketingSuppressionEntryWhereInput | MarketingSuppressionEntryWhereInput[]
    OR?: MarketingSuppressionEntryWhereInput[]
    NOT?: MarketingSuppressionEntryWhereInput | MarketingSuppressionEntryWhereInput[]
    orgId?: StringFilter<"MarketingSuppressionEntry"> | string
    channel?: StringFilter<"MarketingSuppressionEntry"> | string
    value?: StringFilter<"MarketingSuppressionEntry"> | string
    reason?: StringFilter<"MarketingSuppressionEntry"> | string
    source?: StringNullableFilter<"MarketingSuppressionEntry"> | string | null
    createdAt?: DateTimeFilter<"MarketingSuppressionEntry"> | Date | string
  }, "id">

  export type MarketingSuppressionEntryOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    channel?: SortOrder
    value?: SortOrder
    reason?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MarketingSuppressionEntryCountOrderByAggregateInput
    _max?: MarketingSuppressionEntryMaxOrderByAggregateInput
    _min?: MarketingSuppressionEntryMinOrderByAggregateInput
  }

  export type MarketingSuppressionEntryScalarWhereWithAggregatesInput = {
    AND?: MarketingSuppressionEntryScalarWhereWithAggregatesInput | MarketingSuppressionEntryScalarWhereWithAggregatesInput[]
    OR?: MarketingSuppressionEntryScalarWhereWithAggregatesInput[]
    NOT?: MarketingSuppressionEntryScalarWhereWithAggregatesInput | MarketingSuppressionEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingSuppressionEntry"> | string
    orgId?: StringWithAggregatesFilter<"MarketingSuppressionEntry"> | string
    channel?: StringWithAggregatesFilter<"MarketingSuppressionEntry"> | string
    value?: StringWithAggregatesFilter<"MarketingSuppressionEntry"> | string
    reason?: StringWithAggregatesFilter<"MarketingSuppressionEntry"> | string
    source?: StringNullableWithAggregatesFilter<"MarketingSuppressionEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MarketingSuppressionEntry"> | Date | string
  }

  export type MarketingContactConsentWhereInput = {
    AND?: MarketingContactConsentWhereInput | MarketingContactConsentWhereInput[]
    OR?: MarketingContactConsentWhereInput[]
    NOT?: MarketingContactConsentWhereInput | MarketingContactConsentWhereInput[]
    id?: StringFilter<"MarketingContactConsent"> | string
    orgId?: StringFilter<"MarketingContactConsent"> | string
    contactId?: StringFilter<"MarketingContactConsent"> | string
    emailOptIn?: BoolNullableFilter<"MarketingContactConsent"> | boolean | null
    smsOptIn?: BoolNullableFilter<"MarketingContactConsent"> | boolean | null
    unsubscribed?: BoolFilter<"MarketingContactConsent"> | boolean
    updatedByUser?: StringNullableFilter<"MarketingContactConsent"> | string | null
    updatedAt?: DateTimeFilter<"MarketingContactConsent"> | Date | string
    createdAt?: DateTimeFilter<"MarketingContactConsent"> | Date | string
  }

  export type MarketingContactConsentOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    emailOptIn?: SortOrderInput | SortOrder
    smsOptIn?: SortOrderInput | SortOrder
    unsubscribed?: SortOrder
    updatedByUser?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingContactConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_contactId?: MarketingContactConsentOrgIdContactIdCompoundUniqueInput
    AND?: MarketingContactConsentWhereInput | MarketingContactConsentWhereInput[]
    OR?: MarketingContactConsentWhereInput[]
    NOT?: MarketingContactConsentWhereInput | MarketingContactConsentWhereInput[]
    orgId?: StringFilter<"MarketingContactConsent"> | string
    contactId?: StringFilter<"MarketingContactConsent"> | string
    emailOptIn?: BoolNullableFilter<"MarketingContactConsent"> | boolean | null
    smsOptIn?: BoolNullableFilter<"MarketingContactConsent"> | boolean | null
    unsubscribed?: BoolFilter<"MarketingContactConsent"> | boolean
    updatedByUser?: StringNullableFilter<"MarketingContactConsent"> | string | null
    updatedAt?: DateTimeFilter<"MarketingContactConsent"> | Date | string
    createdAt?: DateTimeFilter<"MarketingContactConsent"> | Date | string
  }, "id" | "orgId_contactId">

  export type MarketingContactConsentOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    emailOptIn?: SortOrderInput | SortOrder
    smsOptIn?: SortOrderInput | SortOrder
    unsubscribed?: SortOrder
    updatedByUser?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MarketingContactConsentCountOrderByAggregateInput
    _max?: MarketingContactConsentMaxOrderByAggregateInput
    _min?: MarketingContactConsentMinOrderByAggregateInput
  }

  export type MarketingContactConsentScalarWhereWithAggregatesInput = {
    AND?: MarketingContactConsentScalarWhereWithAggregatesInput | MarketingContactConsentScalarWhereWithAggregatesInput[]
    OR?: MarketingContactConsentScalarWhereWithAggregatesInput[]
    NOT?: MarketingContactConsentScalarWhereWithAggregatesInput | MarketingContactConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingContactConsent"> | string
    orgId?: StringWithAggregatesFilter<"MarketingContactConsent"> | string
    contactId?: StringWithAggregatesFilter<"MarketingContactConsent"> | string
    emailOptIn?: BoolNullableWithAggregatesFilter<"MarketingContactConsent"> | boolean | null
    smsOptIn?: BoolNullableWithAggregatesFilter<"MarketingContactConsent"> | boolean | null
    unsubscribed?: BoolWithAggregatesFilter<"MarketingContactConsent"> | boolean
    updatedByUser?: StringNullableWithAggregatesFilter<"MarketingContactConsent"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"MarketingContactConsent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketingContactConsent"> | Date | string
  }

  export type MarketingCampaignTemplateUsageWhereInput = {
    AND?: MarketingCampaignTemplateUsageWhereInput | MarketingCampaignTemplateUsageWhereInput[]
    OR?: MarketingCampaignTemplateUsageWhereInput[]
    NOT?: MarketingCampaignTemplateUsageWhereInput | MarketingCampaignTemplateUsageWhereInput[]
    id?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    orgId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    campaignId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    templateId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    templateVersionId?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    templateNameSnapshot?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    subjectSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    previewTextSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    contentSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedByUserId?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedAt?: DateTimeFilter<"MarketingCampaignTemplateUsage"> | Date | string
    createdAt?: DateTimeFilter<"MarketingCampaignTemplateUsage"> | Date | string
  }

  export type MarketingCampaignTemplateUsageOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    templateId?: SortOrder
    templateVersionId?: SortOrderInput | SortOrder
    templateNameSnapshot?: SortOrder
    subjectSnapshot?: SortOrderInput | SortOrder
    previewTextSnapshot?: SortOrderInput | SortOrder
    contentSnapshot?: SortOrderInput | SortOrder
    appliedByUserId?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingCampaignTemplateUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketingCampaignTemplateUsageWhereInput | MarketingCampaignTemplateUsageWhereInput[]
    OR?: MarketingCampaignTemplateUsageWhereInput[]
    NOT?: MarketingCampaignTemplateUsageWhereInput | MarketingCampaignTemplateUsageWhereInput[]
    orgId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    campaignId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    templateId?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    templateVersionId?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    templateNameSnapshot?: StringFilter<"MarketingCampaignTemplateUsage"> | string
    subjectSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    previewTextSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    contentSnapshot?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedByUserId?: StringNullableFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedAt?: DateTimeFilter<"MarketingCampaignTemplateUsage"> | Date | string
    createdAt?: DateTimeFilter<"MarketingCampaignTemplateUsage"> | Date | string
  }, "id">

  export type MarketingCampaignTemplateUsageOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    templateId?: SortOrder
    templateVersionId?: SortOrderInput | SortOrder
    templateNameSnapshot?: SortOrder
    subjectSnapshot?: SortOrderInput | SortOrder
    previewTextSnapshot?: SortOrderInput | SortOrder
    contentSnapshot?: SortOrderInput | SortOrder
    appliedByUserId?: SortOrderInput | SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MarketingCampaignTemplateUsageCountOrderByAggregateInput
    _max?: MarketingCampaignTemplateUsageMaxOrderByAggregateInput
    _min?: MarketingCampaignTemplateUsageMinOrderByAggregateInput
  }

  export type MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput = {
    AND?: MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput | MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput[]
    OR?: MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput[]
    NOT?: MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput | MarketingCampaignTemplateUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string
    orgId?: StringWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string
    campaignId?: StringWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string
    templateId?: StringWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string
    templateVersionId?: StringNullableWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string | null
    templateNameSnapshot?: StringWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string
    subjectSnapshot?: StringNullableWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string | null
    previewTextSnapshot?: StringNullableWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string | null
    contentSnapshot?: StringNullableWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedByUserId?: StringNullableWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | string | null
    appliedAt?: DateTimeWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketingCampaignTemplateUsage"> | Date | string
  }

  export type MarketingDeliveryEventWhereInput = {
    AND?: MarketingDeliveryEventWhereInput | MarketingDeliveryEventWhereInput[]
    OR?: MarketingDeliveryEventWhereInput[]
    NOT?: MarketingDeliveryEventWhereInput | MarketingDeliveryEventWhereInput[]
    id?: StringFilter<"MarketingDeliveryEvent"> | string
    orgId?: StringFilter<"MarketingDeliveryEvent"> | string
    campaignId?: StringFilter<"MarketingDeliveryEvent"> | string
    recipientId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    recipientEmail?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    recipientPhone?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    provider?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    providerEventId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    providerMessageId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    eventType?: StringFilter<"MarketingDeliveryEvent"> | string
    url?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    reason?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    rawPayload?: JsonNullableFilter<"MarketingDeliveryEvent">
    occurredAt?: DateTimeFilter<"MarketingDeliveryEvent"> | Date | string
    createdAt?: DateTimeFilter<"MarketingDeliveryEvent"> | Date | string
  }

  export type MarketingDeliveryEventOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    recipientEmail?: SortOrderInput | SortOrder
    recipientPhone?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    url?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingDeliveryEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketingDeliveryEventWhereInput | MarketingDeliveryEventWhereInput[]
    OR?: MarketingDeliveryEventWhereInput[]
    NOT?: MarketingDeliveryEventWhereInput | MarketingDeliveryEventWhereInput[]
    orgId?: StringFilter<"MarketingDeliveryEvent"> | string
    campaignId?: StringFilter<"MarketingDeliveryEvent"> | string
    recipientId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    recipientEmail?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    recipientPhone?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    provider?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    providerEventId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    providerMessageId?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    eventType?: StringFilter<"MarketingDeliveryEvent"> | string
    url?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    reason?: StringNullableFilter<"MarketingDeliveryEvent"> | string | null
    rawPayload?: JsonNullableFilter<"MarketingDeliveryEvent">
    occurredAt?: DateTimeFilter<"MarketingDeliveryEvent"> | Date | string
    createdAt?: DateTimeFilter<"MarketingDeliveryEvent"> | Date | string
  }, "id">

  export type MarketingDeliveryEventOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    recipientEmail?: SortOrderInput | SortOrder
    recipientPhone?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerEventId?: SortOrderInput | SortOrder
    providerMessageId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    url?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    rawPayload?: SortOrderInput | SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
    _count?: MarketingDeliveryEventCountOrderByAggregateInput
    _max?: MarketingDeliveryEventMaxOrderByAggregateInput
    _min?: MarketingDeliveryEventMinOrderByAggregateInput
  }

  export type MarketingDeliveryEventScalarWhereWithAggregatesInput = {
    AND?: MarketingDeliveryEventScalarWhereWithAggregatesInput | MarketingDeliveryEventScalarWhereWithAggregatesInput[]
    OR?: MarketingDeliveryEventScalarWhereWithAggregatesInput[]
    NOT?: MarketingDeliveryEventScalarWhereWithAggregatesInput | MarketingDeliveryEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketingDeliveryEvent"> | string
    orgId?: StringWithAggregatesFilter<"MarketingDeliveryEvent"> | string
    campaignId?: StringWithAggregatesFilter<"MarketingDeliveryEvent"> | string
    recipientId?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    recipientEmail?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    recipientPhone?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    provider?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    providerEventId?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    providerMessageId?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    eventType?: StringWithAggregatesFilter<"MarketingDeliveryEvent"> | string
    url?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    reason?: StringNullableWithAggregatesFilter<"MarketingDeliveryEvent"> | string | null
    rawPayload?: JsonNullableWithAggregatesFilter<"MarketingDeliveryEvent">
    occurredAt?: DateTimeWithAggregatesFilter<"MarketingDeliveryEvent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketingDeliveryEvent"> | Date | string
  }

  export type ContactMapCreateInput = {
    uuid?: string
    odooId: number
    status?: string | null
    createdAt?: Date | string
  }

  export type ContactMapUncheckedCreateInput = {
    uuid?: string
    odooId: number
    status?: string | null
    createdAt?: Date | string
  }

  export type ContactMapUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    odooId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMapUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    odooId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMapCreateManyInput = {
    uuid?: string
    odooId: number
    status?: string | null
    createdAt?: Date | string
  }

  export type ContactMapUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    odooId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactMapUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    odooId?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    contactId: number
    name: string
    breed?: string | null
    age?: string | null
    birthDate?: Date | string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type PetUncheckedCreateInput = {
    id?: string
    contactId: number
    name: string
    breed?: string | null
    age?: string | null
    birthDate?: Date | string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateManyInput = {
    id?: string
    contactId: number
    name: string
    breed?: string | null
    age?: string | null
    birthDate?: Date | string | null
    photo?: string | null
    createdAt?: Date | string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    breed?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFileCreateInput = {
    id?: string
    contactId: number
    name: string
    size: string
    url: string
    type?: string | null
    createdAt?: Date | string
  }

  export type ContactFileUncheckedCreateInput = {
    id?: string
    contactId: number
    name: string
    size: string
    url: string
    type?: string | null
    createdAt?: Date | string
  }

  export type ContactFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFileCreateManyInput = {
    id?: string
    contactId: number
    name: string
    size: string
    url: string
    type?: string | null
    createdAt?: Date | string
  }

  export type ContactFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTaskCreateInput = {
    id?: string
    contactId: number
    title: string
    dueDate?: string | null
    priority?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactTaskUncheckedCreateInput = {
    id?: string
    contactId: number
    title: string
    dueDate?: string | null
    priority?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTaskCreateManyInput = {
    id?: string
    contactId: number
    title: string
    dueDate?: string | null
    priority?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactActivityCreateInput = {
    id?: string
    contactId: number
    type: string
    title: string
    content?: string | null
    author?: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type ContactActivityUncheckedCreateInput = {
    id?: string
    contactId: number
    type: string
    title: string
    content?: string | null
    author?: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type ContactActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactActivityCreateManyInput = {
    id?: string
    contactId: number
    type: string
    title: string
    content?: string | null
    author?: string
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type ContactActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactShiftCreateInput = {
    id?: string
    contactId: number
    clockIn?: Date | string
    clockOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactShiftUncheckedCreateInput = {
    id?: string
    contactId: number
    clockIn?: Date | string
    clockOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactShiftCreateManyInput = {
    id?: string
    contactId: number
    clockIn?: Date | string
    clockOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type ContactShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingSuppressionEntryCreateInput = {
    id?: string
    orgId: string
    channel: string
    value: string
    reason: string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketingSuppressionEntryUncheckedCreateInput = {
    id?: string
    orgId: string
    channel: string
    value: string
    reason: string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketingSuppressionEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingSuppressionEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingSuppressionEntryCreateManyInput = {
    id?: string
    orgId: string
    channel: string
    value: string
    reason: string
    source?: string | null
    createdAt?: Date | string
  }

  export type MarketingSuppressionEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingSuppressionEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContactConsentCreateInput = {
    id?: string
    orgId: string
    contactId: string
    emailOptIn?: boolean | null
    smsOptIn?: boolean | null
    unsubscribed?: boolean
    updatedByUser?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingContactConsentUncheckedCreateInput = {
    id?: string
    orgId: string
    contactId: string
    emailOptIn?: boolean | null
    smsOptIn?: boolean | null
    unsubscribed?: boolean
    updatedByUser?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingContactConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    emailOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smsOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    unsubscribed?: BoolFieldUpdateOperationsInput | boolean
    updatedByUser?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContactConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    emailOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smsOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    unsubscribed?: BoolFieldUpdateOperationsInput | boolean
    updatedByUser?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContactConsentCreateManyInput = {
    id?: string
    orgId: string
    contactId: string
    emailOptIn?: boolean | null
    smsOptIn?: boolean | null
    unsubscribed?: boolean
    updatedByUser?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingContactConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    emailOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smsOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    unsubscribed?: BoolFieldUpdateOperationsInput | boolean
    updatedByUser?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingContactConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    emailOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    smsOptIn?: NullableBoolFieldUpdateOperationsInput | boolean | null
    unsubscribed?: BoolFieldUpdateOperationsInput | boolean
    updatedByUser?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingCampaignTemplateUsageCreateInput = {
    id?: string
    orgId: string
    campaignId: string
    templateId: string
    templateVersionId?: string | null
    templateNameSnapshot: string
    subjectSnapshot?: string | null
    previewTextSnapshot?: string | null
    contentSnapshot?: string | null
    appliedByUserId?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingCampaignTemplateUsageUncheckedCreateInput = {
    id?: string
    orgId: string
    campaignId: string
    templateId: string
    templateVersionId?: string | null
    templateNameSnapshot: string
    subjectSnapshot?: string | null
    previewTextSnapshot?: string | null
    contentSnapshot?: string | null
    appliedByUserId?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingCampaignTemplateUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    templateNameSnapshot?: StringFieldUpdateOperationsInput | string
    subjectSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    previewTextSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    appliedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingCampaignTemplateUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    templateNameSnapshot?: StringFieldUpdateOperationsInput | string
    subjectSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    previewTextSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    appliedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingCampaignTemplateUsageCreateManyInput = {
    id?: string
    orgId: string
    campaignId: string
    templateId: string
    templateVersionId?: string | null
    templateNameSnapshot: string
    subjectSnapshot?: string | null
    previewTextSnapshot?: string | null
    contentSnapshot?: string | null
    appliedByUserId?: string | null
    appliedAt?: Date | string
    createdAt?: Date | string
  }

  export type MarketingCampaignTemplateUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    templateNameSnapshot?: StringFieldUpdateOperationsInput | string
    subjectSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    previewTextSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    appliedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingCampaignTemplateUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    templateVersionId?: NullableStringFieldUpdateOperationsInput | string | null
    templateNameSnapshot?: StringFieldUpdateOperationsInput | string
    subjectSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    previewTextSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    contentSnapshot?: NullableStringFieldUpdateOperationsInput | string | null
    appliedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingDeliveryEventCreateInput = {
    id?: string
    orgId: string
    campaignId: string
    recipientId?: string | null
    recipientEmail?: string | null
    recipientPhone?: string | null
    provider?: string | null
    providerEventId?: string | null
    providerMessageId?: string | null
    eventType: string
    url?: string | null
    reason?: string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type MarketingDeliveryEventUncheckedCreateInput = {
    id?: string
    orgId: string
    campaignId: string
    recipientId?: string | null
    recipientEmail?: string | null
    recipientPhone?: string | null
    provider?: string | null
    providerEventId?: string | null
    providerMessageId?: string | null
    eventType: string
    url?: string | null
    reason?: string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type MarketingDeliveryEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingDeliveryEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingDeliveryEventCreateManyInput = {
    id?: string
    orgId: string
    campaignId: string
    recipientId?: string | null
    recipientEmail?: string | null
    recipientPhone?: string | null
    provider?: string | null
    providerEventId?: string | null
    providerMessageId?: string | null
    eventType: string
    url?: string | null
    reason?: string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt: Date | string
    createdAt?: Date | string
  }

  export type MarketingDeliveryEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketingDeliveryEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    recipientId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    recipientPhone?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    providerMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    rawPayload?: NullableJsonNullValueInput | InputJsonValue
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ContactMapCountOrderByAggregateInput = {
    uuid?: SortOrder
    odooId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMapAvgOrderByAggregateInput = {
    odooId?: SortOrder
  }

  export type ContactMapMaxOrderByAggregateInput = {
    uuid?: SortOrder
    odooId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMapMinOrderByAggregateInput = {
    uuid?: SortOrder
    odooId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMapSumOrderByAggregateInput = {
    odooId?: SortOrder
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

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    breed?: SortOrder
    age?: SortOrder
    birthDate?: SortOrder
    photo?: SortOrder
    createdAt?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    contactId?: SortOrder
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

  export type ContactFileCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactFileAvgOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactFileMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactFileMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    name?: SortOrder
    size?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactFileSumOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactTaskCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTaskAvgOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTaskMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    title?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactTaskSumOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactActivityCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactActivityAvgOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactActivityMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactActivitySumOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactShiftCountOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactShiftAvgOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type ContactShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactShiftMinOrderByAggregateInput = {
    id?: SortOrder
    contactId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactShiftSumOrderByAggregateInput = {
    contactId?: SortOrder
  }

  export type MarketingSuppressionEntryCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    channel?: SortOrder
    value?: SortOrder
    reason?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingSuppressionEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    channel?: SortOrder
    value?: SortOrder
    reason?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingSuppressionEntryMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    channel?: SortOrder
    value?: SortOrder
    reason?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MarketingContactConsentOrgIdContactIdCompoundUniqueInput = {
    orgId: string
    contactId: string
  }

  export type MarketingContactConsentCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    emailOptIn?: SortOrder
    smsOptIn?: SortOrder
    unsubscribed?: SortOrder
    updatedByUser?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingContactConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    emailOptIn?: SortOrder
    smsOptIn?: SortOrder
    unsubscribed?: SortOrder
    updatedByUser?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingContactConsentMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contactId?: SortOrder
    emailOptIn?: SortOrder
    smsOptIn?: SortOrder
    unsubscribed?: SortOrder
    updatedByUser?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MarketingCampaignTemplateUsageCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    templateId?: SortOrder
    templateVersionId?: SortOrder
    templateNameSnapshot?: SortOrder
    subjectSnapshot?: SortOrder
    previewTextSnapshot?: SortOrder
    contentSnapshot?: SortOrder
    appliedByUserId?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingCampaignTemplateUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    templateId?: SortOrder
    templateVersionId?: SortOrder
    templateNameSnapshot?: SortOrder
    subjectSnapshot?: SortOrder
    previewTextSnapshot?: SortOrder
    contentSnapshot?: SortOrder
    appliedByUserId?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingCampaignTemplateUsageMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    templateId?: SortOrder
    templateVersionId?: SortOrder
    templateNameSnapshot?: SortOrder
    subjectSnapshot?: SortOrder
    previewTextSnapshot?: SortOrder
    contentSnapshot?: SortOrder
    appliedByUserId?: SortOrder
    appliedAt?: SortOrder
    createdAt?: SortOrder
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

  export type MarketingDeliveryEventCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    recipientId?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    provider?: SortOrder
    providerEventId?: SortOrder
    providerMessageId?: SortOrder
    eventType?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    rawPayload?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingDeliveryEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    recipientId?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    provider?: SortOrder
    providerEventId?: SortOrder
    providerMessageId?: SortOrder
    eventType?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketingDeliveryEventMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    campaignId?: SortOrder
    recipientId?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    provider?: SortOrder
    providerEventId?: SortOrder
    providerMessageId?: SortOrder
    eventType?: SortOrder
    url?: SortOrder
    reason?: SortOrder
    occurredAt?: SortOrder
    createdAt?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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