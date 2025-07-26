import { Parser, Expression, ParserOptions } from 'expr-eval';

// Define allowed operators
const ALLOWED_OPERATORS: Set<string> = new Set([
  '==', '!=', '>', '<', '>=', '<=',
  '&&', '||', '!',
  'and', 'or', 'not'
]);

// Define allowed AST node types
type AllowedNodeType =
  | 'BinaryExpression'
  | 'LogicalExpression'
  | 'UnaryExpression'
  | 'Identifier'
  | 'Literal';

// Context type used in expression evaluation
export type ExpressionContext = Record<string, unknown>;

// Return type
export type EvaluationResult = boolean | null;

export class ExpressionEvaluator {
  private parser: Parser;

  constructor() {
    const parserOptions: ParserOptions = {
      operators: {
        // Disable arithmetic and other unsafe operations
        add: false,
        subtract: false,
        multiply: false,
        divide: false,
        modulus: false,
        power: false,
        factorial: false,
        concatenate: false,
        // Enable only logical and comparison operations
        logical: true,
        comparison: true,
      },
    };

    this.parser = new Parser(parserOptions);
  }

  /**
   * Evaluate a boolean expression with context.
   * Returns `null` if expression is invalid or contains disallowed operations.
   *
   * @param expression - Expression string to evaluate
   * @param context - Variable bindings used during evaluation
   */
  public evaluate(expression: string, context: ExpressionContext = {}): EvaluationResult {
    try {
      const parsedExpr = this.parser.parse(expression);

      if (!this.isNodeAllowed(parsedExpr)) {
        console.warn('Expression contains disallowed syntax or operators:', expression);
        return null;
      }

      const result = parsedExpr.evaluate(context);
      return typeof result === 'boolean' ? result : Boolean(result);
    } catch (error) {
      console.error('Error while evaluating expression:', error);
      return null;
    }
  }

  /**
   * Validates if an expression string contains only allowed constructs.
   * Can be used independently of `evaluate`.
   *
   * @param expression - Expression string to validate
   * @returns true if safe, false otherwise
   */
  public isValid(expression: string): boolean {
    try {
      const parsedExpr = this.parser.parse(expression);
      return this.isNodeAllowed(parsedExpr);
    } catch {
      return false;
    }
  }

  /**
   * Internal method to recursively validate parsed expression nodes.
   *
   * @param node - Expression AST node
   * @returns true if node is safe and valid
   */
  private isNodeAllowed(node: any): boolean {
    if (!node || typeof node !== 'object') return false;

    const nodeType = node.type as AllowedNodeType;

    switch (nodeType) {
      case 'BinaryExpression':
      case 'LogicalExpression':
        return (
          ALLOWED_OPERATORS.has(node.operator) &&
          this.isNodeAllowed(node.left) &&
          this.isNodeAllowed(node.right)
        );

      case 'UnaryExpression':
        return (
          ALLOWED_OPERATORS.has(node.operator) &&
          this.isNodeAllowed(node.argument)
        );

      case 'Identifier':
      case 'Literal':
        return true;

      default:
        return false;
    }
  }
}
