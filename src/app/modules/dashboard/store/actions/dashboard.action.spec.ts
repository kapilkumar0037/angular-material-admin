import { TestBed } from "@angular/core/testing"
import { ActionGetTotalApplicaints, ActionNull, DashboardActions } from "./dashboard.actions"

describe('DashboardActions', () => {
    let action: DashboardActions;

    it('ActionNull should have type defined', () => {
        action = new ActionNull();
        expect(action.type).toEqual('ACTION_NULL');
        expect(ActionNull.TYPE).toEqual('ACTION_NULL');
    });
    it('ActionGetTotalApplicaints should have type defined', () => {
        action = new ActionGetTotalApplicaints();
        expect(action.type).toEqual('ACTION_GET_TOTAL_APPLICAINTS');
        expect(ActionGetTotalApplicaints.TYPE).toEqual('ACTION_GET_TOTAL_APPLICAINTS');
    });


})