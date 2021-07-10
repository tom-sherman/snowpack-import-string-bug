import React from 'react';

const ok1 = <div>{"import { createClient, Provider } from 'urql';"}</div>
const ok2 = <div>{`import { createClient, Provider } from 'urql';`}</div>
const ok3 = <div>{
  `import { createClient, Provider } from 'urql';`}</div>
const ok4 = <div>{`
// import { createClient, Provider } from 'urql';`
}
</div>

const bad1 = <div>
{`
  import { createClient, Provider } from 'urql';`
}
</div>
const bad2 = <div>{`
  import { createClient, Provider } from 'urql';`
}
</div>
const bad3 = <div>{`
import { createClient, Provider } from 'urql';`}
</div>
