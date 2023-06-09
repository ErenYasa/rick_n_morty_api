export interface IFilterButton {
    status: CharacterStatus;
    checked: boolean;
    disabled?: boolean;
    onChange: (e: Event) => void;
}

export enum CharacterStatus {
    IDLE = '',
    ALIVE = 'Alive',
    DEAD = 'Dead',
    UNKNOWN = 'unknown',
}
