import { Action } from "@ngrx/store";

export class ActionNull implements Action{
    static readonly TYPE = 'ACTION_NULL';
    readonly type = ActionNull.TYPE;
    constructor() { }
}
export class ActionGetTotalApplicaints implements Action {
    static readonly TYPE = 'ACTION_GET_TOTAL_APPLICAINTS';
    readonly type = ActionGetTotalApplicaints.TYPE;
    constructor() { }
}



export type DashboardActions = ActionGetTotalApplicaints | ActionNull;