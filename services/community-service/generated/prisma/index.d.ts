
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMember
 * 
 */
export type GroupMember = $Result.DefaultSelection<Prisma.$GroupMemberPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model UserBadge
 * 
 */
export type UserBadge = $Result.DefaultSelection<Prisma.$UserBadgePayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model CommunityActivity
 * 
 */
export type CommunityActivity = $Result.DefaultSelection<Prisma.$CommunityActivityPayload>
/**
 * Model PointRecord
 * 
 */
export type PointRecord = $Result.DefaultSelection<Prisma.$PointRecordPayload>
/**
 * Model CommunitySettings
 * 
 */
export type CommunitySettings = $Result.DefaultSelection<Prisma.$CommunitySettingsPayload>
/**
 * Model CommunityProfile
 * 
 */
export type CommunityProfile = $Result.DefaultSelection<Prisma.$CommunityProfilePayload>
/**
 * Model CommunityEvent
 * 
 */
export type CommunityEvent = $Result.DefaultSelection<Prisma.$CommunityEventPayload>
/**
 * Model CommunityMember
 * 
 */
export type CommunityMember = $Result.DefaultSelection<Prisma.$CommunityMemberPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
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
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadge`: Exposes CRUD operations for the **UserBadge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadge.findMany()
    * ```
    */
  get userBadge(): Prisma.UserBadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityActivity`: Exposes CRUD operations for the **CommunityActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityActivities
    * const communityActivities = await prisma.communityActivity.findMany()
    * ```
    */
  get communityActivity(): Prisma.CommunityActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointRecord`: Exposes CRUD operations for the **PointRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointRecords
    * const pointRecords = await prisma.pointRecord.findMany()
    * ```
    */
  get pointRecord(): Prisma.PointRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communitySettings`: Exposes CRUD operations for the **CommunitySettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunitySettings
    * const communitySettings = await prisma.communitySettings.findMany()
    * ```
    */
  get communitySettings(): Prisma.CommunitySettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityProfile`: Exposes CRUD operations for the **CommunityProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityProfiles
    * const communityProfiles = await prisma.communityProfile.findMany()
    * ```
    */
  get communityProfile(): Prisma.CommunityProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityEvent`: Exposes CRUD operations for the **CommunityEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityEvents
    * const communityEvents = await prisma.communityEvent.findMany()
    * ```
    */
  get communityEvent(): Prisma.CommunityEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityMember`: Exposes CRUD operations for the **CommunityMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityMembers
    * const communityMembers = await prisma.communityMember.findMany()
    * ```
    */
  get communityMember(): Prisma.CommunityMemberDelegate<ExtArgs, ClientOptions>;
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
    Post: 'Post',
    Comment: 'Comment',
    Group: 'Group',
    GroupMember: 'GroupMember',
    Badge: 'Badge',
    UserBadge: 'UserBadge',
    Follow: 'Follow',
    CommunityActivity: 'CommunityActivity',
    PointRecord: 'PointRecord',
    CommunitySettings: 'CommunitySettings',
    CommunityProfile: 'CommunityProfile',
    CommunityEvent: 'CommunityEvent',
    CommunityMember: 'CommunityMember'
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
      modelProps: "post" | "comment" | "group" | "groupMember" | "badge" | "userBadge" | "follow" | "communityActivity" | "pointRecord" | "communitySettings" | "communityProfile" | "communityEvent" | "communityMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: Prisma.$GroupMemberPayload<ExtArgs>
        fields: Prisma.GroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>[]
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      UserBadge: {
        payload: Prisma.$UserBadgePayload<ExtArgs>
        fields: Prisma.UserBadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findFirst: {
            args: Prisma.UserBadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          findMany: {
            args: Prisma.UserBadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          create: {
            args: Prisma.UserBadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          createMany: {
            args: Prisma.UserBadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          delete: {
            args: Prisma.UserBadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          update: {
            args: Prisma.UserBadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          deleteMany: {
            args: Prisma.UserBadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserBadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>[]
          }
          upsert: {
            args: Prisma.UserBadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgePayload>
          }
          aggregate: {
            args: Prisma.UserBadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadge>
          }
          groupBy: {
            args: Prisma.UserBadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgeCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgeCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      CommunityActivity: {
        payload: Prisma.$CommunityActivityPayload<ExtArgs>
        fields: Prisma.CommunityActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          findFirst: {
            args: Prisma.CommunityActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          findMany: {
            args: Prisma.CommunityActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>[]
          }
          create: {
            args: Prisma.CommunityActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          createMany: {
            args: Prisma.CommunityActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>[]
          }
          delete: {
            args: Prisma.CommunityActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          update: {
            args: Prisma.CommunityActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityActivityPayload>
          }
          aggregate: {
            args: Prisma.CommunityActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityActivity>
          }
          groupBy: {
            args: Prisma.CommunityActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityActivityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityActivityCountAggregateOutputType> | number
          }
        }
      }
      PointRecord: {
        payload: Prisma.$PointRecordPayload<ExtArgs>
        fields: Prisma.PointRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          findFirst: {
            args: Prisma.PointRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          findMany: {
            args: Prisma.PointRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>[]
          }
          create: {
            args: Prisma.PointRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          createMany: {
            args: Prisma.PointRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>[]
          }
          delete: {
            args: Prisma.PointRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          update: {
            args: Prisma.PointRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          deleteMany: {
            args: Prisma.PointRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>[]
          }
          upsert: {
            args: Prisma.PointRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointRecordPayload>
          }
          aggregate: {
            args: Prisma.PointRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointRecord>
          }
          groupBy: {
            args: Prisma.PointRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PointRecordCountAggregateOutputType> | number
          }
        }
      }
      CommunitySettings: {
        payload: Prisma.$CommunitySettingsPayload<ExtArgs>
        fields: Prisma.CommunitySettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunitySettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunitySettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          findFirst: {
            args: Prisma.CommunitySettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunitySettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          findMany: {
            args: Prisma.CommunitySettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>[]
          }
          create: {
            args: Prisma.CommunitySettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          createMany: {
            args: Prisma.CommunitySettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunitySettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>[]
          }
          delete: {
            args: Prisma.CommunitySettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          update: {
            args: Prisma.CommunitySettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          deleteMany: {
            args: Prisma.CommunitySettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunitySettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunitySettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>[]
          }
          upsert: {
            args: Prisma.CommunitySettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySettingsPayload>
          }
          aggregate: {
            args: Prisma.CommunitySettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunitySettings>
          }
          groupBy: {
            args: Prisma.CommunitySettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunitySettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunitySettingsCountArgs<ExtArgs>
            result: $Utils.Optional<CommunitySettingsCountAggregateOutputType> | number
          }
        }
      }
      CommunityProfile: {
        payload: Prisma.$CommunityProfilePayload<ExtArgs>
        fields: Prisma.CommunityProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          findFirst: {
            args: Prisma.CommunityProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          findMany: {
            args: Prisma.CommunityProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>[]
          }
          create: {
            args: Prisma.CommunityProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          createMany: {
            args: Prisma.CommunityProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>[]
          }
          delete: {
            args: Prisma.CommunityProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          update: {
            args: Prisma.CommunityProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          deleteMany: {
            args: Prisma.CommunityProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>[]
          }
          upsert: {
            args: Prisma.CommunityProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityProfilePayload>
          }
          aggregate: {
            args: Prisma.CommunityProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityProfile>
          }
          groupBy: {
            args: Prisma.CommunityProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityProfileCountAggregateOutputType> | number
          }
        }
      }
      CommunityEvent: {
        payload: Prisma.$CommunityEventPayload<ExtArgs>
        fields: Prisma.CommunityEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          findFirst: {
            args: Prisma.CommunityEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          findMany: {
            args: Prisma.CommunityEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>[]
          }
          create: {
            args: Prisma.CommunityEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          createMany: {
            args: Prisma.CommunityEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>[]
          }
          delete: {
            args: Prisma.CommunityEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          update: {
            args: Prisma.CommunityEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          deleteMany: {
            args: Prisma.CommunityEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>[]
          }
          upsert: {
            args: Prisma.CommunityEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityEventPayload>
          }
          aggregate: {
            args: Prisma.CommunityEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityEvent>
          }
          groupBy: {
            args: Prisma.CommunityEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityEventCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityEventCountAggregateOutputType> | number
          }
        }
      }
      CommunityMember: {
        payload: Prisma.$CommunityMemberPayload<ExtArgs>
        fields: Prisma.CommunityMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findFirst: {
            args: Prisma.CommunityMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findMany: {
            args: Prisma.CommunityMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          create: {
            args: Prisma.CommunityMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          createMany: {
            args: Prisma.CommunityMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          delete: {
            args: Prisma.CommunityMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          update: {
            args: Prisma.CommunityMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          deleteMany: {
            args: Prisma.CommunityMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          upsert: {
            args: Prisma.CommunityMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          aggregate: {
            args: Prisma.CommunityMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityMember>
          }
          groupBy: {
            args: Prisma.CommunityMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberCountAggregateOutputType> | number
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
    post?: PostOmit
    comment?: CommentOmit
    group?: GroupOmit
    groupMember?: GroupMemberOmit
    badge?: BadgeOmit
    userBadge?: UserBadgeOmit
    follow?: FollowOmit
    communityActivity?: CommunityActivityOmit
    pointRecord?: PointRecordOmit
    communitySettings?: CommunitySettingsOmit
    communityProfile?: CommunityProfileOmit
    communityEvent?: CommunityEventOmit
    communityMember?: CommunityMemberOmit
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * Count Type BadgeCountOutputType
   */

  export type BadgeCountOutputType = {
    awardedTo: number
  }

  export type BadgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awardedTo?: boolean | BadgeCountOutputTypeCountAwardedToArgs
  }

  // Custom InputTypes
  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgeCountOutputType
     */
    select?: BadgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgeCountOutputType without action
   */
  export type BadgeCountOutputTypeCountAwardedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    likesCount: number | null
  }

  export type PostSumAggregateOutputType = {
    likesCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    groupId: string | null
    text: string | null
    postColor: string | null
    likesCount: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    groupId: string | null
    text: string | null
    postColor: string | null
    likesCount: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    contactId: number
    groupId: number
    text: number
    postColor: number
    attachments: number
    likesCount: number
    isDeleted: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    likesCount?: true
  }

  export type PostSumAggregateInputType = {
    likesCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    groupId?: true
    text?: true
    postColor?: true
    likesCount?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    groupId?: true
    text?: true
    postColor?: true
    likesCount?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    contactId?: true
    groupId?: true
    text?: true
    postColor?: true
    attachments?: true
    likesCount?: true
    isDeleted?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    contactId: string | null
    groupId: string | null
    text: string | null
    postColor: string | null
    attachments: JsonValue
    likesCount: number
    isDeleted: boolean
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    groupId?: boolean
    text?: boolean
    postColor?: boolean
    attachments?: boolean
    likesCount?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    groupId?: boolean
    text?: boolean
    postColor?: boolean
    attachments?: boolean
    likesCount?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    groupId?: boolean
    text?: boolean
    postColor?: boolean
    attachments?: boolean
    likesCount?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    groupId?: boolean
    text?: boolean
    postColor?: boolean
    attachments?: boolean
    likesCount?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "contactId" | "groupId" | "text" | "postColor" | "attachments" | "likesCount" | "isDeleted" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      contactId: string | null
      groupId: string | null
      text: string | null
      postColor: string | null
      attachments: Prisma.JsonValue
      likesCount: number
      isDeleted: boolean
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly orgId: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly contactId: FieldRef<"Post", 'String'>
    readonly groupId: FieldRef<"Post", 'String'>
    readonly text: FieldRef<"Post", 'String'>
    readonly postColor: FieldRef<"Post", 'String'>
    readonly attachments: FieldRef<"Post", 'Json'>
    readonly likesCount: FieldRef<"Post", 'Int'>
    readonly isDeleted: FieldRef<"Post", 'Boolean'>
    readonly metadata: FieldRef<"Post", 'Json'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    text: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    orgId: string | null
    userId: string | null
    contactId: string | null
    text: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    orgId: number
    userId: number
    contactId: number
    text: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    orgId?: true
    userId?: true
    contactId?: true
    text?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    orgId?: true
    userId?: true
    contactId?: true
    text?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    orgId?: true
    userId?: true
    contactId?: true
    text?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string
    orgId: string
    userId: string
    contactId: string | null
    text: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    text?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    text?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    text?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    orgId?: boolean
    userId?: boolean
    contactId?: boolean
    text?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "orgId" | "userId" | "contactId" | "text" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      orgId: string
      userId: string
      contactId: string | null
      text: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly orgId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly contactId: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly isDeleted: FieldRef<"Comment", 'Boolean'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    privacy: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    privacy: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    name: number
    description: number
    coverImage: number
    privacy: number
    isDeleted: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    description?: true
    coverImage?: true
    privacy?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    description?: true
    coverImage?: true
    privacy?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    name?: true
    description?: true
    coverImage?: true
    privacy?: true
    isDeleted?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    name: string
    description: string | null
    coverImage: string | null
    privacy: string
    isDeleted: boolean
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    privacy?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    privacy?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    privacy?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    privacy?: boolean
    isDeleted?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "name" | "description" | "coverImage" | "privacy" | "isDeleted" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Group$membersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      members: Prisma.$GroupMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      name: string
      description: string | null
      coverImage: string | null
      privacy: string
      isDeleted: boolean
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly orgId: FieldRef<"Group", 'String'>
    readonly createdBy: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly description: FieldRef<"Group", 'String'>
    readonly coverImage: FieldRef<"Group", 'String'>
    readonly privacy: FieldRef<"Group", 'String'>
    readonly isDeleted: FieldRef<"Group", 'Boolean'>
    readonly metadata: FieldRef<"Group", 'Json'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMember
   */

  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type GroupMemberCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type GroupMemberMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type GroupMemberCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: GroupMemberOrderByWithAggregationInput | GroupMemberOrderByWithAggregationInput[]
    by: GroupMemberScalarFieldEnum[] | GroupMemberScalarFieldEnum
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GroupMemberGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    role: string
    joinedAt: Date
    _count: GroupMemberCountAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type GroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["groupMember"]>
  export type GroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMember"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["groupMember"]>
    composites: {}
  }

  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberDefaultArgs> = $Result.GetResult<Prisma.$GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMemberFindUniqueArgs>(args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMemberFindFirstArgs>(args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMemberFindManyArgs>(args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
     */
    create<T extends GroupMemberCreateArgs>(args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMemberCreateManyArgs>(args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMemberCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMember = await prisma.groupMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
     */
    delete<T extends GroupMemberDeleteArgs>(args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMemberUpdateArgs>(args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMemberDeleteManyArgs>(args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMemberUpdateManyArgs>(args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMemberUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMemberWithIdOnly = await prisma.groupMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
     */
    upsert<T extends GroupMemberUpsertArgs>(args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>): Prisma__GroupMemberClient<$Result.GetResult<Prisma.$GroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMember model
   */
  readonly fields: GroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GroupMember model
   */
  interface GroupMemberFieldRefs {
    readonly id: FieldRef<"GroupMember", 'String'>
    readonly groupId: FieldRef<"GroupMember", 'String'>
    readonly userId: FieldRef<"GroupMember", 'String'>
    readonly role: FieldRef<"GroupMember", 'String'>
    readonly joinedAt: FieldRef<"GroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupMember findUnique
   */
  export type GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findFirst
   */
  export type GroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMemberOrderByWithRelationInput | GroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMemberScalarFieldEnum | GroupMemberScalarFieldEnum[]
  }

  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }

  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMember createManyAndReturn
   */
  export type GroupMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMemberCreateManyInput | GroupMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMember updateManyAndReturn
   */
  export type GroupMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }

  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMember without action
   */
  export type GroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMember
     */
    omit?: GroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    points: number | null
  }

  export type BadgeSumAggregateOutputType = {
    points: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    icon: string | null
    points: number | null
    isPublic: boolean | null
    createdAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    icon: string | null
    points: number | null
    isPublic: boolean | null
    createdAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    icon: number
    points: number
    isPublic: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    points?: true
  }

  export type BadgeSumAggregateInputType = {
    points?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    icon?: true
    points?: true
    isPublic?: true
    createdAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    icon?: true
    points?: true
    isPublic?: true
    createdAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    icon?: true
    points?: true
    isPublic?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: string
    orgId: string
    name: string
    description: string | null
    icon: string | null
    points: number
    isPublic: boolean
    metadata: JsonValue
    createdAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    points?: boolean
    isPublic?: boolean
    metadata?: boolean
    createdAt?: boolean
    awardedTo?: boolean | Badge$awardedToArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    points?: boolean
    isPublic?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    points?: boolean
    isPublic?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    points?: boolean
    isPublic?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "icon" | "points" | "isPublic" | "metadata" | "createdAt", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    awardedTo?: boolean | Badge$awardedToArgs<ExtArgs>
    _count?: boolean | BadgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      awardedTo: Prisma.$UserBadgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      description: string | null
      icon: string | null
      points: number
      isPublic: boolean
      metadata: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
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
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    awardedTo<T extends Badge$awardedToArgs<ExtArgs> = {}>(args?: Subset<T, Badge$awardedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'String'>
    readonly orgId: FieldRef<"Badge", 'String'>
    readonly name: FieldRef<"Badge", 'String'>
    readonly description: FieldRef<"Badge", 'String'>
    readonly icon: FieldRef<"Badge", 'String'>
    readonly points: FieldRef<"Badge", 'Int'>
    readonly isPublic: FieldRef<"Badge", 'Boolean'>
    readonly metadata: FieldRef<"Badge", 'Json'>
    readonly createdAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.awardedTo
   */
  export type Badge$awardedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    cursor?: UserBadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model UserBadge
   */

  export type AggregateUserBadge = {
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  export type UserBadgeMinAggregateOutputType = {
    id: string | null
    badgeId: string | null
    orgId: string | null
    userId: string | null
    awardedBy: string | null
    awardedAt: Date | null
  }

  export type UserBadgeMaxAggregateOutputType = {
    id: string | null
    badgeId: string | null
    orgId: string | null
    userId: string | null
    awardedBy: string | null
    awardedAt: Date | null
  }

  export type UserBadgeCountAggregateOutputType = {
    id: number
    badgeId: number
    orgId: number
    userId: number
    awardedBy: number
    awardedAt: number
    _all: number
  }


  export type UserBadgeMinAggregateInputType = {
    id?: true
    badgeId?: true
    orgId?: true
    userId?: true
    awardedBy?: true
    awardedAt?: true
  }

  export type UserBadgeMaxAggregateInputType = {
    id?: true
    badgeId?: true
    orgId?: true
    userId?: true
    awardedBy?: true
    awardedAt?: true
  }

  export type UserBadgeCountAggregateInputType = {
    id?: true
    badgeId?: true
    orgId?: true
    userId?: true
    awardedBy?: true
    awardedAt?: true
    _all?: true
  }

  export type UserBadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadge to aggregate.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgeMaxAggregateInputType
  }

  export type GetUserBadgeAggregateType<T extends UserBadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadge[P]>
      : GetScalarType<T[P], AggregateUserBadge[P]>
  }




  export type UserBadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgeWhereInput
    orderBy?: UserBadgeOrderByWithAggregationInput | UserBadgeOrderByWithAggregationInput[]
    by: UserBadgeScalarFieldEnum[] | UserBadgeScalarFieldEnum
    having?: UserBadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgeCountAggregateInputType | true
    _min?: UserBadgeMinAggregateInputType
    _max?: UserBadgeMaxAggregateInputType
  }

  export type UserBadgeGroupByOutputType = {
    id: string
    badgeId: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt: Date
    _count: UserBadgeCountAggregateOutputType | null
    _min: UserBadgeMinAggregateOutputType | null
    _max: UserBadgeMaxAggregateOutputType | null
  }

  type GetUserBadgeGroupByPayload<T extends UserBadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgeGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeId?: boolean
    orgId?: boolean
    userId?: boolean
    awardedBy?: boolean
    awardedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeId?: boolean
    orgId?: boolean
    userId?: boolean
    awardedBy?: boolean
    awardedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    badgeId?: boolean
    orgId?: boolean
    userId?: boolean
    awardedBy?: boolean
    awardedAt?: boolean
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadge"]>

  export type UserBadgeSelectScalar = {
    id?: boolean
    badgeId?: boolean
    orgId?: boolean
    userId?: boolean
    awardedBy?: boolean
    awardedAt?: boolean
  }

  export type UserBadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "badgeId" | "orgId" | "userId" | "awardedBy" | "awardedAt", ExtArgs["result"]["userBadge"]>
  export type UserBadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }
  export type UserBadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    badge?: boolean | BadgeDefaultArgs<ExtArgs>
  }

  export type $UserBadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadge"
    objects: {
      badge: Prisma.$BadgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      badgeId: string
      orgId: string
      userId: string
      awardedBy: string
      awardedAt: Date
    }, ExtArgs["result"]["userBadge"]>
    composites: {}
  }

  type UserBadgeGetPayload<S extends boolean | null | undefined | UserBadgeDefaultArgs> = $Result.GetResult<Prisma.$UserBadgePayload, S>

  type UserBadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgeCountAggregateInputType | true
    }

  export interface UserBadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadge'], meta: { name: 'UserBadge' } }
    /**
     * Find zero or one UserBadge that matches the filter.
     * @param {UserBadgeFindUniqueArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgeFindUniqueArgs>(args: SelectSubset<T, UserBadgeFindUniqueArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgeFindUniqueOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgeFindFirstArgs>(args?: SelectSubset<T, UserBadgeFindFirstArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindFirstOrThrowArgs} args - Arguments to find a UserBadge
     * @example
     * // Get one UserBadge
     * const userBadge = await prisma.userBadge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadge.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgeFindManyArgs>(args?: SelectSubset<T, UserBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadge.
     * @param {UserBadgeCreateArgs} args - Arguments to create a UserBadge.
     * @example
     * // Create one UserBadge
     * const UserBadge = await prisma.userBadge.create({
     *   data: {
     *     // ... data to create a UserBadge
     *   }
     * })
     * 
     */
    create<T extends UserBadgeCreateArgs>(args: SelectSubset<T, UserBadgeCreateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgeCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgeCreateManyArgs>(args?: SelectSubset<T, UserBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBadges and returns the data saved in the database.
     * @param {UserBadgeCreateManyAndReturnArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadge = await prisma.userBadge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserBadge.
     * @param {UserBadgeDeleteArgs} args - Arguments to delete one UserBadge.
     * @example
     * // Delete one UserBadge
     * const UserBadge = await prisma.userBadge.delete({
     *   where: {
     *     // ... filter to delete one UserBadge
     *   }
     * })
     * 
     */
    delete<T extends UserBadgeDeleteArgs>(args: SelectSubset<T, UserBadgeDeleteArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadge.
     * @param {UserBadgeUpdateArgs} args - Arguments to update one UserBadge.
     * @example
     * // Update one UserBadge
     * const userBadge = await prisma.userBadge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgeUpdateArgs>(args: SelectSubset<T, UserBadgeUpdateArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgeDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgeDeleteManyArgs>(args?: SelectSubset<T, UserBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgeUpdateManyArgs>(args: SelectSubset<T, UserBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges and returns the data updated in the database.
     * @param {UserBadgeUpdateManyAndReturnArgs} args - Arguments to update many UserBadges.
     * @example
     * // Update many UserBadges
     * const userBadge = await prisma.userBadge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserBadges and only return the `id`
     * const userBadgeWithIdOnly = await prisma.userBadge.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserBadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, UserBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserBadge.
     * @param {UserBadgeUpsertArgs} args - Arguments to update or create a UserBadge.
     * @example
     * // Update or create a UserBadge
     * const userBadge = await prisma.userBadge.upsert({
     *   create: {
     *     // ... data to create a UserBadge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadge we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgeUpsertArgs>(args: SelectSubset<T, UserBadgeUpsertArgs<ExtArgs>>): Prisma__UserBadgeClient<$Result.GetResult<Prisma.$UserBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadge.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgeCountArgs>(
      args?: Subset<T, UserBadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBadgeAggregateArgs>(args: Subset<T, UserBadgeAggregateArgs>): Prisma.PrismaPromise<GetUserBadgeAggregateType<T>>

    /**
     * Group by UserBadge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgeGroupByArgs} args - Group by arguments.
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
      T extends UserBadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgeGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadge model
   */
  readonly fields: UserBadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    badge<T extends BadgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgeDefaultArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserBadge model
   */
  interface UserBadgeFieldRefs {
    readonly id: FieldRef<"UserBadge", 'String'>
    readonly badgeId: FieldRef<"UserBadge", 'String'>
    readonly orgId: FieldRef<"UserBadge", 'String'>
    readonly userId: FieldRef<"UserBadge", 'String'>
    readonly awardedBy: FieldRef<"UserBadge", 'String'>
    readonly awardedAt: FieldRef<"UserBadge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadge findUnique
   */
  export type UserBadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findUniqueOrThrow
   */
  export type UserBadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge findFirst
   */
  export type UserBadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findFirstOrThrow
   */
  export type UserBadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadge to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge findMany
   */
  export type UserBadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgeOrderByWithRelationInput | UserBadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgeScalarFieldEnum | UserBadgeScalarFieldEnum[]
  }

  /**
   * UserBadge create
   */
  export type UserBadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadge.
     */
    data: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
  }

  /**
   * UserBadge createMany
   */
  export type UserBadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadge createManyAndReturn
   */
  export type UserBadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgeCreateManyInput | UserBadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge update
   */
  export type UserBadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadge.
     */
    data: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
    /**
     * Choose, which UserBadge to update.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge updateMany
   */
  export type UserBadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadge updateManyAndReturn
   */
  export type UserBadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserBadge upsert
   */
  export type UserBadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadge to update in case it exists.
     */
    where: UserBadgeWhereUniqueInput
    /**
     * In case the UserBadge found by the `where` argument doesn't exist, create a new UserBadge with this data.
     */
    create: XOR<UserBadgeCreateInput, UserBadgeUncheckedCreateInput>
    /**
     * In case the UserBadge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgeUpdateInput, UserBadgeUncheckedUpdateInput>
  }

  /**
   * UserBadge delete
   */
  export type UserBadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
    /**
     * Filter which UserBadge to delete.
     */
    where: UserBadgeWhereUniqueInput
  }

  /**
   * UserBadge deleteMany
   */
  export type UserBadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgeWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadge without action
   */
  export type UserBadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadge
     */
    select?: UserBadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadge
     */
    omit?: UserBadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgeInclude<ExtArgs> | null
  }


  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    followerId: string | null
    followingId: string | null
    createdAt: Date | null
  }

  export type FollowCountAggregateOutputType = {
    id: number
    orgId: number
    followerId: number
    followingId: number
    createdAt: number
    _all: number
  }


  export type FollowMinAggregateInputType = {
    id?: true
    orgId?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowMaxAggregateInputType = {
    id?: true
    orgId?: true
    followerId?: true
    followingId?: true
    createdAt?: true
  }

  export type FollowCountAggregateInputType = {
    id?: true
    orgId?: true
    followerId?: true
    followingId?: true
    createdAt?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    id: string
    orgId: string
    followerId: string
    followingId: string
    createdAt: Date
    _count: FollowCountAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    id?: boolean
    orgId?: boolean
    followerId?: boolean
    followingId?: boolean
    createdAt?: boolean
  }

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "followerId" | "followingId" | "createdAt", ExtArgs["result"]["follow"]>

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      followerId: string
      followingId: string
      createdAt: Date
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowFindManyArgs>(args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
     */
    create<T extends FollowCreateArgs>(args: SelectSubset<T, FollowCreateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowCreateManyArgs>(args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
     */
    delete<T extends FollowDeleteArgs>(args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowUpdateArgs>(args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowDeleteManyArgs>(args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowUpdateManyArgs>(args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
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
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<"Follow", 'String'>
    readonly orgId: FieldRef<"Follow", 'String'>
    readonly followerId: FieldRef<"Follow", 'String'>
    readonly followingId: FieldRef<"Follow", 'String'>
    readonly createdAt: FieldRef<"Follow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null
  }


  /**
   * Model CommunityActivity
   */

  export type AggregateCommunityActivity = {
    _count: CommunityActivityCountAggregateOutputType | null
    _min: CommunityActivityMinAggregateOutputType | null
    _max: CommunityActivityMaxAggregateOutputType | null
  }

  export type CommunityActivityMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityActivityMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityActivityCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    action: number
    entityType: number
    entityId: number
    description: number
    createdAt: number
    _all: number
  }


  export type CommunityActivityMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type CommunityActivityMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type CommunityActivityCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityActivity to aggregate.
     */
    where?: CommunityActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityActivities to fetch.
     */
    orderBy?: CommunityActivityOrderByWithRelationInput | CommunityActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityActivities
    **/
    _count?: true | CommunityActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityActivityMaxAggregateInputType
  }

  export type GetCommunityActivityAggregateType<T extends CommunityActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityActivity[P]>
      : GetScalarType<T[P], AggregateCommunityActivity[P]>
  }




  export type CommunityActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityActivityWhereInput
    orderBy?: CommunityActivityOrderByWithAggregationInput | CommunityActivityOrderByWithAggregationInput[]
    by: CommunityActivityScalarFieldEnum[] | CommunityActivityScalarFieldEnum
    having?: CommunityActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityActivityCountAggregateInputType | true
    _min?: CommunityActivityMinAggregateInputType
    _max?: CommunityActivityMaxAggregateInputType
  }

  export type CommunityActivityGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    action: string
    entityType: string | null
    entityId: string | null
    description: string | null
    createdAt: Date
    _count: CommunityActivityCountAggregateOutputType | null
    _min: CommunityActivityMinAggregateOutputType | null
    _max: CommunityActivityMaxAggregateOutputType | null
  }

  type GetCommunityActivityGroupByPayload<T extends CommunityActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityActivityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityActivityGroupByOutputType[P]>
        }
      >
    >


  export type CommunityActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityActivity"]>

  export type CommunityActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityActivity"]>

  export type CommunityActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityActivity"]>

  export type CommunityActivitySelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CommunityActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "action" | "entityType" | "entityId" | "description" | "createdAt", ExtArgs["result"]["communityActivity"]>

  export type $CommunityActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityActivity"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      action: string
      entityType: string | null
      entityId: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["communityActivity"]>
    composites: {}
  }

  type CommunityActivityGetPayload<S extends boolean | null | undefined | CommunityActivityDefaultArgs> = $Result.GetResult<Prisma.$CommunityActivityPayload, S>

  type CommunityActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityActivityCountAggregateInputType | true
    }

  export interface CommunityActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityActivity'], meta: { name: 'CommunityActivity' } }
    /**
     * Find zero or one CommunityActivity that matches the filter.
     * @param {CommunityActivityFindUniqueArgs} args - Arguments to find a CommunityActivity
     * @example
     * // Get one CommunityActivity
     * const communityActivity = await prisma.communityActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityActivityFindUniqueArgs>(args: SelectSubset<T, CommunityActivityFindUniqueArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityActivityFindUniqueOrThrowArgs} args - Arguments to find a CommunityActivity
     * @example
     * // Get one CommunityActivity
     * const communityActivity = await prisma.communityActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityFindFirstArgs} args - Arguments to find a CommunityActivity
     * @example
     * // Get one CommunityActivity
     * const communityActivity = await prisma.communityActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityActivityFindFirstArgs>(args?: SelectSubset<T, CommunityActivityFindFirstArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityFindFirstOrThrowArgs} args - Arguments to find a CommunityActivity
     * @example
     * // Get one CommunityActivity
     * const communityActivity = await prisma.communityActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityActivities
     * const communityActivities = await prisma.communityActivity.findMany()
     * 
     * // Get first 10 CommunityActivities
     * const communityActivities = await prisma.communityActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityActivityWithIdOnly = await prisma.communityActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityActivityFindManyArgs>(args?: SelectSubset<T, CommunityActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityActivity.
     * @param {CommunityActivityCreateArgs} args - Arguments to create a CommunityActivity.
     * @example
     * // Create one CommunityActivity
     * const CommunityActivity = await prisma.communityActivity.create({
     *   data: {
     *     // ... data to create a CommunityActivity
     *   }
     * })
     * 
     */
    create<T extends CommunityActivityCreateArgs>(args: SelectSubset<T, CommunityActivityCreateArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityActivities.
     * @param {CommunityActivityCreateManyArgs} args - Arguments to create many CommunityActivities.
     * @example
     * // Create many CommunityActivities
     * const communityActivity = await prisma.communityActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityActivityCreateManyArgs>(args?: SelectSubset<T, CommunityActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityActivities and returns the data saved in the database.
     * @param {CommunityActivityCreateManyAndReturnArgs} args - Arguments to create many CommunityActivities.
     * @example
     * // Create many CommunityActivities
     * const communityActivity = await prisma.communityActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityActivities and only return the `id`
     * const communityActivityWithIdOnly = await prisma.communityActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityActivity.
     * @param {CommunityActivityDeleteArgs} args - Arguments to delete one CommunityActivity.
     * @example
     * // Delete one CommunityActivity
     * const CommunityActivity = await prisma.communityActivity.delete({
     *   where: {
     *     // ... filter to delete one CommunityActivity
     *   }
     * })
     * 
     */
    delete<T extends CommunityActivityDeleteArgs>(args: SelectSubset<T, CommunityActivityDeleteArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityActivity.
     * @param {CommunityActivityUpdateArgs} args - Arguments to update one CommunityActivity.
     * @example
     * // Update one CommunityActivity
     * const communityActivity = await prisma.communityActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityActivityUpdateArgs>(args: SelectSubset<T, CommunityActivityUpdateArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityActivities.
     * @param {CommunityActivityDeleteManyArgs} args - Arguments to filter CommunityActivities to delete.
     * @example
     * // Delete a few CommunityActivities
     * const { count } = await prisma.communityActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityActivityDeleteManyArgs>(args?: SelectSubset<T, CommunityActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityActivities
     * const communityActivity = await prisma.communityActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityActivityUpdateManyArgs>(args: SelectSubset<T, CommunityActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityActivities and returns the data updated in the database.
     * @param {CommunityActivityUpdateManyAndReturnArgs} args - Arguments to update many CommunityActivities.
     * @example
     * // Update many CommunityActivities
     * const communityActivity = await prisma.communityActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityActivities and only return the `id`
     * const communityActivityWithIdOnly = await prisma.communityActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityActivity.
     * @param {CommunityActivityUpsertArgs} args - Arguments to update or create a CommunityActivity.
     * @example
     * // Update or create a CommunityActivity
     * const communityActivity = await prisma.communityActivity.upsert({
     *   create: {
     *     // ... data to create a CommunityActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityActivity we want to update
     *   }
     * })
     */
    upsert<T extends CommunityActivityUpsertArgs>(args: SelectSubset<T, CommunityActivityUpsertArgs<ExtArgs>>): Prisma__CommunityActivityClient<$Result.GetResult<Prisma.$CommunityActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityCountArgs} args - Arguments to filter CommunityActivities to count.
     * @example
     * // Count the number of CommunityActivities
     * const count = await prisma.communityActivity.count({
     *   where: {
     *     // ... the filter for the CommunityActivities we want to count
     *   }
     * })
    **/
    count<T extends CommunityActivityCountArgs>(
      args?: Subset<T, CommunityActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityActivityAggregateArgs>(args: Subset<T, CommunityActivityAggregateArgs>): Prisma.PrismaPromise<GetCommunityActivityAggregateType<T>>

    /**
     * Group by CommunityActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityActivityGroupByArgs} args - Group by arguments.
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
      T extends CommunityActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityActivityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityActivity model
   */
  readonly fields: CommunityActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommunityActivity model
   */
  interface CommunityActivityFieldRefs {
    readonly id: FieldRef<"CommunityActivity", 'String'>
    readonly orgId: FieldRef<"CommunityActivity", 'String'>
    readonly userId: FieldRef<"CommunityActivity", 'String'>
    readonly action: FieldRef<"CommunityActivity", 'String'>
    readonly entityType: FieldRef<"CommunityActivity", 'String'>
    readonly entityId: FieldRef<"CommunityActivity", 'String'>
    readonly description: FieldRef<"CommunityActivity", 'String'>
    readonly createdAt: FieldRef<"CommunityActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityActivity findUnique
   */
  export type CommunityActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter, which CommunityActivity to fetch.
     */
    where: CommunityActivityWhereUniqueInput
  }

  /**
   * CommunityActivity findUniqueOrThrow
   */
  export type CommunityActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter, which CommunityActivity to fetch.
     */
    where: CommunityActivityWhereUniqueInput
  }

  /**
   * CommunityActivity findFirst
   */
  export type CommunityActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter, which CommunityActivity to fetch.
     */
    where?: CommunityActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityActivities to fetch.
     */
    orderBy?: CommunityActivityOrderByWithRelationInput | CommunityActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityActivities.
     */
    cursor?: CommunityActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityActivities.
     */
    distinct?: CommunityActivityScalarFieldEnum | CommunityActivityScalarFieldEnum[]
  }

  /**
   * CommunityActivity findFirstOrThrow
   */
  export type CommunityActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter, which CommunityActivity to fetch.
     */
    where?: CommunityActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityActivities to fetch.
     */
    orderBy?: CommunityActivityOrderByWithRelationInput | CommunityActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityActivities.
     */
    cursor?: CommunityActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityActivities.
     */
    distinct?: CommunityActivityScalarFieldEnum | CommunityActivityScalarFieldEnum[]
  }

  /**
   * CommunityActivity findMany
   */
  export type CommunityActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter, which CommunityActivities to fetch.
     */
    where?: CommunityActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityActivities to fetch.
     */
    orderBy?: CommunityActivityOrderByWithRelationInput | CommunityActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityActivities.
     */
    cursor?: CommunityActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityActivities.
     */
    skip?: number
    distinct?: CommunityActivityScalarFieldEnum | CommunityActivityScalarFieldEnum[]
  }

  /**
   * CommunityActivity create
   */
  export type CommunityActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityActivity.
     */
    data: XOR<CommunityActivityCreateInput, CommunityActivityUncheckedCreateInput>
  }

  /**
   * CommunityActivity createMany
   */
  export type CommunityActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityActivities.
     */
    data: CommunityActivityCreateManyInput | CommunityActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityActivity createManyAndReturn
   */
  export type CommunityActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityActivities.
     */
    data: CommunityActivityCreateManyInput | CommunityActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityActivity update
   */
  export type CommunityActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityActivity.
     */
    data: XOR<CommunityActivityUpdateInput, CommunityActivityUncheckedUpdateInput>
    /**
     * Choose, which CommunityActivity to update.
     */
    where: CommunityActivityWhereUniqueInput
  }

  /**
   * CommunityActivity updateMany
   */
  export type CommunityActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityActivities.
     */
    data: XOR<CommunityActivityUpdateManyMutationInput, CommunityActivityUncheckedUpdateManyInput>
    /**
     * Filter which CommunityActivities to update
     */
    where?: CommunityActivityWhereInput
    /**
     * Limit how many CommunityActivities to update.
     */
    limit?: number
  }

  /**
   * CommunityActivity updateManyAndReturn
   */
  export type CommunityActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * The data used to update CommunityActivities.
     */
    data: XOR<CommunityActivityUpdateManyMutationInput, CommunityActivityUncheckedUpdateManyInput>
    /**
     * Filter which CommunityActivities to update
     */
    where?: CommunityActivityWhereInput
    /**
     * Limit how many CommunityActivities to update.
     */
    limit?: number
  }

  /**
   * CommunityActivity upsert
   */
  export type CommunityActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityActivity to update in case it exists.
     */
    where: CommunityActivityWhereUniqueInput
    /**
     * In case the CommunityActivity found by the `where` argument doesn't exist, create a new CommunityActivity with this data.
     */
    create: XOR<CommunityActivityCreateInput, CommunityActivityUncheckedCreateInput>
    /**
     * In case the CommunityActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityActivityUpdateInput, CommunityActivityUncheckedUpdateInput>
  }

  /**
   * CommunityActivity delete
   */
  export type CommunityActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
    /**
     * Filter which CommunityActivity to delete.
     */
    where: CommunityActivityWhereUniqueInput
  }

  /**
   * CommunityActivity deleteMany
   */
  export type CommunityActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityActivities to delete
     */
    where?: CommunityActivityWhereInput
    /**
     * Limit how many CommunityActivities to delete.
     */
    limit?: number
  }

  /**
   * CommunityActivity without action
   */
  export type CommunityActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityActivity
     */
    select?: CommunityActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityActivity
     */
    omit?: CommunityActivityOmit<ExtArgs> | null
  }


  /**
   * Model PointRecord
   */

  export type AggregatePointRecord = {
    _count: PointRecordCountAggregateOutputType | null
    _avg: PointRecordAvgAggregateOutputType | null
    _sum: PointRecordSumAggregateOutputType | null
    _min: PointRecordMinAggregateOutputType | null
    _max: PointRecordMaxAggregateOutputType | null
  }

  export type PointRecordAvgAggregateOutputType = {
    points: number | null
  }

  export type PointRecordSumAggregateOutputType = {
    points: number | null
  }

  export type PointRecordMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    points: number | null
    reason: string | null
    awardedBy: string | null
    createdAt: Date | null
  }

  export type PointRecordMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    points: number | null
    reason: string | null
    awardedBy: string | null
    createdAt: Date | null
  }

  export type PointRecordCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    points: number
    reason: number
    awardedBy: number
    createdAt: number
    _all: number
  }


  export type PointRecordAvgAggregateInputType = {
    points?: true
  }

  export type PointRecordSumAggregateInputType = {
    points?: true
  }

  export type PointRecordMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    points?: true
    reason?: true
    awardedBy?: true
    createdAt?: true
  }

  export type PointRecordMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    points?: true
    reason?: true
    awardedBy?: true
    createdAt?: true
  }

  export type PointRecordCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    points?: true
    reason?: true
    awardedBy?: true
    createdAt?: true
    _all?: true
  }

  export type PointRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointRecord to aggregate.
     */
    where?: PointRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRecords to fetch.
     */
    orderBy?: PointRecordOrderByWithRelationInput | PointRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointRecords
    **/
    _count?: true | PointRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointRecordMaxAggregateInputType
  }

  export type GetPointRecordAggregateType<T extends PointRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePointRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointRecord[P]>
      : GetScalarType<T[P], AggregatePointRecord[P]>
  }




  export type PointRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointRecordWhereInput
    orderBy?: PointRecordOrderByWithAggregationInput | PointRecordOrderByWithAggregationInput[]
    by: PointRecordScalarFieldEnum[] | PointRecordScalarFieldEnum
    having?: PointRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointRecordCountAggregateInputType | true
    _avg?: PointRecordAvgAggregateInputType
    _sum?: PointRecordSumAggregateInputType
    _min?: PointRecordMinAggregateInputType
    _max?: PointRecordMaxAggregateInputType
  }

  export type PointRecordGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    points: number
    reason: string | null
    awardedBy: string | null
    createdAt: Date
    _count: PointRecordCountAggregateOutputType | null
    _avg: PointRecordAvgAggregateOutputType | null
    _sum: PointRecordSumAggregateOutputType | null
    _min: PointRecordMinAggregateOutputType | null
    _max: PointRecordMaxAggregateOutputType | null
  }

  type GetPointRecordGroupByPayload<T extends PointRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PointRecordGroupByOutputType[P]>
        }
      >
    >


  export type PointRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    points?: boolean
    reason?: boolean
    awardedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pointRecord"]>

  export type PointRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    points?: boolean
    reason?: boolean
    awardedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pointRecord"]>

  export type PointRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    points?: boolean
    reason?: boolean
    awardedBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pointRecord"]>

  export type PointRecordSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    points?: boolean
    reason?: boolean
    awardedBy?: boolean
    createdAt?: boolean
  }

  export type PointRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "points" | "reason" | "awardedBy" | "createdAt", ExtArgs["result"]["pointRecord"]>

  export type $PointRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      points: number
      reason: string | null
      awardedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["pointRecord"]>
    composites: {}
  }

  type PointRecordGetPayload<S extends boolean | null | undefined | PointRecordDefaultArgs> = $Result.GetResult<Prisma.$PointRecordPayload, S>

  type PointRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointRecordCountAggregateInputType | true
    }

  export interface PointRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointRecord'], meta: { name: 'PointRecord' } }
    /**
     * Find zero or one PointRecord that matches the filter.
     * @param {PointRecordFindUniqueArgs} args - Arguments to find a PointRecord
     * @example
     * // Get one PointRecord
     * const pointRecord = await prisma.pointRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointRecordFindUniqueArgs>(args: SelectSubset<T, PointRecordFindUniqueArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointRecordFindUniqueOrThrowArgs} args - Arguments to find a PointRecord
     * @example
     * // Get one PointRecord
     * const pointRecord = await prisma.pointRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PointRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordFindFirstArgs} args - Arguments to find a PointRecord
     * @example
     * // Get one PointRecord
     * const pointRecord = await prisma.pointRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointRecordFindFirstArgs>(args?: SelectSubset<T, PointRecordFindFirstArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordFindFirstOrThrowArgs} args - Arguments to find a PointRecord
     * @example
     * // Get one PointRecord
     * const pointRecord = await prisma.pointRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PointRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointRecords
     * const pointRecords = await prisma.pointRecord.findMany()
     * 
     * // Get first 10 PointRecords
     * const pointRecords = await prisma.pointRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointRecordWithIdOnly = await prisma.pointRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointRecordFindManyArgs>(args?: SelectSubset<T, PointRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointRecord.
     * @param {PointRecordCreateArgs} args - Arguments to create a PointRecord.
     * @example
     * // Create one PointRecord
     * const PointRecord = await prisma.pointRecord.create({
     *   data: {
     *     // ... data to create a PointRecord
     *   }
     * })
     * 
     */
    create<T extends PointRecordCreateArgs>(args: SelectSubset<T, PointRecordCreateArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointRecords.
     * @param {PointRecordCreateManyArgs} args - Arguments to create many PointRecords.
     * @example
     * // Create many PointRecords
     * const pointRecord = await prisma.pointRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointRecordCreateManyArgs>(args?: SelectSubset<T, PointRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointRecords and returns the data saved in the database.
     * @param {PointRecordCreateManyAndReturnArgs} args - Arguments to create many PointRecords.
     * @example
     * // Create many PointRecords
     * const pointRecord = await prisma.pointRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointRecords and only return the `id`
     * const pointRecordWithIdOnly = await prisma.pointRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PointRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointRecord.
     * @param {PointRecordDeleteArgs} args - Arguments to delete one PointRecord.
     * @example
     * // Delete one PointRecord
     * const PointRecord = await prisma.pointRecord.delete({
     *   where: {
     *     // ... filter to delete one PointRecord
     *   }
     * })
     * 
     */
    delete<T extends PointRecordDeleteArgs>(args: SelectSubset<T, PointRecordDeleteArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointRecord.
     * @param {PointRecordUpdateArgs} args - Arguments to update one PointRecord.
     * @example
     * // Update one PointRecord
     * const pointRecord = await prisma.pointRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointRecordUpdateArgs>(args: SelectSubset<T, PointRecordUpdateArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointRecords.
     * @param {PointRecordDeleteManyArgs} args - Arguments to filter PointRecords to delete.
     * @example
     * // Delete a few PointRecords
     * const { count } = await prisma.pointRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointRecordDeleteManyArgs>(args?: SelectSubset<T, PointRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointRecords
     * const pointRecord = await prisma.pointRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointRecordUpdateManyArgs>(args: SelectSubset<T, PointRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointRecords and returns the data updated in the database.
     * @param {PointRecordUpdateManyAndReturnArgs} args - Arguments to update many PointRecords.
     * @example
     * // Update many PointRecords
     * const pointRecord = await prisma.pointRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointRecords and only return the `id`
     * const pointRecordWithIdOnly = await prisma.pointRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PointRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointRecord.
     * @param {PointRecordUpsertArgs} args - Arguments to update or create a PointRecord.
     * @example
     * // Update or create a PointRecord
     * const pointRecord = await prisma.pointRecord.upsert({
     *   create: {
     *     // ... data to create a PointRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointRecord we want to update
     *   }
     * })
     */
    upsert<T extends PointRecordUpsertArgs>(args: SelectSubset<T, PointRecordUpsertArgs<ExtArgs>>): Prisma__PointRecordClient<$Result.GetResult<Prisma.$PointRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordCountArgs} args - Arguments to filter PointRecords to count.
     * @example
     * // Count the number of PointRecords
     * const count = await prisma.pointRecord.count({
     *   where: {
     *     // ... the filter for the PointRecords we want to count
     *   }
     * })
    **/
    count<T extends PointRecordCountArgs>(
      args?: Subset<T, PointRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointRecordAggregateArgs>(args: Subset<T, PointRecordAggregateArgs>): Prisma.PrismaPromise<GetPointRecordAggregateType<T>>

    /**
     * Group by PointRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointRecordGroupByArgs} args - Group by arguments.
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
      T extends PointRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointRecordGroupByArgs['orderBy'] }
        : { orderBy?: PointRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointRecord model
   */
  readonly fields: PointRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PointRecord model
   */
  interface PointRecordFieldRefs {
    readonly id: FieldRef<"PointRecord", 'String'>
    readonly orgId: FieldRef<"PointRecord", 'String'>
    readonly userId: FieldRef<"PointRecord", 'String'>
    readonly points: FieldRef<"PointRecord", 'Int'>
    readonly reason: FieldRef<"PointRecord", 'String'>
    readonly awardedBy: FieldRef<"PointRecord", 'String'>
    readonly createdAt: FieldRef<"PointRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointRecord findUnique
   */
  export type PointRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter, which PointRecord to fetch.
     */
    where: PointRecordWhereUniqueInput
  }

  /**
   * PointRecord findUniqueOrThrow
   */
  export type PointRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter, which PointRecord to fetch.
     */
    where: PointRecordWhereUniqueInput
  }

  /**
   * PointRecord findFirst
   */
  export type PointRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter, which PointRecord to fetch.
     */
    where?: PointRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRecords to fetch.
     */
    orderBy?: PointRecordOrderByWithRelationInput | PointRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointRecords.
     */
    cursor?: PointRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointRecords.
     */
    distinct?: PointRecordScalarFieldEnum | PointRecordScalarFieldEnum[]
  }

  /**
   * PointRecord findFirstOrThrow
   */
  export type PointRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter, which PointRecord to fetch.
     */
    where?: PointRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRecords to fetch.
     */
    orderBy?: PointRecordOrderByWithRelationInput | PointRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointRecords.
     */
    cursor?: PointRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointRecords.
     */
    distinct?: PointRecordScalarFieldEnum | PointRecordScalarFieldEnum[]
  }

  /**
   * PointRecord findMany
   */
  export type PointRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter, which PointRecords to fetch.
     */
    where?: PointRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointRecords to fetch.
     */
    orderBy?: PointRecordOrderByWithRelationInput | PointRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointRecords.
     */
    cursor?: PointRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointRecords.
     */
    skip?: number
    distinct?: PointRecordScalarFieldEnum | PointRecordScalarFieldEnum[]
  }

  /**
   * PointRecord create
   */
  export type PointRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a PointRecord.
     */
    data: XOR<PointRecordCreateInput, PointRecordUncheckedCreateInput>
  }

  /**
   * PointRecord createMany
   */
  export type PointRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointRecords.
     */
    data: PointRecordCreateManyInput | PointRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointRecord createManyAndReturn
   */
  export type PointRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PointRecords.
     */
    data: PointRecordCreateManyInput | PointRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointRecord update
   */
  export type PointRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a PointRecord.
     */
    data: XOR<PointRecordUpdateInput, PointRecordUncheckedUpdateInput>
    /**
     * Choose, which PointRecord to update.
     */
    where: PointRecordWhereUniqueInput
  }

  /**
   * PointRecord updateMany
   */
  export type PointRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointRecords.
     */
    data: XOR<PointRecordUpdateManyMutationInput, PointRecordUncheckedUpdateManyInput>
    /**
     * Filter which PointRecords to update
     */
    where?: PointRecordWhereInput
    /**
     * Limit how many PointRecords to update.
     */
    limit?: number
  }

  /**
   * PointRecord updateManyAndReturn
   */
  export type PointRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * The data used to update PointRecords.
     */
    data: XOR<PointRecordUpdateManyMutationInput, PointRecordUncheckedUpdateManyInput>
    /**
     * Filter which PointRecords to update
     */
    where?: PointRecordWhereInput
    /**
     * Limit how many PointRecords to update.
     */
    limit?: number
  }

  /**
   * PointRecord upsert
   */
  export type PointRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the PointRecord to update in case it exists.
     */
    where: PointRecordWhereUniqueInput
    /**
     * In case the PointRecord found by the `where` argument doesn't exist, create a new PointRecord with this data.
     */
    create: XOR<PointRecordCreateInput, PointRecordUncheckedCreateInput>
    /**
     * In case the PointRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointRecordUpdateInput, PointRecordUncheckedUpdateInput>
  }

  /**
   * PointRecord delete
   */
  export type PointRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
    /**
     * Filter which PointRecord to delete.
     */
    where: PointRecordWhereUniqueInput
  }

  /**
   * PointRecord deleteMany
   */
  export type PointRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointRecords to delete
     */
    where?: PointRecordWhereInput
    /**
     * Limit how many PointRecords to delete.
     */
    limit?: number
  }

  /**
   * PointRecord without action
   */
  export type PointRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointRecord
     */
    select?: PointRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointRecord
     */
    omit?: PointRecordOmit<ExtArgs> | null
  }


  /**
   * Model CommunitySettings
   */

  export type AggregateCommunitySettings = {
    _count: CommunitySettingsCountAggregateOutputType | null
    _min: CommunitySettingsMinAggregateOutputType | null
    _max: CommunitySettingsMaxAggregateOutputType | null
  }

  export type CommunitySettingsMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunitySettingsMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    description: string | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunitySettingsCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    description: number
    coverImage: number
    features: number
    theme: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunitySettingsMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunitySettingsMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunitySettingsCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    description?: true
    coverImage?: true
    features?: true
    theme?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunitySettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySettings to aggregate.
     */
    where?: CommunitySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySettings to fetch.
     */
    orderBy?: CommunitySettingsOrderByWithRelationInput | CommunitySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunitySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunitySettings
    **/
    _count?: true | CommunitySettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunitySettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunitySettingsMaxAggregateInputType
  }

  export type GetCommunitySettingsAggregateType<T extends CommunitySettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunitySettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunitySettings[P]>
      : GetScalarType<T[P], AggregateCommunitySettings[P]>
  }




  export type CommunitySettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunitySettingsWhereInput
    orderBy?: CommunitySettingsOrderByWithAggregationInput | CommunitySettingsOrderByWithAggregationInput[]
    by: CommunitySettingsScalarFieldEnum[] | CommunitySettingsScalarFieldEnum
    having?: CommunitySettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunitySettingsCountAggregateInputType | true
    _min?: CommunitySettingsMinAggregateInputType
    _max?: CommunitySettingsMaxAggregateInputType
  }

  export type CommunitySettingsGroupByOutputType = {
    id: string
    orgId: string
    name: string | null
    description: string | null
    coverImage: string | null
    features: JsonValue
    theme: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CommunitySettingsCountAggregateOutputType | null
    _min: CommunitySettingsMinAggregateOutputType | null
    _max: CommunitySettingsMaxAggregateOutputType | null
  }

  type GetCommunitySettingsGroupByPayload<T extends CommunitySettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunitySettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunitySettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunitySettingsGroupByOutputType[P]>
            : GetScalarType<T[P], CommunitySettingsGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    features?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communitySettings"]>

  export type CommunitySettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    features?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communitySettings"]>

  export type CommunitySettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    features?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communitySettings"]>

  export type CommunitySettingsSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    description?: boolean
    coverImage?: boolean
    features?: boolean
    theme?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunitySettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "description" | "coverImage" | "features" | "theme" | "createdAt" | "updatedAt", ExtArgs["result"]["communitySettings"]>

  export type $CommunitySettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunitySettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string | null
      description: string | null
      coverImage: string | null
      features: Prisma.JsonValue
      theme: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communitySettings"]>
    composites: {}
  }

  type CommunitySettingsGetPayload<S extends boolean | null | undefined | CommunitySettingsDefaultArgs> = $Result.GetResult<Prisma.$CommunitySettingsPayload, S>

  type CommunitySettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunitySettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunitySettingsCountAggregateInputType | true
    }

  export interface CommunitySettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunitySettings'], meta: { name: 'CommunitySettings' } }
    /**
     * Find zero or one CommunitySettings that matches the filter.
     * @param {CommunitySettingsFindUniqueArgs} args - Arguments to find a CommunitySettings
     * @example
     * // Get one CommunitySettings
     * const communitySettings = await prisma.communitySettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunitySettingsFindUniqueArgs>(args: SelectSubset<T, CommunitySettingsFindUniqueArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunitySettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunitySettingsFindUniqueOrThrowArgs} args - Arguments to find a CommunitySettings
     * @example
     * // Get one CommunitySettings
     * const communitySettings = await prisma.communitySettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunitySettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunitySettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunitySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsFindFirstArgs} args - Arguments to find a CommunitySettings
     * @example
     * // Get one CommunitySettings
     * const communitySettings = await prisma.communitySettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunitySettingsFindFirstArgs>(args?: SelectSubset<T, CommunitySettingsFindFirstArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunitySettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsFindFirstOrThrowArgs} args - Arguments to find a CommunitySettings
     * @example
     * // Get one CommunitySettings
     * const communitySettings = await prisma.communitySettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunitySettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunitySettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunitySettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunitySettings
     * const communitySettings = await prisma.communitySettings.findMany()
     * 
     * // Get first 10 CommunitySettings
     * const communitySettings = await prisma.communitySettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communitySettingsWithIdOnly = await prisma.communitySettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunitySettingsFindManyArgs>(args?: SelectSubset<T, CommunitySettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunitySettings.
     * @param {CommunitySettingsCreateArgs} args - Arguments to create a CommunitySettings.
     * @example
     * // Create one CommunitySettings
     * const CommunitySettings = await prisma.communitySettings.create({
     *   data: {
     *     // ... data to create a CommunitySettings
     *   }
     * })
     * 
     */
    create<T extends CommunitySettingsCreateArgs>(args: SelectSubset<T, CommunitySettingsCreateArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunitySettings.
     * @param {CommunitySettingsCreateManyArgs} args - Arguments to create many CommunitySettings.
     * @example
     * // Create many CommunitySettings
     * const communitySettings = await prisma.communitySettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunitySettingsCreateManyArgs>(args?: SelectSubset<T, CommunitySettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunitySettings and returns the data saved in the database.
     * @param {CommunitySettingsCreateManyAndReturnArgs} args - Arguments to create many CommunitySettings.
     * @example
     * // Create many CommunitySettings
     * const communitySettings = await prisma.communitySettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunitySettings and only return the `id`
     * const communitySettingsWithIdOnly = await prisma.communitySettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunitySettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunitySettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunitySettings.
     * @param {CommunitySettingsDeleteArgs} args - Arguments to delete one CommunitySettings.
     * @example
     * // Delete one CommunitySettings
     * const CommunitySettings = await prisma.communitySettings.delete({
     *   where: {
     *     // ... filter to delete one CommunitySettings
     *   }
     * })
     * 
     */
    delete<T extends CommunitySettingsDeleteArgs>(args: SelectSubset<T, CommunitySettingsDeleteArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunitySettings.
     * @param {CommunitySettingsUpdateArgs} args - Arguments to update one CommunitySettings.
     * @example
     * // Update one CommunitySettings
     * const communitySettings = await prisma.communitySettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunitySettingsUpdateArgs>(args: SelectSubset<T, CommunitySettingsUpdateArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunitySettings.
     * @param {CommunitySettingsDeleteManyArgs} args - Arguments to filter CommunitySettings to delete.
     * @example
     * // Delete a few CommunitySettings
     * const { count } = await prisma.communitySettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunitySettingsDeleteManyArgs>(args?: SelectSubset<T, CommunitySettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunitySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunitySettings
     * const communitySettings = await prisma.communitySettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunitySettingsUpdateManyArgs>(args: SelectSubset<T, CommunitySettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunitySettings and returns the data updated in the database.
     * @param {CommunitySettingsUpdateManyAndReturnArgs} args - Arguments to update many CommunitySettings.
     * @example
     * // Update many CommunitySettings
     * const communitySettings = await prisma.communitySettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunitySettings and only return the `id`
     * const communitySettingsWithIdOnly = await prisma.communitySettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunitySettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunitySettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunitySettings.
     * @param {CommunitySettingsUpsertArgs} args - Arguments to update or create a CommunitySettings.
     * @example
     * // Update or create a CommunitySettings
     * const communitySettings = await prisma.communitySettings.upsert({
     *   create: {
     *     // ... data to create a CommunitySettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunitySettings we want to update
     *   }
     * })
     */
    upsert<T extends CommunitySettingsUpsertArgs>(args: SelectSubset<T, CommunitySettingsUpsertArgs<ExtArgs>>): Prisma__CommunitySettingsClient<$Result.GetResult<Prisma.$CommunitySettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunitySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsCountArgs} args - Arguments to filter CommunitySettings to count.
     * @example
     * // Count the number of CommunitySettings
     * const count = await prisma.communitySettings.count({
     *   where: {
     *     // ... the filter for the CommunitySettings we want to count
     *   }
     * })
    **/
    count<T extends CommunitySettingsCountArgs>(
      args?: Subset<T, CommunitySettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunitySettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunitySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunitySettingsAggregateArgs>(args: Subset<T, CommunitySettingsAggregateArgs>): Prisma.PrismaPromise<GetCommunitySettingsAggregateType<T>>

    /**
     * Group by CommunitySettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySettingsGroupByArgs} args - Group by arguments.
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
      T extends CommunitySettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunitySettingsGroupByArgs['orderBy'] }
        : { orderBy?: CommunitySettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunitySettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunitySettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunitySettings model
   */
  readonly fields: CommunitySettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunitySettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunitySettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommunitySettings model
   */
  interface CommunitySettingsFieldRefs {
    readonly id: FieldRef<"CommunitySettings", 'String'>
    readonly orgId: FieldRef<"CommunitySettings", 'String'>
    readonly name: FieldRef<"CommunitySettings", 'String'>
    readonly description: FieldRef<"CommunitySettings", 'String'>
    readonly coverImage: FieldRef<"CommunitySettings", 'String'>
    readonly features: FieldRef<"CommunitySettings", 'Json'>
    readonly theme: FieldRef<"CommunitySettings", 'Json'>
    readonly createdAt: FieldRef<"CommunitySettings", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunitySettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunitySettings findUnique
   */
  export type CommunitySettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySettings to fetch.
     */
    where: CommunitySettingsWhereUniqueInput
  }

  /**
   * CommunitySettings findUniqueOrThrow
   */
  export type CommunitySettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySettings to fetch.
     */
    where: CommunitySettingsWhereUniqueInput
  }

  /**
   * CommunitySettings findFirst
   */
  export type CommunitySettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySettings to fetch.
     */
    where?: CommunitySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySettings to fetch.
     */
    orderBy?: CommunitySettingsOrderByWithRelationInput | CommunitySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySettings.
     */
    cursor?: CommunitySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySettings.
     */
    distinct?: CommunitySettingsScalarFieldEnum | CommunitySettingsScalarFieldEnum[]
  }

  /**
   * CommunitySettings findFirstOrThrow
   */
  export type CommunitySettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySettings to fetch.
     */
    where?: CommunitySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySettings to fetch.
     */
    orderBy?: CommunitySettingsOrderByWithRelationInput | CommunitySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySettings.
     */
    cursor?: CommunitySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySettings.
     */
    distinct?: CommunitySettingsScalarFieldEnum | CommunitySettingsScalarFieldEnum[]
  }

  /**
   * CommunitySettings findMany
   */
  export type CommunitySettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySettings to fetch.
     */
    where?: CommunitySettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySettings to fetch.
     */
    orderBy?: CommunitySettingsOrderByWithRelationInput | CommunitySettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunitySettings.
     */
    cursor?: CommunitySettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySettings.
     */
    skip?: number
    distinct?: CommunitySettingsScalarFieldEnum | CommunitySettingsScalarFieldEnum[]
  }

  /**
   * CommunitySettings create
   */
  export type CommunitySettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunitySettings.
     */
    data: XOR<CommunitySettingsCreateInput, CommunitySettingsUncheckedCreateInput>
  }

  /**
   * CommunitySettings createMany
   */
  export type CommunitySettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunitySettings.
     */
    data: CommunitySettingsCreateManyInput | CommunitySettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunitySettings createManyAndReturn
   */
  export type CommunitySettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * The data used to create many CommunitySettings.
     */
    data: CommunitySettingsCreateManyInput | CommunitySettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunitySettings update
   */
  export type CommunitySettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunitySettings.
     */
    data: XOR<CommunitySettingsUpdateInput, CommunitySettingsUncheckedUpdateInput>
    /**
     * Choose, which CommunitySettings to update.
     */
    where: CommunitySettingsWhereUniqueInput
  }

  /**
   * CommunitySettings updateMany
   */
  export type CommunitySettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunitySettings.
     */
    data: XOR<CommunitySettingsUpdateManyMutationInput, CommunitySettingsUncheckedUpdateManyInput>
    /**
     * Filter which CommunitySettings to update
     */
    where?: CommunitySettingsWhereInput
    /**
     * Limit how many CommunitySettings to update.
     */
    limit?: number
  }

  /**
   * CommunitySettings updateManyAndReturn
   */
  export type CommunitySettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * The data used to update CommunitySettings.
     */
    data: XOR<CommunitySettingsUpdateManyMutationInput, CommunitySettingsUncheckedUpdateManyInput>
    /**
     * Filter which CommunitySettings to update
     */
    where?: CommunitySettingsWhereInput
    /**
     * Limit how many CommunitySettings to update.
     */
    limit?: number
  }

  /**
   * CommunitySettings upsert
   */
  export type CommunitySettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunitySettings to update in case it exists.
     */
    where: CommunitySettingsWhereUniqueInput
    /**
     * In case the CommunitySettings found by the `where` argument doesn't exist, create a new CommunitySettings with this data.
     */
    create: XOR<CommunitySettingsCreateInput, CommunitySettingsUncheckedCreateInput>
    /**
     * In case the CommunitySettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunitySettingsUpdateInput, CommunitySettingsUncheckedUpdateInput>
  }

  /**
   * CommunitySettings delete
   */
  export type CommunitySettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
    /**
     * Filter which CommunitySettings to delete.
     */
    where: CommunitySettingsWhereUniqueInput
  }

  /**
   * CommunitySettings deleteMany
   */
  export type CommunitySettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySettings to delete
     */
    where?: CommunitySettingsWhereInput
    /**
     * Limit how many CommunitySettings to delete.
     */
    limit?: number
  }

  /**
   * CommunitySettings without action
   */
  export type CommunitySettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySettings
     */
    select?: CommunitySettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySettings
     */
    omit?: CommunitySettingsOmit<ExtArgs> | null
  }


  /**
   * Model CommunityProfile
   */

  export type AggregateCommunityProfile = {
    _count: CommunityProfileCountAggregateOutputType | null
    _min: CommunityProfileMinAggregateOutputType | null
    _max: CommunityProfileMaxAggregateOutputType | null
  }

  export type CommunityProfileMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    displayName: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityProfileMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    userId: string | null
    displayName: string | null
    bio: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityProfileCountAggregateOutputType = {
    id: number
    orgId: number
    userId: number
    displayName: number
    bio: number
    avatar: number
    links: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityProfileMinAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    displayName?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityProfileMaxAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    displayName?: true
    bio?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityProfileCountAggregateInputType = {
    id?: true
    orgId?: true
    userId?: true
    displayName?: true
    bio?: true
    avatar?: true
    links?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityProfile to aggregate.
     */
    where?: CommunityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityProfiles to fetch.
     */
    orderBy?: CommunityProfileOrderByWithRelationInput | CommunityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityProfiles
    **/
    _count?: true | CommunityProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityProfileMaxAggregateInputType
  }

  export type GetCommunityProfileAggregateType<T extends CommunityProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityProfile[P]>
      : GetScalarType<T[P], AggregateCommunityProfile[P]>
  }




  export type CommunityProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityProfileWhereInput
    orderBy?: CommunityProfileOrderByWithAggregationInput | CommunityProfileOrderByWithAggregationInput[]
    by: CommunityProfileScalarFieldEnum[] | CommunityProfileScalarFieldEnum
    having?: CommunityProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityProfileCountAggregateInputType | true
    _min?: CommunityProfileMinAggregateInputType
    _max?: CommunityProfileMaxAggregateInputType
  }

  export type CommunityProfileGroupByOutputType = {
    id: string
    orgId: string
    userId: string
    displayName: string | null
    bio: string | null
    avatar: string | null
    links: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CommunityProfileCountAggregateOutputType | null
    _min: CommunityProfileMinAggregateOutputType | null
    _max: CommunityProfileMaxAggregateOutputType | null
  }

  type GetCommunityProfileGroupByPayload<T extends CommunityProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityProfileGroupByOutputType[P]>
        }
      >
    >


  export type CommunityProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    avatar?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityProfile"]>

  export type CommunityProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    avatar?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityProfile"]>

  export type CommunityProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    avatar?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityProfile"]>

  export type CommunityProfileSelectScalar = {
    id?: boolean
    orgId?: boolean
    userId?: boolean
    displayName?: boolean
    bio?: boolean
    avatar?: boolean
    links?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "userId" | "displayName" | "bio" | "avatar" | "links" | "createdAt" | "updatedAt", ExtArgs["result"]["communityProfile"]>

  export type $CommunityProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      userId: string
      displayName: string | null
      bio: string | null
      avatar: string | null
      links: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityProfile"]>
    composites: {}
  }

  type CommunityProfileGetPayload<S extends boolean | null | undefined | CommunityProfileDefaultArgs> = $Result.GetResult<Prisma.$CommunityProfilePayload, S>

  type CommunityProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityProfileCountAggregateInputType | true
    }

  export interface CommunityProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityProfile'], meta: { name: 'CommunityProfile' } }
    /**
     * Find zero or one CommunityProfile that matches the filter.
     * @param {CommunityProfileFindUniqueArgs} args - Arguments to find a CommunityProfile
     * @example
     * // Get one CommunityProfile
     * const communityProfile = await prisma.communityProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityProfileFindUniqueArgs>(args: SelectSubset<T, CommunityProfileFindUniqueArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityProfileFindUniqueOrThrowArgs} args - Arguments to find a CommunityProfile
     * @example
     * // Get one CommunityProfile
     * const communityProfile = await prisma.communityProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileFindFirstArgs} args - Arguments to find a CommunityProfile
     * @example
     * // Get one CommunityProfile
     * const communityProfile = await prisma.communityProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityProfileFindFirstArgs>(args?: SelectSubset<T, CommunityProfileFindFirstArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileFindFirstOrThrowArgs} args - Arguments to find a CommunityProfile
     * @example
     * // Get one CommunityProfile
     * const communityProfile = await prisma.communityProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityProfiles
     * const communityProfiles = await prisma.communityProfile.findMany()
     * 
     * // Get first 10 CommunityProfiles
     * const communityProfiles = await prisma.communityProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityProfileWithIdOnly = await prisma.communityProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityProfileFindManyArgs>(args?: SelectSubset<T, CommunityProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityProfile.
     * @param {CommunityProfileCreateArgs} args - Arguments to create a CommunityProfile.
     * @example
     * // Create one CommunityProfile
     * const CommunityProfile = await prisma.communityProfile.create({
     *   data: {
     *     // ... data to create a CommunityProfile
     *   }
     * })
     * 
     */
    create<T extends CommunityProfileCreateArgs>(args: SelectSubset<T, CommunityProfileCreateArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityProfiles.
     * @param {CommunityProfileCreateManyArgs} args - Arguments to create many CommunityProfiles.
     * @example
     * // Create many CommunityProfiles
     * const communityProfile = await prisma.communityProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityProfileCreateManyArgs>(args?: SelectSubset<T, CommunityProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityProfiles and returns the data saved in the database.
     * @param {CommunityProfileCreateManyAndReturnArgs} args - Arguments to create many CommunityProfiles.
     * @example
     * // Create many CommunityProfiles
     * const communityProfile = await prisma.communityProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityProfiles and only return the `id`
     * const communityProfileWithIdOnly = await prisma.communityProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityProfile.
     * @param {CommunityProfileDeleteArgs} args - Arguments to delete one CommunityProfile.
     * @example
     * // Delete one CommunityProfile
     * const CommunityProfile = await prisma.communityProfile.delete({
     *   where: {
     *     // ... filter to delete one CommunityProfile
     *   }
     * })
     * 
     */
    delete<T extends CommunityProfileDeleteArgs>(args: SelectSubset<T, CommunityProfileDeleteArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityProfile.
     * @param {CommunityProfileUpdateArgs} args - Arguments to update one CommunityProfile.
     * @example
     * // Update one CommunityProfile
     * const communityProfile = await prisma.communityProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityProfileUpdateArgs>(args: SelectSubset<T, CommunityProfileUpdateArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityProfiles.
     * @param {CommunityProfileDeleteManyArgs} args - Arguments to filter CommunityProfiles to delete.
     * @example
     * // Delete a few CommunityProfiles
     * const { count } = await prisma.communityProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityProfileDeleteManyArgs>(args?: SelectSubset<T, CommunityProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityProfiles
     * const communityProfile = await prisma.communityProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityProfileUpdateManyArgs>(args: SelectSubset<T, CommunityProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityProfiles and returns the data updated in the database.
     * @param {CommunityProfileUpdateManyAndReturnArgs} args - Arguments to update many CommunityProfiles.
     * @example
     * // Update many CommunityProfiles
     * const communityProfile = await prisma.communityProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityProfiles and only return the `id`
     * const communityProfileWithIdOnly = await prisma.communityProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityProfile.
     * @param {CommunityProfileUpsertArgs} args - Arguments to update or create a CommunityProfile.
     * @example
     * // Update or create a CommunityProfile
     * const communityProfile = await prisma.communityProfile.upsert({
     *   create: {
     *     // ... data to create a CommunityProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityProfile we want to update
     *   }
     * })
     */
    upsert<T extends CommunityProfileUpsertArgs>(args: SelectSubset<T, CommunityProfileUpsertArgs<ExtArgs>>): Prisma__CommunityProfileClient<$Result.GetResult<Prisma.$CommunityProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileCountArgs} args - Arguments to filter CommunityProfiles to count.
     * @example
     * // Count the number of CommunityProfiles
     * const count = await prisma.communityProfile.count({
     *   where: {
     *     // ... the filter for the CommunityProfiles we want to count
     *   }
     * })
    **/
    count<T extends CommunityProfileCountArgs>(
      args?: Subset<T, CommunityProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityProfileAggregateArgs>(args: Subset<T, CommunityProfileAggregateArgs>): Prisma.PrismaPromise<GetCommunityProfileAggregateType<T>>

    /**
     * Group by CommunityProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityProfileGroupByArgs} args - Group by arguments.
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
      T extends CommunityProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityProfileGroupByArgs['orderBy'] }
        : { orderBy?: CommunityProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityProfile model
   */
  readonly fields: CommunityProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommunityProfile model
   */
  interface CommunityProfileFieldRefs {
    readonly id: FieldRef<"CommunityProfile", 'String'>
    readonly orgId: FieldRef<"CommunityProfile", 'String'>
    readonly userId: FieldRef<"CommunityProfile", 'String'>
    readonly displayName: FieldRef<"CommunityProfile", 'String'>
    readonly bio: FieldRef<"CommunityProfile", 'String'>
    readonly avatar: FieldRef<"CommunityProfile", 'String'>
    readonly links: FieldRef<"CommunityProfile", 'Json'>
    readonly createdAt: FieldRef<"CommunityProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityProfile findUnique
   */
  export type CommunityProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter, which CommunityProfile to fetch.
     */
    where: CommunityProfileWhereUniqueInput
  }

  /**
   * CommunityProfile findUniqueOrThrow
   */
  export type CommunityProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter, which CommunityProfile to fetch.
     */
    where: CommunityProfileWhereUniqueInput
  }

  /**
   * CommunityProfile findFirst
   */
  export type CommunityProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter, which CommunityProfile to fetch.
     */
    where?: CommunityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityProfiles to fetch.
     */
    orderBy?: CommunityProfileOrderByWithRelationInput | CommunityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityProfiles.
     */
    cursor?: CommunityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityProfiles.
     */
    distinct?: CommunityProfileScalarFieldEnum | CommunityProfileScalarFieldEnum[]
  }

  /**
   * CommunityProfile findFirstOrThrow
   */
  export type CommunityProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter, which CommunityProfile to fetch.
     */
    where?: CommunityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityProfiles to fetch.
     */
    orderBy?: CommunityProfileOrderByWithRelationInput | CommunityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityProfiles.
     */
    cursor?: CommunityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityProfiles.
     */
    distinct?: CommunityProfileScalarFieldEnum | CommunityProfileScalarFieldEnum[]
  }

  /**
   * CommunityProfile findMany
   */
  export type CommunityProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter, which CommunityProfiles to fetch.
     */
    where?: CommunityProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityProfiles to fetch.
     */
    orderBy?: CommunityProfileOrderByWithRelationInput | CommunityProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityProfiles.
     */
    cursor?: CommunityProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityProfiles.
     */
    skip?: number
    distinct?: CommunityProfileScalarFieldEnum | CommunityProfileScalarFieldEnum[]
  }

  /**
   * CommunityProfile create
   */
  export type CommunityProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityProfile.
     */
    data: XOR<CommunityProfileCreateInput, CommunityProfileUncheckedCreateInput>
  }

  /**
   * CommunityProfile createMany
   */
  export type CommunityProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityProfiles.
     */
    data: CommunityProfileCreateManyInput | CommunityProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityProfile createManyAndReturn
   */
  export type CommunityProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityProfiles.
     */
    data: CommunityProfileCreateManyInput | CommunityProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityProfile update
   */
  export type CommunityProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityProfile.
     */
    data: XOR<CommunityProfileUpdateInput, CommunityProfileUncheckedUpdateInput>
    /**
     * Choose, which CommunityProfile to update.
     */
    where: CommunityProfileWhereUniqueInput
  }

  /**
   * CommunityProfile updateMany
   */
  export type CommunityProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityProfiles.
     */
    data: XOR<CommunityProfileUpdateManyMutationInput, CommunityProfileUncheckedUpdateManyInput>
    /**
     * Filter which CommunityProfiles to update
     */
    where?: CommunityProfileWhereInput
    /**
     * Limit how many CommunityProfiles to update.
     */
    limit?: number
  }

  /**
   * CommunityProfile updateManyAndReturn
   */
  export type CommunityProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * The data used to update CommunityProfiles.
     */
    data: XOR<CommunityProfileUpdateManyMutationInput, CommunityProfileUncheckedUpdateManyInput>
    /**
     * Filter which CommunityProfiles to update
     */
    where?: CommunityProfileWhereInput
    /**
     * Limit how many CommunityProfiles to update.
     */
    limit?: number
  }

  /**
   * CommunityProfile upsert
   */
  export type CommunityProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityProfile to update in case it exists.
     */
    where: CommunityProfileWhereUniqueInput
    /**
     * In case the CommunityProfile found by the `where` argument doesn't exist, create a new CommunityProfile with this data.
     */
    create: XOR<CommunityProfileCreateInput, CommunityProfileUncheckedCreateInput>
    /**
     * In case the CommunityProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityProfileUpdateInput, CommunityProfileUncheckedUpdateInput>
  }

  /**
   * CommunityProfile delete
   */
  export type CommunityProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
    /**
     * Filter which CommunityProfile to delete.
     */
    where: CommunityProfileWhereUniqueInput
  }

  /**
   * CommunityProfile deleteMany
   */
  export type CommunityProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityProfiles to delete
     */
    where?: CommunityProfileWhereInput
    /**
     * Limit how many CommunityProfiles to delete.
     */
    limit?: number
  }

  /**
   * CommunityProfile without action
   */
  export type CommunityProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityProfile
     */
    select?: CommunityProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityProfile
     */
    omit?: CommunityProfileOmit<ExtArgs> | null
  }


  /**
   * Model CommunityEvent
   */

  export type AggregateCommunityEvent = {
    _count: CommunityEventCountAggregateOutputType | null
    _min: CommunityEventMinAggregateOutputType | null
    _max: CommunityEventMaxAggregateOutputType | null
  }

  export type CommunityEventMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    coverImage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityEventMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    createdBy: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    location: string | null
    coverImage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityEventCountAggregateOutputType = {
    id: number
    orgId: number
    createdBy: number
    title: number
    description: number
    startDate: number
    endDate: number
    location: number
    coverImage: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityEventMinAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    coverImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityEventMaxAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    coverImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityEventCountAggregateInputType = {
    id?: true
    orgId?: true
    createdBy?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    location?: true
    coverImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityEvent to aggregate.
     */
    where?: CommunityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityEvents to fetch.
     */
    orderBy?: CommunityEventOrderByWithRelationInput | CommunityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityEvents
    **/
    _count?: true | CommunityEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityEventMaxAggregateInputType
  }

  export type GetCommunityEventAggregateType<T extends CommunityEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityEvent[P]>
      : GetScalarType<T[P], AggregateCommunityEvent[P]>
  }




  export type CommunityEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityEventWhereInput
    orderBy?: CommunityEventOrderByWithAggregationInput | CommunityEventOrderByWithAggregationInput[]
    by: CommunityEventScalarFieldEnum[] | CommunityEventScalarFieldEnum
    having?: CommunityEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityEventCountAggregateInputType | true
    _min?: CommunityEventMinAggregateInputType
    _max?: CommunityEventMaxAggregateInputType
  }

  export type CommunityEventGroupByOutputType = {
    id: string
    orgId: string
    createdBy: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date | null
    location: string | null
    coverImage: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommunityEventCountAggregateOutputType | null
    _min: CommunityEventMinAggregateOutputType | null
    _max: CommunityEventMaxAggregateOutputType | null
  }

  type GetCommunityEventGroupByPayload<T extends CommunityEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityEventGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityEventGroupByOutputType[P]>
        }
      >
    >


  export type CommunityEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    coverImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityEvent"]>

  export type CommunityEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    coverImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityEvent"]>

  export type CommunityEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    coverImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityEvent"]>

  export type CommunityEventSelectScalar = {
    id?: boolean
    orgId?: boolean
    createdBy?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    location?: boolean
    coverImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "createdBy" | "title" | "description" | "startDate" | "endDate" | "location" | "coverImage" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["communityEvent"]>

  export type $CommunityEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      createdBy: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date | null
      location: string | null
      coverImage: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityEvent"]>
    composites: {}
  }

  type CommunityEventGetPayload<S extends boolean | null | undefined | CommunityEventDefaultArgs> = $Result.GetResult<Prisma.$CommunityEventPayload, S>

  type CommunityEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityEventCountAggregateInputType | true
    }

  export interface CommunityEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityEvent'], meta: { name: 'CommunityEvent' } }
    /**
     * Find zero or one CommunityEvent that matches the filter.
     * @param {CommunityEventFindUniqueArgs} args - Arguments to find a CommunityEvent
     * @example
     * // Get one CommunityEvent
     * const communityEvent = await prisma.communityEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityEventFindUniqueArgs>(args: SelectSubset<T, CommunityEventFindUniqueArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityEventFindUniqueOrThrowArgs} args - Arguments to find a CommunityEvent
     * @example
     * // Get one CommunityEvent
     * const communityEvent = await prisma.communityEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventFindFirstArgs} args - Arguments to find a CommunityEvent
     * @example
     * // Get one CommunityEvent
     * const communityEvent = await prisma.communityEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityEventFindFirstArgs>(args?: SelectSubset<T, CommunityEventFindFirstArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventFindFirstOrThrowArgs} args - Arguments to find a CommunityEvent
     * @example
     * // Get one CommunityEvent
     * const communityEvent = await prisma.communityEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityEvents
     * const communityEvents = await prisma.communityEvent.findMany()
     * 
     * // Get first 10 CommunityEvents
     * const communityEvents = await prisma.communityEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityEventWithIdOnly = await prisma.communityEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityEventFindManyArgs>(args?: SelectSubset<T, CommunityEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityEvent.
     * @param {CommunityEventCreateArgs} args - Arguments to create a CommunityEvent.
     * @example
     * // Create one CommunityEvent
     * const CommunityEvent = await prisma.communityEvent.create({
     *   data: {
     *     // ... data to create a CommunityEvent
     *   }
     * })
     * 
     */
    create<T extends CommunityEventCreateArgs>(args: SelectSubset<T, CommunityEventCreateArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityEvents.
     * @param {CommunityEventCreateManyArgs} args - Arguments to create many CommunityEvents.
     * @example
     * // Create many CommunityEvents
     * const communityEvent = await prisma.communityEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityEventCreateManyArgs>(args?: SelectSubset<T, CommunityEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityEvents and returns the data saved in the database.
     * @param {CommunityEventCreateManyAndReturnArgs} args - Arguments to create many CommunityEvents.
     * @example
     * // Create many CommunityEvents
     * const communityEvent = await prisma.communityEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityEvents and only return the `id`
     * const communityEventWithIdOnly = await prisma.communityEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityEvent.
     * @param {CommunityEventDeleteArgs} args - Arguments to delete one CommunityEvent.
     * @example
     * // Delete one CommunityEvent
     * const CommunityEvent = await prisma.communityEvent.delete({
     *   where: {
     *     // ... filter to delete one CommunityEvent
     *   }
     * })
     * 
     */
    delete<T extends CommunityEventDeleteArgs>(args: SelectSubset<T, CommunityEventDeleteArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityEvent.
     * @param {CommunityEventUpdateArgs} args - Arguments to update one CommunityEvent.
     * @example
     * // Update one CommunityEvent
     * const communityEvent = await prisma.communityEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityEventUpdateArgs>(args: SelectSubset<T, CommunityEventUpdateArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityEvents.
     * @param {CommunityEventDeleteManyArgs} args - Arguments to filter CommunityEvents to delete.
     * @example
     * // Delete a few CommunityEvents
     * const { count } = await prisma.communityEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityEventDeleteManyArgs>(args?: SelectSubset<T, CommunityEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityEvents
     * const communityEvent = await prisma.communityEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityEventUpdateManyArgs>(args: SelectSubset<T, CommunityEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityEvents and returns the data updated in the database.
     * @param {CommunityEventUpdateManyAndReturnArgs} args - Arguments to update many CommunityEvents.
     * @example
     * // Update many CommunityEvents
     * const communityEvent = await prisma.communityEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityEvents and only return the `id`
     * const communityEventWithIdOnly = await prisma.communityEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityEvent.
     * @param {CommunityEventUpsertArgs} args - Arguments to update or create a CommunityEvent.
     * @example
     * // Update or create a CommunityEvent
     * const communityEvent = await prisma.communityEvent.upsert({
     *   create: {
     *     // ... data to create a CommunityEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityEvent we want to update
     *   }
     * })
     */
    upsert<T extends CommunityEventUpsertArgs>(args: SelectSubset<T, CommunityEventUpsertArgs<ExtArgs>>): Prisma__CommunityEventClient<$Result.GetResult<Prisma.$CommunityEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventCountArgs} args - Arguments to filter CommunityEvents to count.
     * @example
     * // Count the number of CommunityEvents
     * const count = await prisma.communityEvent.count({
     *   where: {
     *     // ... the filter for the CommunityEvents we want to count
     *   }
     * })
    **/
    count<T extends CommunityEventCountArgs>(
      args?: Subset<T, CommunityEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityEventAggregateArgs>(args: Subset<T, CommunityEventAggregateArgs>): Prisma.PrismaPromise<GetCommunityEventAggregateType<T>>

    /**
     * Group by CommunityEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityEventGroupByArgs} args - Group by arguments.
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
      T extends CommunityEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityEventGroupByArgs['orderBy'] }
        : { orderBy?: CommunityEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityEvent model
   */
  readonly fields: CommunityEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommunityEvent model
   */
  interface CommunityEventFieldRefs {
    readonly id: FieldRef<"CommunityEvent", 'String'>
    readonly orgId: FieldRef<"CommunityEvent", 'String'>
    readonly createdBy: FieldRef<"CommunityEvent", 'String'>
    readonly title: FieldRef<"CommunityEvent", 'String'>
    readonly description: FieldRef<"CommunityEvent", 'String'>
    readonly startDate: FieldRef<"CommunityEvent", 'DateTime'>
    readonly endDate: FieldRef<"CommunityEvent", 'DateTime'>
    readonly location: FieldRef<"CommunityEvent", 'String'>
    readonly coverImage: FieldRef<"CommunityEvent", 'String'>
    readonly isDeleted: FieldRef<"CommunityEvent", 'Boolean'>
    readonly createdAt: FieldRef<"CommunityEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityEvent findUnique
   */
  export type CommunityEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter, which CommunityEvent to fetch.
     */
    where: CommunityEventWhereUniqueInput
  }

  /**
   * CommunityEvent findUniqueOrThrow
   */
  export type CommunityEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter, which CommunityEvent to fetch.
     */
    where: CommunityEventWhereUniqueInput
  }

  /**
   * CommunityEvent findFirst
   */
  export type CommunityEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter, which CommunityEvent to fetch.
     */
    where?: CommunityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityEvents to fetch.
     */
    orderBy?: CommunityEventOrderByWithRelationInput | CommunityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityEvents.
     */
    cursor?: CommunityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityEvents.
     */
    distinct?: CommunityEventScalarFieldEnum | CommunityEventScalarFieldEnum[]
  }

  /**
   * CommunityEvent findFirstOrThrow
   */
  export type CommunityEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter, which CommunityEvent to fetch.
     */
    where?: CommunityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityEvents to fetch.
     */
    orderBy?: CommunityEventOrderByWithRelationInput | CommunityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityEvents.
     */
    cursor?: CommunityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityEvents.
     */
    distinct?: CommunityEventScalarFieldEnum | CommunityEventScalarFieldEnum[]
  }

  /**
   * CommunityEvent findMany
   */
  export type CommunityEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter, which CommunityEvents to fetch.
     */
    where?: CommunityEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityEvents to fetch.
     */
    orderBy?: CommunityEventOrderByWithRelationInput | CommunityEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityEvents.
     */
    cursor?: CommunityEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityEvents.
     */
    skip?: number
    distinct?: CommunityEventScalarFieldEnum | CommunityEventScalarFieldEnum[]
  }

  /**
   * CommunityEvent create
   */
  export type CommunityEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityEvent.
     */
    data: XOR<CommunityEventCreateInput, CommunityEventUncheckedCreateInput>
  }

  /**
   * CommunityEvent createMany
   */
  export type CommunityEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityEvents.
     */
    data: CommunityEventCreateManyInput | CommunityEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityEvent createManyAndReturn
   */
  export type CommunityEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityEvents.
     */
    data: CommunityEventCreateManyInput | CommunityEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityEvent update
   */
  export type CommunityEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityEvent.
     */
    data: XOR<CommunityEventUpdateInput, CommunityEventUncheckedUpdateInput>
    /**
     * Choose, which CommunityEvent to update.
     */
    where: CommunityEventWhereUniqueInput
  }

  /**
   * CommunityEvent updateMany
   */
  export type CommunityEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityEvents.
     */
    data: XOR<CommunityEventUpdateManyMutationInput, CommunityEventUncheckedUpdateManyInput>
    /**
     * Filter which CommunityEvents to update
     */
    where?: CommunityEventWhereInput
    /**
     * Limit how many CommunityEvents to update.
     */
    limit?: number
  }

  /**
   * CommunityEvent updateManyAndReturn
   */
  export type CommunityEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * The data used to update CommunityEvents.
     */
    data: XOR<CommunityEventUpdateManyMutationInput, CommunityEventUncheckedUpdateManyInput>
    /**
     * Filter which CommunityEvents to update
     */
    where?: CommunityEventWhereInput
    /**
     * Limit how many CommunityEvents to update.
     */
    limit?: number
  }

  /**
   * CommunityEvent upsert
   */
  export type CommunityEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityEvent to update in case it exists.
     */
    where: CommunityEventWhereUniqueInput
    /**
     * In case the CommunityEvent found by the `where` argument doesn't exist, create a new CommunityEvent with this data.
     */
    create: XOR<CommunityEventCreateInput, CommunityEventUncheckedCreateInput>
    /**
     * In case the CommunityEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityEventUpdateInput, CommunityEventUncheckedUpdateInput>
  }

  /**
   * CommunityEvent delete
   */
  export type CommunityEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
    /**
     * Filter which CommunityEvent to delete.
     */
    where: CommunityEventWhereUniqueInput
  }

  /**
   * CommunityEvent deleteMany
   */
  export type CommunityEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityEvents to delete
     */
    where?: CommunityEventWhereInput
    /**
     * Limit how many CommunityEvents to delete.
     */
    limit?: number
  }

  /**
   * CommunityEvent without action
   */
  export type CommunityEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityEvent
     */
    select?: CommunityEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityEvent
     */
    omit?: CommunityEventOmit<ExtArgs> | null
  }


  /**
   * Model CommunityMember
   */

  export type AggregateCommunityMember = {
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  export type CommunityMemberMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    contactId: string | null
    userId: string | null
    invitedBy: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMemberMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    email: string | null
    contactId: string | null
    userId: string | null
    invitedBy: string | null
    role: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMemberCountAggregateOutputType = {
    id: number
    orgId: number
    email: number
    contactId: number
    userId: number
    invitedBy: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityMemberMinAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    contactId?: true
    userId?: true
    invitedBy?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMemberMaxAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    contactId?: true
    userId?: true
    invitedBy?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMemberCountAggregateInputType = {
    id?: true
    orgId?: true
    email?: true
    contactId?: true
    userId?: true
    invitedBy?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMember to aggregate.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityMembers
    **/
    _count?: true | CommunityMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type GetCommunityMemberAggregateType<T extends CommunityMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityMember[P]>
      : GetScalarType<T[P], AggregateCommunityMember[P]>
  }




  export type CommunityMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithAggregationInput | CommunityMemberOrderByWithAggregationInput[]
    by: CommunityMemberScalarFieldEnum[] | CommunityMemberScalarFieldEnum
    having?: CommunityMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityMemberCountAggregateInputType | true
    _min?: CommunityMemberMinAggregateInputType
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type CommunityMemberGroupByOutputType = {
    id: string
    orgId: string
    email: string | null
    contactId: string | null
    userId: string | null
    invitedBy: string | null
    role: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  type GetCommunityMemberGroupByPayload<T extends CommunityMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
        }
      >
    >


  export type CommunityMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    contactId?: boolean
    userId?: boolean
    invitedBy?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    contactId?: boolean
    userId?: boolean
    invitedBy?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    email?: boolean
    contactId?: boolean
    userId?: boolean
    invitedBy?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectScalar = {
    id?: boolean
    orgId?: boolean
    email?: boolean
    contactId?: boolean
    userId?: boolean
    invitedBy?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "email" | "contactId" | "userId" | "invitedBy" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["communityMember"]>

  export type $CommunityMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      email: string | null
      contactId: string | null
      userId: string | null
      invitedBy: string | null
      role: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityMember"]>
    composites: {}
  }

  type CommunityMemberGetPayload<S extends boolean | null | undefined | CommunityMemberDefaultArgs> = $Result.GetResult<Prisma.$CommunityMemberPayload, S>

  type CommunityMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityMemberCountAggregateInputType | true
    }

  export interface CommunityMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityMember'], meta: { name: 'CommunityMember' } }
    /**
     * Find zero or one CommunityMember that matches the filter.
     * @param {CommunityMemberFindUniqueArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityMemberFindUniqueArgs>(args: SelectSubset<T, CommunityMemberFindUniqueArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityMemberFindUniqueOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityMemberFindFirstArgs>(args?: SelectSubset<T, CommunityMemberFindFirstArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany()
     * 
     * // Get first 10 CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityMemberFindManyArgs>(args?: SelectSubset<T, CommunityMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityMember.
     * @param {CommunityMemberCreateArgs} args - Arguments to create a CommunityMember.
     * @example
     * // Create one CommunityMember
     * const CommunityMember = await prisma.communityMember.create({
     *   data: {
     *     // ... data to create a CommunityMember
     *   }
     * })
     * 
     */
    create<T extends CommunityMemberCreateArgs>(args: SelectSubset<T, CommunityMemberCreateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityMembers.
     * @param {CommunityMemberCreateManyArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityMemberCreateManyArgs>(args?: SelectSubset<T, CommunityMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityMembers and returns the data saved in the database.
     * @param {CommunityMemberCreateManyAndReturnArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityMember.
     * @param {CommunityMemberDeleteArgs} args - Arguments to delete one CommunityMember.
     * @example
     * // Delete one CommunityMember
     * const CommunityMember = await prisma.communityMember.delete({
     *   where: {
     *     // ... filter to delete one CommunityMember
     *   }
     * })
     * 
     */
    delete<T extends CommunityMemberDeleteArgs>(args: SelectSubset<T, CommunityMemberDeleteArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityMember.
     * @param {CommunityMemberUpdateArgs} args - Arguments to update one CommunityMember.
     * @example
     * // Update one CommunityMember
     * const communityMember = await prisma.communityMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityMemberUpdateArgs>(args: SelectSubset<T, CommunityMemberUpdateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityMembers.
     * @param {CommunityMemberDeleteManyArgs} args - Arguments to filter CommunityMembers to delete.
     * @example
     * // Delete a few CommunityMembers
     * const { count } = await prisma.communityMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityMemberDeleteManyArgs>(args?: SelectSubset<T, CommunityMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityMemberUpdateManyArgs>(args: SelectSubset<T, CommunityMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers and returns the data updated in the database.
     * @param {CommunityMemberUpdateManyAndReturnArgs} args - Arguments to update many CommunityMembers.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityMember.
     * @param {CommunityMemberUpsertArgs} args - Arguments to update or create a CommunityMember.
     * @example
     * // Update or create a CommunityMember
     * const communityMember = await prisma.communityMember.upsert({
     *   create: {
     *     // ... data to create a CommunityMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityMember we want to update
     *   }
     * })
     */
    upsert<T extends CommunityMemberUpsertArgs>(args: SelectSubset<T, CommunityMemberUpsertArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberCountArgs} args - Arguments to filter CommunityMembers to count.
     * @example
     * // Count the number of CommunityMembers
     * const count = await prisma.communityMember.count({
     *   where: {
     *     // ... the filter for the CommunityMembers we want to count
     *   }
     * })
    **/
    count<T extends CommunityMemberCountArgs>(
      args?: Subset<T, CommunityMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityMemberAggregateArgs>(args: Subset<T, CommunityMemberAggregateArgs>): Prisma.PrismaPromise<GetCommunityMemberAggregateType<T>>

    /**
     * Group by CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberGroupByArgs} args - Group by arguments.
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
      T extends CommunityMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityMemberGroupByArgs['orderBy'] }
        : { orderBy?: CommunityMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityMember model
   */
  readonly fields: CommunityMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommunityMember model
   */
  interface CommunityMemberFieldRefs {
    readonly id: FieldRef<"CommunityMember", 'String'>
    readonly orgId: FieldRef<"CommunityMember", 'String'>
    readonly email: FieldRef<"CommunityMember", 'String'>
    readonly contactId: FieldRef<"CommunityMember", 'String'>
    readonly userId: FieldRef<"CommunityMember", 'String'>
    readonly invitedBy: FieldRef<"CommunityMember", 'String'>
    readonly role: FieldRef<"CommunityMember", 'String'>
    readonly status: FieldRef<"CommunityMember", 'String'>
    readonly createdAt: FieldRef<"CommunityMember", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityMember findUnique
   */
  export type CommunityMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findUniqueOrThrow
   */
  export type CommunityMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findFirst
   */
  export type CommunityMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findFirstOrThrow
   */
  export type CommunityMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findMany
   */
  export type CommunityMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember create
   */
  export type CommunityMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityMember.
     */
    data: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
  }

  /**
   * CommunityMember createMany
   */
  export type CommunityMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityMember createManyAndReturn
   */
  export type CommunityMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityMember update
   */
  export type CommunityMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityMember.
     */
    data: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
    /**
     * Choose, which CommunityMember to update.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember updateMany
   */
  export type CommunityMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
  }

  /**
   * CommunityMember updateManyAndReturn
   */
  export type CommunityMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
  }

  /**
   * CommunityMember upsert
   */
  export type CommunityMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityMember to update in case it exists.
     */
    where: CommunityMemberWhereUniqueInput
    /**
     * In case the CommunityMember found by the `where` argument doesn't exist, create a new CommunityMember with this data.
     */
    create: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
    /**
     * In case the CommunityMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
  }

  /**
   * CommunityMember delete
   */
  export type CommunityMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Filter which CommunityMember to delete.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember deleteMany
   */
  export type CommunityMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMembers to delete
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to delete.
     */
    limit?: number
  }

  /**
   * CommunityMember without action
   */
  export type CommunityMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
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


  export const PostScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    contactId: 'contactId',
    groupId: 'groupId',
    text: 'text',
    postColor: 'postColor',
    attachments: 'attachments',
    likesCount: 'likesCount',
    isDeleted: 'isDeleted',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    orgId: 'orgId',
    userId: 'userId',
    contactId: 'contactId',
    text: 'text',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    name: 'name',
    description: 'description',
    coverImage: 'coverImage',
    privacy: 'privacy',
    isDeleted: 'isDeleted',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    icon: 'icon',
    points: 'points',
    isPublic: 'isPublic',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const UserBadgeScalarFieldEnum: {
    id: 'id',
    badgeId: 'badgeId',
    orgId: 'orgId',
    userId: 'userId',
    awardedBy: 'awardedBy',
    awardedAt: 'awardedAt'
  };

  export type UserBadgeScalarFieldEnum = (typeof UserBadgeScalarFieldEnum)[keyof typeof UserBadgeScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    followerId: 'followerId',
    followingId: 'followingId',
    createdAt: 'createdAt'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const CommunityActivityScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CommunityActivityScalarFieldEnum = (typeof CommunityActivityScalarFieldEnum)[keyof typeof CommunityActivityScalarFieldEnum]


  export const PointRecordScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    points: 'points',
    reason: 'reason',
    awardedBy: 'awardedBy',
    createdAt: 'createdAt'
  };

  export type PointRecordScalarFieldEnum = (typeof PointRecordScalarFieldEnum)[keyof typeof PointRecordScalarFieldEnum]


  export const CommunitySettingsScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    description: 'description',
    coverImage: 'coverImage',
    features: 'features',
    theme: 'theme',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunitySettingsScalarFieldEnum = (typeof CommunitySettingsScalarFieldEnum)[keyof typeof CommunitySettingsScalarFieldEnum]


  export const CommunityProfileScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    userId: 'userId',
    displayName: 'displayName',
    bio: 'bio',
    avatar: 'avatar',
    links: 'links',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityProfileScalarFieldEnum = (typeof CommunityProfileScalarFieldEnum)[keyof typeof CommunityProfileScalarFieldEnum]


  export const CommunityEventScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    createdBy: 'createdBy',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    location: 'location',
    coverImage: 'coverImage',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityEventScalarFieldEnum = (typeof CommunityEventScalarFieldEnum)[keyof typeof CommunityEventScalarFieldEnum]


  export const CommunityMemberScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    email: 'email',
    contactId: 'contactId',
    userId: 'userId',
    invitedBy: 'invitedBy',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityMemberScalarFieldEnum = (typeof CommunityMemberScalarFieldEnum)[keyof typeof CommunityMemberScalarFieldEnum]


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


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    orgId?: UuidFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    contactId?: UuidNullableFilter<"Post"> | string | null
    groupId?: UuidNullableFilter<"Post"> | string | null
    text?: StringNullableFilter<"Post"> | string | null
    postColor?: StringNullableFilter<"Post"> | string | null
    attachments?: JsonFilter<"Post">
    likesCount?: IntFilter<"Post"> | number
    isDeleted?: BoolFilter<"Post"> | boolean
    metadata?: JsonFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    postColor?: SortOrderInput | SortOrder
    attachments?: SortOrder
    likesCount?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    orgId?: UuidFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    contactId?: UuidNullableFilter<"Post"> | string | null
    groupId?: UuidNullableFilter<"Post"> | string | null
    text?: StringNullableFilter<"Post"> | string | null
    postColor?: StringNullableFilter<"Post"> | string | null
    attachments?: JsonFilter<"Post">
    likesCount?: IntFilter<"Post"> | number
    isDeleted?: BoolFilter<"Post"> | boolean
    metadata?: JsonFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    comments?: CommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    postColor?: SortOrderInput | SortOrder
    attachments?: SortOrder
    likesCount?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    orgId?: UuidWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    contactId?: UuidNullableWithAggregatesFilter<"Post"> | string | null
    groupId?: UuidNullableWithAggregatesFilter<"Post"> | string | null
    text?: StringNullableWithAggregatesFilter<"Post"> | string | null
    postColor?: StringNullableWithAggregatesFilter<"Post"> | string | null
    attachments?: JsonWithAggregatesFilter<"Post">
    likesCount?: IntWithAggregatesFilter<"Post"> | number
    isDeleted?: BoolWithAggregatesFilter<"Post"> | boolean
    metadata?: JsonWithAggregatesFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: UuidFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    orgId?: UuidFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contactId?: UuidNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    isDeleted?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    text?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: UuidFilter<"Comment"> | string
    orgId?: UuidFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contactId?: UuidNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    isDeleted?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    text?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Comment"> | string
    postId?: UuidWithAggregatesFilter<"Comment"> | string
    orgId?: UuidWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    contactId?: UuidNullableWithAggregatesFilter<"Comment"> | string | null
    text?: StringWithAggregatesFilter<"Comment"> | string
    isDeleted?: BoolWithAggregatesFilter<"Comment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: UuidFilter<"Group"> | string
    orgId?: UuidFilter<"Group"> | string
    createdBy?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    coverImage?: StringNullableFilter<"Group"> | string | null
    privacy?: StringFilter<"Group"> | string
    isDeleted?: BoolFilter<"Group"> | boolean
    metadata?: JsonFilter<"Group">
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    privacy?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: GroupMemberOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    orgId?: UuidFilter<"Group"> | string
    createdBy?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    description?: StringNullableFilter<"Group"> | string | null
    coverImage?: StringNullableFilter<"Group"> | string | null
    privacy?: StringFilter<"Group"> | string
    isDeleted?: BoolFilter<"Group"> | boolean
    metadata?: JsonFilter<"Group">
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    members?: GroupMemberListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    privacy?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Group"> | string
    orgId?: UuidWithAggregatesFilter<"Group"> | string
    createdBy?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    description?: StringNullableWithAggregatesFilter<"Group"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Group"> | string | null
    privacy?: StringWithAggregatesFilter<"Group"> | string
    isDeleted?: BoolWithAggregatesFilter<"Group"> | boolean
    metadata?: JsonWithAggregatesFilter<"Group">
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type GroupMemberWhereInput = {
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
    AND?: GroupMemberWhereInput | GroupMemberWhereInput[]
    OR?: GroupMemberWhereInput[]
    NOT?: GroupMemberWhereInput | GroupMemberWhereInput[]
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "groupId_userId">

  export type GroupMemberOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    OR?: GroupMemberScalarWhereWithAggregatesInput[]
    NOT?: GroupMemberScalarWhereWithAggregatesInput | GroupMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GroupMember"> | string
    groupId?: UuidWithAggregatesFilter<"GroupMember"> | string
    userId?: StringWithAggregatesFilter<"GroupMember"> | string
    role?: StringWithAggregatesFilter<"GroupMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"GroupMember"> | Date | string
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: UuidFilter<"Badge"> | string
    orgId?: UuidFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringNullableFilter<"Badge"> | string | null
    icon?: StringNullableFilter<"Badge"> | string | null
    points?: IntFilter<"Badge"> | number
    isPublic?: BoolFilter<"Badge"> | boolean
    metadata?: JsonFilter<"Badge">
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    awardedTo?: UserBadgeListRelationFilter
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    points?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    awardedTo?: UserBadgeOrderByRelationAggregateInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    orgId?: UuidFilter<"Badge"> | string
    name?: StringFilter<"Badge"> | string
    description?: StringNullableFilter<"Badge"> | string | null
    icon?: StringNullableFilter<"Badge"> | string | null
    points?: IntFilter<"Badge"> | number
    isPublic?: BoolFilter<"Badge"> | boolean
    metadata?: JsonFilter<"Badge">
    createdAt?: DateTimeFilter<"Badge"> | Date | string
    awardedTo?: UserBadgeListRelationFilter
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    points?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Badge"> | string
    orgId?: UuidWithAggregatesFilter<"Badge"> | string
    name?: StringWithAggregatesFilter<"Badge"> | string
    description?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    points?: IntWithAggregatesFilter<"Badge"> | number
    isPublic?: BoolWithAggregatesFilter<"Badge"> | boolean
    metadata?: JsonWithAggregatesFilter<"Badge">
    createdAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type UserBadgeWhereInput = {
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    id?: UuidFilter<"UserBadge"> | string
    badgeId?: UuidFilter<"UserBadge"> | string
    orgId?: UuidFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    awardedBy?: StringFilter<"UserBadge"> | string
    awardedAt?: DateTimeFilter<"UserBadge"> | Date | string
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }

  export type UserBadgeOrderByWithRelationInput = {
    id?: SortOrder
    badgeId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    awardedBy?: SortOrder
    awardedAt?: SortOrder
    badge?: BadgeOrderByWithRelationInput
  }

  export type UserBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserBadgeWhereInput | UserBadgeWhereInput[]
    OR?: UserBadgeWhereInput[]
    NOT?: UserBadgeWhereInput | UserBadgeWhereInput[]
    badgeId?: UuidFilter<"UserBadge"> | string
    orgId?: UuidFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    awardedBy?: StringFilter<"UserBadge"> | string
    awardedAt?: DateTimeFilter<"UserBadge"> | Date | string
    badge?: XOR<BadgeScalarRelationFilter, BadgeWhereInput>
  }, "id">

  export type UserBadgeOrderByWithAggregationInput = {
    id?: SortOrder
    badgeId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    awardedBy?: SortOrder
    awardedAt?: SortOrder
    _count?: UserBadgeCountOrderByAggregateInput
    _max?: UserBadgeMaxOrderByAggregateInput
    _min?: UserBadgeMinOrderByAggregateInput
  }

  export type UserBadgeScalarWhereWithAggregatesInput = {
    AND?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    OR?: UserBadgeScalarWhereWithAggregatesInput[]
    NOT?: UserBadgeScalarWhereWithAggregatesInput | UserBadgeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserBadge"> | string
    badgeId?: UuidWithAggregatesFilter<"UserBadge"> | string
    orgId?: UuidWithAggregatesFilter<"UserBadge"> | string
    userId?: StringWithAggregatesFilter<"UserBadge"> | string
    awardedBy?: StringWithAggregatesFilter<"UserBadge"> | string
    awardedAt?: DateTimeWithAggregatesFilter<"UserBadge"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    id?: UuidFilter<"Follow"> | string
    orgId?: UuidFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_followerId_followingId?: FollowOrgId_followerId_followingIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    orgId?: UuidFilter<"Follow"> | string
    followerId?: StringFilter<"Follow"> | string
    followingId?: StringFilter<"Follow"> | string
    createdAt?: DateTimeFilter<"Follow"> | Date | string
  }, "id" | "orgId_followerId_followingId">

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Follow"> | string
    orgId?: UuidWithAggregatesFilter<"Follow"> | string
    followerId?: StringWithAggregatesFilter<"Follow"> | string
    followingId?: StringWithAggregatesFilter<"Follow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Follow"> | Date | string
  }

  export type CommunityActivityWhereInput = {
    AND?: CommunityActivityWhereInput | CommunityActivityWhereInput[]
    OR?: CommunityActivityWhereInput[]
    NOT?: CommunityActivityWhereInput | CommunityActivityWhereInput[]
    id?: UuidFilter<"CommunityActivity"> | string
    orgId?: UuidFilter<"CommunityActivity"> | string
    userId?: StringFilter<"CommunityActivity"> | string
    action?: StringFilter<"CommunityActivity"> | string
    entityType?: StringNullableFilter<"CommunityActivity"> | string | null
    entityId?: StringNullableFilter<"CommunityActivity"> | string | null
    description?: StringNullableFilter<"CommunityActivity"> | string | null
    createdAt?: DateTimeFilter<"CommunityActivity"> | Date | string
  }

  export type CommunityActivityOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CommunityActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityActivityWhereInput | CommunityActivityWhereInput[]
    OR?: CommunityActivityWhereInput[]
    NOT?: CommunityActivityWhereInput | CommunityActivityWhereInput[]
    orgId?: UuidFilter<"CommunityActivity"> | string
    userId?: StringFilter<"CommunityActivity"> | string
    action?: StringFilter<"CommunityActivity"> | string
    entityType?: StringNullableFilter<"CommunityActivity"> | string | null
    entityId?: StringNullableFilter<"CommunityActivity"> | string | null
    description?: StringNullableFilter<"CommunityActivity"> | string | null
    createdAt?: DateTimeFilter<"CommunityActivity"> | Date | string
  }, "id">

  export type CommunityActivityOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunityActivityCountOrderByAggregateInput
    _max?: CommunityActivityMaxOrderByAggregateInput
    _min?: CommunityActivityMinOrderByAggregateInput
  }

  export type CommunityActivityScalarWhereWithAggregatesInput = {
    AND?: CommunityActivityScalarWhereWithAggregatesInput | CommunityActivityScalarWhereWithAggregatesInput[]
    OR?: CommunityActivityScalarWhereWithAggregatesInput[]
    NOT?: CommunityActivityScalarWhereWithAggregatesInput | CommunityActivityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CommunityActivity"> | string
    orgId?: UuidWithAggregatesFilter<"CommunityActivity"> | string
    userId?: StringWithAggregatesFilter<"CommunityActivity"> | string
    action?: StringWithAggregatesFilter<"CommunityActivity"> | string
    entityType?: StringNullableWithAggregatesFilter<"CommunityActivity"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"CommunityActivity"> | string | null
    description?: StringNullableWithAggregatesFilter<"CommunityActivity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommunityActivity"> | Date | string
  }

  export type PointRecordWhereInput = {
    AND?: PointRecordWhereInput | PointRecordWhereInput[]
    OR?: PointRecordWhereInput[]
    NOT?: PointRecordWhereInput | PointRecordWhereInput[]
    id?: UuidFilter<"PointRecord"> | string
    orgId?: UuidFilter<"PointRecord"> | string
    userId?: StringFilter<"PointRecord"> | string
    points?: IntFilter<"PointRecord"> | number
    reason?: StringNullableFilter<"PointRecord"> | string | null
    awardedBy?: StringNullableFilter<"PointRecord"> | string | null
    createdAt?: DateTimeFilter<"PointRecord"> | Date | string
  }

  export type PointRecordOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    reason?: SortOrderInput | SortOrder
    awardedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PointRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointRecordWhereInput | PointRecordWhereInput[]
    OR?: PointRecordWhereInput[]
    NOT?: PointRecordWhereInput | PointRecordWhereInput[]
    orgId?: UuidFilter<"PointRecord"> | string
    userId?: StringFilter<"PointRecord"> | string
    points?: IntFilter<"PointRecord"> | number
    reason?: StringNullableFilter<"PointRecord"> | string | null
    awardedBy?: StringNullableFilter<"PointRecord"> | string | null
    createdAt?: DateTimeFilter<"PointRecord"> | Date | string
  }, "id">

  export type PointRecordOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    reason?: SortOrderInput | SortOrder
    awardedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PointRecordCountOrderByAggregateInput
    _avg?: PointRecordAvgOrderByAggregateInput
    _max?: PointRecordMaxOrderByAggregateInput
    _min?: PointRecordMinOrderByAggregateInput
    _sum?: PointRecordSumOrderByAggregateInput
  }

  export type PointRecordScalarWhereWithAggregatesInput = {
    AND?: PointRecordScalarWhereWithAggregatesInput | PointRecordScalarWhereWithAggregatesInput[]
    OR?: PointRecordScalarWhereWithAggregatesInput[]
    NOT?: PointRecordScalarWhereWithAggregatesInput | PointRecordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PointRecord"> | string
    orgId?: UuidWithAggregatesFilter<"PointRecord"> | string
    userId?: StringWithAggregatesFilter<"PointRecord"> | string
    points?: IntWithAggregatesFilter<"PointRecord"> | number
    reason?: StringNullableWithAggregatesFilter<"PointRecord"> | string | null
    awardedBy?: StringNullableWithAggregatesFilter<"PointRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointRecord"> | Date | string
  }

  export type CommunitySettingsWhereInput = {
    AND?: CommunitySettingsWhereInput | CommunitySettingsWhereInput[]
    OR?: CommunitySettingsWhereInput[]
    NOT?: CommunitySettingsWhereInput | CommunitySettingsWhereInput[]
    id?: UuidFilter<"CommunitySettings"> | string
    orgId?: UuidFilter<"CommunitySettings"> | string
    name?: StringNullableFilter<"CommunitySettings"> | string | null
    description?: StringNullableFilter<"CommunitySettings"> | string | null
    coverImage?: StringNullableFilter<"CommunitySettings"> | string | null
    features?: JsonFilter<"CommunitySettings">
    theme?: JsonFilter<"CommunitySettings">
    createdAt?: DateTimeFilter<"CommunitySettings"> | Date | string
    updatedAt?: DateTimeFilter<"CommunitySettings"> | Date | string
  }

  export type CommunitySettingsOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    features?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId?: string
    AND?: CommunitySettingsWhereInput | CommunitySettingsWhereInput[]
    OR?: CommunitySettingsWhereInput[]
    NOT?: CommunitySettingsWhereInput | CommunitySettingsWhereInput[]
    name?: StringNullableFilter<"CommunitySettings"> | string | null
    description?: StringNullableFilter<"CommunitySettings"> | string | null
    coverImage?: StringNullableFilter<"CommunitySettings"> | string | null
    features?: JsonFilter<"CommunitySettings">
    theme?: JsonFilter<"CommunitySettings">
    createdAt?: DateTimeFilter<"CommunitySettings"> | Date | string
    updatedAt?: DateTimeFilter<"CommunitySettings"> | Date | string
  }, "id" | "orgId">

  export type CommunitySettingsOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    features?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunitySettingsCountOrderByAggregateInput
    _max?: CommunitySettingsMaxOrderByAggregateInput
    _min?: CommunitySettingsMinOrderByAggregateInput
  }

  export type CommunitySettingsScalarWhereWithAggregatesInput = {
    AND?: CommunitySettingsScalarWhereWithAggregatesInput | CommunitySettingsScalarWhereWithAggregatesInput[]
    OR?: CommunitySettingsScalarWhereWithAggregatesInput[]
    NOT?: CommunitySettingsScalarWhereWithAggregatesInput | CommunitySettingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CommunitySettings"> | string
    orgId?: UuidWithAggregatesFilter<"CommunitySettings"> | string
    name?: StringNullableWithAggregatesFilter<"CommunitySettings"> | string | null
    description?: StringNullableWithAggregatesFilter<"CommunitySettings"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"CommunitySettings"> | string | null
    features?: JsonWithAggregatesFilter<"CommunitySettings">
    theme?: JsonWithAggregatesFilter<"CommunitySettings">
    createdAt?: DateTimeWithAggregatesFilter<"CommunitySettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunitySettings"> | Date | string
  }

  export type CommunityProfileWhereInput = {
    AND?: CommunityProfileWhereInput | CommunityProfileWhereInput[]
    OR?: CommunityProfileWhereInput[]
    NOT?: CommunityProfileWhereInput | CommunityProfileWhereInput[]
    id?: UuidFilter<"CommunityProfile"> | string
    orgId?: UuidFilter<"CommunityProfile"> | string
    userId?: StringFilter<"CommunityProfile"> | string
    displayName?: StringNullableFilter<"CommunityProfile"> | string | null
    bio?: StringNullableFilter<"CommunityProfile"> | string | null
    avatar?: StringNullableFilter<"CommunityProfile"> | string | null
    links?: JsonFilter<"CommunityProfile">
    createdAt?: DateTimeFilter<"CommunityProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityProfile"> | Date | string
  }

  export type CommunityProfileOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orgId_userId?: CommunityProfileOrgId_userIdCompoundUniqueInput
    AND?: CommunityProfileWhereInput | CommunityProfileWhereInput[]
    OR?: CommunityProfileWhereInput[]
    NOT?: CommunityProfileWhereInput | CommunityProfileWhereInput[]
    orgId?: UuidFilter<"CommunityProfile"> | string
    userId?: StringFilter<"CommunityProfile"> | string
    displayName?: StringNullableFilter<"CommunityProfile"> | string | null
    bio?: StringNullableFilter<"CommunityProfile"> | string | null
    avatar?: StringNullableFilter<"CommunityProfile"> | string | null
    links?: JsonFilter<"CommunityProfile">
    createdAt?: DateTimeFilter<"CommunityProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityProfile"> | Date | string
  }, "id" | "orgId_userId">

  export type CommunityProfileOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityProfileCountOrderByAggregateInput
    _max?: CommunityProfileMaxOrderByAggregateInput
    _min?: CommunityProfileMinOrderByAggregateInput
  }

  export type CommunityProfileScalarWhereWithAggregatesInput = {
    AND?: CommunityProfileScalarWhereWithAggregatesInput | CommunityProfileScalarWhereWithAggregatesInput[]
    OR?: CommunityProfileScalarWhereWithAggregatesInput[]
    NOT?: CommunityProfileScalarWhereWithAggregatesInput | CommunityProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CommunityProfile"> | string
    orgId?: UuidWithAggregatesFilter<"CommunityProfile"> | string
    userId?: StringWithAggregatesFilter<"CommunityProfile"> | string
    displayName?: StringNullableWithAggregatesFilter<"CommunityProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"CommunityProfile"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"CommunityProfile"> | string | null
    links?: JsonWithAggregatesFilter<"CommunityProfile">
    createdAt?: DateTimeWithAggregatesFilter<"CommunityProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityProfile"> | Date | string
  }

  export type CommunityEventWhereInput = {
    AND?: CommunityEventWhereInput | CommunityEventWhereInput[]
    OR?: CommunityEventWhereInput[]
    NOT?: CommunityEventWhereInput | CommunityEventWhereInput[]
    id?: UuidFilter<"CommunityEvent"> | string
    orgId?: UuidFilter<"CommunityEvent"> | string
    createdBy?: StringFilter<"CommunityEvent"> | string
    title?: StringFilter<"CommunityEvent"> | string
    description?: StringNullableFilter<"CommunityEvent"> | string | null
    startDate?: DateTimeFilter<"CommunityEvent"> | Date | string
    endDate?: DateTimeNullableFilter<"CommunityEvent"> | Date | string | null
    location?: StringNullableFilter<"CommunityEvent"> | string | null
    coverImage?: StringNullableFilter<"CommunityEvent"> | string | null
    isDeleted?: BoolFilter<"CommunityEvent"> | boolean
    createdAt?: DateTimeFilter<"CommunityEvent"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityEvent"> | Date | string
  }

  export type CommunityEventOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityEventWhereInput | CommunityEventWhereInput[]
    OR?: CommunityEventWhereInput[]
    NOT?: CommunityEventWhereInput | CommunityEventWhereInput[]
    orgId?: UuidFilter<"CommunityEvent"> | string
    createdBy?: StringFilter<"CommunityEvent"> | string
    title?: StringFilter<"CommunityEvent"> | string
    description?: StringNullableFilter<"CommunityEvent"> | string | null
    startDate?: DateTimeFilter<"CommunityEvent"> | Date | string
    endDate?: DateTimeNullableFilter<"CommunityEvent"> | Date | string | null
    location?: StringNullableFilter<"CommunityEvent"> | string | null
    coverImage?: StringNullableFilter<"CommunityEvent"> | string | null
    isDeleted?: BoolFilter<"CommunityEvent"> | boolean
    createdAt?: DateTimeFilter<"CommunityEvent"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityEvent"> | Date | string
  }, "id">

  export type CommunityEventOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityEventCountOrderByAggregateInput
    _max?: CommunityEventMaxOrderByAggregateInput
    _min?: CommunityEventMinOrderByAggregateInput
  }

  export type CommunityEventScalarWhereWithAggregatesInput = {
    AND?: CommunityEventScalarWhereWithAggregatesInput | CommunityEventScalarWhereWithAggregatesInput[]
    OR?: CommunityEventScalarWhereWithAggregatesInput[]
    NOT?: CommunityEventScalarWhereWithAggregatesInput | CommunityEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CommunityEvent"> | string
    orgId?: UuidWithAggregatesFilter<"CommunityEvent"> | string
    createdBy?: StringWithAggregatesFilter<"CommunityEvent"> | string
    title?: StringWithAggregatesFilter<"CommunityEvent"> | string
    description?: StringNullableWithAggregatesFilter<"CommunityEvent"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"CommunityEvent"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"CommunityEvent"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"CommunityEvent"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"CommunityEvent"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"CommunityEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommunityEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityEvent"> | Date | string
  }

  export type CommunityMemberWhereInput = {
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    id?: UuidFilter<"CommunityMember"> | string
    orgId?: UuidFilter<"CommunityMember"> | string
    email?: StringNullableFilter<"CommunityMember"> | string | null
    contactId?: UuidNullableFilter<"CommunityMember"> | string | null
    userId?: StringNullableFilter<"CommunityMember"> | string | null
    invitedBy?: StringNullableFilter<"CommunityMember"> | string | null
    role?: StringFilter<"CommunityMember"> | string
    status?: StringFilter<"CommunityMember"> | string
    createdAt?: DateTimeFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityMember"> | Date | string
  }

  export type CommunityMemberOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    invitedBy?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    orgId?: UuidFilter<"CommunityMember"> | string
    email?: StringNullableFilter<"CommunityMember"> | string | null
    contactId?: UuidNullableFilter<"CommunityMember"> | string | null
    userId?: StringNullableFilter<"CommunityMember"> | string | null
    invitedBy?: StringNullableFilter<"CommunityMember"> | string | null
    role?: StringFilter<"CommunityMember"> | string
    status?: StringFilter<"CommunityMember"> | string
    createdAt?: DateTimeFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityMember"> | Date | string
  }, "id">

  export type CommunityMemberOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrderInput | SortOrder
    contactId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    invitedBy?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityMemberCountOrderByAggregateInput
    _max?: CommunityMemberMaxOrderByAggregateInput
    _min?: CommunityMemberMinOrderByAggregateInput
  }

  export type CommunityMemberScalarWhereWithAggregatesInput = {
    AND?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    OR?: CommunityMemberScalarWhereWithAggregatesInput[]
    NOT?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CommunityMember"> | string
    orgId?: UuidWithAggregatesFilter<"CommunityMember"> | string
    email?: StringNullableWithAggregatesFilter<"CommunityMember"> | string | null
    contactId?: UuidNullableWithAggregatesFilter<"CommunityMember"> | string | null
    userId?: StringNullableWithAggregatesFilter<"CommunityMember"> | string | null
    invitedBy?: StringNullableWithAggregatesFilter<"CommunityMember"> | string | null
    role?: StringWithAggregatesFilter<"CommunityMember"> | string
    status?: StringWithAggregatesFilter<"CommunityMember"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommunityMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityMember"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    groupId?: string | null
    text?: string | null
    postColor?: string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: number
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    groupId?: string | null
    text?: string | null
    postColor?: string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: number
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    groupId?: string | null
    text?: string | null
    postColor?: string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: number
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    postId: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    description?: string | null
    coverImage?: string | null
    privacy?: string
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    description?: string | null
    coverImage?: string | null
    privacy?: string
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    description?: string | null
    coverImage?: string | null
    privacy?: string
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMemberUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyInput = {
    id?: string
    groupId: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    icon?: string | null
    points?: number
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    awardedTo?: UserBadgeCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    icon?: string | null
    points?: number
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    awardedTo?: UserBadgeUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awardedTo?: UserBadgeUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    awardedTo?: UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgeCreateManyInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    icon?: string | null
    points?: number
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateInput = {
    id?: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
    badge: BadgeCreateNestedOneWithoutAwardedToInput
  }

  export type UserBadgeUncheckedCreateInput = {
    id?: string
    badgeId: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
  }

  export type UserBadgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgeUpdateOneRequiredWithoutAwardedToNestedInput
  }

  export type UserBadgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyInput = {
    id?: string
    badgeId: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
  }

  export type UserBadgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    badgeId?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    id?: string
    orgId: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUncheckedCreateInput = {
    id?: string
    orgId: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateManyInput = {
    id?: string
    orgId: string
    followerId: string
    followingId: string
    createdAt?: Date | string
  }

  export type FollowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    followerId?: StringFieldUpdateOperationsInput | string
    followingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityActivityCreateInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    entityType?: string | null
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityActivityUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    entityType?: string | null
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityActivityCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    action: string
    entityType?: string | null
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRecordCreateInput = {
    id?: string
    orgId: string
    userId: string
    points: number
    reason?: string | null
    awardedBy?: string | null
    createdAt?: Date | string
  }

  export type PointRecordUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    points: number
    reason?: string | null
    awardedBy?: string | null
    createdAt?: Date | string
  }

  export type PointRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    awardedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    awardedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRecordCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    points: number
    reason?: string | null
    awardedBy?: string | null
    createdAt?: Date | string
  }

  export type PointRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    awardedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    awardedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySettingsCreateInput = {
    id?: string
    orgId: string
    name?: string | null
    description?: string | null
    coverImage?: string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunitySettingsUncheckedCreateInput = {
    id?: string
    orgId: string
    name?: string | null
    description?: string | null
    coverImage?: string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunitySettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySettingsCreateManyInput = {
    id?: string
    orgId: string
    name?: string | null
    description?: string | null
    coverImage?: string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunitySettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    features?: JsonNullValueInput | InputJsonValue
    theme?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityProfileCreateInput = {
    id?: string
    orgId: string
    userId: string
    displayName?: string | null
    bio?: string | null
    avatar?: string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityProfileUncheckedCreateInput = {
    id?: string
    orgId: string
    userId: string
    displayName?: string | null
    bio?: string | null
    avatar?: string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityProfileCreateManyInput = {
    id?: string
    orgId: string
    userId: string
    displayName?: string | null
    bio?: string | null
    avatar?: string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    links?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityEventCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    coverImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityEventUncheckedCreateInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    coverImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityEventCreateManyInput = {
    id?: string
    orgId: string
    createdBy: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    location?: string | null
    coverImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateInput = {
    id?: string
    orgId: string
    email?: string | null
    contactId?: string | null
    userId?: string | null
    invitedBy?: string | null
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUncheckedCreateInput = {
    id?: string
    orgId: string
    email?: string | null
    contactId?: string | null
    userId?: string | null
    invitedBy?: string | null
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateManyInput = {
    id?: string
    orgId: string
    email?: string | null
    contactId?: string | null
    userId?: string | null
    invitedBy?: string | null
    role?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    invitedBy?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    groupId?: SortOrder
    text?: SortOrder
    postColor?: SortOrder
    attachments?: SortOrder
    likesCount?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    likesCount?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    groupId?: SortOrder
    text?: SortOrder
    postColor?: SortOrder
    likesCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    groupId?: SortOrder
    text?: SortOrder
    postColor?: SortOrder
    likesCount?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    likesCount?: SortOrder
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    text?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    text?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    text?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    privacy?: SortOrder
    isDeleted?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    privacy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    privacy?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: string
    userId: string
  }

  export type GroupMemberCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserBadgeListRelationFilter = {
    every?: UserBadgeWhereInput
    some?: UserBadgeWhereInput
    none?: UserBadgeWhereInput
  }

  export type UserBadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    points?: SortOrder
    isPublic?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    points?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    points?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type BadgeScalarRelationFilter = {
    is?: BadgeWhereInput
    isNot?: BadgeWhereInput
  }

  export type UserBadgeCountOrderByAggregateInput = {
    id?: SortOrder
    badgeId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    awardedBy?: SortOrder
    awardedAt?: SortOrder
  }

  export type UserBadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    badgeId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    awardedBy?: SortOrder
    awardedAt?: SortOrder
  }

  export type UserBadgeMinOrderByAggregateInput = {
    id?: SortOrder
    badgeId?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    awardedBy?: SortOrder
    awardedAt?: SortOrder
  }

  export type FollowOrgId_followerId_followingIdCompoundUniqueInput = {
    orgId: string
    followerId: string
    followingId: string
  }

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    followerId?: SortOrder
    followingId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityActivityCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityActivityMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PointRecordCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    awardedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PointRecordAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type PointRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    awardedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PointRecordMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    awardedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PointRecordSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type CommunitySettingsCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    features?: SortOrder
    theme?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySettingsMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityProfileOrgId_userIdCompoundUniqueInput = {
    orgId: string
    userId: string
  }

  export type CommunityProfileCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    links?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityProfileMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CommunityEventCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityEventMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityEventMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    createdBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    location?: SortOrder
    coverImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type CommunityMemberCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    contactId?: SortOrder
    userId?: SortOrder
    invitedBy?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    contactId?: SortOrder
    userId?: SortOrder
    invitedBy?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMemberMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    email?: SortOrder
    contactId?: SortOrder
    userId?: SortOrder
    invitedBy?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput> | GroupMemberCreateWithoutGroupInput[] | GroupMemberUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMemberCreateOrConnectWithoutGroupInput | GroupMemberCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMemberUpsertWithWhereUniqueWithoutGroupInput | GroupMemberUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    disconnect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    delete?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    connect?: GroupMemberWhereUniqueInput | GroupMemberWhereUniqueInput[]
    update?: GroupMemberUpdateWithWhereUniqueWithoutGroupInput | GroupMemberUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMemberUpdateManyWithWhereWithoutGroupInput | GroupMemberUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserBadgeCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
  }

  export type UserBadgeUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput> | UserBadgeCreateWithoutBadgeInput[] | UserBadgeUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgeCreateOrConnectWithoutBadgeInput | UserBadgeCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgeUpsertWithWhereUniqueWithoutBadgeInput | UserBadgeUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgeCreateManyBadgeInputEnvelope
    set?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    disconnect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    delete?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    connect?: UserBadgeWhereUniqueInput | UserBadgeWhereUniqueInput[]
    update?: UserBadgeUpdateWithWhereUniqueWithoutBadgeInput | UserBadgeUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgeUpdateManyWithWhereWithoutBadgeInput | UserBadgeUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
  }

  export type BadgeCreateNestedOneWithoutAwardedToInput = {
    create?: XOR<BadgeCreateWithoutAwardedToInput, BadgeUncheckedCreateWithoutAwardedToInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutAwardedToInput
    connect?: BadgeWhereUniqueInput
  }

  export type BadgeUpdateOneRequiredWithoutAwardedToNestedInput = {
    create?: XOR<BadgeCreateWithoutAwardedToInput, BadgeUncheckedCreateWithoutAwardedToInput>
    connectOrCreate?: BadgeCreateOrConnectWithoutAwardedToInput
    upsert?: BadgeUpsertWithoutAwardedToInput
    connect?: BadgeWhereUniqueInput
    update?: XOR<XOR<BadgeUpdateToOneWithWhereWithoutAwardedToInput, BadgeUpdateWithoutAwardedToInput>, BadgeUncheckedUpdateWithoutAwardedToInput>
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

  export type CommentCreateWithoutPostInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: UuidFilter<"Comment"> | string
    postId?: UuidFilter<"Comment"> | string
    orgId?: UuidFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    contactId?: UuidNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    isDeleted?: BoolFilter<"Comment"> | boolean
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    groupId?: string | null
    text?: string | null
    postColor?: string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: number
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    groupId?: string | null
    text?: string | null
    postColor?: string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: number
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    postColor?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: JsonNullValueInput | InputJsonValue
    likesCount?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateWithoutGroupInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: GroupMemberCreateManyGroupInput | GroupMemberCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    OR?: GroupMemberScalarWhereInput[]
    NOT?: GroupMemberScalarWhereInput | GroupMemberScalarWhereInput[]
    id?: UuidFilter<"GroupMember"> | string
    groupId?: UuidFilter<"GroupMember"> | string
    userId?: StringFilter<"GroupMember"> | string
    role?: StringFilter<"GroupMember"> | string
    joinedAt?: DateTimeFilter<"GroupMember"> | Date | string
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    description?: string | null
    coverImage?: string | null
    privacy?: string
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    orgId: string
    createdBy: string
    name: string
    description?: string | null
    coverImage?: string | null
    privacy?: string
    isDeleted?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    privacy?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateWithoutBadgeInput = {
    id?: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
  }

  export type UserBadgeUncheckedCreateWithoutBadgeInput = {
    id?: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
  }

  export type UserBadgeCreateOrConnectWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeCreateManyBadgeInputEnvelope = {
    data: UserBadgeCreateManyBadgeInput | UserBadgeCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgeUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    update: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgeCreateWithoutBadgeInput, UserBadgeUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgeUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgeWhereUniqueInput
    data: XOR<UserBadgeUpdateWithoutBadgeInput, UserBadgeUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgeUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgeScalarWhereInput
    data: XOR<UserBadgeUpdateManyMutationInput, UserBadgeUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserBadgeScalarWhereInput = {
    AND?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    OR?: UserBadgeScalarWhereInput[]
    NOT?: UserBadgeScalarWhereInput | UserBadgeScalarWhereInput[]
    id?: UuidFilter<"UserBadge"> | string
    badgeId?: UuidFilter<"UserBadge"> | string
    orgId?: UuidFilter<"UserBadge"> | string
    userId?: StringFilter<"UserBadge"> | string
    awardedBy?: StringFilter<"UserBadge"> | string
    awardedAt?: DateTimeFilter<"UserBadge"> | Date | string
  }

  export type BadgeCreateWithoutAwardedToInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    icon?: string | null
    points?: number
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BadgeUncheckedCreateWithoutAwardedToInput = {
    id?: string
    orgId: string
    name: string
    description?: string | null
    icon?: string | null
    points?: number
    isPublic?: boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutAwardedToInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutAwardedToInput, BadgeUncheckedCreateWithoutAwardedToInput>
  }

  export type BadgeUpsertWithoutAwardedToInput = {
    update: XOR<BadgeUpdateWithoutAwardedToInput, BadgeUncheckedUpdateWithoutAwardedToInput>
    create: XOR<BadgeCreateWithoutAwardedToInput, BadgeUncheckedCreateWithoutAwardedToInput>
    where?: BadgeWhereInput
  }

  export type BadgeUpdateToOneWithWhereWithoutAwardedToInput = {
    where?: BadgeWhereInput
    data: XOR<BadgeUpdateWithoutAwardedToInput, BadgeUncheckedUpdateWithoutAwardedToInput>
  }

  export type BadgeUpdateWithoutAwardedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateWithoutAwardedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    orgId: string
    userId: string
    contactId?: string | null
    text: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberCreateManyGroupInput = {
    id?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeCreateManyBadgeInput = {
    id?: string
    orgId: string
    userId: string
    awardedBy: string
    awardedAt?: Date | string
  }

  export type UserBadgeUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgeUncheckedUpdateManyWithoutBadgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    awardedBy?: StringFieldUpdateOperationsInput | string
    awardedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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