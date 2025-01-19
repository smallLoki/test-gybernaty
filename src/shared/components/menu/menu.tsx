import React, { useState } from "react";
import { Menu, Dropdown, Item } from "./styled.ts";
import ReactMenu from '../../../assets/icons/menu.svg'
import ReactInvitation from "../../../assets/icons/invitation.svg";
import ReactTrash from "../../../assets/icons/trash.svg";
import { update } from "../../../models/Projects";
import { IProject } from "../../../types/types.ts";

function DropdownMenu(props: { project: IProject }) {
    const { project } = props;
    const [downMenu, setDownMenu] = useState<boolean>(false)

    const deleteProject = () => {
        update({
            id: project.id,
            del: true,
        });
    }

    const invationProject = () => {
        update({
            ...project,
            status: "Invite"
        });
    }

    return (
        <Menu onClick={() => setDownMenu(!downMenu)}>
            <ReactMenu/>
            {downMenu && <Dropdown>
                <Item onClick={invationProject}><ReactInvitation/>Пригласить</Item>
                <Item onClick={deleteProject}><ReactTrash/>Удалить</Item>
            </Dropdown>}
        </Menu>
    )
}

export default DropdownMenu
