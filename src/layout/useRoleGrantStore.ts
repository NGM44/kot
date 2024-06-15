import { useEffect, useMemo } from "react";
// import { useGetUserRoleGrants } from "../queries/auth";
import { useAuthStore } from "../store/useAuthStore";

type resources =
  | "transaction"
  | "shareholder"
  | "captable"
  | "instrumentclass"
  | "siteSettings"
  | "usersRoles"
  | "reports"
  | "employee"
  | "employeePage"
  | "esopPlan"
  | "esopPool"
  | "esopFinancialReports"
  | "rights"
  | "grant"
  | "template"
  | "vestingEvent"
  | "roundModeling"
  | "roundCreation"
  | "secondaryRoundModeling"
  | "termsheet"
  | "companydetail"
  | "investorRights"
  | "linkInvestor"
  | "*";
type actions =
  | "create"
  | "read"
  | "update"
  | "delete"
  | "view"
  | "approveExercise"
  | "requestExercise"
  | "*";

export enum CompanyStages {
  TWO = "Two",
  THREE = "Three",
  FOUR = "Four",
}

interface Role {
  resourceName: string;
  resource: resources;
  actionName: string;
  action: actions;
  attributes: string;
}
/**
 *  Checks if the current user can perform an action on the resource.
 *
 *  @param {actions | Array<actions>} action
 *         action to be be performed
 *
 *  @param {resources|Array<resources>} resource
 *         Resource trying to be accessed
 *
 *  @returns {boolean}
 *         If the user can perform the action on the resource
 */
export function useCanUserAccess(
  action: actions | actions[],
  resource: resources | resources[]
) {
    return true;
// //   const { refetch, data } = useGetUserRoleGrants();
//   const companyId = useAuthStore.getState().companyId || "";
//   const companyStage = useAuthStore.getState().user?.stage || "";

//   useEffect(() => {
//     refetch();
//   }, [companyId]);

//   const canUserAccess = useMemo(() => {
//     const userRoles = (data as Role[]) || [];
//     const newPermissions = new Set<Role>();
//     const higherPermissions: actions[] = ["create", "delete", "update"];
//     if (companyStage === CompanyStages.FOUR && resource === "investorRights")
//       return false;

//     userRoles?.forEach((role) => {
//       if (higherPermissions.includes(role.action)) {
//         newPermissions.add({ ...role, action: "read" });
//       }
//     });

//     userRoles.concat(...Array.from(newPermissions));

//     const isAdmin = userRoles?.some(
//       (role) => role.resource === "*" && role.action === "*"
//     );

//     if (
//       companyStage === CompanyStages.THREE &&
//       (resource === "transaction" ||
//         resource === "termsheet" ||
//         resource === "instrumentclass")
//     )
//       return false;
//     if (isAdmin) return true;

//     let canAccessResource = userRoles?.some(
//       (role) => role.resource === resource || role.resource === "*"
//     );

//     let canPerformAction = userRoles?.some(
//       (role) =>
//         role.action === action &&
//         (resource === role.resource || role.resource === "*")
//     );

//     if (canAccessResource && !canPerformAction) {
//       canPerformAction = userRoles?.some(
//         (role) => role.resource === resource && role.action === "*"
//       );
//     }

//     if (canPerformAction && !canAccessResource) {
//       canAccessResource = userRoles?.some(
//         (role) => role.resource === "*" && role.action === action
//       );
//     }

//     return canAccessResource && canPerformAction;
//   }, [data, action, resource]);

//   return canUserAccess;
}
