from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import Union, List
from app.db.database import get_db
import app.crud.role_permission as crud
import app.schemas.role_permission as schemas
from app.routes.auth import get_current_user
from app.models.user import User
from app.schemas.user import UserProfileResponse
router = APIRouter(prefix="/v1/api/role-permissions", tags=["RolePermission"])

@router.get("/me", response_model=schemas.RolePermissionsMEResponse)
def get_my_role_permissions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if not current_user.profile.role_id:
        raise HTTPException(status_code=400, detail="User has no role assigned")

    rps = crud.get_role_permissions_by_role_id(db, role_id=current_user.profile.role_id)

    return schemas.RolePermissionsMEResponse(
        role_id=current_user.profile.role_id,
        role_name=current_user.profile.role.name,
        permissions=rps
    )


@router.get("/", response_model=list[schemas.RolePermissionResponse])
def get_all_role_permissions(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return crud.get_all_role_permissions(db)

@router.get("/{rp_id}", response_model=schemas.RolePermissionResponse)
def get_role_permission(rp_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    rp = crud.get_role_permission_by_id(db, rp_id)
    if not rp:
        raise HTTPException(status_code=404, detail="RolePermission not found")
    return rp

@router.get("/role/{role_id}", response_model=list[schemas.RolePermissionResponse])
def get_role_permissions_by_role_id(
    role_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    rps = crud.get_role_permissions_by_role_id(db, role_id)
    return rps

@router.put("/role", response_model=List[schemas.RolePermissionResponse])
def update_role_permission(
    data: schemas.RolePermissionUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    permission_ids = (
        [data.permission_id] if isinstance(data.permission_id, int) else data.permission_id
    )

    updated = crud.update_role_permission(db, data.role_id, permission_ids)
    return updated

@router.delete("/{role_permission_id}", response_model=schemas.RolePermissionResponse)
def delete_role_permission(role_permission_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    deleted = crud.delete_role_permission(db, role_permission_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="RolePermission not found")
    return deleted

