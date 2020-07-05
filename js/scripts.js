$( document ).ready(function() {
var fr;
var data;
const fS = document.getElementById('i_file');
var ctx = document.getElementById('output').getContext('2d');
var canvas = document.getElementById('output');
var imgData;
var imageCanvas;
var interval;

var pallete = [
  [255, 255, 255],
  [59, 59, 59],
  [55, 55, 55],
  [51, 51, 51],
  [47, 47, 47],
  [44, 44, 44],
  [40, 40, 40],
  [36, 36, 36],
  [32, 32, 32],
  [29, 29, 29],
  [25, 25, 25],
  [21, 21, 21],
  [18, 18, 18],
  [14, 14, 14],
  [10, 10, 10],
  [8, 8, 8],
  [63, 59, 59],
  [59, 54, 54],
  [55, 49, 49],
  [52, 44, 44],
  [48, 40, 40],
  [44, 36, 36],
  [41, 32, 32],
  [37, 28, 28],
  [33, 24, 24],
  [30, 21, 21],
  [26, 17, 17],
  [22, 14, 14],
  [19, 11, 11],
  [15, 9, 9],
  [11, 6, 6],
  [8, 4, 4],
  [59, 59, 63],
  [54, 54, 59],
  [49, 49, 55],
  [44, 44, 52],
  [40, 40, 48],
  [36, 36, 44],
  [32, 32, 41],
  [28, 28, 37],
  [24, 24, 33],
  [21, 21, 30],
  [17, 17, 26],
  [14, 14, 22],
  [11, 11, 19],
  [9, 9, 15],
  [6, 6, 11],
  [4, 4, 8],
  [63, 44, 60],
  [49, 24, 42],
  [26, 9, 24],
  [19, 5, 18],
  [14, 3, 13],
  [10, 4, 9],
  [9, 1, 9],
  [7, 3, 6],
  [63, 63, 50],
  [63, 63, 31],
  [57, 54, 3],
  [51, 46, 7],
  [46, 39, 10],
  [41, 34, 12],
  [36, 30, 9],
  [31, 26, 6],
  [27, 22, 4],
  [22, 18, 2],
  [18, 14, 1],
  [13, 10, 0],
  [8, 6, 0],
  [54, 63, 39],
  [45, 54, 33],
  [38, 46, 28],
  [30, 38, 23],
  [23, 30, 18],
  [16, 22, 13],
  [10, 14, 8],
  [28, 24, 20],
  [21, 18, 13],
  [14, 12, 8],
  [26, 30, 20],
  [28, 30, 8],
  [28, 26, 10],
  [24, 24, 9],
  [19, 17, 9],
  [14, 12, 8],
  [39, 43, 39],
  [30, 37, 30],
  [22, 31, 22],
  [16, 26, 16],
  [14, 22, 22],
  [12, 19, 18],
  [10, 17, 15],
  [8, 15, 11],
  [7, 12, 9],
  [5, 10, 6],
  [4, 8, 4],
  [6, 12, 6],
  [4, 9, 3],
  [2, 7, 1],
  [1, 5, 0],
  [1, 3, 0],
  [35, 39, 39],
  [30, 37, 38],
  [25, 34, 37],
  [20, 31, 36],
  [16, 27, 35],
  [12, 22, 35],
  [11, 19, 31],
  [10, 17, 27],
  [8, 14, 23],
  [7, 12, 19],
  [6, 10, 16],
  [39, 41, 41],
  [14, 18, 26],
  [20, 22, 22],
  [22, 26, 33],
  [14, 16, 20],
  [47, 47, 47],
  [43, 41, 38],
  [40, 36, 31],
  [37, 31, 24],
  [34, 26, 19],
  [31, 22, 13],
  [28, 18, 9],
  [25, 15, 5],
  [22, 12, 2],
  [63, 51, 51],
  [63, 44, 44],
  [63, 38, 38],
  [63, 31, 31],
  [63, 25, 25],
  [63, 18, 18],
  [63, 12, 12],
  [63, 0, 0],
  [56, 0, 0],
  [49, 0, 0],
  [42, 0, 0],
  [36, 0, 0],
  [29, 0, 0],
  [22, 0, 0],
  [16, 0, 0],
  [63, 56, 50],
  [63, 49, 37],
  [63, 46, 30],
  [63, 43, 24],
  [63, 39, 18],
  [63, 37, 11],
  [63, 34, 5],
  [63, 31, 0],
  [55, 27, 0],
  [48, 24, 0],
  [41, 20, 0],
  [33, 17, 0],
  [26, 13, 0],
  [19, 9, 0],
  [12, 6, 0],
  [62, 53, 41],
  [54, 44, 30],
  [50, 40, 25],
  [47, 36, 21],
  [43, 32, 17],
  [39, 29, 13],
  [35, 25, 10],
  [31, 22, 7],
  [28, 19, 5],
  [24, 16, 2],
  [20, 13, 1],
  [16, 10, 0],
  [13, 8, 0],
  [63, 57, 46],
  [58, 50, 38],
  [53, 43, 31],
  [49, 36, 25],
  [44, 29, 19],
  [40, 23, 14],
  [36, 19, 11],
  [33, 15, 8],
  [30, 11, 6],
  [27, 8, 4],
  [23, 5, 2],
  [18, 3, 1],
  [15, 1, 0],
  [63, 58, 55],
  [62, 53, 47],
  [61, 48, 40],
  [60, 44, 33],
  [60, 40, 27],
  [60, 37, 23],
  [54, 32, 21],
  [48, 28, 18],
  [42, 24, 16],
  [36, 20, 14],
  [30, 16, 12],
  [24, 12, 9],
  [18, 9, 7],
  [14, 6, 5],
  [25, 57, 25],
  [5, 38, 5],
  [0, 41, 0],
  [20, 20, 18],
  [0, 27, 0],
  [35, 35, 33],
  [7, 7, 7],
  [26, 20, 14],
  [12, 10, 8],
  [35, 28, 24],
  [18, 14, 10],
  [3, 3, 3],
  [15, 15, 15],
  [27, 29, 27],
  [30, 33, 30],
  [34, 37, 34],
  [37, 41, 37],
  [22, 26, 24],
  [24, 28, 26],
  [15, 62, 0],
  [14, 53, 2],
  [13, 45, 4],
  [12, 37, 5],
  [10, 29, 6],
  [63, 63, 63],
  [60, 59, 52],
  [52, 46, 34],
  [38, 31, 20],
  [26, 22, 15],
  [20, 16, 9],
  [13, 10, 7],
  [6, 4, 3],
  [0, 0, 0],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255],
  [255, 255, 255]
]

var minScale = 0.01;
var maxScale = 100;
var scale = 1.0;

var frmLoaded = false;
var playing = false;

$('#i_file').on('change', function(evt) {
  if (evt.target.files[0]) {
    loadFile(evt.target.files[0]);
  }
})

function loadFile(file) {
  fr = new FileReader();
  $('#p_prog, #p_prog_t').show();
  fr.onload = function(event) {
    $('#p_prog').val(100);
    $('#p_prog, #p_prog_t').text(100 + '%');
    $('#p_prog, #p_prog_t').fadeOut();
    var result = event.target.result;
    data = new Uint8Array(result.split('').map(e =>
      e = e.charCodeAt(0)));

    loadFRM(data);
    adjustColumn();
  };

  fr.onprogress = function(event) {
    if (event.lengthComputable) {
      var percent = Math.round((event.loaded / event.total) * 100);
      $('#p_prog').val(percent);
      $('#p_prog, #p_prog_t').text(percent + '%');
    }
  };

  fr.readAsBinaryString(file);
}

function u2b(buf) {
  return new DataView(buf).getUint16(0);
}

function u4b(buf) {
  return new DataView(buf).getUint32(0);
}

function s2b(buf) {
  return new DataView(buf).getInt16(0);
}

function s4b(buf) {
  return new DataView(buf).getInt32(0);
}

var numFramesPerDir;
var frameWidth;
var frameHeight;
var noPixel;
var uint8color;
var arr2b;
var frameOffsetX;
var frameOffsetY;
var offsetF_0;
var offsetF_1;
var offsetF_2;
var offsetF_3;
var offsetF_4;
var offsetF_5;
var fps;
var shiftY_0;
var shiftY_1;
var shiftY_2;
var shiftY_3;
var shiftY_4;
var shiftY_5;
var version;
var actionFrame;
var shiftX_0;
var shiftX_1;
var shiftX_2;
var shiftX_3;
var shiftX_4;
var shiftX_5;
var frameAreaSize;

function loadFirstHeader() {
  version = u4b(arr2b.slice(0x0, 0x4));
  $('#t0').text(version);

  fps = u2b(arr2b.slice(0x4, 0x6))
  $('#t4').text(fps);

  actionFrame = u2b(arr2b.slice(0x6, 0x8))
  $('#t6').text(actionFrame);

  numFramesPerDir = u2b(arr2b.slice(0x8, 0xA))
  $('#t8').text(numFramesPerDir);
  $('#i_frms').attr({
    "max": (numFramesPerDir - 1)
  });
  updateFrameDOM(0, (numFramesPerDir - 1))

  //Shift in X, Y direction for graphics
  shiftX_0 = s2b(arr2b.slice(0xA, 0xC))
  $('#tA').text(shiftX_0);

  shiftX_1 = s2b(arr2b.slice(0xC, 0xE))
  $('#tC').text(shiftX_1);

  shiftX_2 = s2b(arr2b.slice(0xE, 0x10))
  $('#tE').text(shiftX_2);

  shiftX_3 = s2b(arr2b.slice(0x10, 0x12))
  $('#t10').text(shiftX_3);

  shiftX_4 = s2b(arr2b.slice(0x12, 0x14))
  $('#t12').text(shiftX_4);

  shiftX_5 = s2b(arr2b.slice(0x14, 0x16))
  $('#t14').text(shiftX_5);

  shiftY_0 = s2b(arr2b.slice(0x16, 0x18))
  $('#t16').text(shiftY_0);

  shiftY_1 = s2b(arr2b.slice(0x18, 0x1A))
  $('#t18').text(shiftY_1);

  shiftY_2 = s2b(arr2b.slice(0x1A, 0x1C))
  $('#t1A').text(shiftY_2);

  shiftY_3 = s2b(arr2b.slice(0x1C, 0x1E))
  $('#t1C').text(shiftY_3);

  shiftY_4 = s2b(arr2b.slice(0x1E, 0x20))
  $('#t1E').text(shiftY_4);

  shiftY_5 = s2b(arr2b.slice(0x20, 0x22))
  $('#t20').text(shiftY_5);

  //Memory offsets for direction
  offsetF_0 = u4b(arr2b.slice(0x22, 0x26))
  $('#t22').text(offsetF_0);

  offsetF_1 = u4b(arr2b.slice(0x26, 0x2A))
  $('#t26').text(offsetF_1);

  offsetF_2 = u4b(arr2b.slice(0x2A, 0x2E))
  $('#t2A').text(offsetF_2);

  offsetF_3 = u4b(arr2b.slice(0x2E, 0x32))
  $('#t2E').text(offsetF_3);

  offsetF_4 = u4b(arr2b.slice(0x32, 0x36))
  $('#t32').text(offsetF_4);

  offsetF_5 = u4b(arr2b.slice(0x36, 0x3A))
  $('#t36').text(offsetF_5);

  frameAreaSize = u4b(arr2b.slice(0x3A, 0x3E))
  $('#t3A').text(frameAreaSize);

  frmLoaded = true;
}

function loadFRM(arr) {
  arr2b = arr.buffer;

  loadFirstHeader();

  drawImg($('#i_frms').val(), parseInt($('#i_dir').val()));
  draw();
}

function drawImg(cf, dir) {
  if (!frmLoaded)
    return 'FRM not loaded';
  var colorIndex;
  var memOffset = 0;
  var cfI = cf + 1;
  var dirOffset = 0;
  switch (dir) {
    case 0:
      dirOffset = offsetF_0;
      break;
    case 1:
      dirOffset = offsetF_1;
      break;
    case 2:
      dirOffset = offsetF_2;
      break;
    case 3:
      dirOffset = offsetF_3;
      break;
    case 4:
      dirOffset = offsetF_4;
      break;
    case 5:
      dirOffset = offsetF_5;
      break;
    default:
      console.log('diroffset err: ' + dirOffset);
      break;
  }
  memOffset = dirOffset;


  frameWidth = u2b(arr2b.slice(0x3E + dirOffset, 0x40 + dirOffset))
  $('#t3E').text(frameWidth);

  frameHeight = u2b(arr2b.slice(0x40 + dirOffset, 0x42 + dirOffset))
  $('#t40').text(frameHeight);

  noPixel = u4b(arr2b.slice(0x42 + dirOffset, 0x46 + dirOffset))
  $('#t42').text(noPixel);

  frameOffsetX = s2b(arr2b.slice(0x46 + dirOffset, 0x48 + dirOffset))
  $('#t46').text(frameOffsetX);

  frameOffsetY = s2b(arr2b.slice(0x48 + dirOffset, 0x4A + dirOffset))
  $('#t48').text(frameOffsetY);

  for (var fOffset = 1; fOffset <= cf; fOffset++) {
    memOffset += parseInt(noPixel + 12);
    frameWidth = u2b(arr2b.slice((0x3E + memOffset), (0x40 + memOffset)))
    $('#t3E').text(frameWidth);

    frameHeight = u2b(arr2b.slice((0x40 + memOffset), (0x42 + memOffset)))
    $('#t40').text(frameHeight);

    noPixel = u4b(arr2b.slice((0x42 + memOffset), (0x46 + memOffset)))
    $('#t42').text(noPixel);

    frameOffsetX = s2b(arr2b.slice((0x46 + memOffset), (0x48 + memOffset)))
    $('#t46').text(frameOffsetX);

    frameOffsetY = s2b(arr2b.slice((0x48 + memOffset), (0x4A + memOffset)))
    $('#t48').text(frameOffsetY);
  }
  imgData = ctx.createImageData(frameWidth, frameHeight);


  var iX = 0x4A + memOffset
  var iY = 0x4A + memOffset + noPixel;
  colorIndex = arr2b.slice(iX, iY);

  uint8color = new Uint8Array(colorIndex)

  for (var y = 0; y < frameHeight; y++) {
    for (var x = 0; x < frameWidth; x++) {
      var i = (y * frameWidth) + x;
      var cI = uint8color;
      imgData.data[i * 4 + 0] = pallete[cI[i]][0] * 4;
      imgData.data[i * 4 + 1] = pallete[cI[i]][1] * 4;
      imgData.data[i * 4 + 2] = pallete[cI[i]][2] * 4;
      imgData.data[i * 4 + 3] = 255;
    }
  }

  imageCanvas = $("<canvas>")
    .attr("width", imgData.width)
    .attr("height", imgData.height)[0];

  imageCanvas.getContext("2d").putImageData(imgData, 0, 0);

}

function draw() {
  if (!frmLoaded)
    return 'FRM not loaded';
 
  ctx.setTransform(1, 0, 0, 1, canvas.width / 2 - imgData.width / 2 * scale, canvas.height / 2 - imgData.height / 2 * scale);
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  ctx.scale(scale, scale);
  ctx.drawImage(imageCanvas, 0, 0);
}

function tick() {
  if (playing) {
    var curFrame = parseInt($('#i_frms').val());
    curFrame += 1;
    if ($('#c_repeat').is(":checked")) {
      curFrame = curFrame % numFramesPerDir;
    }
    updateFrameDOM(curFrame, (numFramesPerDir - 1))
    if (frmLoaded) {
      drawImg($('#i_frms').val(), parseInt($('#i_dir').val()));
      draw();
      adjustColumn();
    }

  }
}

function updateFrameDOM(cFrm, maxFrm) {
  $('#i_frms').val(cFrm);
  $('#i_frms_val').text($('#i_frms').val() + '/' + maxFrm);
}

$('#output').bind('mousewheel DOMMouseScroll', function(event) {
  event.preventDefault();
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    scale *= 1.1;
  } else {
    scale *= 0.9;
  }
  scale = Math.min(Math.max(scale, minScale), maxScale);
  $('#t_scale').text(Math.round(scale * 100) / 100);

  draw();
});

$('#i_frms').on('input', function(e) {
  updateFrameDOM(parseInt($('#i_frms').val()), (numFramesPerDir - 1))
  if (frmLoaded) {
    drawImg($('#i_frms').val(), parseInt($('#i_dir').val()));
    draw();
    adjustColumn();
  }
})

function adjustColumn() {
  var $table = $('table'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

  colWidth = $bodyCells.map(function() {
    return $(this).width();
  }).get();

  $table.find('thead tr').children().each(function(i, v) {
    $(v).width(colWidth[i]);
  });
}
adjustColumn();

$('#b_play').click(function() {
  if (frmLoaded) {
    playing = !playing;
    if (!playing) {
      $('#b_play').text('Play');
      clearInterval(interval);
    } else {
      $('#b_play').text('Stop');
      if (fps != 0)
        interval = setInterval(tick, 1000 / fps)
      else
        interval = setInterval(tick, 1000 / 12)
    }
  }
})

$('#i_dir').on('input', function() {
  if (frmLoaded) {
    drawImg($('#i_frms').val(), parseInt($('#i_dir').val()));
    draw();
    adjustColumn();
  }
  $('#i_dir_val').text($('#i_dir').val())
})
});
