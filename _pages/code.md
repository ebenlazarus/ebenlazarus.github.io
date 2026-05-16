---
layout: page
permalink: /code/
title: Code
description: Code
nav: true
nav_order: 2
---

<p style="margin-top: -15px; font-size: 18px;"><b>Stata Package</b></p>

<p style="margin-top: -5px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="https://github.com/ebenlazarus/harreg" target="_blank" rel="noopener">harreg: HAR Inference for Time-Series Regression in Stata</a></b><span style="font-size: 15px;">, with <a href="https://sites.google.com/view/danjlewis/home" target="_blank" rel="noopener">Daniel J. Lewis</a></span></p>
<p style="margin-top: -12.5px; margin-bottom: 6px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.325; text-align: justify;">A Stata package implementing HAR (heteroskedasticity- and autocorrelation-robust) inference for time-series regressions, using the procedures recommended in <a href="{{ 'HARRecommendations.pdf' | prepend: '/' | relative_url}}">Lazarus, Lewis, Stock, and Watson (2018)</a> and <a href="{{ 'SizePower.pdf' | prepend: '/' | relative_url}}">Lazarus, Lewis, and Stock (2021)</a>.</p>
<p style="margin-top: 2px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="https://github.com/ebenlazarus/harreg" target="_blank" rel="noopener">GitHub Repository</a>&nbsp;&nbsp; | &nbsp;&nbsp;Install in Stata: <span style="white-space: nowrap;"><code><b>ssc install harreg</b></code>&nbsp;<a href="#" onclick="copyHarregCmd(this); return false;" title="Copy to clipboard" style="text-decoration: none; vertical-align: 1px; margin-left: 3px;"><svg class="ic-copy" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 384 512" fill="currentColor"><path d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"/></svg><svg class="ic-check" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 384 512" fill="currentColor" style="display:none;"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l16.9 17c4.8 4.7 4.7 12.3.2 17z"/></svg></a></span></p>

<script>
function copyHarregCmd(el) {
  navigator.clipboard.writeText('ssc install harreg');
  const copy = el.querySelector('.ic-copy');
  const check = el.querySelector('.ic-check');
  copy.style.display = 'none';
  check.style.display = '';
  setTimeout(() => { copy.style.display = ''; check.style.display = 'none'; }, 1200);
}
</script>

<p style="margin-top: 24px; font-size: 18px;"><b>Replication Packages for Publications</b></p>

<p style="margin-top: -5px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'ExcessMovement.pdf' | prepend: '/' | relative_url}}">Excess Movement in Option-Implied Beliefs</a></b><span style="font-size: 15px;">, with <a href="https://faculty.haas.berkeley.edu/ned/" target="_blank" rel="noopener">Ned Augenblick</a>, forthcoming, <em>Journal of Finance</em></span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="{{ 'ExcessMovementReplicationJF.zip' | prepend: '/assets/zip/' | relative_url}}">Replication Files</a></p>

<p style="margin-top: 15px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'OverUnderinference.pdf' | prepend: '/' | relative_url}}">Overinference from Weak Signals and Underinference from Strong Signals</a></b><span style="font-size: 15px;">, with <a href="https://faculty.haas.berkeley.edu/ned/" target="_blank" rel="noopener">Ned Augenblick</a> and <a href="https://www.michaelthaler.com" target="_blank" rel="noopener">Michael Thaler</a>, <em>Quarterly Journal of Economics</em> (2025)</span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="https://doi.org/10.7910/DVN/EGLSZC" target="_blank" rel="noopener">Replication Files</a></p>

<p style="margin-top: 15px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'DurationJF.pdf' | prepend: '/' | relative_url}}">Duration-Driven Returns</a></b><span style="font-size: 15px;">, with <a href="https://voices.uchicago.edu/gormsen/" target="_blank" rel="noopener">Niels J. Gormsen</a>, <em>Journal of Finance</em> (2023)</span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="{{ 'DurationReplication.zip' | prepend: '/assets/zip/' | relative_url}}">Replication Files</a></p>

<p style="margin-top: 15px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'SizePower.pdf' | prepend: '/' | relative_url}}">The Size-Power Tradeoff in HAR Inference</a></b><span style="font-size: 15px;">, with <a href="https://stock.scholars.harvard.edu" target="_blank" rel="noopener">James H. Stock</a> and <a href="https://sites.google.com/view/danjlewis/home" target="_blank" rel="noopener">Daniel J. Lewis</a>, <em>Econometrica</em> (2021)</span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="{{ '15404_Data_and_Programs.zip' | prepend: '/assets/zip/' | relative_url}}">Replication Files</a></p>

<p style="margin-top: 15px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'HARRecommendations.pdf' | prepend: '/' | relative_url}}">HAR Inference: Recommendations for Practice</a></b><span style="font-size: 15px;">, with <a href="https://stock.scholars.harvard.edu" target="_blank" rel="noopener">James H. Stock</a>, <a href="https://sites.google.com/view/danjlewis/home" target="_blank" rel="noopener">Daniel J. Lewis</a>, and <a href="https://www.princeton.edu/~mwatson/" target="_blank" rel="noopener">Mark W. Watson</a>, <em>Journal of Business &amp; Economic Statistics</em> (2018)</span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="{{ 'LLSW_ReplicationFiles_071418.zip' | prepend: '/assets/zip/' | relative_url}}">Replication Files</a></p>

<p style="margin-top: 15px; font-size: 16px; font-family: Minion-Pro,Serif; line-height: 1.3;"><b><a href="{{ 'jep2013.pdf' | prepend: '/' | relative_url}}">Spatial Clustering During Memory Search</a></b><span style="font-size: 15px;">, with <a href="https://scholar.google.com/citations?user=sTGOerAAAAAJ&hl=en" target="_blank" rel="noopener">Jonathan F. Miller</a>, <a href="https://memory.psy.vanderbilt.edu/w/index.php/Main_Page" target="_blank" rel="noopener">Sean M. Polyn</a>, and <a href="https://memory.psych.upenn.edu/Michael_J._Kahana" target="_blank" rel="noopener">Michael J. Kahana</a>, <em>Journal of Experimental Psychology: Learning, Memory, and Cognition</em> (2013)</span></p>
<p style="margin-top: -12.5px; margin-bottom: 10px; margin-right: 10px; font-size: 15px; font-family: Minion-Pro,Serif; line-height: 1.3;"><a href="{{ 'MillEtal12a.data.tgz' | prepend: '/assets/zip/' | relative_url}}">Replication Files</a></p>
