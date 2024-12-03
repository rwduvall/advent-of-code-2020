const exampleDay25 = `jqt: rhn xhk nvd
rsh: frs pzl lsr
xhk: hfx
cmg: qnr nvd lhk bvb
rhn: xhk bvb hfx
bvb: xhk hfx
pzl: lsr hfx nvd
qnr: nvd
ntq: jqt hfx bvb xhk
nvd: lhk
lsr: lhk
rzs: qnr cmg lsr rsh
frs: qnr lhk lsr`;

// name: list of connected components

// const l = exampleDay25.replaceAll(': ', '');
// console.log(l);

type Line = {
  key: string;
  connections: string[];
};

const convert = (input: string) => {
  const lines = input.split('\n');
  const r = lines.map((v) => {
    const split = v.split(': ');
    const connections = split[1].split(' ');
    return { key: split[0], connections };
  });
  return r;
};

// console.log(convert(exampleDay25));

const parsed: Line[] = [
  { key: 'jqt', connections: ['rhn', 'xhk', 'nvd'] },
  { key: 'rsh', connections: ['frs', 'pzl', 'lsr'] },
  { key: 'xhk', connections: ['hfx'] },
  { key: 'cmg', connections: ['qnr', 'nvd', 'lhk', 'bvb'] },
  { key: 'rhn', connections: ['xhk', 'bvb', 'hfx'] },
  { key: 'bvb', connections: ['xhk', 'hfx'] },
  { key: 'pzl', connections: ['lsr', 'hfx', 'nvd'] },
  { key: 'qnr', connections: ['nvd'] },
  { key: 'ntq', connections: ['jqt', 'hfx', 'bvb', 'xhk'] },
  { key: 'nvd', connections: ['lhk'] },
  { key: 'lsr', connections: ['lhk'] },
  { key: 'rzs', connections: ['qnr', 'cmg', 'lsr', 'rsh'] },
  { key: 'frs', connections: ['qnr', 'lhk', 'lsr'] },
];

let count = 0;
let keys = [];
parsed.forEach((v) => {
  if (v.connections.find((val) => val == 'jqt')) {
    count += 1;
    keys.push(v.key);
  }
});

console.log(count, keys);
