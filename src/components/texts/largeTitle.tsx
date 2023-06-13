import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import Colors from '../colors';

const StyledText = styled.Text`
    font-family: inter;
    font-size: 32px;
    color: ${Colors.main_text} ;
    text-align:left;
`

const LargeTitle: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.style}>{props.children}</StyledText>
}

export default LargeTitle;