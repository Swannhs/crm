import { jest } from '@jest/globals';

const getMock = jest.fn();
const postMock = jest.fn();
const putMock = jest.fn();
const deleteMock = jest.fn();
const patchMock = jest.fn();

jest.unstable_mockModule('src/utils/axios', () => ({
  default: {
    get: getMock,
    post: postMock,
    put: putMock,
    patch: patchMock,
    delete: deleteMock,
  },
}));

describe('task/goal/habit service clients', () => {
  beforeEach(() => {
    getMock.mockReset();
    postMock.mockReset();
    putMock.mockReset();
    patchMock.mockReset();
    deleteMock.mockReset();
  });

  it('project task client hits CRUD/complete endpoints', async () => {
    const { getTasks, createTask, updateTask, completeTask, deleteTask } = await import('../project-service');

    getMock.mockResolvedValue({ data: { data: [{ id: 1 }] } });
    postMock.mockResolvedValue({ data: { ok: true } });
    putMock.mockResolvedValue({ data: { ok: true } });
    deleteMock.mockResolvedValue({ data: { ok: true } });

    await getTasks();
    await createTask({ name: 'T' });
    await updateTask('1', { name: 'U' });
    await completeTask('1');
    await deleteTask('1');

    expect(getMock).toHaveBeenCalledWith('/api/projects/v1/tasks');
    expect(postMock).toHaveBeenCalledWith('/api/projects/v1/tasks', { name: 'T' });
    expect(putMock).toHaveBeenCalledWith('/api/projects/v1/tasks/1', { name: 'U' });
    expect(postMock).toHaveBeenCalledWith('/api/projects/v1/tasks/1/complete');
    expect(deleteMock).toHaveBeenCalledWith('/api/projects/v1/tasks/1');
  });

  it('organization goal/habit client hits complete/archive/check-in endpoints', async () => {
    const { completeGoal, archiveGoal, checkInHabit } = await import('../organization-service');

    postMock.mockResolvedValue({ data: { ok: true } });

    await completeGoal('g1');
    await archiveGoal('g1');
    await checkInHabit('h1', '2026-05-03');

    expect(postMock).toHaveBeenCalledWith('/org/v1/goals/g1/complete');
    expect(postMock).toHaveBeenCalledWith('/org/v1/goals/g1/archive');
    expect(postMock).toHaveBeenCalledWith('/org/v1/habits/h1/check-in', { date: '2026-05-03' });
  });
});
