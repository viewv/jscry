var aes = function () {
  var _0x5775c0 = function () {
    var _0x5a8986 = true;
    return function (_0x5233e7, _0x3dc7e0) {
      var _0x58c06b = _0x5a8986 ? function () {
        if (_0x3dc7e0) {
          var _0x38492e = _0x3dc7e0.apply(_0x5233e7, arguments);
          _0x3dc7e0 = null;
          return _0x38492e;
        }
      } : function () {};
      _0x5a8986 = false;
      return _0x58c06b;
    };
  }();
  var _0xe240c3 = _0x5775c0(this, function () {
    var _0x19d7f8 = function () {
      var _0x5dbdc7;
      try {
        _0x5dbdc7 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x202e8c) {
        _0x5dbdc7 = window;
      }
      return _0x5dbdc7;
    };
    var _0x407a87 = _0x19d7f8();
    var _0x42f07a = _0x407a87.console = _0x407a87.console || {};
    var _0xe185c8 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (var _0x385b45 = 0; _0x385b45 < _0xe185c8.length; _0x385b45++) {
      var _0x3d6e34 = _0x5775c0.constructor.prototype.bind(_0x5775c0);
      var _0x2d676b = _0xe185c8[_0x385b45];
      var _0x4f5a07 = _0x42f07a[_0x2d676b] || _0x3d6e34;
      _0x3d6e34.__proto__ = _0x5775c0.bind(_0x5775c0);
      _0x3d6e34.toString = _0x4f5a07.toString.bind(_0x4f5a07);
      _0x42f07a[_0x2d676b] = _0x3d6e34;
    }
  });
  _0xe240c3();
  var _0x2c915d = {
    "Sbox": new Array(99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22),
    "ShiftRowTab": new Array(0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11)
  };
  _0x2c915d.Init = function () {
    _0x2c915d.Sbox_Inv = new Array(256);
    for (var _0x4dadd0 = 0; _0x4dadd0 < 256; _0x4dadd0++) {
      _0x2c915d.Sbox_Inv[_0x2c915d.Sbox[_0x4dadd0]] = _0x4dadd0;
    }
    _0x2c915d.ShiftRowTab_Inv = new Array(16);
    for (_0x4dadd0 = 0; _0x4dadd0 < 16; _0x4dadd0++) {
      _0x2c915d.ShiftRowTab_Inv[_0x2c915d.ShiftRowTab[_0x4dadd0]] = _0x4dadd0;
    }
    _0x2c915d.xtime = new Array(256);
    for (_0x4dadd0 = 0; _0x4dadd0 < 128; _0x4dadd0++) {
      _0x2c915d.xtime[_0x4dadd0] = _0x4dadd0 << 1;
      _0x2c915d.xtime[128 + _0x4dadd0] = _0x4dadd0 << 1 ^ 27;
    }
  };
  _0x2c915d.Done = function () {
    delete _0x2c915d.Sbox_Inv;
    delete _0x2c915d.ShiftRowTab_Inv;
    delete _0x2c915d.xtime;
  };
  _0x2c915d.ExpandKey = function (_0x44e9de) {
    var _0x1827ee;
    var _0xf076bd = _0x44e9de.length;
    var _0x2feb39 = 1;
    switch (_0xf076bd) {
      case 16:
        _0x1827ee = 176;
        break;
      case 24:
        _0x1827ee = 208;
        break;
      case 32:
        _0x1827ee = 240;
        break;
      default:
        alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!");
    }
    for (var _0x1d258e = _0xf076bd; _0x1d258e < _0x1827ee; _0x1d258e += 4) {
      var _0x24075c = _0x44e9de.slice(_0x1d258e - 4, _0x1d258e);
      if (_0x1d258e % _0xf076bd == 0) {
        _0x24075c = new Array(_0x2c915d.Sbox[_0x24075c[1]] ^ _0x2feb39, _0x2c915d.Sbox[_0x24075c[2]], _0x2c915d.Sbox[_0x24075c[3]], _0x2c915d.Sbox[_0x24075c[0]]);
        if ((_0x2feb39 <<= 1) >= 256) {
          _0x2feb39 ^= 283;
        }
      } else if (_0xf076bd > 24 && _0x1d258e % _0xf076bd == 16) {
        _0x24075c = new Array(_0x2c915d.Sbox[_0x24075c[0]], _0x2c915d.Sbox[_0x24075c[1]], _0x2c915d.Sbox[_0x24075c[2]], _0x2c915d.Sbox[_0x24075c[3]]);
      }
      for (var _0x481325 = 0; _0x481325 < 4; _0x481325++) {
        _0x44e9de[_0x1d258e + _0x481325] = _0x44e9de[_0x1d258e + _0x481325 - _0xf076bd] ^ _0x24075c[_0x481325];
      }
    }
  };
  _0x2c915d.Encrypt = function (_0x517f21, _0x5d9af1) {
    var _0x377643 = _0x5d9af1.length;
    _0x2c915d.AddRoundKey(_0x517f21, _0x5d9af1.slice(0, 16));
    for (var _0x1fcbc5 = 16; _0x1fcbc5 < _0x377643 - 16; _0x1fcbc5 += 16) {
      _0x2c915d.SubBytes(_0x517f21, _0x2c915d.Sbox);
      _0x2c915d.ShiftRows(_0x517f21, _0x2c915d.ShiftRowTab);
      _0x2c915d.MixColumns(_0x517f21);
      _0x2c915d.AddRoundKey(_0x517f21, _0x5d9af1.slice(_0x1fcbc5, _0x1fcbc5 + 16));
    }
    _0x2c915d.SubBytes(_0x517f21, _0x2c915d.Sbox);
    _0x2c915d.ShiftRows(_0x517f21, _0x2c915d.ShiftRowTab);
    _0x2c915d.AddRoundKey(_0x517f21, _0x5d9af1.slice(_0x1fcbc5, _0x377643));
  };
  _0x2c915d.Decrypt = function (_0x3024a2, _0x160167) {
    var _0x539b99 = _0x160167.length;
    _0x2c915d.AddRoundKey(_0x3024a2, _0x160167.slice(_0x539b99 - 16, _0x539b99));
    _0x2c915d.ShiftRows(_0x3024a2, _0x2c915d.ShiftRowTab_Inv);
    _0x2c915d.SubBytes(_0x3024a2, _0x2c915d.Sbox_Inv);
    for (var _0x4a4e82 = _0x539b99 - 32; _0x4a4e82 >= 16; _0x4a4e82 -= 16) {
      _0x2c915d.AddRoundKey(_0x3024a2, _0x160167.slice(_0x4a4e82, _0x4a4e82 + 16));
      _0x2c915d.MixColumns_Inv(_0x3024a2);
      _0x2c915d.ShiftRows(_0x3024a2, _0x2c915d.ShiftRowTab_Inv);
      _0x2c915d.SubBytes(_0x3024a2, _0x2c915d.Sbox_Inv);
    }
    _0x2c915d.AddRoundKey(_0x3024a2, _0x160167.slice(0, 16));
  };
  _0x2c915d.SubBytes = function (_0x589e5d, _0x3b504c) {
    for (var _0x31aca1 = 0; _0x31aca1 < 16; _0x31aca1++) {
      _0x589e5d[_0x31aca1] = _0x3b504c[_0x589e5d[_0x31aca1]];
    }
  };
  _0x2c915d.AddRoundKey = function (_0x24ad75, _0x20e7ba) {
    for (var _0x2c4b7a = 0; _0x2c4b7a < 16; _0x2c4b7a++) {
      _0x24ad75[_0x2c4b7a] ^= _0x20e7ba[_0x2c4b7a];
    }
  };
  _0x2c915d.ShiftRows = function (_0xe7785, _0x4eac01) {
    var _0xb7fb08 = new Array().concat(_0xe7785);
    for (var _0x21b333 = 0; _0x21b333 < 16; _0x21b333++) {
      _0xe7785[_0x21b333] = _0xb7fb08[_0x4eac01[_0x21b333]];
    }
  };
  _0x2c915d.MixColumns = function (_0x4cac19) {
    for (var _0x4efb19 = 0; _0x4efb19 < 16; _0x4efb19 += 4) {
      var _0x1b7e49 = _0x4cac19[_0x4efb19 + 0];
      var _0x2656c4 = _0x4cac19[_0x4efb19 + 1];
      var _0x2f12be = _0x4cac19[_0x4efb19 + 2];
      var _0x228ee9 = _0x4cac19[_0x4efb19 + 3];
      var _0x5677b4 = _0x1b7e49 ^ _0x2656c4 ^ _0x2f12be ^ _0x228ee9;
      _0x4cac19[_0x4efb19 + 0] ^= _0x5677b4 ^ _0x2c915d.xtime[_0x1b7e49 ^ _0x2656c4];
      _0x4cac19[_0x4efb19 + 1] ^= _0x5677b4 ^ _0x2c915d.xtime[_0x2656c4 ^ _0x2f12be];
      _0x4cac19[_0x4efb19 + 2] ^= _0x5677b4 ^ _0x2c915d.xtime[_0x2f12be ^ _0x228ee9];
      _0x4cac19[_0x4efb19 + 3] ^= _0x5677b4 ^ _0x2c915d.xtime[_0x228ee9 ^ _0x1b7e49];
    }
  };
  _0x2c915d.MixColumns_Inv = function (_0x17f153) {
    for (var _0x2bb41c = 0; _0x2bb41c < 16; _0x2bb41c += 4) {
      var _0x24ba37 = _0x17f153[_0x2bb41c + 0];
      var _0x3013c9 = _0x17f153[_0x2bb41c + 1];
      var _0xf0fc15 = _0x17f153[_0x2bb41c + 2];
      var _0x3d5e2b = _0x17f153[_0x2bb41c + 3];
      var _0x49f911 = _0x24ba37 ^ _0x3013c9 ^ _0xf0fc15 ^ _0x3d5e2b;
      var _0x659327 = _0x2c915d.xtime[_0x49f911];
      var _0x27f30f = _0x2c915d.xtime[_0x2c915d.xtime[_0x659327 ^ _0x24ba37 ^ _0xf0fc15]] ^ _0x49f911;
      var _0x4fdda3 = _0x2c915d.xtime[_0x2c915d.xtime[_0x659327 ^ _0x3013c9 ^ _0x3d5e2b]] ^ _0x49f911;
      _0x17f153[_0x2bb41c + 0] ^= _0x27f30f ^ _0x2c915d.xtime[_0x24ba37 ^ _0x3013c9];
      _0x17f153[_0x2bb41c + 1] ^= _0x4fdda3 ^ _0x2c915d.xtime[_0x3013c9 ^ _0xf0fc15];
      _0x17f153[_0x2bb41c + 2] ^= _0x27f30f ^ _0x2c915d.xtime[_0xf0fc15 ^ _0x3d5e2b];
      _0x17f153[_0x2bb41c + 3] ^= _0x4fdda3 ^ _0x2c915d.xtime[_0x3d5e2b ^ _0x24ba37];
    }
  };
  return _0x2c915d;
}();