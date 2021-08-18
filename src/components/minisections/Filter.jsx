import React from 'react'

const Filter = () => {
    return (
        <>
            <div className="filter">
                <h4>FILTER BY</h4>
                <hr/>
                <p>Stages <span>-</span></p>
                <div>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>All</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Yet to screen</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Shortlisted</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>In Interview</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Offered</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>Joined</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/> <label>On Hold</label><br/>
                    <input type="radio" name="all" style={{marginRight:10, marginBottom:16,width:20, height:20}}/><label>No Match</label><br/>
                </div>
                        
                        
                        
                        
                        
                        
                       
                        
                
            </div>
        </>
    )
}

export default Filter
