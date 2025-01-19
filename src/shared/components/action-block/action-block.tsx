import React from "react";
import { update } from "../../../models/Projects";
import { IProject } from "../../../types/types.ts";
import { Actionblock, ActionBtn } from "./styled.ts";

function ActionBlock(props: { project: IProject }) {
    const { project } = props;

    const accept = () => {
        update({
            ...project,
            status: "Accept"
        });
    }

    const reject = () => {
        update({
            ...project,
            status: "Reject"
        });
    }

    return (
        <Actionblock>
            <ActionBtn OK onClick={accept}>Accept</ActionBtn>
            <ActionBtn onClick={reject}>Reject</ActionBtn>
        </Actionblock>
    )
}

export default ActionBlock
