import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $projects } from "../../app/stores/projects.ts";
import ActionBlock from "../../shared/ui/action-block/action-block.tsx";
import {
    Breadcrumbs,
    Section,
    MainDiv,
    InpitSearch,
    Filters,
    BtnBlock,
    Title,
    FiltersBlock,
    Button, Table, CheckBox, DropdownList, Tag, NoProjects, CenterText
} from "../../app/styled/styled.ts";
import ReactArrowDown from "../../shared/assets/icons/arrow_down.svg";
import ReactClose from "../../shared/assets/icons/close.svg";


function Invites() {
    const projects = useUnit($projects).filter((project) => project.status === "Invite");
    const [search, setSearch] = useState<string>("");

    const onChengeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const projectItems = projects.filter(
        (project) =>
                project.title?.toString().toLowerCase().indexOf(search.toLowerCase()) !== -1
            ).map((project) => (
        <tr key={project.id}>
            <td>{project.title}</td>
            <td>{project.lead}</td>
            <td>
                <ActionBlock project={project}/>
            </td>
        </tr>
    ));

    return (
        <MainDiv>
            <Breadcrumbs>
                <Section>Projects</Section>
                /
                <Section Active>Invites</Section>
            </Breadcrumbs>
            <Title>Projects</Title>
            <FiltersBlock>
                <Filters>
                    <InpitSearch value={search} onChange={onChengeSearch} placeholder={'Search'}/>
                    <CheckBox>Me</CheckBox>
                    <DropdownList>Status<ReactArrowDown/></DropdownList>
                    <DropdownList>Priority<ReactArrowDown/></DropdownList>
                    <DropdownList>Lead<ReactArrowDown/></DropdownList>
                    <Tag>TO DO<ReactClose/></Tag>
                    <Tag>Medium<ReactClose/></Tag>
                    <Tag>Maksim K<ReactClose/></Tag>
                </Filters>
                <BtnBlock>
                    <Button>Clear</Button>
                    <Button OK>Apply</Button>
                </BtnBlock>
            </FiltersBlock>
            <Table>
                <table>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Lead</th>
                        <th style={{width: "400px"}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {projectItems}
                    </tbody>
                </table>
                {projectItems.length === 0 &&
                    <NoProjects>
                        <CenterText>
                            You have no invites jet. Please wait.
                        </CenterText>
                    </NoProjects>
                }
            </Table>
        </MainDiv>
    )
}

export default Invites
