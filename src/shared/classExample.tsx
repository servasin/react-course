//  Old constructor example
// function OldConstructor(fieldValue) {
//   this.field = value || 123;
// }

// OldConstructor.prototype.method = function() {
//   return this.field;
// }
// const instance = new OldConstructor();
// instance.method() // -> 123

class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod() {
    return this.field;
  }

  protected protectedMethod() {
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }
}

const instance = new Constructor(124);
instance.field

class Child extends Constructor {
  public childMethod() {
  }

  public protectedMethod(): number {
    return super.protectedMethod();
  }

  public publicMethod(): number {
    return super.publicMethod();
  }
}

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

class NewChild extends AbstractClass {
  public abstractField: number = 123;

  public abstractMethod(): number {
    return this.protectedMethod();
  }
  
}

interface MyInterface<T> {
  field: string;
  method(): string;
}

class NewClass<T> implements MyInterface<T> {
  field: string = 's';
  public conf?: T;

  method(): string {
    return this.field;
  }
  
}

class MyComponent extends React.Component<{prop1: number}, {state1: string}> {
  constructor (props: {prop1: number}) {
    super(props);
    this.state = {
      state1: '123'
    }
  }
  
  public render() {
  return <div>{ this.props.prop1 }</div>
  }
}