import { describe, it, expect } from 'vitest';
import {
  ModularRobot,
  WalkingBehavior,
  FlyingBehavior,
  CleaningTask,
  InspectionTask
} from './composition-vs-inheritance.js';

describe('Composition Over Inheritance Unit Tests', () => {
  it('should dynamically compose robot behaviors and swap them at runtime', () => {
    const robot = new ModularRobot(
      'Unit-7',
      new WalkingBehavior(),
      new CleaningTask()
    );

    let report = robot.operate();
    expect(report.movement).toBe('Walking on 2 legs');
    expect(report.task).toBe('Vacuuming and scrubbing floors');

    // Dynamically swap behavior at runtime without sub-classing
    robot.setMovement(new FlyingBehavior());
    robot.setTask(new InspectionTask());

    report = robot.operate();
    expect(report.movement).toBe('Flying using thrusters');
    expect(report.task).toBe('Scanning area for structural hazards');
  });
});
