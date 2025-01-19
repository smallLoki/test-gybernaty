import {CentralBlock, H3, Header, InpitSearch, LogoBlock, RightBlock, Title, BtnBlock, SearchPanel} from "./styled.ts";
import ReactLogo from '../assets/icons/logo.svg'
import ReactBell from '../assets/icons/bell.svg'
import ReactSettings from '../assets/icons/settings.svg'
import ReactUser from '../assets/icons/user.svg'

function HeaderBlock() {

    return (
        <Header>
            <LogoBlock>
                <ReactLogo/>
                <H3>Gyber Projects</H3>
            </LogoBlock>
            <CentralBlock>
                <Title>Projects</Title>
            </CentralBlock>
            <RightBlock>
                <SearchPanel>
                    <InpitSearch placeholder={'Search'}/>
                    <BtnBlock>
                        <ReactBell/>
                        <ReactSettings/>
                    </BtnBlock>
                </SearchPanel>
                <ReactUser/>
            </RightBlock>
        </Header>
    )
}

export default HeaderBlock
