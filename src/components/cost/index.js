import React from 'react'
import Icon1 from '../../images/tr1.svg'
import Icon2 from '../../images/tr2.svg'
import Icon3 from '../../images/tr3.svg'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, ServicesCard} from './ServicesElements'

const Cost = () => {
    return (
        <>
            <ServicesContainer id = 'services'>
                <ServicesH1>Nuestros Precios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premiun Benefits</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
              
            </ServicesContainer>  
        </>
    )
}

export default Cost;
