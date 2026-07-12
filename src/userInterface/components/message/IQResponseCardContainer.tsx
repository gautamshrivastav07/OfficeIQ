import React from 'react';
import { View } from 'react-native';

import TextBlock from './TextBlock';
import TableBlock from './TableBlock';
import ListBlock from './ListBlock';
import ButtonBlock from './ButtonBlock';
import CardBlock from './CardBlock';

interface Block {
  type: string;
  props: any;
}

interface Props {
  response: {
    blocks: Block[];
  };
}

const AIResponseRenderer = ({ response }: Props) => {

  if (!response?.blocks?.length) {
    return null;
  }

  return (
    <View>

      {response.blocks.map((block, index) => {

        switch (block.type) {

          case 'text':
            return (
              <TextBlock
                key={index}
                {...block.props}
              />
            );

          case 'card':
            return (
              <CardBlock
                key={index}
                {...block.props}
              />
            );

          case 'table':
            return (
              <TableBlock
                key={index}
                {...block.props}
              />
            );

          case 'list':
            return (
              <ListBlock
                key={index}
                {...block.props}
              />
            );

          case 'action_buttons':
            return (
              <ButtonBlock
                key={index}
                {...block.props}
              />
            );

          default:
            return null;

        }

      })}

    </View>
  );
};

export default AIResponseRenderer;