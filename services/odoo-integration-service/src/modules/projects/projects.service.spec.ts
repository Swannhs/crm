import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  const makeService = (odooClient: any) => new ProjectsService(odooClient);

  it('supports task CRUD and completion flows', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const searchRead = jest
      .fn()
      .mockResolvedValueOnce([{ id: 1, name: 'Task 1' }])
      .mockResolvedValueOnce([{ id: 1, name: 'Task 1', kanban_state: 'done' }])
      .mockResolvedValueOnce([{ id: 1, name: 'Task 1', active: false }]);

    const service = makeService({ execute, searchRead });

    await service.updateTask(1, { title: 'Task 1 updated' });
    await service.completeTask(1);
    await service.removeTask(1);

    expect(execute).toHaveBeenCalledWith('project.task', 'write', [[1], expect.objectContaining({ name: 'Task 1 updated' })]);
    expect(execute).toHaveBeenCalledWith('project.task', 'write', [[1], { kanban_state: 'done' }]);
    expect(execute).toHaveBeenCalledWith('project.task', 'write', [[1], { active: false }]);
  });

  it('applies task filters in domain', async () => {
    const searchRead = jest.fn().mockResolvedValue([]);
    const execute = jest.fn().mockResolvedValue(0);
    const service = makeService({ searchRead, execute });

    await service.findAllTasks({
      page: 1,
      pageSize: 20,
      search: 'demo',
      assignedToMe: true,
      currentUserId: 9,
      dueToday: true,
      overdue: true,
      completed: true,
    } as any);

    const domain = searchRead.mock.calls[0][1];
    expect(domain).toEqual(
      expect.arrayContaining([
        ['name', 'ilike', 'demo'],
        ['user_ids', 'in', [9]],
        ['kanban_state', '=', 'done'],
      ]),
    );
  });
});
