/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
type TypeComp = { title: string };

class Component<T extends TypeComp> {
  constructor(public props: T) {}
}

class Page extends Component<TypeComp> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
