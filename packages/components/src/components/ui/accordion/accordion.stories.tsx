import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          アクセシビリティに対応していますか？
        </AccordionTrigger>
        <AccordionContent>
          はい。WAI-ARIAデザインパターンに準拠しています。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>スタイルは適用されていますか？</AccordionTrigger>
        <AccordionContent>
          はい。他のコンポーネントと調和するデフォルトスタイルが適用されています。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>アニメーションはありますか？</AccordionTrigger>
        <AccordionContent>
          はい。デフォルトでアニメーションが有効になっていますが、無効にすることも可能です。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Reactとは何ですか？</AccordionTrigger>
        <AccordionContent>
          Reactは、ユーザーインターフェースを構築するためのJavaScriptライブラリです。Facebookによって開発され、Facebookと開発者コミュニティによってメンテナンスされています。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>TypeScriptとは何ですか？</AccordionTrigger>
        <AccordionContent>
          TypeScriptは、JavaScriptをベースにした強力な型付けプログラミング言語で、あらゆる規模のプロジェクトでより良いツールサポートを提供します。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tailwind CSSとは何ですか？</AccordionTrigger>
        <AccordionContent>
          Tailwind
          CSSは、マークアップ内で直接あらゆるデザインを構築できるクラスが豊富に用意された、ユーティリティファーストのCSSフレームワークです。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-2",
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>はじめに</AccordionTrigger>
        <AccordionContent>
          インストールガイドに従って、このコンポーネントライブラリを使い始めましょう。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>インストール</AccordionTrigger>
        <AccordionContent>
          npm
          installを実行して、このパッケージをプロジェクトに追加します。ReactとTypeScriptがセットアップされていることを確認してください。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>使い方</AccordionTrigger>
        <AccordionContent>
          必要なコンポーネントをインポートして、Reactアプリケーションで使用します。詳細な例についてはドキュメントを確認してください。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  args: {
    type: "single",
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>利用可能なアイテム</AccordionTrigger>
        <AccordionContent>
          このアイテムは利用可能で、展開することができます。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger disabled>無効化されたアイテム</AccordionTrigger>
        <AccordionContent>
          このアイテムは無効化されているため、このコンテンツは表示されません。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>もう一つの利用可能なアイテム</AccordionTrigger>
        <AccordionContent>
          このアイテムも利用可能で、展開することができます。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
