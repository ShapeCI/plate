import { MediaEmbedNodeData } from '@shapeci/plate-media-embed';
import { StyledElementProps } from '@shapeci/plate-styled-components';
import { CSSProp } from 'styled-components';

export interface MediaEmbedElementStyles {
  iframeWrapper: CSSProp;
  iframe: CSSProp;
  input: CSSProp;
}

export type MediaEmbedElementProps = StyledElementProps<
  MediaEmbedNodeData,
  MediaEmbedElementStyles
>;
