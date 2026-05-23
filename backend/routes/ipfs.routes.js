const express = require('express');
const router = express.Router();
const { upload } = require('../middleware/upload');

// Upload to IPFS
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file provided' });
    }

    // TODO: Implement actual IPFS upload
    // For now, generate mock IPFS hash
    const mockIPFSHash = 'QmV' + Math.random().toString(36).substring(2, 15);

    res.json({
      success: true,
      message: 'File uploaded to IPFS',
      file: {
        originalName: req.file.originalname,
        size: req.file.size,
        ipfsHash: mockIPFSHash,
        url: `https://ipfs.io/ipfs/${mockIPFSHash}`
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
