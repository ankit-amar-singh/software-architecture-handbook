// Interfaces representing interchangeable behaviors
export interface MovementBehavior {
  move(): string;
}

export interface TaskBehavior {
  performTask(): string;
}

// Concrete Movement Behaviors
export class WalkingBehavior implements MovementBehavior {
  public move(): string {
    return 'Walking on 2 legs';
  }
}

export class FlyingBehavior implements MovementBehavior {
  public move(): string {
    return 'Flying using thrusters';
  }
}

// Concrete Task Behaviors
export class CleaningTask implements TaskBehavior {
  public performTask(): string {
    return 'Vacuuming and scrubbing floors';
  }
}

export class InspectionTask implements TaskBehavior {
  public performTask(): string {
    return 'Scanning area for structural hazards';
  }
}

// Robot composed of dynamic behaviors rather than deep class inheritance
export class ModularRobot {
  constructor(
    public name: string,
    private movement: MovementBehavior,
    private task: TaskBehavior
  ) {}

  public setMovement(movement: MovementBehavior): void {
    this.movement = movement;
  }

  public setTask(task: TaskBehavior): void {
    this.task = task;
  }

  public operate(): { movement: string; task: string } {
    return {
      movement: this.movement.move(),
      task: this.task.performTask(),
    };
  }
}
