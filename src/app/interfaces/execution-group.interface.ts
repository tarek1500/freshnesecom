import { Execution } from './execution.interface';

export interface ExecutionGroup {
	id: number,
	title: string,
	executions: Execution[]
}
