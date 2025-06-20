function createDownloadLink(data, mimeType: string, fileName: string) {
    const blob = new Blob([data], { type: mimeType });
 
    // Creating an object for downloading url
    const url = window.URL.createObjectURL(blob)
 
    // Creating an anchor(a) tag of HTML
    const a = document.createElement('a')
 
    // Passing the blob downloading url
    a.setAttribute('href', url)
 
    // Setting the anchor tag attribute for downloading
    // and passing the download file name
    a.setAttribute('download', fileName);
 
    return a; 
    // Performing a download w
}

export  function download (data, mimeType: string, fileName: string) {
    let a =  createDownloadLink(data, mimeType, fileName);
    a.click()
}

export  function downloadAsync (data, mimeType: string, fileName: string) {
    return new Promise((resolve, reject ) => {
           try {
                let a =  createDownloadLink(data, mimeType, fileName);
                a.click()
              resolve(true);
           } catch (error) {
             reject(error);
           }
    });
}
