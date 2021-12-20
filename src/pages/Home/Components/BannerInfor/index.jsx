import React from 'react';

import Button from './../../../../GlobalComponents/Button'

import BannerImage from './../../../../assets/images/bloco_services.svg';
import BannerImageMobile from './../../../../assets/images/bloco_servicesMobile.svg'

import {
    Container,
    Title,
    Text,
    Content,

} from './style';

const BannerInfor = () => {
    return ( 
        <Container>
        <img id='banner-desktop' src={BannerImage} alt="" /> 
        <img id='banner-mobile' src={BannerImageMobile} alt=""  /> 
        <Content>
            <Title>The best services ready To serve you</Title>
            <Text>
                <p>
                    Far far away, behind the word mountains, far from
                    the countries Vokalia and Consonantia, there live the
                    blind texts
                </p>
                
                <p>
                    Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                </p>
                
                <p>
                    A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. 
                </p>
            </Text>
            <Button sizeButton={'banner'}>Know More</Button>
        </Content>
        </Container>
     );
}
 
export default BannerInfor;