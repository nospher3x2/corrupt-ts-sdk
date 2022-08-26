/** @noSelf **/
declare global {

    // ENUMS
    const BuffType: BuffType;
    const CollisionFlags: CollisionFlags;
    const CombatType: CombatType;
    const GameMode: GameMode;
    const GameObjectStatusFlags: GameObjectStatusFlags;
    const GameObjectType: GameObjectType;
    const GameState: GameState;
    const GapCloserType: GapCloserType;
    const HitChance: HitChance;
    const IssueOrderType: IssueOrderType;
    const MapId: MapId;
    const OrbMode: OrbMode;
    const ResourceType: ResourceType;
    const RotationDirection: RotationDirection;
    const SpellCollisionType: SpellCollisionType;
    const SpellRangeType: SpellRangeType;
    const SpellSlot: SpellSlot;
    const SpellState: SpellState;
    const SpellType: SpellType;
    const TeleportType: TeleportType;

    const cb: Callback;
    const player: AIBaseClient;
}

/** @noSelf */
declare class Callback {
    public load: number;
    public unload: number;
    public wndproc: number;
    public draw: number;
    public drawWorld: number;
    public drawHUD: number;
    public glow: number;
    public tick: number;
    public issueOrder: number;
    public castSpell: number;
    public gameUpdate: number;
    public processSpell: number;
    public basicAttack: number;
    public stopCast: number;
    public playAnimation: number;
    public create: number;
    public delete: number;
    public buff: number;
    public newPath: number;
    public death: number;
    public spawn: number;
    public teleport: number;
    public sendChat: number;
    public orbAfterAttack: number;
    public orbOutOfRange: number;
    public orbPreTick: number;
    public gapCloser: number;
    public visionChange: number;

    public add(callbackId: number, callback: Function): void;
    public remove(callbackId: number, callback: Function): void;
}

/** @noSelf */
declare class BuffType {
    public Internal: BuffType;
    public Aura: BuffType;
    public CombatEnchancer: BuffType;
    public CombatDehancer: BuffType;
    public SpellShield: BuffType;
    public Stun: BuffType;
    public Invisibility: BuffType;
    public Silence: BuffType;
    public Taunt: BuffType;
    public Unk: BuffType;
    public Polymorph: BuffType;
    public Slow: BuffType;
    public Snare: BuffType;
    public Damage: BuffType;
    public Heal: BuffType;
    public Haste: BuffType;
    public SpellImmunity: BuffType;
    public PhysicalImmunity: BuffType;
    public Invulnerability: BuffType;
    public AttackSpeedSlow: BuffType;
    public NearSight: BuffType;
    public Currency: BuffType;
    public Fear: BuffType;
    public Charm: BuffType;
    public Poison: BuffType;
    public Suppression: BuffType;
    public Blind: BuffType;
    public Counter: BuffType;
    public Shred: BuffType;
    public Flee: BuffType;
    public Knockup: BuffType;
    public Knockback: BuffType;
    public Disarm: BuffType;
    public Grounded: BuffType;
    public Drowsy: BuffType;
    public Asleep: BuffType;
}

/** @noSelf */
declare class CollisionFlags {
    public None: CollisionFlags
    public Terrain: CollisionFlags
    public Windwall: CollisionFlags
    public Braum: CollisionFlags
    public Samira: CollisionFlags
}

/** @noSelf */
declare class CombatType {
    public Melee: CombatType
    public Ranged: CombatType
}

/** @noSelf */
declare class GameMode {
    public Classic: GameMode
    public Tutorial: GameMode
    public TFT: GameMode
    public PracticeTool: GameMode
}

/** @noSelf */
declare class GameObjectStatusFlags {
    public Invulnerable: GameObjectStatusFlags
    public Undying: GameObjectStatusFlags
    public MagicImmune: GameObjectStatusFlags
    public PhysicalImmune: GameObjectStatusFlags
}

/** @noSelf */
declare class GameObjectType {
    public AIBase: GameObjectType
    public Minion: GameObjectType
    public Hero: GameObjectType
    public Turret: GameObjectType
    public Missile: GameObjectType
    public ObjectMarker: GameObjectType
}

/** @noSelf */
declare class GameState {
    public PreGame: GameState
    public Spawn: GameState
    public GameLoop: GameState
    public EndGame: GameState
    public PreExit: GameState
    public Exit: GameState
}

/** @noSelf */
declare class GapCloserType {
    public Targeted: GapCloserType
    public SkillShot: GapCloserType
    public Item: GapCloserType
}

/** @noSelf */
declare class HitChance {
    public Impossible: HitChance
    public VeryLow: HitChance
    public Low: HitChance
    public Medium: HitChance
    public High: HitChance
    public VeryHigh: HitChance
    public DashingMidAir: HitChance
    public DashingEnd: HitChance
    public CrowdControlled: HitChance
    public Undodgeable: HitChance
}

/** @noSelf */
declare class IssueOrderType {
    public Attack: IssueOrderType
    public Move: IssueOrderType
}

/** @noSelf */
declare class MapId {
    public SummonersRift: MapId
    public HowlingAbyss: MapId
}

/** @noSelf */
declare class OrbMode {
    public Combo: OrbMode
    public Harass: OrbMode
    public Laneclear: OrbMode
    public Lasthit: OrbMode
    public Flee: OrbMode
    public None: OrbMode
}

/** @noSelf */
declare class ResourceType {
    public Mana: ResourceType
    public Energy: ResourceType
    public None: ResourceType
    public Shield: ResourceType
    public BattleFury: ResourceType
    public DragonFury: ResourceType
    public Rage: ResourceType
    public Heat: ResourceType
    public GnarFury: ResourceType
    public Ferocity: ResourceType
    public BloodWell: ResourceType
    public Wind: ResourceType
    public Other: ResourceType
}

/** @noSelf */
declare class RotationDirection {
    public Clockwise: RotationDirection
    public CounterClockwise: RotationDirection
}

/** @noSelf */
declare class SpellCollisionType {
    public None: SpellCollisionType
    public Soft: SpellCollisionType
    public Hard: SpellCollisionType
}

/** @noSelf */
declare class SpellRangeType {
    public Center: SpellRangeType
    public Edge: SpellRangeType
}

/** @noSelf */
declare class SpellSlot {
    public Q: SpellSlot
    public W: SpellSlot
    public E: SpellSlot
    public R: SpellSlot
    public Summoner1: SpellSlot
    public Summoner2: SpellSlot
    public Item1: SpellSlot
    public Item2: SpellSlot
    public Item3: SpellSlot
    public Item4: SpellSlot
    public Item5: SpellSlot
    public Item6: SpellSlot
    public Trinket: SpellSlot
    public Recall: SpellSlot
    public SpecialAttack: SpellSlot
    public BasicAttack: SpellSlot
    public Invalid: SpellSlot
}

/** @noSelf */
declare class SpellState {
    public Ready: SpellState
    public NotAvailable: SpellState
    public NotLearned: SpellState
    public Supressed: SpellState
    public Disabled: SpellState
    public Cooldown: SpellState
    public NoMana: SpellState
}

/** @noSelf */
declare class SpellType {
    public linear: SpellType
    public circular: SpellType
    public conical: SpellType
    public self: SpellType
}

/** @noSelf */
declare class TeleportType {
    public Null: TeleportType
    public Recall: TeleportType
    public SuperRecall: TeleportType
    public Teleport: TeleportType
}

/** @customConstructor vec3 */
declare class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    constructor();
    constructor(x: number, z: number);
    constructor(x: number, y: number, z: number);

    public dot(b: Vector3): number;
    public cross(b: Vector3): Vector3;
    public normalized(): Vector3;
    public equals(b: Vector3, tolerance: number): boolean;
    public toString(): string;
    public distance(b: Vector3): number;
    public dist(b: Vector3): number;
    public distanceSqr(b: Vector3): number;
    public distSqr(b: Vector3): number;
    public distance2D(b: Vector3): number;
    public dist2D(b: Vector3): number;
    public distance2DSqr(b: Vector3): number;
    public dist2DSqr(b: Vector3): number;
    public length(): number;
    public length2D(): number;
    public lengthSqr(): number;
    public length2DSqr(): number;
    public angle(b: Vector3): number;
    public perp1(): Vector3;
    public perp2(): Vector3;
    public rotateAngleAxis(degrees: number, axis: Vector3): Vector3;
    public clampLength(min: number, max: number): Vector3;
    public isValid(): boolean;
    public isZero(): boolean;
    public isUnit(): boolean;
    public isUnitform(): boolean;
    public extend(b: Vector3, length: number): Vector3;
    public extended(b: Vector3, length: number): Vector3;
    public lerp(b: Vector3, alpha: number): Vector3;
    public projectOn(segmentStart: Vector3, segmentEnd: Vector3): ProjectionInfo;
    public projectOnTo(b: Vector3): Vector3;
    public projectOnToNormal(normal: Vector3): Vector3;
    public closestPointOnLine(segmentStart: Vector3, segmentEnd: Vector3): Vector3;
    public rotateAroundPoint(b: Vector3, angle: number): Vector3;
    public rotate(angle: number): Vector3;
    public rotate90(direction: RotationDirection): Vector3;
    public to2D(): Vector2;
}

/** @customConstructor vec2 */
declare class Vector2 {
    public x: number
    public y: number

    constructor();
    constructor(x: number, y: number);

    public dot(b: Vector2): number;
    public cross(b: Vector2): Vector2;
    public normalize(): Vector2;
    public equals(b: Vector2, tolerance: number): boolean;
    public toString(): string;
    public distance(b: Vector2): number;
    public dist(b: Vector2): number;
    public distanceSqr(b: Vector2): number;
    public distSqr(b: Vector2): number;
    public isValid(): boolean;
    public isZero(): boolean;
    public extend(b: Vector2, length: number): Vector2;
    public extended(b: Vector2, length: number): Vector2;
    public projectOn(segmentStart: Vector2, segmentEnd: Vector2): ProjectionInfo;
    public to3D(y: number): Vector3;
}

declare interface ProjectionInfo {
    isOnSegment: boolean
    segmentPoint: Vector2
    linePoint: Vector2
}

declare interface GameObject {
    handle: number;
    team: number;
    name: string;
    networkId: number;
    minBoundingBox: Vector3;
    maxBoundingBox: Vector3;
    position: Vector3;
    pos: Vector3;
    isVisible: boolean;
    isAttackableUnit: boolean;
    isHero: boolean;
    isMinion: boolean;
    isMissile: boolean;
    isAIBase: boolean;
    isTurret: boolean;
    isNexus: boolean;
    isInhib: boolean;
    isEffectEmitter: boolean;
    //asAttackableUnit: attackableUnit
    //asHero: aiHeroClient
    //asMinion: aiMinionClient
    //asMissile: missileClient
    asAIBase: AIBaseClient;
    //asTurret: aiTurretClient
    //asCamp: neutralMinionCamp
    boundingRadius: number;
    isOnScreen: boolean;
    isValid: boolean;
}

declare interface AIBaseClient {
    teleportName: string
    teleportType: TeleportType
    combatType: CombatType
    direction: Vector3
    // buffs: buff[]
    // attackData: spellCastInfo
    // characterData: characterData
    // baseCharacterData: characterData
    skinName: string
    experience: number
    level: number
    // characterIntermediate: characterIntermediate
    isMelee: boolean
    isRanged: boolean
    // basicAttack: spellData
    canAttack: boolean
    attackDelay: number
    attackCastDelay: number
    baseHealth: number
    bonusHealth: number
    iconSquare: any
    iconCircle: any
    totalAttackDamage: number
    totalBonusAttackDamage: number
    totalAbilityPower: number
    skinHash: number
    isDragon: boolean
    isBaron: boolean
    isPlant: boolean
    isLaneMinion: boolean
    isSiegeMinion: boolean
    isLargeMonster: boolean
    isEpicMonster: boolean
    isPet: boolean
    isWard: boolean
    healthBarPosition: Vector2
    isHealthBarVisible: boolean
    // characterDataStack: characterDataStack
    actionState: number
    // activeSpell: spellCastInfo

    //@return spellObject
    getSpell(slot: SpellSlot)
    //@return spellObject
    spellSlot(slot: SpellSlot)
    getSpellState(slot: SpellSlot): SpellState
    getItemID(slot: SpellSlot): number;
    hasItem(itemID: number): boolean;
    getItemSpellSlot(itemID: number): SpellSlot;
    getItemStacks(itemID: number): number;
    //@return buff
    findBuff(buffName: string)
    hasBuffOfType(type: BuffType): boolean
    setSkin(skinName: string, skinID: number): void
    bonePosition(boneName: string): Vector3
    getBaseHealthAtLevel(level: number): number;
    drawDamage(damage: number, color: number): void;
    isInAttackRange(target: GameObject): boolean;
    getAttackRange(target: GameObject): number;
}

export {
    GameObject,
    AIBaseClient
};