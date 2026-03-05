const { execSync } = require('child_process');
const fs = require('fs');

const logFile = 'debug_output.txt';
fs.writeFileSync(logFile, '--- DEBUG START ---\n');

function log(msg) {
    console.log(msg);
    fs.appendFileSync(logFile, msg + '\n');
}

function run(cmd) {
    log(`Running: ${cmd}`);
    try {
        const out = execSync(cmd, { stdio: 'pipe' });
        log(`OUT: ${out.toString()}`);
        return out.toString();
    } catch (e) {
        log(`ERR (OUT): ${e.stdout?.toString()}`);
        log(`ERR (STDERR): ${e.stderr?.toString()}`);
        return null;
    }
}

run('git log -n 1 --oneline');
run('git status');
run('git add .');
run('git config user.email "you@example.com"');
run('git config user.name "Your Name"');
run('git commit -m "Fix font rendering with CDN and robust loader"');
run('git push origin main --force');
run('git rev-parse HEAD');
run('git ls-remote origin main');
