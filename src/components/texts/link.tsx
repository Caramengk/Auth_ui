import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';
import Colors from '../colors';

const StyledText = styled.Text`
    font-size: 14px;
    color: ${Colors.main_text} ;
    text-align:left;
    text-decoration: underline;
`

const LinkText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.style}>{props.children}</StyledText>
}

export default LinkText;