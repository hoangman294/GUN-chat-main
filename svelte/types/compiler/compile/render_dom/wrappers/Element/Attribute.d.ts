import Attribute from '../../../nodes/Attribute';
import Block from '../../Block';
import ElementWrapper from './index';
import { Identifier, Node } from 'estree';
export declare class BaseAttributeWrapper {
    node: Attribute;
    parent: ElementWrapper;
    constructor(parent: ElementWrapper, block: Block, node: Attribute);
    render(_block: Block): void;
}
export default class AttributeWrapper extends BaseAttributeWrapper {
    node: Attribute;
    parent: ElementWrapper;
    metadata: any;
    name: string;
    property_name: string;
    is_indirectly_bound_value: boolean;
    is_src: boolean;
    is_select_value_attribute: boolean;
    is_input_value: boolean;
    should_cache: boolean;
    last: Identifier;
    constructor(parent: ElementWrapper, block: Block, node: Attribute);
    render(block: Block): void;
    get_init(block: Block, value: any): any;
    get_dom_update_conditions(block: Block, dependency_condition: Node): Node;
    get_dependencies(): string[];
    get_metadata(): AttributeMetadata;
    get_value(block: Block): import("estree").Property | import("estree").CatchClause | import("estree").ClassDeclaration | import("estree").ClassExpression | import("estree").ClassBody | import("estree").ArrayExpression | import("estree").ArrowFunctionExpression | import("estree").AssignmentExpression | import("estree").AwaitExpression | import("estree").BinaryExpression | import("estree").SimpleCallExpression | import("estree").NewExpression | import("estree").ChainExpression | import("estree").ConditionalExpression | import("estree").FunctionExpression | Identifier | import("estree").ImportExpression | import("estree").SimpleLiteral | import("estree").RegExpLiteral | import("estree").BigIntLiteral | import("estree").LogicalExpression | import("estree").MemberExpression | import("estree").MetaProperty | import("estree").ObjectExpression | import("estree").SequenceExpression | import("estree").TaggedTemplateExpression | import("estree").TemplateLiteral | import("estree").ThisExpression | import("estree").UnaryExpression | import("estree").UpdateExpression | import("estree").YieldExpression | import("estree").FunctionDeclaration | import("estree").MethodDefinition | import("estree").ImportDeclaration | import("estree").ExportNamedDeclaration | import("estree").ExportDefaultDeclaration | import("estree").ExportAllDeclaration | import("estree").ImportSpecifier | import("estree").ImportDefaultSpecifier | import("estree").ImportNamespaceSpecifier | import("estree").ExportSpecifier | import("estree").ObjectPattern | import("estree").ArrayPattern | import("estree").RestElement | import("estree").AssignmentPattern | import("estree").PrivateIdentifier | import("estree").Program | import("estree").PropertyDefinition | import("estree").SpreadElement | import("estree").ExpressionStatement | import("estree").BlockStatement | import("estree").StaticBlock | import("estree").EmptyStatement | import("estree").DebuggerStatement | import("estree").WithStatement | import("estree").ReturnStatement | import("estree").LabeledStatement | import("estree").BreakStatement | import("estree").ContinueStatement | import("estree").IfStatement | import("estree").SwitchStatement | import("estree").ThrowStatement | import("estree").TryStatement | import("estree").WhileStatement | import("estree").DoWhileStatement | import("estree").ForStatement | import("estree").ForInStatement | import("estree").ForOfStatement | import("estree").VariableDeclaration | import("estree").Super | import("estree").SwitchCase | import("estree").TemplateElement | import("estree").VariableDeclarator | {
        type: string;
        value: string;
    };
    get_class_name_text(block: Block): import("estree").Property | import("estree").CatchClause | import("estree").ClassDeclaration | import("estree").ClassExpression | import("estree").ClassBody | import("estree").ArrayExpression | import("estree").ArrowFunctionExpression | import("estree").AssignmentExpression | import("estree").AwaitExpression | import("estree").BinaryExpression | import("estree").SimpleCallExpression | import("estree").NewExpression | import("estree").ChainExpression | import("estree").ConditionalExpression | import("estree").FunctionExpression | Identifier | import("estree").ImportExpression | import("estree").SimpleLiteral | import("estree").RegExpLiteral | import("estree").BigIntLiteral | import("estree").LogicalExpression | import("estree").MemberExpression | import("estree").MetaProperty | import("estree").ObjectExpression | import("estree").SequenceExpression | import("estree").TaggedTemplateExpression | import("estree").TemplateLiteral | import("estree").ThisExpression | import("estree").UnaryExpression | import("estree").UpdateExpression | import("estree").YieldExpression | import("estree").FunctionDeclaration | import("estree").MethodDefinition | import("estree").ImportDeclaration | import("estree").ExportNamedDeclaration | import("estree").ExportDefaultDeclaration | import("estree").ExportAllDeclaration | import("estree").ImportSpecifier | import("estree").ImportDefaultSpecifier | import("estree").ImportNamespaceSpecifier | import("estree").ExportSpecifier | import("estree").ObjectPattern | import("estree").ArrayPattern | import("estree").RestElement | import("estree").AssignmentPattern | import("estree").PrivateIdentifier | import("estree").Program | import("estree").PropertyDefinition | import("estree").SpreadElement | import("estree").ExpressionStatement | import("estree").BlockStatement | import("estree").StaticBlock | import("estree").EmptyStatement | import("estree").DebuggerStatement | import("estree").WithStatement | import("estree").ReturnStatement | import("estree").LabeledStatement | import("estree").BreakStatement | import("estree").ContinueStatement | import("estree").IfStatement | import("estree").SwitchStatement | import("estree").ThrowStatement | import("estree").TryStatement | import("estree").WhileStatement | import("estree").DoWhileStatement | import("estree").ForStatement | import("estree").ForInStatement | import("estree").ForOfStatement | import("estree").VariableDeclaration | import("estree").Super | import("estree").SwitchCase | import("estree").TemplateElement | import("estree").VariableDeclarator | {
        type: string;
        value: string;
    };
    render_chunks(block: Block): (import("estree").Property | import("estree").CatchClause | import("estree").ClassDeclaration | import("estree").ClassExpression | import("estree").ClassBody | import("estree").ArrayExpression | import("estree").ArrowFunctionExpression | import("estree").AssignmentExpression | import("estree").AwaitExpression | import("estree").BinaryExpression | import("estree").SimpleCallExpression | import("estree").NewExpression | import("estree").ChainExpression | import("estree").ConditionalExpression | import("estree").FunctionExpression | Identifier | import("estree").ImportExpression | import("estree").SimpleLiteral | import("estree").RegExpLiteral | import("estree").BigIntLiteral | import("estree").LogicalExpression | import("estree").MemberExpression | import("estree").MetaProperty | import("estree").ObjectExpression | import("estree").SequenceExpression | import("estree").TaggedTemplateExpression | import("estree").TemplateLiteral | import("estree").ThisExpression | import("estree").UnaryExpression | import("estree").UpdateExpression | import("estree").YieldExpression | import("estree").FunctionDeclaration | import("estree").MethodDefinition | import("estree").ImportDeclaration | import("estree").ExportNamedDeclaration | import("estree").ExportDefaultDeclaration | import("estree").ExportAllDeclaration | import("estree").ImportSpecifier | import("estree").ImportDefaultSpecifier | import("estree").ImportNamespaceSpecifier | import("estree").ExportSpecifier | import("estree").ObjectPattern | import("estree").ArrayPattern | import("estree").RestElement | import("estree").AssignmentPattern | import("estree").PrivateIdentifier | import("estree").Program | import("estree").PropertyDefinition | import("estree").SpreadElement | import("estree").ExpressionStatement | import("estree").BlockStatement | import("estree").StaticBlock | import("estree").EmptyStatement | import("estree").DebuggerStatement | import("estree").WithStatement | import("estree").ReturnStatement | import("estree").LabeledStatement | import("estree").BreakStatement | import("estree").ContinueStatement | import("estree").IfStatement | import("estree").SwitchStatement | import("estree").ThrowStatement | import("estree").TryStatement | import("estree").WhileStatement | import("estree").DoWhileStatement | import("estree").ForStatement | import("estree").ForInStatement | import("estree").ForOfStatement | import("estree").VariableDeclaration | import("estree").Super | import("estree").SwitchCase | import("estree").TemplateElement | import("estree").VariableDeclarator | {
        type: string;
        value: string;
    })[];
    stringify(): string;
}
declare type AttributeMetadata = {
    property_name?: string;
    applies_to?: string[];
};
export {};
