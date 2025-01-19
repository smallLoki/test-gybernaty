import React from "react";
import {
    Breadcrumbs,
    Section,
    MainDiv,
    Inpit,
    BtnBlock,
    Title,
    Form,
    Button, RowElement, Label, LabelBtn, Textarea
} from "./styled.ts";
import { useCreateHooks } from "./create.hooks.ts";


function Create() {
    const {
        date, changeDate,
        title, changeTitle,
        status, changeStatus,
        priority, changePriority,
        lead, changeLead,
        labels, changeLabels,
        description, changeDescription,
        saveProject, closeProject
    } = useCreateHooks();

    return (
        <MainDiv>
            <Breadcrumbs>
                <Section>Projects</Section>
                /
                <Section Active>Create Projects</Section>
            </Breadcrumbs>
            <Title>Create Project</Title>
            <Form>
                <RowElement>
                    <Label>Target Date</Label>
                    <Inpit value={date} onChange={changeDate} placeholder={'Target Date'}/>
                </RowElement>
                <RowElement>
                    <Label>Title *</Label>
                    <Inpit value={title} onChange={changeTitle} placeholder={'Title'}/>
                </RowElement>
                <RowElement>
                    <Label>Description</Label>
                    <Textarea value={description} onChange={changeDescription} placeholder={'Write description...'}/>
                </RowElement>
                <RowElement>
                    <Label>Status</Label>
                    <Inpit value={status} onChange={changeStatus} placeholder={'New'}/>
                </RowElement>
                <RowElement>
                    <Label>Priority</Label>
                    <Inpit value={priority} onChange={changePriority} placeholder={'Medium'}/>
                </RowElement>
                <RowElement>
                    <Label>Lead</Label>
                    <LabelBtn>Assign to me</LabelBtn>
                    <Inpit value={lead} onChange={changeLead} placeholder={'Search assignee'}/>
                </RowElement>
                <RowElement>
                    <Label>Labels</Label>
                    <Inpit value={labels} onChange={changeLabels} placeholder={'Labels'}/>
                </RowElement>
                <BtnBlock>
                    <Button onClick={closeProject}>Clear</Button>
                    <Button OK onClick={saveProject}>Ok</Button>
                </BtnBlock>
            </Form>
        </MainDiv>
    )
}

export default Create
