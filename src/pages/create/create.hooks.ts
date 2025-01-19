import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../app/stores/projects.ts";

export const useCreateHooks = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [lead, setLead] = useState<string>("");
    const [labels, setLabels] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const changeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
    }

    const changePriority = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(event.target.value)
    }

    const changeLead = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLead(event.target.value)
    }

    const changeLabels = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLabels(event.target.value)
    }

    const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value)
    }

    const saveProject = () => {
        const result = {
            date,
            title,
            status,
            priority,
            lead,
            labels,
            description,
        };
        update(result);
        navigate('/');
    }

    const closeProject = () => {
        navigate('/');
    }

    return {
        date, changeDate,
        title, changeTitle,
        status, changeStatus,
        priority, changePriority,
        lead, changeLead,
        labels, changeLabels,
        description, changeDescription,
        saveProject, closeProject
    }
}
