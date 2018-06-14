'use strict';

var clc = require('cli-color');
var write = require('./printers').write;
var shell = require('./shell').getInstance();

function DrawUtil(numOfLines) {
  var newLineCount = 5
  var width = shell.getWidth() * 0.75 | 0;
  var maxHeight = shell.getHeight() - 1;

  this.numberOfLines = Math.max(5, Math.min(numOfLines, maxHeight));
  this.happWidth = 7;
  this.scoreboardWidth = 5;
  this.tick = 0;
  this.trajectories = [];

  for(var i = 0; i < this.numberOfLines; i++) {
    this.trajectories[i] = [];
  }

  this.trajectoryWidthMax = (width - this.happWidth);

  var happitifyLog = clc.xterm(45);

  this.appendRainbow = function(rainbowifier){
    var segment = this.tick ? '_' : '-';
    var rainbowified = rainbowifier.rainbowify(segment);

    for (var index = 0; index < this.numberOfLines; index++) {
      var trajectory = this.trajectories[index];
      if (trajectory.length >= this.trajectoryWidthMax) {
        trajectory.shift();
      }
      trajectory.push(rainbowified);
    }
  };

  this.drawScoreboard = function(stats) {
    write(' ' + clc.yellow(stats.total) + '\n');
    write(' ' + clc.green(stats.success) + '\n');
    write(' ' + clc.red(stats.failed) + '\n');
    write(' ' + clc.cyan(stats.skipped) + '\n');

    this.fillWithNewlines(newLineCount);
    this.cursorUp(this.numberOfLines);
  };

  this.drawRainbow = function(){
    var self = this;

    this.trajectories.forEach(function(line) {
      write('\u001b[' + self.scoreboardWidth + 'C');
      write(line.join(''));
      write('\n');
    });

    this.cursorUp(this.numberOfLines);
  };

  this.drawHapp = function(stats) {
    var startWidth = this.scoreboardWidth + this.trajectories[0].length;
    var color = '\u001b[' + startWidth + 'C';
    var padding = '';

    write(color);
    write('-' + happitifyLog('┌─^─┐ '));
    write('\n');

    write(color);
    write(happitifyLog(this.face(stats)));
    write('\n');

    write(color);
    var leftHand = this.tick ? '~<' : '<';
    var rightHand = this.tick ? '>' : '>~';
    write(happitifyLog(leftHand + '╎ ᵕ ╎' + rightHand));
    write('\n');

    write(color);
    write('-' + happitifyLog('└─ ─┘ '));
    write('\n');

    write(color);
    padding = this.tick ? '  ' : '   ';
    write(happitifyLog('   ⁼   '));
    // write('\n');

    this.fillWithNewlines(newLineCount);
    this.cursorUp(this.numberOfLines);
  };

  this.face = function(stats) {
    if (stats.failed) {
      return ' │x x│ ';
    } else if (stats.skipped) {
      return ' │• •│ ';
    } else if(stats.success) {
      return ' │^ ^│ ';
    } else {
      return ' │-.-│ ';
    }
  };

  this.cursorUp = function(n) {
    write(clc.up(n));
  };

  this.fillWithNewlines = function(startFrom) {
    var i = startFrom ? startFrom : 0;

    for(; i < this.numberOfLines + 1; i++) {
      write('\n');
    }
  };
}

exports.getInstance = function(numOfLines) {
  return new DrawUtil(numOfLines);
};
