import { Data, NoData } from '@shapeci/plate-combobox';
import { TElement } from '@shapeci/plate-core';
import { CreateMentionNode } from './getMentionOnSelectItem';

export interface TMentionElement extends TElement {
  value: string;
}

export interface TMentionInputElement extends TElement {
  trigger: string;
}

export interface MentionPlugin<TData extends Data = NoData> {
  createMentionNode?: CreateMentionNode<TData>;
  id?: string;
  insertSpaceAfterMention?: boolean;
  trigger?: string;
  inputCreation?: { key: string; value: string };
}
