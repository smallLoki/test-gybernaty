import {CentralBlock, H3, Header, InpitSearch, LogoBlock, RightBlock, Title, BtnBlock, SearchPanel} from "./styled.ts";
import ReactLogo from '../../../shared/assets/icons/logo.svg'
import ReactBell from '../../../shared/assets/icons/bell.svg'
import ReactSettings from '../../../shared/assets/icons/settings.svg'
import ReactUser from '../../../shared/assets/icons/user.svg'

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
